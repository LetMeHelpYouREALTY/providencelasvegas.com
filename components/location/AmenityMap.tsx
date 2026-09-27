"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink, Loader2, Star } from "lucide-react";
import { loadGoogleMaps } from "@/lib/google-maps-loader";
import {
  AMENITY_CATEGORIES,
  buildDirectionsUrl,
  getAmenityCategory,
  getDefaultAmenityCategoryId,
  providenceMapCenter,
  type AmenityCategoryId,
} from "@/lib/amenities-config";
import AmenityMapFallback from "@/components/location/AmenityMapFallback";
import CuratedAmenityList from "@/components/location/CuratedAmenityList";

type PlaceResult = {
  displayName: string;
  formattedAddress?: string;
  googleMapsURI?: string;
  rating?: number;
  location?: google.maps.LatLng | google.maps.LatLngLiteral;
};

type AmenityMapProps = {
  center?: { lat: number; lng: number };
  radiusMeters?: number;
  maxResults?: number;
  defaultCategory?: AmenityCategoryId;
  compact?: boolean;
  className?: string;
};

function hasMapsApiKey(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
}

export default function AmenityMap({
  center = { lat: providenceMapCenter.lat, lng: providenceMapCenter.lng },
  radiusMeters = 5000,
  maxResults = 15,
  defaultCategory = getDefaultAmenityCategoryId(),
  compact = false,
  className = "",
}: AmenityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<AmenityCategoryId>(defaultCategory);
  const [places, setPlaces] = useState<PlaceResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const placeType = getAmenityCategory(selectedCategory).placeType;
  const mapHeight = compact ? "h-[300px]" : "h-[400px] md:h-[500px]";
  const resultCap = compact ? Math.min(maxResults, 10) : maxResults;

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
  }, []);

  const addCommunityMarker = useCallback((map: google.maps.Map) => {
    const marker = new google.maps.Marker({
      map,
      position: center,
      title: providenceMapCenter.label,
      label: {
        text: "P",
        color: "#ffffff",
        fontWeight: "700",
      },
      zIndex: 1000,
    });
    const iw = infoWindowRef.current ?? new google.maps.InfoWindow();
    infoWindowRef.current = iw;
    marker.addListener("click", () => {
      iw.setContent(
        `<div style="max-width:220px"><strong>${providenceMapCenter.label}</strong><br/><span>Master-planned community, Las Vegas NV 89166</span></div>`
      );
      iw.open({ map, anchor: marker });
    });
    communityMarkerRef.current = marker;
  }, [center.lat, center.lng]);

  const runSearch = useCallback(
    async (map: google.maps.Map) => {
      setLoading(true);
      setPlaces([]);
      setError(null);
      clearMarkers();
      addCommunityMarker(map);

      try {
        const { Place, SearchNearbyRankPreference } =
          (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;

        const request = {
          fields: [
            "displayName",
            "location",
            "formattedAddress",
            "googleMapsURI",
            "rating",
          ],
          locationRestriction: {
            center: { lat: center.lat, lng: center.lng },
            radius: radiusMeters,
          },
          includedPrimaryTypes: [placeType],
          maxResultCount: resultCap,
          rankPreference: SearchNearbyRankPreference.POPULARITY,
        };

        const { places: results } = await Place.searchNearby(request);
        const iw = infoWindowRef.current ?? new google.maps.InfoWindow();
        infoWindowRef.current = iw;

        const placeData: PlaceResult[] = results.map((p) => ({
          displayName: p.displayName || "Unnamed",
          formattedAddress: p.formattedAddress ?? undefined,
          googleMapsURI: p.googleMapsURI ?? undefined,
          rating: p.rating ?? undefined,
          location: p.location ?? undefined,
        }));
        setPlaces(placeData);

        const bounds = new google.maps.LatLngBounds();
        bounds.extend(center);

        results.forEach((place) => {
          if (!place.location) return;
          bounds.extend(place.location);
          const marker = new google.maps.Marker({
            map,
            position: place.location,
            title: place.displayName || undefined,
          });
          marker.addListener("click", () => {
            const lat =
              typeof place.location!.lat === "function"
                ? place.location!.lat()
                : place.location!.lat;
            const lng =
              typeof place.location!.lng === "function"
                ? place.location!.lng()
                : place.location!.lng;
            const directionsUrl = buildDirectionsUrl(lat as number, lng as number);
            const ratingHtml =
              place.rating != null
                ? `<div>Rating: ${place.rating.toFixed(1)} / 5</div>`
                : "";
            iw.setContent(
              `<div style="max-width:240px">
                <strong>${place.displayName ?? "Place"}</strong>
                ${ratingHtml}
                <div style="font-size:12px;margin-top:4px">${place.formattedAddress ?? ""}</div>
                <a href="${place.googleMapsURI ?? directionsUrl}" target="_blank" rel="noopener">Directions</a>
              </div>`
            );
            iw.open({ map, anchor: marker });
            map.panTo(place.location!);
          });
          markersRef.current.push(marker);
        });

        if (results.length > 0) {
          map.fitBounds(bounds, compact ? 60 : 80);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load nearby places"
        );
      } finally {
        setLoading(false);
      }
    },
    [
      addCommunityMarker,
      center.lat,
      center.lng,
      clearMarkers,
      compact,
      placeType,
      radiusMeters,
      resultCap,
    ]
  );

  useEffect(() => {
    if (!hasMapsApiKey()) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    loadGoogleMaps()
      .then(async () => {
        if (cancelled || !mapRef.current) return;

        try {
          const { Map } = (await google.maps.importLibrary(
            "maps"
          )) as google.maps.MapsLibrary;

          const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
          const map = new Map(mapRef.current, {
            center: { lat: center.lat, lng: center.lng },
            zoom: 14,
            mapId: mapId || undefined,
            mapTypeControl: !compact,
            streetViewControl: false,
            fullscreenControl: !compact,
            zoomControl: true,
          });
          mapInstanceRef.current = map;
          setMapReady(true);
        } catch (err) {
          if (!cancelled) {
            setError(
              err instanceof Error ? err.message : "Failed to initialize map"
            );
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load Google Maps"
          );
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
      mapInstanceRef.current = null;
      setMapReady(false);
      clearMarkers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- map init once per center/compact
  }, [center.lat, center.lng, clearMarkers, compact]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !mapReady) return;
    runSearch(map);
  }, [mapReady, selectedCategory, runSearch]);

  if (!hasMapsApiKey()) {
    return <AmenityMapFallback compact={compact} className={className} />;
  }

  if (error) {
    return (
      <div className={className}>
        <AmenityMapFallback compact={compact} />
        <p className="text-slate-500 text-xs mt-2 text-center" role="status">
          Live search unavailable: {error}. Showing curated list and embed map.
        </p>
      </div>
    );
  }

  const activeLabel = AMENITY_CATEGORIES.find((c) => c.id === selectedCategory)?.label;

  return (
    <div
      className={`rounded-xl overflow-hidden bg-white border border-slate-200 ${className}`}
      role="region"
      aria-label="Interactive map of nearby amenities"
    >
      <div
        className="p-3 md:p-4 border-b border-slate-200 bg-slate-50 overflow-x-auto"
        role="toolbar"
        aria-label="Filter amenities by category"
      >
        <div className="flex flex-wrap gap-2 min-w-0">
          {AMENITY_CATEGORIES.map((cat) => {
            const pressed = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={pressed}
                aria-label={`Show ${cat.label} near Providence`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  pressed
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-700 border border-slate-300 hover:border-blue-400"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className={`flex flex-col ${compact ? "" : "md:flex-row"}`}>
        <div className={`relative w-full ${mapHeight} ${compact ? "" : "md:min-w-[55%]"}`}>
          <div ref={mapRef} className="absolute inset-0 w-full h-full" aria-hidden />
          {loading && (
            <div
              className="absolute inset-0 bg-white/70 flex items-center justify-center"
              aria-live="polite"
              aria-busy="true"
            >
              <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
            </div>
          )}
        </div>
        {!compact && (
          <div className="w-full md:w-[320px] max-h-[500px] overflow-y-auto bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900 mb-3">Nearby {activeLabel}</h3>
            {loading && places.length === 0 ? (
              <p className="text-slate-500 text-sm">Loading places…</p>
            ) : places.length === 0 ? (
              <CuratedAmenityList categoryFilter={selectedCategory} />
            ) : (
              <ul className="space-y-3">
                {places.map((place, i) => (
                  <li
                    key={`${place.displayName}-${i}`}
                    className="bg-white rounded-lg p-3 border border-slate-200"
                  >
                    <p className="font-medium text-slate-900 text-sm">{place.displayName}</p>
                    {place.rating != null && (
                      <p className="text-amber-600 text-xs mt-0.5 flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" aria-hidden />
                        {place.rating.toFixed(1)}
                      </p>
                    )}
                    {place.formattedAddress && (
                      <p className="text-slate-600 text-xs mt-1 flex items-start gap-1">
                        <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden />
                        {place.formattedAddress}
                      </p>
                    )}
                    {(place.googleMapsURI || place.location) && (
                      <a
                        href={
                          place.googleMapsURI ??
                          (place.location
                            ? buildDirectionsUrl(
                                typeof place.location.lat === "function"
                                  ? place.location.lat()
                                  : place.location.lat,
                                typeof place.location.lng === "function"
                                  ? place.location.lng()
                                  : place.location.lng
                              )
                            : "#")
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 text-xs font-medium"
                      >
                        Directions
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
