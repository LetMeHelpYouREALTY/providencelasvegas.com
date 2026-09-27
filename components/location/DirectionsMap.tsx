"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Car, Footprints, Bus, Bike, Loader2, Navigation } from "lucide-react";
import { officeInfo } from "@/lib/site-config";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";
import { buildMapEmbedFallbackUrl } from "@/lib/amenities-config";

const TRAVEL_MODES = [
  { value: "DRIVING" as const, label: "Driving", icon: Car },
  { value: "WALKING" as const, label: "Walking", icon: Footprints },
  { value: "TRANSIT" as const, label: "Transit", icon: Bus },
  { value: "BICYCLING" as const, label: "Bicycling", icon: Bike },
] as const;

type DirectionsMapProps = {
  apiKey?: string;
  destination?: string | { lat: number; lng: number };
  defaultOrigin?: string;
  className?: string;
};

export default function DirectionsMap({
  apiKey,
  destination = officeInfo.address.full,
  defaultOrigin = "",
  className = "",
}: DirectionsMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const originInputRef = useRef<HTMLInputElement>(null);
  const [origin, setOrigin] = useState(defaultOrigin);
  const [travelMode, setTravelMode] = useState<"DRIVING" | "WALKING" | "TRANSIT" | "BICYCLING">("DRIVING");
  const [duration, setDuration] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const [useFallback, setUseFallback] = useState(
    () => mapsAuthFailed || !process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  );

  useEffect(() => {
    const onAuthFailure = () => setUseFallback(true);
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, []);

  useEffect(() => {
    if (useFallback) return;
    let cancelled = false;

    loadGoogleMaps()
      .then(async () => {
        if (cancelled || !mapRef.current) return;

        const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;

        if (cancelled || !mapRef.current) return;

        const map = new Map(mapRef.current, {
          zoom: 12,
          center: { lat: officeInfo.coordinates.lat, lng: officeInfo.coordinates.lng },
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        });
        mapInstanceRef.current = map;
        directionsRendererRef.current = new google.maps.DirectionsRenderer({
          map,
          suppressMarkers: false,
        });

        // Places Autocomplete on origin input (supports GBP Get Directions CTA)
        if (!cancelled && originInputRef.current) {
          const { Autocomplete } = (await google.maps.importLibrary(
            "places"
          )) as google.maps.PlacesLibrary;
          const autocomplete = new Autocomplete(originInputRef.current, {
            types: ["address"],
            componentRestrictions: { country: "us" },
          });
          autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            if (place.formatted_address) {
              setOrigin(place.formatted_address);
              calculateRoute(place.formatted_address);
            }
          });
        }
      })
      .catch(() => {
        if (!cancelled) setUseFallback(true);
      });

    return () => {
      cancelled = true;
      directionsRendererRef.current?.setMap(null);
      mapInstanceRef.current = null;
    };
  }, [useFallback]);

  const calculateRoute = (originOverride?: string) => {
    if (!directionsRendererRef.current) return;

    const dest =
      typeof destination === "string"
        ? destination
        : { lat: destination.lat, lng: destination.lng };

    const originValue = (originOverride ?? origin.trim()) || officeInfo.address.full;
    if (originValue === dest) {
      setError("Origin and destination cannot be the same.");
      return;
    }

    setLoading(true);
    setError(null);

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: originValue,
        destination: dest,
        travelMode: google.maps.TravelMode[travelMode],
      },
      (result, status) => {
        setLoading(false);
        if (status === google.maps.DirectionsStatus.OK && result) {
          setError(null);
          directionsRendererRef.current?.setDirections(result);
          const leg = result.routes[0]?.legs[0];
          if (leg) {
            setDuration(leg.duration?.text || null);
            setDistance(leg.distance?.text || null);
          }
        } else {
          setError(
            status === google.maps.DirectionsStatus.ZERO_RESULTS
              ? "No route found. Try a different address or travel mode."
              : `Directions request failed: ${status}`
          );
        }
      }
    );
  };

  // Recalculate when travel mode changes (if we have an origin)
  useEffect(() => {
    if (!directionsRendererRef.current) return;
    if (!origin.trim()) return;
    calculateRoute();
  }, [travelMode]);

  if (useFallback) {
    const dest =
      typeof destination === "string"
        ? destination
        : { lat: destination.lat, lng: destination.lng };
    const embedCenter =
      typeof dest === "string"
        ? { lat: officeInfo.coordinates.lat, lng: officeInfo.coordinates.lng }
        : dest;
    return (
      <div
        className={`rounded-xl overflow-hidden bg-white border border-slate-200 ${className}`}
      >
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <p className="text-sm text-slate-700">
            Interactive directions are unavailable. Use the map below or open Google Maps for turn-by-turn
            directions to{" "}
            {typeof dest === "string" ? dest : officeInfo.address.full}.
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              typeof dest === "string" ? dest : `${dest.lat},${dest.lng}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Open in Google Maps
            <MapPin className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="relative w-full h-[450px]">
          <iframe
            title="Directions map"
            src={buildMapEmbedFallbackUrl(embedCenter)}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl overflow-hidden bg-white border border-slate-200 ${className}`}
    >
      <div className="p-4 border-b border-slate-200 bg-slate-50 space-y-4">
        <div>
          <label htmlFor="directions-origin" className="block text-sm font-medium text-slate-700 mb-1">
            Starting point
          </label>
          <div className="flex gap-2">
            <input
              ref={originInputRef}
              id="directions-origin"
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Enter your address or zip code"
              className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => {
                setLoading(true);
                if (navigator.geolocation && typeof google !== "undefined") {
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      const { latitude, longitude } = pos.coords;
                      const geocoder = new google.maps.Geocoder();
                      geocoder.geocode(
                        { location: { lat: latitude, lng: longitude } },
                        (results, status) => {
                          if (status === "OK" && results?.[0]) {
                            const addr = results[0].formatted_address;
                            setOrigin(addr);
                            calculateRoute(addr);
                          }
                          setLoading(false);
                        }
                      );
                    },
                    () => setLoading(false)
                  );
                } else {
                  setLoading(false);
                }
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-200 hover:bg-slate-300 px-4 py-2.5 text-slate-700 font-medium transition-colors"
              title="Use my location"
            >
              <Navigation className="h-4 w-4" />
              <span className="hidden sm:inline">My Location</span>
            </button>
            <button
              type="button"
              onClick={() => calculateRoute()}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-2.5 text-white font-medium transition-colors"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <MapPin className="h-4 w-4" />
              )}
              Get Directions
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-slate-700">Travel by:</span>
          <div className="flex flex-wrap gap-2">
            {TRAVEL_MODES.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTravelMode(value)}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  travelMode === value
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
        {(duration || distance) && (
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            {duration && <span>Estimated time: <strong>{duration}</strong></span>}
            {distance && <span>Distance: <strong>{distance}</strong></span>}
          </div>
        )}
        {error && !loading && (
          <p className="text-amber-700 text-sm bg-amber-50 px-3 py-2 rounded-lg">{error}</p>
        )}
      </div>
      <div className="relative w-full h-[450px]">
        <div ref={mapRef} className="absolute inset-0 w-full h-full" />
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
          </div>
        )}
      </div>
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-sm text-slate-600">
        <strong>Destination:</strong>{" "}
        {typeof destination === "string"
          ? destination
          : `Providence Real Estate, ${officeInfo.address.full}`}
      </div>
    </div>
  );
}
