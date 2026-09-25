import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { providenceNeighborhoods } from "@/lib/site-config";
import PageHero from "@/components/media/PageHero";
import SectionMedia from "@/components/media/SectionMedia";
import { pageImageMetadata } from "@/lib/images";

export const metadata: Metadata = {
  title: "Site Map | Providence Las Vegas Real Estate",
  description:
    "Browse all pages on Providence Las Vegas Real Estate. Find neighborhoods, services, contact information, and more.",
  alternates: { canonical: "https://www.providencelasvegas.com/site-map" },
  ...pageImageMetadata("hero-services"),
};

export default function SiteMapPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16">
      <PageHero
          imageKey="hero-services"
          title="Site Map"
          subtitle="Every Providence Las Vegas page: neighborhoods, services, maps, and contact."
        />
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-slate-600 mb-12">
            Explore all pages on Providence Las Vegas Real Estate. Dr. Jan Duffy serves all 27 Providence neighborhoods.
          </p>

          <section className="mb-12">
            <SectionMedia imageKey="section-services" heading="Main Pages" />
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/" className="text-blue-600 hover:text-blue-700 hover:underline">Home</Link></li>
              <li><Link href="/providence" className="text-blue-600 hover:text-blue-700 hover:underline">Providence Las Vegas</Link></li>
              <li><Link href="/about" className="text-blue-600 hover:text-blue-700 hover:underline">About Dr. Jan Duffy</Link></li>
              <li><Link href="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">Contact</Link></li>
              <li><Link href="/services" className="text-blue-600 hover:text-blue-700 hover:underline">Services</Link></li>
              <li><Link href="/listings" className="text-blue-600 hover:text-blue-700 hover:underline">Listings</Link></li>
              <li><Link href="/amenities" className="text-blue-600 hover:text-blue-700 hover:underline">Nearby Amenities Map</Link></li>
              <li><Link href="/directions" className="text-blue-600 hover:text-blue-700 hover:underline">Get Directions</Link></li>
              <li><Link href="/faq" className="text-blue-600 hover:text-blue-700 hover:underline">FAQ</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <SectionMedia imageKey="section-buying-process" heading="Buying & Selling" />
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/buyers" className="text-blue-600 hover:text-blue-700 hover:underline">Buy in Providence</Link></li>
              <li><Link href="/buyers/first-time-buyers" className="text-blue-600 hover:text-blue-700 hover:underline">First-Time Home Buyers</Link></li>
              <li><Link href="/buyers/california-relocator" className="text-blue-600 hover:text-blue-700 hover:underline">California to Providence</Link></li>
              <li><Link href="/sellers" className="text-blue-600 hover:text-blue-700 hover:underline">Sell Your Providence Home</Link></li>
              <li><Link href="/sellers/move-up" className="text-blue-600 hover:text-blue-700 hover:underline">Move-Up Sellers</Link></li>
              <li><Link href="/sellers/downsizing" className="text-blue-600 hover:text-blue-700 hover:underline">Downsizing</Link></li>
              <li><Link href="/sellers/relocation" className="text-blue-600 hover:text-blue-700 hover:underline">Relocation Sellers</Link></li>
              <li><Link href="/sellers/divorce-probate" className="text-blue-600 hover:text-blue-700 hover:underline">Divorce & Probate</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <SectionMedia imageKey="section-core-services" heading="Services & Tools" />
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/home-valuation" className="text-blue-600 hover:text-blue-700 hover:underline">Free Home Valuation</Link></li>
              <li><Link href="/luxury-homes" className="text-blue-600 hover:text-blue-700 hover:underline">Premium Providence Homes</Link></li>
              <li><Link href="/new-construction" className="text-blue-600 hover:text-blue-700 hover:underline">New Construction</Link></li>
              <li><Link href="/55-plus-communities" className="text-blue-600 hover:text-blue-700 hover:underline">55+ Communities</Link></li>
              <li><Link href="/investment-properties" className="text-blue-600 hover:text-blue-700 hover:underline">Investment Properties</Link></li>
              <li><Link href="/relocation" className="text-blue-600 hover:text-blue-700 hover:underline">Relocation</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <SectionMedia imageKey="section-market-stats" heading="Market & Resources" />
            <ul className="space-y-2 text-slate-700">
              <li><Link href="/market-report" className="text-blue-600 hover:text-blue-700 hover:underline">Market Report</Link></li>
              <li><Link href="/market-update" className="text-blue-600 hover:text-blue-700 hover:underline">Market Update</Link></li>
              <li><Link href="/market-insights" className="text-blue-600 hover:text-blue-700 hover:underline">Market Insights</Link></li>
              <li><Link href="/providence/hoa-info" className="text-blue-600 hover:text-blue-700 hover:underline">Providence HOA Information</Link></li>
              <li><Link href="/why-berkshire-hathaway" className="text-blue-600 hover:text-blue-700 hover:underline">Why Berkshire Hathaway</Link></li>
              <li><Link href="/google-business" className="text-blue-600 hover:text-blue-700 hover:underline">Client Reviews</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <SectionMedia imageKey="section-neighborhoods" heading="All 27 Providence Neighborhoods" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-slate-700">
              {providenceNeighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/providence/neighborhoods/${n.slug}`}
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <p className="text-sm text-slate-500">
            <Link href="/sitemap.xml" className="text-blue-600 hover:text-blue-700">
              XML Sitemap
            </Link>{" "}
            for search engines
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
