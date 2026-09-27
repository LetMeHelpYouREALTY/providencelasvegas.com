/**
 * Hyperlocal amenity map configuration for Providence Las Vegas (89166).
 * Map center: northwest valley retail hub on N Hualapai Way serving the Providence
 * master-planned community (documented in community materials and local retail listings).
 */

export const providenceMapCenter = {
  lat: 36.2912,
  lng: -115.2731,
  label: "Providence Las Vegas",
  city: "Las Vegas",
  state: "NV",
  zip: "89166",
  /** Documented anchor: Albertsons at 6730 N Hualapai Way serves Providence daily shopping */
  centerNote:
    "Centered near the N Hualapai Way retail corridor that serves Providence Las Vegas (89166).",
};

export type AmenityCategoryId =
  | "restaurants"
  | "cafes"
  | "grocery"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places API (New) includedPrimaryTypes — first entry used for searchNearby */
  placeType: string;
};

/** Family master-planned community: schools included; parks and grocery near top after dining */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: "restaurants", label: "Restaurants", placeType: "restaurant" },
  { id: "cafes", label: "Cafes", placeType: "cafe" },
  { id: "grocery", label: "Grocery", placeType: "grocery_store" },
  { id: "parks", label: "Parks", placeType: "park" },
  { id: "golf", label: "Golf", placeType: "golf_course" },
  { id: "healthcare", label: "Healthcare", placeType: "hospital" },
  { id: "pharmacies", label: "Pharmacies", placeType: "pharmacy" },
  { id: "shopping", label: "Shopping", placeType: "shopping_mall" },
  { id: "parking", label: "Parking", placeType: "parking" },
  { id: "fitness", label: "Fitness", placeType: "gym" },
  { id: "schools", label: "Schools", placeType: "school" },
];

export function getAmenityCategory(id: AmenityCategoryId): AmenityCategory {
  const found = AMENITY_CATEGORIES.find((c) => c.id === id);
  if (!found) {
    return AMENITY_CATEGORIES[0];
  }
  return found;
}

export function getDefaultAmenityCategoryId(): AmenityCategoryId {
  return "restaurants";
}

export type CuratedPlace = {
  name: string;
  category: AmenityCategoryId | "community";
  schemaType: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  description?: string;
};

/** Verified names and addresses only — used for fallback list and ItemList JSON-LD */
export const curatedNearbyPlaces: CuratedPlace[] = [
  {
    name: "The Promenade",
    category: "community",
    schemaType: "Park",
    streetAddress: "Providence Master HOA community park",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    description: "Linear walking park and community centerpiece within Providence Las Vegas.",
  },
  {
    name: "Knickerbocker Park",
    category: "parks",
    schemaType: "Park",
    streetAddress: "Providence community park",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    description:
      "Multigenerational park with ball fields, splash pad, workout stations, and dog parks.",
  },
  {
    name: "Huckleberry Park",
    category: "parks",
    schemaType: "Park",
    streetAddress: "Providence community park",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    description:
      "Basketball, tennis, pickleball, playgrounds, splash pad, and dog parks for Providence residents.",
  },
  {
    name: "Albertsons",
    category: "grocery",
    schemaType: "GroceryStore",
    streetAddress: "6730 N Hualapai Way",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description: "Full-service grocery on N Hualapai Way, a primary supermarket for Providence shoppers.",
  },
  {
    name: "Centennial Hills Hospital",
    category: "healthcare",
    schemaType: "Hospital",
    streetAddress: "6900 N Durango Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description: "Acute-care hospital serving northwest Las Vegas and Providence-area residents.",
  },
  {
    name: "Bill & Lillie Heinrich Elementary School",
    category: "schools",
    schemaType: "School",
    streetAddress: "7250 Gilman St",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    description: "Clark County School District elementary school within Providence Las Vegas.",
  },
  {
    name: "Irwin & Susan Molasky Junior High School",
    category: "schools",
    schemaType: "MiddleSchool",
    streetAddress: "7801 Gilman St",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    description: "Clark County School District junior high serving Providence-area students.",
  },
  {
    name: "Painted Desert Golf Club",
    category: "golf",
    schemaType: "GolfCourse",
    streetAddress: "5555 Painted Mirage Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description: "Public golf course in the northwest valley, a short drive from Providence.",
  },
];

export function buildMapEmbedFallbackUrl(): string {
  const { lat, lng } = providenceMapCenter;
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

export function buildDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
