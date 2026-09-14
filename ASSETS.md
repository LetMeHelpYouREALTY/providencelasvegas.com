# Asset Folders Structure

Optimized folder layout for Providence Las Vegas site images, logos, photos, and videos.

## Quick Reference

```
public/
├── Image/                    # Legacy hero & testimonial images (in use)
├── images/
│   ├── hero/                 # Homepage hero backgrounds
│   ├── agent/                # Dr. Jan Duffy photos
│   ├── properties/           # Listing photos
│   ├── neighborhoods/        # General area/community photos
│   ├── testimonials/         # Client headshots
│   ├── logos/                # Brand assets (BHHS, etc.)
│   └── providence/
│       ├── community-resources/  # HOA card graphics, icons
│       ├── parks/                # Promenade, Knickerbocker, Huckleberry
│       ├── logos/                # Providence/HOA logos
│       ├── maps/                 # Community map
│       └── neighborhoods/        # Per-neighborhood photos
├── logos/                   # Top-level brand logos
├── photos/                  # Agent, team, event photos
└── videos/
    └── tours/               # Property walkthrough videos
```

## Specifications

| Folder | Size | Format | Notes |
|--------|------|--------|-------|
| hero | 1920×1080+ | WebP, JPG | 16:9, &lt;200KB |
| agent | 400×400+ | WebP, JPG | Square headshot |
| properties | 1200×800+ | WebP, JPG | MLS-quality |
| logos | Various | PNG, SVG | Transparent bg |
| videos | 1920×1080 | MP4, WebM | H.264, &lt;5MB hero |

## Naming

- Lowercase with hyphens: `providence-hero-desktop.webp`
- Descriptive: `dr-jan-duffy-headshot.jpg`
- Include size if multiple: `hero-desktop.webp`, `hero-mobile.webp`

## Optimization

1. **Images**: Squoosh, TinyPNG; target WebP
2. **Videos**: FFmpeg/HandBrake; consider Git LFS for &gt;50MB
3. **Usage**: `next/image` for all images

## Generated heading photos (2026-09-14)

Custom photographs for page H1/H2/H3 live in `public/images/generated/`.

- **Git:** backup and current live source
- **Cloudflare Images:** primary CDN after `npm run images:cloudflare`
- Helper: `lib/images.ts` (`getSiteImage`)

- `public/images/providence/README.md` - Providence HOA asset URLs
- `public/videos/README.md` - Video specs & Git LFS
- `public/logos/README.md` - Logo usage
- `public/photos/README.md` - Photo usage
