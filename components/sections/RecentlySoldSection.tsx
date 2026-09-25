import Link from "next/link";
import { MapPin, Home } from "lucide-react";
import { recentSales } from "@/lib/site-config";
import SectionMedia from "@/components/media/SectionMedia";

export default function RecentlySoldSection() {
  if (!recentSales.length) return null;

  return (
    <section className="py-12 md:py-16 bg-white" aria-labelledby="recently-sold">
      <div className="container mx-auto px-4">
        <SectionMedia
          imageKey="section-recently-sold"
          heading="Recently Sold in Providence"
          headingId="recently-sold"
        />
        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
          Providence Real Estate helps buyers and sellers across Providence, North Las Vegas, and Las Vegas.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {recentSales.map((sale, index) => (
            <Link
              key={index}
              href={sale.listingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-50 hover:bg-slate-100 rounded-xl p-6 border border-slate-200 hover:border-blue-200 transition-colors max-w-sm"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-800 rounded-full mb-3">
                Just Sold
              </span>
              <div className="flex items-start gap-3">
                <Home className="h-5 w-5 text-slate-400 group-hover:text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {sale.address}
                  </p>
                  <p className="text-sm text-slate-600 flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4" />
                    {sale.area}, {sale.city}, {sale.state} {sale.zip}
                  </p>
                  <span className="text-sm text-blue-600 group-hover:underline mt-2 inline-block">
                    View listing →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
