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
  /** Google Places API (New) includedPrimaryTypes — one searchNearby per category */
  placeTypes: string[];
};

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: "restaurants", label: "Restaurants", placeTypes: ["restaurant"] },
  { id: "cafes", label: "Cafes", placeTypes: ["cafe"] },
  { id: "grocery", label: "Grocery", placeTypes: ["grocery_store"] },
  { id: "parks", label: "Parks", placeTypes: ["park"] },
  { id: "golf", label: "Golf", placeTypes: ["golf_course"] },
  { id: "healthcare", label: "Healthcare", placeTypes: ["hospital"] },
  { id: "pharmacies", label: "Pharmacies", placeTypes: ["pharmacy"] },
  { id: "shopping", label: "Shopping", placeTypes: ["shopping_mall"] },
  { id: "parking", label: "Parking", placeTypes: ["parking"] },
  { id: "fitness", label: "Fitness", placeTypes: ["gym"] },
  { id: "schools", label: "Schools", placeTypes: ["school"] },
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
  /** Official primary source used to verify name/address */
  sourceUrl: string;
  streetAddress?: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  description?: string;
};

/** Verified names and addresses — fallback list and ItemList JSON-LD */
export const curatedNearbyPlaces: CuratedPlace[] = [
  {
    name: "The Promenade",
    category: "community",
    schemaType: "Park",
    sourceUrl: "https://www.providencelvhoa.com/community-parks/",
    streetAddress: "7195 Egan Crest Ln",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    description: "Linear walking park and community centerpiece within Providence Las Vegas.",
  },
  {
    name: "Knickerbocker Park",
    category: "parks",
    schemaType: "Park",
    sourceUrl: "https://www.providencelvhoa.com/community-parks/",
    streetAddress: "10695 Dorrell Ln",
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
    sourceUrl: "https://www.providencelvhoa.com/community-parks/",
    streetAddress: "10325 Farm Rd",
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
    sourceUrl: "https://local.albertsons.com/nv/las-vegas/6730-n-hualapai-way.html",
    streetAddress: "6730 N Hualapai Way",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description: "Full-service grocery on N Hualapai Way, a primary supermarket for Providence shoppers.",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    category: "healthcare",
    schemaType: "Hospital",
    sourceUrl: "https://www.centennialhillshospital.com/patients-visitors/maps-directions",
    streetAddress: "6900 North Durango Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description: "Acute-care hospital serving northwest Las Vegas and Providence-area residents.",
  },
  {
    name: "Henry and Evelyn Bozarth Elementary School",
    category: "schools",
    schemaType: "School",
    sourceUrl: "https://bozarthelementary.org/",
    streetAddress: "7431 Egan Crest Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    description:
      "Clark County School District elementary school within Providence; confirm zoning for your address.",
  },
  {
    name: "Edmundo Eddie Escobedo Sr. Middle School",
    category: "schools",
    schemaType: "MiddleSchool",
    sourceUrl: "https://www.escobedoms.com/",
    streetAddress: "9501 Echelon Point Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description:
      "Clark County School District middle school serving many Providence-area students; confirm zoning.",
  },
  {
    name: "Painted Desert Golf Club",
    category: "golf",
    schemaType: "GolfCourse",
    sourceUrl: "https://arcisgolf.com/clubs/painted-desert-golf-club/hours-and-directions",
    streetAddress: "5555 Painted Mirage Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    description: "Public golf course in the northwest valley, a short drive from Providence.",
  },
];

export function buildMapEmbedFallbackUrl(
  center?: { lat: number; lng: number }
): string {
  const { lat, lng } = center ?? providenceMapCenter;
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

export function buildDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
