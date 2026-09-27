import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import AmenityMapClient from "@/components/location/AmenityMapClient";
import { providenceMapCenter } from "@/lib/amenities-config";

type NearbyAmenitiesSectionProps = {
  heading?: string;
  compact?: boolean;
  className?: string;
};

export default function NearbyAmenitiesSection({
  heading = `Life Near ${providenceMapCenter.label}`,
  compact = true,
  className = "",
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      className={`py-12 md:py-16 bg-slate-50 ${className}`}
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-6">
          <h2
            id="nearby-amenities-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-3"
          >
            {heading}
          </h2>
          <p className="text-slate-700">
            Explore restaurants, parks, grocery, healthcare, schools, and everyday conveniences
            around Providence Las Vegas (89166). Switch categories on the map, then dive deeper on
            our dedicated amenities page.
          </p>
        </div>
        <AmenityMapClient compact={compact} defaultCategory="restaurants" />
        <p className="mt-6">
          <Link
            href="/amenities"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <MapPin className="h-5 w-5" aria-hidden />
            View full nearby amenities guide
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  );
}
