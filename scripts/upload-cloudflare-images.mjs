/**
 * Upload git-backed images in public/images/generated to Cloudflare Images
 * (hosted storage). Cloudflare is the primary CDN; git remains the backup.
 *
 * Docs (2026):
 *   https://developers.cloudflare.com/images/optimization/hosted-images/
 *   https://developers.cloudflare.com/images/storage/upload-images/methods/
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *   https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 *
 * POST https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/images/v1
 * Serve https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 *
 * Required env:
 *   CLOUDFLARE_API_TOKEN   (Account.Cloudflare Images: Edit) — never commit
 *
 * Optional:
 *   CLOUDFLARE_ACCOUNT_ID  (default: Providence Images account)
 *   CLOUDFLARE_IMAGES_CUSTOM_ID_PREFIX  (default: providence)
 *
 * Writes lib/cloudflare-image-ids.json only after the API confirms each image.
 * Does not invent IDs — a predicted src would 404 until the asset exists.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const SOURCE_DIR = path.join(ROOT, "public/images/generated");
const IDS_PATH = path.join(ROOT, "lib/cloudflare-image-ids.json");
const DEFAULT_ACCOUNT_ID = "2cc579c1ec9e426ed585e933ebf4753b";

function alreadyExists(json) {
  const errors = Array.isArray(json?.errors) ? json.errors : [];
  return errors.some((error) => {
    const message = String(error?.message || "").toLowerCase();
    return (
      message.includes("already exists") ||
      message.includes("duplicate") ||
      error?.code === 5408 ||
      error?.code === 5409
    );
  });
}

async function persist(ids) {
  await writeFile(IDS_PATH, `${JSON.stringify(ids, null, 2)}\n`);
}

async function cfFetch(accountId, token, pathname, init = {}) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}${pathname}`,
    {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(init.headers || {}),
      },
    }
  );
  const json = await res.json().catch(() => ({}));
  return { res, json };
}

async function getHostedImage(accountId, token, imageId) {
  const { json } = await cfFetch(
    accountId,
    token,
    `/images/v1/${encodeURIComponent(imageId)}`
  );
  return json?.success ? json.result : null;
}

async function main() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || DEFAULT_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const prefix = process.env.CLOUDFLARE_IMAGES_CUSTOM_ID_PREFIX || "providence";

  if (!token) {
    console.error(
      "Missing CLOUDFLARE_API_TOKEN (Images:Edit).\nGit backup images in public/images/generated remain the live source until Cloudflare hosted Images is uploaded.\nDo not populate cloudflare-image-ids.json with predicted IDs."
    );
    process.exit(1);
  }

  const files = (await readdir(SOURCE_DIR)).filter((f) => f.endsWith(".png")).sort();
  const existing = JSON.parse(await readFile(IDS_PATH, "utf8").catch(() => "{}"));
  const ids = { ...existing };
  let uploaded = 0;
  let reused = 0;
  let failed = 0;

  for (const file of files) {
    const key = file.replace(/\.png$/i, "");
    const customId = `${prefix}-${key}`;

    if (ids[key]) {
      console.log(`skip ${key} (already mapped to ${ids[key]})`);
      continue;
    }

    const hosted = await getHostedImage(accountId, token, customId);
    if (hosted?.id) {
      ids[key] = hosted.id;
      reused += 1;
      console.log(`reuse ${key} -> ${hosted.id}`);
      await persist(ids);
      continue;
    }

    const bytes = await readFile(path.join(SOURCE_DIR, file));
    const form = new FormData();
    form.append("file", new Blob([new Uint8Array(bytes)], { type: "image/png" }), file);
    form.append("id", customId);
    form.append(
      "metadata",
      JSON.stringify({
        key,
        source: "git-backup",
        file: `public/images/generated/${file}`,
      })
    );
    form.append("requireSignedURLs", "false");

    const { json } = await cfFetch(accountId, token, "/images/v1", {
      method: "POST",
      body: form,
    });

    if (json?.success && json.result?.id) {
      ids[key] = json.result.id;
      uploaded += 1;
      console.log(`uploaded ${key} -> ${json.result.id}`);
      await persist(ids);
      continue;
    }

    if (alreadyExists(json)) {
      const retry = await getHostedImage(accountId, token, customId);
      if (retry?.id) {
        ids[key] = retry.id;
        reused += 1;
        console.log(`reuse ${key} -> ${retry.id}`);
        await persist(ids);
        continue;
      }
    }

    failed += 1;
    console.error(`Failed ${file}:`, JSON.stringify(json.errors || json, null, 2));
  }

  await persist(ids);
  console.log(
    `Wrote ${IDS_PATH} (uploaded ${uploaded}, reused ${reused}, failed ${failed}, mapped ${Object.keys(ids).length}/${files.length})`
  );

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
