import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import RealScoutInContractSection from "@/components/sections/RealScoutInContractSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import FAQSchema from "@/components/schemas/FAQSchema";
import { ReviewSchema } from "@/components/SchemaScript";
import RelatedPages from "@/components/navigation/RelatedPages";
import Link from "next/link";
import { getRelatedPages } from "@/lib/related-pages";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { providenceNeighborhoods, providenceCommunity, realscoutUrls } from "@/lib/site-config";
import { getFAQsForPage } from "@/lib/faq-library";
import { pageImageMetadata } from "@/lib/images";
import SectionMedia from "@/components/media/SectionMedia";

export const metadata: Metadata = {
  title: "Providence Real Estate | Homes for Sale in Providence Las Vegas",
  description:
    "Providence Real Estate. Homes for sale in Providence Las Vegas and North Las Vegas. Real Estate Agency. Call (702) 744-2993.",
  alternates: {
    canonical: "https://www.providencelasvegas.com",
  },
  keywords: [
    "Providence Las Vegas real estate",
    "Providence Las Vegas homes",
    "Providence homes for sale",
    "Providence neighborhoods",
    "89166 homes",
  ],
  ...pageImageMetadata("hero-homes-for-sale"),
};

// RealEstateAgent schema from root layout; ReviewSchema adds JSON-LD with itemReviewed for GSC
const homeReviewSchemaData = [
  {
    author: "Tom Sanders",
    rating: 5,
    text: "Dr. Duffy made our home buying experience seamless. Her knowledge of the Providence market is unmatched, and she guided us through every step with professionalism and care.",
    date: "2025-11-15",
  },
  {
    author: "Vitor Palmer",
    rating: 5,
    text: "We couldn't be happier with our new home! The entire process was smooth, and Dr. Duffy's attention to detail and negotiation skills saved us thousands. Highly recommend!",
    date: "2025-10-22",
  },
  {
    author: "Emily Rodriguez",
    rating: 5,
    text: "As first-time homebuyers, we were nervous about the process. Dr. Duffy patiently explained everything and helped us find the perfect home in our budget. Thank you!",
    date: "2025-09-08",
  },
];
const homeAggregateRating = { ratingValue: 4.9, reviewCount: 500 };

export default function Home() {
  const homeFAQs = getFAQsForPage("home");

  return (
    <>
      <FAQSchema faqs={homeFAQs} />
      <ReviewSchema reviews={homeReviewSchemaData} aggregateRating={homeAggregateRating} />
      <Navbar />
      <main>
        <HeroSection />
        <RealScoutListings />
        <RealScoutInContractSection />

        {/* Services + Locations - Providence Real Estate */}
        <section className="py-12 md:py-16 bg-white" aria-labelledby="services-locations">
          <div className="container mx-auto px-4">
            <SectionMedia
              imageKey="section-services"
              heading="Services & Locations"
              headingId="services-locations"
              subtitle="Buy, sell, or search homes across Providence and North Las Vegas, NV 89166."
            />
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Providence Services</h3>
                <ul className="space-y-2 text-slate-700">
                  <li><Link href="/listings" className="text-blue-600 hover:underline">Providence Homes for Sale</Link></li>
                  <li><Link href="/buyers" className="text-blue-600 hover:underline">Buy in Providence</Link></li>
                  <li><Link href="/sellers" className="text-blue-600 hover:underline">Sell Your Providence Home</Link></li>
                  <li><Link href="/luxury-homes" className="text-blue-600 hover:underline">Premium Providence Homes</Link></li>
                  <li><Link href="/new-construction" className="text-blue-600 hover:underline">Providence New Construction</Link></li>
                  <li><Link href="/55-plus-communities" className="text-blue-600 hover:underline">Providence 55+ Options</Link></li>
                  <li><Link href="/home-valuation" className="text-blue-600 hover:underline">Home Valuation</Link></li>
                  <li><Link href="/services" className="text-blue-600 hover:underline">All Services</Link></li>
                  <li><a href={realscoutUrls.searchHomepageServices} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Search Providence Homes</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Providence Neighborhoods</h3>
                <ul className="space-y-2 text-slate-700">
                  <li><Link href="/providence" className="text-blue-600 hover:underline">All 27 Providence Neighborhoods</Link></li>
                  <li><Link href="/providence/neighborhoods/oxford-commons" className="text-blue-600 hover:underline">Oxford Commons</Link></li>
                  <li><Link href="/providence/neighborhoods/saratoga-highlands" className="text-blue-600 hover:underline">Saratoga Highlands</Link></li>
                  <li><Link href="/providence/neighborhoods/auburn-bradford" className="text-blue-600 hover:underline">Auburn & Bradford</Link></li>
                  <li><Link href="/providence" className="text-blue-600 hover:underline">View All 27 →</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition - Providence Real Estate */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionMedia
              imageKey="hero-homes-for-sale"
              heading="Providence Real Estate"
              subtitle={
                <p className="text-slate-700 leading-relaxed">
                  <strong>Providence Real Estate</strong> serves Providence and North Las Vegas, NV 89166.
                  Homes for sale in Providence Las Vegas. Buy or sell with expert local guidance.
                  Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties.
                </p>
              }
            />
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <SectionMedia
              imageKey="section-market-stats"
              heading="Providence Real Estate Market"
              invert
              subtitle="Current market data for Providence Las Vegas and North Las Vegas."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$450K</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
                <div className="text-green-400 text-sm">+4.2% YoY</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">28</div>
                <div className="text-slate-300 text-sm">Avg Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">4,850</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">2.1</div>
                <div className="text-slate-300 text-sm">Months Inventory</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/market-report"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                View Full Market Report
              </Link>
            </div>
          </div>
        </section>

        {/* The Neighborhoods of Providence */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionMedia
              imageKey="section-neighborhoods"
              heading="The Neighborhoods of Providence"
              subtitle={
                <p className="text-lg">
                  Providence is a master-planned community of {providenceCommunity.neighborhoodCount}{" "}
                  neighborhoods and more than {providenceCommunity.homeCount} homes. Each neighborhood
                  has its own amenities.
                </p>
              }
            />
            <div className="mb-8">
              <SectionMedia
                imageKey="section-parks"
                heading="Community Parks"
                as="h3"
              />
              <div className="flex flex-wrap justify-center gap-4">
                {providenceCommunity.parks.map((park) => (
                  <span
                    key={park.slug}
                    className="bg-slate-100 rounded-lg px-4 py-2 text-slate-700 font-medium"
                  >
                    {park.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {providenceNeighborhoods.map((area) => (
                <Link
                  key={area.slug}
                  href={`/providence/neighborhoods/${area.slug}`}
                  className="bg-slate-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors group"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                    {area.name}
                  </h3>
                  <p className="text-sm text-slate-500">Providence</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/providence"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Explore Providence →
              </Link>
              <a
                href={providenceCommunity.hoaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-800 font-medium"
              >
                Providence HOA
              </a>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection subtitle="Real testimonials from satisfied Providence homeowners" />
        <FAQSection
          title="Providence Las Vegas Real Estate FAQs"
          subtitle="Questions about Providence services, neighborhoods, buying, and selling"
          faqs={homeFAQs}
        />

        <RelatedPages
          title="Explore Providence Las Vegas"
          pages={getRelatedPages("home")}
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Providence Real Estate
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Homes for sale in Providence Las Vegas and North Las Vegas. Call (702) 744-2993.
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
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Providence Real Estate | (702) 744-2993 | 7181 N Hualapai Way #135, Las Vegas, NV 89166
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
          Last Updated: January 2026 | Providence Real Estate | Providence, North Las Vegas
        </div>
      </main>
      <Footer />
    </>
  );
}
