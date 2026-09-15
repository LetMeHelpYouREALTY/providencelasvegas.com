import Link from "next/link";
import { MapPin, Search, ExternalLink } from "lucide-react";
import { realscoutUrls, gbpUrls } from "@/lib/site-config";
import LocationMap from "@/components/location/LocationMap";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Location Map - Help customers find us on every page */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <LocationMap variant="compact" theme="dark" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Footer Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">Providence Real Estate</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Your trusted expert for all 27 Providence neighborhoods. Master-planned community specialist since 2008.
            </p>
            <a
              href={realscoutUrls.searchFooter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <Search className="h-4 w-4" />
              Search Providence Homes
            </a>
          </div>

          {/* Providence Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Providence Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/buyers" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Buy a Providence Home
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Sell Your Providence Home
                </Link>
              </li>
              <li>
                <Link href="/new-construction" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Providence New Construction
                </Link>
              </li>
              <li>
                <Link href="/55-plus-communities" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Providence 55+ Options
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Providence Home Valuation
                </Link>
              </li>
              <li>
                <Link href="/market-insights" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Providence Market Insights
                </Link>
              </li>
              <li>
                <Link href="/providence/hoa-info" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Providence HOA Information
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Nearby Amenities Map
                </Link>
              </li>
              <li>
                <Link href="/directions" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Get Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Neighborhoods */}
          <div>
            <h3 className="font-bold text-lg mb-4">Featured Neighborhoods</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/providence/neighborhoods/oxford-commons" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Oxford Commons
                </Link>
              </li>
              <li>
                <Link href="/providence/neighborhoods/saratoga-highlands" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Saratoga Highlands
                </Link>
              </li>
              <li>
                <Link href="/providence/neighborhoods/auburn-bradford" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Auburn & Bradford
                </Link>
              </li>
              <li>
                <Link href="/providence" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
                  View All 27 →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - NAP (must match GBP exactly) */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Dr. Jan Duffy</h3>
            <p className="text-slate-300 text-sm mb-2">
              7181 N Hualapai Way #135
              <br />
              Las Vegas, NV 89166
            </p>
            <p className="mb-2">
              <Link href="tel:+17027442993" className="text-slate-300 hover:text-white transition-colors text-sm">
                (702) 744-2993
              </Link>
            </p>
            <p>
              <Link href="mailto:DrDuffy@ProvidenceLasVegas.com" className="text-slate-300 hover:text-white transition-colors text-sm">
                DrDuffy@ProvidenceLasVegas.com
              </Link>
            </p>
            <p className="text-slate-400 text-sm mt-3">
              Hours: Mon–Fri 9am–6pm · Sat 10am–4pm · Sun By Appointment
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={gbpUrls.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-white transition-colors"
                aria-label="View our Google Business Profile"
              >
                <ExternalLink className="h-4 w-4" />
                View on Google
              </a>
              <a
                href={gbpUrls.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-white transition-colors"
                aria-label="View office location on Google Maps"
              >
                <MapPin className="h-4 w-4" />
                View on Google Maps
              </a>
              <a
                href={gbpUrls.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-white transition-colors"
                aria-label="Get directions to our office"
              >
                <MapPin className="h-4 w-4" />
                Get directions
              </a>
              <a
                href={gbpUrls.review}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-white transition-colors"
              >
                Leave us a review
              </a>
              <a
                href="https://www.facebook.com/ProvidenceLasVegasRealEstate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-white transition-colors"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links - secondary row */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <h4 className="font-semibold text-slate-300 text-sm mb-3">Quick Links</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={realscoutUrls.searchFooter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              Search Providence Homes
            </a>
            <Link href="/providence" className="text-slate-400 hover:text-white transition-colors">
              All 27 Providence Neighborhoods
            </Link>
            <a href="https://www.providencelvhoa.com/home/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              Providence HOA
            </a>
            <Link href="/why-berkshire-hathaway" className="text-slate-400 hover:text-white transition-colors">
              Why Choose BHHS
            </Link>
            <Link href="/market-report" className="text-slate-400 hover:text-white transition-colors">
              Providence Market Report
            </Link>
            <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
              About Dr. Jan
            </Link>
            <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/google-business" className="text-slate-400 hover:text-white transition-colors">
              Client Reviews
            </Link>
            <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/site-map" className="text-slate-400 hover:text-white transition-colors">
              Site Map
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <p className="text-slate-500 text-xs text-center">
            © {currentYear} Providence Real Estate. All Rights Reserved. | Serving All 27 Providence Neighborhoods, Las Vegas NV 89166 | Dr. Jan Duffy, Team Leader | License S.0197614.LLC | (702) 744-2993
          </p>
          <p className="text-slate-600 text-xs mt-2 text-center max-w-3xl mx-auto">
            Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada Properties | Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}
