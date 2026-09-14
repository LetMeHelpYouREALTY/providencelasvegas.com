# Generated heading images (git backup)

Custom photographs created to match page H1 / H2 / H3 copy for Providence Las Vegas real estate.

**Primary delivery:** Cloudflare Images (`imagedelivery.net` or `NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE_URL`).
**Backup:** these files, served from this folder when Cloudflare env vars are unset.

Do not orange-cloud `www.providencelasvegas.com` (Vercel origin). A dedicated images hostname on Cloudflare is OK.

Upload:

```bash
CLOUDFLARE_ACCOUNT_ID=... CLOUDFLARE_API_TOKEN=... node scripts/upload-cloudflare-images.mjs
```

Then set on Vercel:

- `NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH`
- optional `NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE_URL` (custom domain)
- optional `NEXT_PUBLIC_CLOUDFLARE_IMAGES_VARIANT` (default `public`)
