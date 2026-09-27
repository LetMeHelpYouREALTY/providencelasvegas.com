import { MapPin, ExternalLink } from "lucide-react";
import {
  curatedNearbyPlaces,
  type AmenityCategoryId,
  AMENITY_CATEGORIES,
} from "@/lib/amenities-config";

type CuratedAmenityListProps = {
  /** Limit to one category chip id, or show all grouped */
  categoryFilter?: AmenityCategoryId;
  className?: string;
};

export default function CuratedAmenityList({
  categoryFilter,
  className = "",
}: CuratedAmenityListProps) {
  const places = categoryFilter
    ? curatedNearbyPlaces.filter(
        (p) => p.category === categoryFilter || p.category === "community"
      )
    : curatedNearbyPlaces;

  const categoryLabel = categoryFilter
    ? AMENITY_CATEGORIES.find((c) => c.id === categoryFilter)?.label
    : "Featured nearby places";

  return (
    <div className={className}>
      <h3 className="font-bold text-slate-900 mb-3 text-lg">{categoryLabel}</h3>
      <ul className="space-y-3" aria-label="Curated nearby places in Providence Las Vegas">
        {places.map((place) => {
          const address = `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
          const mapsQuery = encodeURIComponent(`${place.name} ${address}`);
          return (
            <li
              key={place.name}
              className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm"
            >
              <p className="font-medium text-slate-900">{place.name}</p>
              {place.description && (
                <p className="text-slate-600 text-sm mt-1">{place.description}</p>
              )}
              <p className="text-slate-600 text-xs mt-2 flex items-start gap-1">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden />
                <span>{address}</span>
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 text-xs font-medium"
              >
                Directions
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
