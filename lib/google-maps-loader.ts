/**
 * Centralized Google Maps loader using @googlemaps/js-api-loader.
 * Ensures a single script load across AmenityMap and DirectionsMap.
 * Registers gm_authFailure before the Maps script loads (S2).
 */

import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

let loadPromise: Promise<typeof google> | null = null;

export let mapsAuthFailed = false;

function installAuthFailureHandler(): void {
  if (typeof window === "undefined") return;
  const win = window as Window & {
    __gmapsAuthHandlerInstalled?: boolean;
    gm_authFailure?: () => void;
  };
  if (win.__gmapsAuthHandlerInstalled) return;
  win.__gmapsAuthHandlerInstalled = true;

  window.addEventListener("gmaps:auth-failure", () => {
    mapsAuthFailed = true;
    loadPromise = null;
  });

  win.gm_authFailure = () => {
    mapsAuthFailed = true;
    loadPromise = null;
    window.dispatchEvent(new Event("gmaps:auth-failure"));
  };
}

if (typeof window !== "undefined") {
  installAuthFailureHandler();
}

/**
 * Load the Google Maps JavaScript API. Returns a cached promise if already loading or loaded.
 */
export async function loadGoogleMaps(): Promise<typeof google> {
  if (typeof window === "undefined") {
    throw new Error("loadGoogleMaps must be called in the browser");
  }

  installAuthFailureHandler();

  if (mapsAuthFailed) {
    throw new Error("gm_authFailure");
  }

  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) {
    throw new Error("Google Maps API key is not configured");
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = (async () => {
    setOptions({
      key,
      v: "weekly",
      libraries: ["places", "geometry", "geocoding"],
    });
    await importLibrary("maps");
    if (mapsAuthFailed) {
      throw new Error("gm_authFailure");
    }
    return (window as unknown as { google: typeof google }).google;
  })();

  loadPromise.catch(() => {
    loadPromise = null;
  });

  return loadPromise;
}
