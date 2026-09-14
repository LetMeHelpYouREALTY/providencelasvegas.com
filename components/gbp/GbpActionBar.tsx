import { Phone, MapPin, Star, Clock, Navigation } from "lucide-react";
import { gbpUrls, officeInfo } from "@/lib/site-config";
import { businessInfo } from "@/lib/gbp-schema";

type GbpActionBarProps = {
  variant?: "onDark" | "onLight";
  className?: string;
  showHours?: boolean;
};

/**
 * Persistent Call / Directions / Maps / Reviews CTAs that match GBP.
 * Shown on every page hero to support Maps ranking and homebuyer engagement.
 */
export default function GbpActionBar({
  variant = "onDark",
  className = "",
  showHours = true,
}: GbpActionBarProps) {
  const onDark = variant === "onDark";
  const wrap = onDark
    ? "bg-white/10 border-white/20 text-white"
    : "bg-white border-slate-200 text-slate-800 shadow-sm";
  const link = onDark
    ? "text-white no-underline hover:bg-white/15"
    : "text-slate-800 no-underline hover:bg-slate-50";
  const muted = onDark ? "text-white/80" : "text-slate-600";

  return (
    <div
      className={`flex flex-wrap items-center gap-2 md:gap-3 rounded-xl border p-3 md:p-4 ${wrap} ${className}`}
      aria-label="Call, directions, and Google reviews"
    >
      <a
        href={officeInfo.phoneTel}
        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold ${link}`}
      >
        <Phone className="h-4 w-4" />
        Call {officeInfo.phone}
      </a>
      <a
        href={gbpUrls.directions}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold ${link}`}
      >
        <Navigation className="h-4 w-4" />
        Directions
      </a>
      <a
        href={gbpUrls.maps}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold ${link}`}
      >
        <MapPin className="h-4 w-4" />
        Google Maps
      </a>
      <a
        href={gbpUrls.review}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold ${link}`}
      >
        <Star className="h-4 w-4" />
        Google Reviews
      </a>
      {showHours && (
        <span className={`inline-flex items-center gap-2 px-3 py-2 text-sm ${muted}`}>
          <Clock className="h-4 w-4" />
          Mon–Fri {businessInfo.hours.monday.replace("-", "–")}, Sat {businessInfo.hours.saturday.replace("-", "–")}
        </span>
      )}
    </div>
  );
}
