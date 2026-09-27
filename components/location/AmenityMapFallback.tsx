import { MapPin } from "lucide-react";
import { buildMapEmbedFallbackUrl, providenceMapCenter } from "@/lib/amenities-config";
import CuratedAmenityList from "@/components/location/CuratedAmenityList";

type AmenityMapFallbackProps = {
  compact?: boolean;
  className?: string;
};

/**
 * Keyless fallback: embedded map centered on Providence plus curated static places.
 */
export default function AmenityMapFallback({
  compact = false,
  className = "",
}: AmenityMapFallbackProps) {
  const mapHeight = compact ? "h-[280px]" : "h-[400px] md:h-[500px]";

  return (
    <div
      className={`rounded-xl overflow-hidden bg-white border border-slate-200 ${className}`}
      role="region"
      aria-label={`Map of ${providenceMapCenter.label} and nearby amenities`}
    >
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-start gap-2">
        <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" aria-hidden />
        <p className="text-sm text-slate-700">
          Map centered on {providenceMapCenter.label} with verified nearby places listed below.
        </p>
      </div>
      <div className={`flex flex-col ${compact ? "" : "md:flex-row"}`}>
        <div className={`relative w-full ${mapHeight} ${compact ? "" : "md:min-w-[55%]"}`}>
          <iframe
            title={`Google Map centered on ${providenceMapCenter.label}, Las Vegas`}
            src={buildMapEmbedFallbackUrl()}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div
          className={`w-full ${compact ? "max-h-[320px]" : "md:w-[360px] max-h-[500px]"} overflow-y-auto bg-slate-50 p-4`}
        >
          <CuratedAmenityList />
        </div>
      </div>
    </div>
  );
}
