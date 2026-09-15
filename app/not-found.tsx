import Link from "next/link";
import { Home, Search, Phone } from "lucide-react";
import { realscoutUrls, gbpUrls } from "@/lib/site-config";
import GbpActionBar from "@/components/gbp/GbpActionBar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Call Providence Real Estate or search current Providence homes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <a
            href={realscoutUrls.searchFooter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Search className="h-5 w-5" />
            Search Providence Homes
          </a>
          <a
            href="tel:+17027442993"
            className="inline-flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold no-underline"
          >
            <Phone className="h-5 w-5" />
            Call (702) 744-2993
          </a>
        </div>
        <GbpActionBar variant="onLight" className="mt-8 text-left" />
        <p className="text-sm text-slate-500 mt-6">
          Providence Real Estate | 7181 N Hualapai Way #135, Las Vegas, NV 89166 | (702) 744-2993
        </p>
        <a href={gbpUrls.maps} className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
