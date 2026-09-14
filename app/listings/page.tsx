import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import Link from "next/link";
import {
  Phone,
  Home,
  MapPin,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Heart,
  Building2,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { realscoutUrls, providenceNeighborhoods, marketStats } from "@/lib/site-config";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";

export const revalidate = 3600;

const listingsBreadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Listings", url: "/listings" },
]);

export const metadata: Metadata = {
  title: "Providence Homes for Sale | MLS Property Search | Dr. Jan Duffy",
  description:
    "Browse Providence Las Vegas homes for sale with live MLS listings. All 27 Providence neighborhoods. Dr. Jan Duffy, Berkshire Hathaway HomeServices. Call (702) 744-2993.",
  alternates: { canonical: "https://www.providencelasvegas.com/listings" },
  keywords: [
    "Providence homes for sale",
    "Providence Las Vegas real estate",
    "MLS listings Providence",
    "Oxford Commons homes",
    "Saratoga Highlands",
  ],
  ...pageImageMetadata("hero-listings"),
};

const listingsSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Providence Las Vegas MLS Property Listings",
  description: "Live MLS property listings for Providence Las Vegas homes for sale",
  provider: {
    "@type": "RealEstateAgent",
    name: "Providence Real Estate",
    telephone: "+17027442993",
  },
  areaServed: [{ "@type": "Place", name: "Providence, North Las Vegas, NV 89166" }],
};

const popularSearches = [
  { name: "Oxford Commons", href: "/providence/neighborhoods/oxford-commons", count: "Providence" },
  { name: "Saratoga Highlands", href: "/providence/neighborhoods/saratoga-highlands", count: "Providence" },
  { name: "Auburn & Bradford", href: "/providence/neighborhoods/auburn-bradford", count: "Providence" },
  { name: "55+ Options", href: "/55-plus-communities", count: "Near Providence" },
  { name: "New Construction", href: "/new-construction", count: "Providence" },
  { name: "All 27 Neighborhoods", href: "/providence", count: "Providence" },
];

const priceRanges = [
  { range: "Under $400K", description: "Starter homes, condos, townhomes", count: "1,500+" },
  { range: "$400K - $600K", description: "Single-family homes, HOA streetscapes", count: "2,100+" },
  { range: "$600K - $1M", description: "Premium locations, larger homes", count: "1,200+" },
  { range: "$1M - $2M", description: "Luxury homes, guard-gated communities", count: "450+" },
  { range: "$2M+", description: "Ultra-luxury estates, custom builds", count: "180+" },
];

const neighborhoods = providenceNeighborhoods.slice(0, 6).map((n) => ({
  name: n.name,
  slug: n.slug,
  description: "Providence Las Vegas neighborhood with access to three community parks",
  medianPrice: marketStats.lasVegas.medianPriceFormatted,
  daysOnMarket: marketStats.lasVegas.daysOnMarket,
}));

export default function ListingsPage() {
  const listingsFAQs = getFAQsForPage("listings");

  return (
    <>
      <FAQSchema faqs={listingsFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingsBreadcrumbs) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingsSchema) }}
      />
      <Navbar />
      <main className="pb-16">
        <PageHero
          imageKey="hero-listings"
          badge={
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
          }
          title="Providence Homes for Sale"
          subtitle="Search Providence Las Vegas properties across all 27 neighborhoods with live MLS listings. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties."
        >
          <div className="flex flex-wrap gap-4 text-sm text-white/90 mb-4">
            <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-1" /> Live MLS Data</span>
            <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-1" /> Updated Every 15 Min</span>
          </div>
          <a
            href={realscoutUrls.searchListingsPage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white no-underline hover:underline font-semibold"
          >
            <Search className="h-4 w-4" />
            Open full search in new tab →
          </a>
        </PageHero>
        <div className="container mx-auto px-4 pt-12">
          <section className="mb-16">
            <div className="max-w-7xl mx-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-office-listings 
                    agent-encoded-id="QWdlbnQtMjI1MDUw" 
                    sort-order="NEWEST" 
                    listing-status="For Sale" 
                    property-types=",SFR,MF,TC"
                  ></realscout-office-listings>`,
                }}
              />
            </div>
          </section>

          {/* Popular Searches Section */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Popular Property Searches in Providence
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Providence offers 27 neighborhoods across a range of price points. Search premium homes,
              new construction, or resale inventory across Oxford Commons, Saratoga Highlands, Auburn & Bradford,
              and every Providence community. Use the tools below or call (702) 744-2993.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {popularSearches.map((search) => (
                <Link
                  key={search.name}
                  href={search.href}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-all group flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600">
                      {search.name}
                    </h3>
                    <span className="text-sm text-slate-500">{search.count} listings</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </section>

          {/* Price Range Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Providence Home Price Guide
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              The Providence Las Vegas real estate market offers exceptional value compared to California and 
              other western states. With no state income tax and housing prices 40-60% lower than 
              coastal cities, your dollar stretches further in Southern Nevada. Here's what you can 
              expect at different price points in the current January 2026 market.
            </p>
            <div className="space-y-4">
              {priceRanges.map((price, index) => (
                <div
                  key={price.range}
                  className="bg-white rounded-lg p-4 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between"
                >
                  <div className="flex items-center mb-2 md:mb-0">
                    <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-bold text-slate-900">{price.range}</h3>
                      <p className="text-sm text-slate-600">{price.description}</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-semibold">{price.count} homes</span>
                </div>
              ))}
            </div>
          </section>

          {/* Neighborhood Overview */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Providence Neighborhoods & Communities
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Each of the 27 Providence neighborhoods offers a unique lifestyle. From Oxford Commons 
              and Saratoga Highlands to Auburn & Bradford and beyond, all Providence neighborhoods 
              have access to three community parks. Dr. Jan Duffy provides expert guidance on which 
              Providence neighborhood matches your priorities—amenities, floor plans, HOA, or investment potential.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.name}
                  href={`/providence/neighborhoods/${neighborhood.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all block"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{neighborhood.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Providence median: <strong className="text-slate-900">{neighborhood.medianPrice}</strong></span>
                    <span className="text-slate-500">DOM: <strong className="text-slate-900">{neighborhood.daysOnMarket} days</strong></span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/providence"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Explore All 27 Providence Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Why Use an Agent Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Work With a Berkshire Hathaway HomeServices Agent
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              In today's competitive Providence market, having expert representation can mean the 
              difference between winning your dream home and losing out. Dr. Jan Duffy brings 
              the resources of Berkshire Hathaway HomeServices—the most trusted name in real estate—
              combined with deep local market knowledge from serving Providence since 2008.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Off-Market Access</h3>
                <p className="text-slate-400 text-sm">
                  See listings before they hit the MLS through our network of 50,000+ agents
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Expert Negotiation</h3>
                <p className="text-slate-400 text-sm">
                  $127M+ in closed transactions means proven negotiation skills on your behalf
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Local Expertise</h3>
                <p className="text-slate-400 text-sm">
                  Insider knowledge of neighborhoods, schools, and upcoming developments
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Free for Buyers</h3>
                <p className="text-slate-400 text-sm">
                  The seller pays the commission—you get full representation at no cost
                </p>
              </div>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Providence Real Estate Market Statistics
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              The Providence housing market remains strong heading into 2026, with steady appreciation 
              and healthy inventory levels. Understanding current market conditions helps buyers 
              make informed decisions about timing, pricing, and negotiation strategies. Here's a 
              snapshot of the current Providence market as of January 2026.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">$450K</div>
                <div className="text-sm text-slate-600">Median Home Price</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">28</div>
                <div className="text-sm text-slate-600">Avg Days on Market</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">4,850</div>
                <div className="text-sm text-slate-600">Active Listings</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">+4.2%</div>
                <div className="text-sm text-slate-600">Year-Over-Year</div>
              </div>
            </div>
          </section>

          {/* Home Buying Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              The Home Buying Process in Providence Las Vegas
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Buying a home is one of the most significant financial decisions you'll make. 
              Understanding the process helps reduce stress and ensures you're prepared at each 
              step. Here's what to expect when purchasing a home in Providence Las Vegas with Dr. Jan Duffy 
              and Berkshire Hathaway HomeServices.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Get Pre-Approved for Financing</h3>
                  <p className="text-slate-600 text-sm">
                    A pre-approval letter shows sellers you're serious and gives you a clear budget. 
                    Dr. Jan can connect you with trusted local lenders offering competitive rates. 
                    This typically takes 1-3 days with proper documentation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Define Your Priorities & Search</h3>
                  <p className="text-slate-600 text-sm">
                    Location, size, features, and budget all factor into your search. Dr. Jan helps 
                    you identify which Providence neighborhoods match your lifestyle while setting 
                    up automated MLS alerts so you never miss a new listing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Tour Properties & Make an Offer</h3>
                  <p className="text-slate-600 text-sm">
                    Visit homes that meet your criteria, either in person or virtually. When you 
                    find "the one," Dr. Jan helps you craft a competitive offer with the right 
                    price, contingencies, and terms to win in today's market.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Due Diligence & Inspections</h3>
                  <p className="text-slate-600 text-sm">
                    Once under contract, you'll have time for home inspections, appraisals, and 
                    final financing approval. Dr. Jan coordinates with all parties and helps you 
                    negotiate repairs or credits if issues arise.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Close & Get Your Keys</h3>
                  <p className="text-slate-600 text-sm">
                    The closing process typically takes 30-45 days from offer acceptance. You'll 
                    sign final documents, transfer funds, and receive the keys to your new Providence 
                    home. Dr. Jan remains available for any questions even after closing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FAQSection
            faqs={listingsFAQs}
            title="Frequently Asked Questions About Providence Las Vegas Real Estate"
            subtitle="Common questions about searching for and buying Providence homes"
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Providence Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for personalized guidance, off-market listings, and expert 
              representation backed by Berkshire Hathaway HomeServices. Free buyer consultations 
              available—the seller pays the commission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027442993"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 744-2993
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <Footer />
    </>
  );
}
