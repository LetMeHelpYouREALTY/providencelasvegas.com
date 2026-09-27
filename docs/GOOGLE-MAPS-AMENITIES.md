# Google Maps Platform Setup

The site uses Google Maps Platform for:

- **Location Map** (Footer, Contact page) – Office location embed via Maps Embed API (place mode)
- **Amenity Map** (`/amenities`) – Nearby restaurants, parks, parking, etc.
- **Directions** (`/directions`) – Plan your visit with driving, walking, transit, or cycling routes. Uses Places Autocomplete on the origin input to support the GBP "Get Directions" CTA.

## APIs Required

| API | Used By | Required |
|-----|---------|----------|
| **Maps Embed API** | LocationMap (iframe on every page) | Yes – footer/contact map |
| **Maps JavaScript API** | AmenityMap, DirectionsMap | Yes |
| **Places API (New)** | AmenityMap, DirectionsMap (Autocomplete) | Yes |
| **Directions API** | DirectionsMap | Yes |
| **Geocoding API** | DirectionsMap "My Location" | Yes |

Both AmenityMap and DirectionsMap share a centralized loader (`lib/google-maps-loader.ts`). LocationMap uses the Maps Embed API iframe (no JavaScript loader).

## Get Started at No Cost

Google provides **$200/month free credit** for Maps Platform. The **Maps Embed API is free with unlimited usage**. For a typical real estate site, the free tier usually covers moderate traffic at no charge.

## Setup Steps

### 1. Create/Configure Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project or select an existing one
3. Enable these APIs:
   - **Maps Embed API** (for LocationMap footer/contact iframe)
   - **Maps JavaScript API**
   - **Places API (New)** (for amenity map)
   - **Directions API** (for directions page)
   - **Geocoding API** (required for "My Location" on directions page)

### 2. Create API Key

1. APIs & Services → Credentials → Create Credentials → API Key
2. Restrict the key (recommended):
   - Application restrictions: HTTP referrers → `https://www.providencelasvegas.com/*` (and `http://localhost:3000/*` for dev)
   - API restrictions: restrict to Maps Embed API, Maps JavaScript API, Places API (New), Directions API, and Geocoding API

### 3. Add Environment Variables

Add to your `.env.local` (and Vercel → Project Settings → Environment Variables):

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

**Optional – so the map highlights Providence Real Estate (not another business at the same address):**

If the embed shows the wrong business (e.g. "Dream Homes Portfolio Realty"), add your Google Place ID:

```
NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID=ChIJxxxxxxxxxxxxxxxxxxxxxxxxx
```

- Get the Place ID: [Place ID finder](https://developers.google.com/maps/documentation/places/web-service/place-id) — search for "Providence Real Estate" and your address, then copy the Place ID (starts with `ChIJ...`).
- Or from Google Business Profile: open your listing on Google Maps and check the URL or use the finder with your business name and address.

### 4. Deploy

- **LocationMap** (Footer, Contact): When the API key is set and Maps Embed API is enabled, the office location map loads as an iframe. If the key is missing, a "View on Google Maps" fallback card is shown instead.
- **AmenityMap** (`/amenities`, homepage, `/providence`, `/listings`): If `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is missing or live search fails, the UI shows a keyless Google Maps iframe centered on Providence plus a curated list of verified nearby places (`lib/amenities-config.ts`). With a key, the map lazy-loads on scroll, uses Places API (New) `Place.searchNearby`, category filter chips, info windows, and a Providence community marker. Optional `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` enables Map ID styling. The loader uses `loadGoogleMaps()` from `lib/google-maps-loader.ts`.
- **DirectionsMap** (`/directions`): If the key is missing, a helpful error message with setup instructions is shown.

### Legacy `output=embed` Format

The old URL format (`maps.google.com/maps?q=...&output=embed`) is no longer reliably supported. The site now uses the official Maps Embed API (`https://www.google.com/maps/embed/v1/place?key=...&q=...`) which requires an API key and Maps Embed API to be enabled.

## Centralized Loader

The `loadGoogleMaps()` function in `lib/google-maps-loader.ts` loads the Maps API using `@googlemaps/js-api-loader`. It returns a cached promise, so concurrent or repeated calls only trigger one script load. The loader preloads `places`, `geometry`, and `geocoding` for both AmenityMap and DirectionsMap.

## Embedding the Map Elsewhere

You can add the map to any page:

```tsx
import dynamic from "next/dynamic";

const AmenityMap = dynamic(
  () => import("@/components/location/AmenityMap").then((m) => ({ default: m.default })),
  { ssr: false }
);

// In your component:
<AmenityMap
  defaultType="park"
  radiusMeters={3000}
  maxResults={10}
/>
```

## Place Types Available

The map supports: Restaurants, Cafes, Parks, Parking, Grocery Stores, Gyms, Schools, Shopping Malls, Pharmacies, Banks, Gas Stations, Libraries.

## GBP Review Link

The "Leave a review" links use the official Google-provided review URL from your Business Profile. Get it from: **GBP → Business → Reviews → Get more reviews** (or **Share your reviews**). The link format is `https://g.page/r/YOUR_ID/review` and is set in `lib/site-config.ts` as `gbpUrls.review`.

## Future Considerations

Additional [Google Maps Platform tools](https://github.com/GoogleMaps) to consider if requirements change:

- **js-markerclusterer**: Use if AmenityMap `maxResults` increases (e.g., 25+ markers) and clustering improves UX.
- **extended-component-library**: Web components (`<gmp-map>`, `<gmp-advanced-marker>`) if migrating to a declarative approach.
- **js-jest-mocks**: Use when adding Jest unit tests for map components to avoid hitting the real API.
