/**
 * Cached Places API (New) searchNearby — one request per category per page session.
 */

const categoryCache = new Map<string, Promise<google.maps.places.Place[]>>();

const NEARBY_FIELDS: string[] = [
  "displayName",
  "location",
  "formattedAddress",
  "googleMapsURI",
];

export function searchCategoryPlaces(
  center: google.maps.LatLngLiteral,
  categoryId: string,
  types: string[],
  radiusMeters: number,
  maxResultCount: number
): Promise<google.maps.places.Place[]> {
  let pending = categoryCache.get(categoryId);
  if (!pending) {
    pending = (async () => {
      const { Place } = (await google.maps.importLibrary(
        "places"
      )) as google.maps.PlacesLibrary;

      const { places } = await Place.searchNearby({
        fields: NEARBY_FIELDS,
        locationRestriction: { center, radius: radiusMeters },
        includedPrimaryTypes: types,
        maxResultCount,
        rankPreference: "POPULARITY" as unknown as google.maps.places.SearchNearbyRankPreference,
      });

      return places;
    })();

    pending.catch(() => {
      categoryCache.delete(categoryId);
    });

    categoryCache.set(categoryId, pending);
  }

  return pending;
}

export function placeLatLng(
  location: google.maps.places.Place["location"]
): google.maps.LatLngLiteral | null {
  if (!location) return null;
  if (typeof location.lat === "function" && typeof location.lng === "function") {
    return { lat: location.lat(), lng: location.lng() };
  }
  const literal = location as unknown as google.maps.LatLngLiteral;
  if (typeof literal.lat === "number" && typeof literal.lng === "number") {
    return { lat: literal.lat, lng: literal.lng };
  }
  return null;
}
