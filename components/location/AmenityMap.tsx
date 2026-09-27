"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink, Loader2 } from "lucide-react";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";
import { placeLatLng, searchCategoryPlaces } from "@/lib/places-search";
import {
  AMENITY_CATEGORIES,
  buildDirectionsUrl,
  buildMapEmbedFallbackUrl,
  getAmenityCategory,
  getDefaultAmenityCategoryId,
  providenceMapCenter,
  type AmenityCategoryId,
} from "@/lib/amenities-config";
import CuratedAmenityList from "@/components/location/CuratedAmenityList";

type PlaceResult = {
  displayName: string;
  formattedAddress?: string;
  googleMapsURI?: string;
  lat: number;
  lng: number;
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

function buildPlaceInfoContent(place: PlaceResult): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "240px";

  const title = document.createElement("strong");
  title.textContent = place.displayName;
  wrap.appendChild(title);

  if (place.formattedAddress) {
    const addr = document.createElement("div");
    addr.style.fontSize = "12px";
    addr.style.marginTop = "4px";
    addr.textContent = place.formattedAddress;
    wrap.appendChild(addr);
  }

  const link = document.createElement("a");
  link.href = place.googleMapsURI ?? buildDirectionsUrl(place.lat, place.lng);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  link.style.display = "inline-block";
  link.style.marginTop = "6px";
  wrap.appendChild(link);

  return wrap;
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
  const [useFallback, setUseFallback] = useState(
    () => !hasMapsApiKey() || mapsAuthFailed
  );
  const [searchFailed, setSearchFailed] = useState(false);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const categoryConfig = getAmenityCategory(selectedCategory);
  const mapHeight = compact ? "h-[300px]" : "h-[400px] md:h-[500px]";
  const resultCap = compact ? Math.min(maxResults, 10) : maxResults;

  const enterFallback = useCallback(() => {
    setUseFallback(true);
    setMapReady(false);
    mapInstanceRef.current = null;
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
    setLoading(false);
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
  }, []);

  const addCommunityMarker = useCallback(
    (map: google.maps.Map) => {
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
        const content = document.createElement("div");
        content.style.maxWidth = "220px";
        const strong = document.createElement("strong");
        strong.textContent = providenceMapCenter.label;
        content.appendChild(strong);
        const span = document.createElement("span");
        span.textContent = "Master-planned community, Las Vegas NV 89166";
        content.appendChild(document.createElement("br"));
        content.appendChild(span);
        iw.setContent(content);
        iw.open({ map, anchor: marker });
      });
      communityMarkerRef.current = marker;
    },
    [center.lat, center.lng]
  );

  const runSearch = useCallback(
    async (map: google.maps.Map) => {
      setLoading(true);
      setPlaces([]);
      setSearchFailed(false);
      clearMarkers();
      addCommunityMarker(map);

      try {
        const results = await searchCategoryPlaces(
          { lat: center.lat, lng: center.lng },
          selectedCategory,
          categoryConfig.placeTypes,
          radiusMeters,
          resultCap
        );

        const iw = infoWindowRef.current ?? new google.maps.InfoWindow();
        infoWindowRef.current = iw;

        const placeData: PlaceResult[] = [];
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(center);

        results.forEach((place) => {
          const coords = placeLatLng(place.location);
          if (!coords) return;
          const rawName = place.displayName;
          const displayName =
            typeof rawName === "string"
              ? rawName
              : rawName != null
                ? String(rawName)
                : "Unnamed";

          placeData.push({
            displayName,
            formattedAddress: place.formattedAddress ?? undefined,
            googleMapsURI: place.googleMapsURI ?? undefined,
            lat: coords.lat,
            lng: coords.lng,
          });

          bounds.extend(coords);
          const marker = new google.maps.Marker({
            map,
            position: coords,
            title: displayName,
          });
          marker.addListener("click", () => {
            iw.setContent(
              buildPlaceInfoContent({
                displayName,
                formattedAddress: place.formattedAddress ?? undefined,
                googleMapsURI: place.googleMapsURI ?? undefined,
                lat: coords.lat,
                lng: coords.lng,
              })
            );
            iw.open({ map, anchor: marker });
            map.panTo(coords);
          });
          markersRef.current.push(marker);
        });

        setPlaces(placeData);
        if (results.length > 0) {
          map.fitBounds(bounds, compact ? 60 : 80);
        }
      } catch {
        setSearchFailed(true);
        setPlaces([]);
      } finally {
        setLoading(false);
      }
    },
    [
      addCommunityMarker,
      center.lat,
      center.lng,
      categoryConfig.placeTypes,
      clearMarkers,
      compact,
      radiusMeters,
      resultCap,
      selectedCategory,
    ]
  );

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    if (mapsAuthFailed) enterFallback();
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  useEffect(() => {
    if (useFallback || !hasMapsApiKey()) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    loadGoogleMaps()
      .then(async () => {
        if (cancelled || !mapRef.current) return;

        const { Map } = (await google.maps.importLibrary(
          "maps"
        )) as google.maps.MapsLibrary;

        if (cancelled || !mapRef.current) return;

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
      })
      .catch(() => {
        if (!cancelled) enterFallback();
      });

    return () => {
      cancelled = true;
      mapInstanceRef.current = null;
      setMapReady(false);
      clearMarkers();
    };
  }, [center.lat, center.lng, clearMarkers, compact, enterFallback, useFallback]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !mapReady || useFallback) return;
    runSearch(map);
  }, [mapReady, selectedCategory, runSearch, useFallback]);

  const activeLabel = AMENITY_CATEGORIES.find((c) => c.id === selectedCategory)?.label;
  const showCuratedSidebar =
    useFallback || searchFailed || (!loading && places.length === 0);

  const categoryToolbar = (
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
  );

  const listPanel = !compact && (
    <div className="w-full md:w-[320px] max-h-[500px] overflow-y-auto bg-slate-50 p-4">
      <h3 className="font-bold text-slate-900 mb-3">Nearby {activeLabel}</h3>
      {loading && places.length === 0 && !showCuratedSidebar ? (
        <p className="text-slate-500 text-sm">Loading places…</p>
      ) : showCuratedSidebar ? (
        <CuratedAmenityList categoryFilter={selectedCategory} />
      ) : (
        <ul className="space-y-3">
          {places.map((place, i) => (
            <li
              key={`${place.displayName}-${i}`}
              className="bg-white rounded-lg p-3 border border-slate-200"
            >
              <p className="font-medium text-slate-900 text-sm">{place.displayName}</p>
              {place.formattedAddress && (
                <p className="text-slate-600 text-xs mt-1 flex items-start gap-1">
                  <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden />
                  {place.formattedAddress}
                </p>
              )}
              <a
                href={place.googleMapsURI ?? buildDirectionsUrl(place.lat, place.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 text-xs font-medium"
              >
                Directions
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  if (useFallback) {
    return (
      <div
        className={`rounded-xl overflow-hidden bg-white border border-slate-200 ${className}`}
        role="region"
        aria-label="Map of nearby amenities near Providence Las Vegas"
      >
        {categoryToolbar}
        <div className={`flex flex-col ${compact ? "" : "md:flex-row"}`}>
          <div className={`relative w-full ${mapHeight} ${compact ? "" : "md:min-w-[55%]"}`}>
            <iframe
              title={`Map centered on ${providenceMapCenter.label}, Las Vegas`}
              src={buildMapEmbedFallbackUrl(center)}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          {!compact && (
            <div className="w-full md:w-[320px] max-h-[500px] overflow-y-auto bg-slate-50 p-4">
              <CuratedAmenityList categoryFilter={selectedCategory} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl overflow-hidden bg-white border border-slate-200 ${className}`}
      role="region"
      aria-label="Interactive map of nearby amenities"
    >
      {categoryToolbar}
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
        {listPanel}
      </div>
    </div>
  );
}
