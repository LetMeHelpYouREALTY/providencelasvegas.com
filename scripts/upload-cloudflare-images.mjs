/**
 * Upload git-backed images in public/images/generated to Cloudflare Images.
 * Cloudflare is the primary CDN; git remains the backup.
 *
 * Required env:
 *   CLOUDFLARE_ACCOUNT_ID
 *   CLOUDFLARE_API_TOKEN   (Account.Cloudflare Images: Edit)
 *
 * Optional:
 *   CLOUDFLARE_IMAGES_CUSTOM_ID_PREFIX  (default: providence)
 *
 * Writes lib/cloudflare-image-ids.json mapping SiteImageKey -> Cloudflare image id.
 *
 * Docs: https://developers.cloudflare.com/images/upload-images/upload-file/
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const SOURCE_DIR = path.join(ROOT, "public/images/generated");
const IDS_PATH = path.join(ROOT, "lib/cloudflare-image-ids.json");

async function main() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !token) {
    console.error(
      "Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN.\nGit backup images in public/images/generated remain the live source until Cloudflare is configured."
    );
    process.exit(1);
  }

  const files = (await readdir(SOURCE_DIR)).filter((f) => f.endsWith(".png"));
  const existing = JSON.parse(await readFile(IDS_PATH, "utf8").catch(() => "{}"));
  const ids = { ...existing };

  for (const file of files) {
    const key = file.replace(/\.png$/i, "");
    if (ids[key]) {
      console.log(`skip ${key} (already mapped to ${ids[key]})`);
      continue;
    }

    const form = new FormData();
    const bytes = await readFile(path.join(SOURCE_DIR, file));
    form.append("file", new Blob([bytes], { type: "image/png" }), file);
    form.append("id", `providence-${key}`);
    form.append("metadata", JSON.stringify({ key, heading: key, backup: "git" }));
    form.append("requireSignedURLs", "false");

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      }
    );

    const json = await res.json();
    if (!json.success) {
      console.error(`Failed ${file}:`, JSON.stringify(json.errors || json, null, 2));
      continue;
    }

    ids[key] = json.result.id;
    console.log(`uploaded ${key} -> ${json.result.id}`);
  }

  await writeFile(IDS_PATH, `${JSON.stringify(ids, null, 2)}\n`);
  console.log(`Wrote ${IDS_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
