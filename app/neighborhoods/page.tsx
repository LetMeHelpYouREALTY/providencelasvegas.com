import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { providenceNeighborhoods, providenceCommunity } from "@/lib/site-config";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";
import NeighborhoodCard from "@/components/neighborhoods/NeighborhoodCard";
import SectionMedia from "@/components/media/SectionMedia";

export const metadata: Metadata = {
  title: "All 27 Providence Neighborhoods | Providence Las Vegas Real Estate",
  description:
    "Providence Real Estate serves all 27 Providence Las Vegas neighborhoods. Oxford Commons, Saratoga Highlands, Auburn & Bradford and more. Call (702) 744-2993.",
  alternates: { canonical: "https://www.providencelasvegas.com/neighborhoods" },
  keywords: [
    "Providence neighborhoods",
    "Providence Las Vegas",
    "Oxford Commons",
    "Saratoga Highlands",
    "Providence community",
  ],
  ...pageImageMetadata("hero-providence-community"),
};

export default function NeighborhoodsPage() {
  const neighborhoodsFAQs = getFAQsForPage("neighborhoods");

  return (
    <>
      <FAQSchema faqs={neighborhoodsFAQs} />
      <Navbar />
      <main className="pb-16">
        <PageHero
          imageKey="hero-providence-community"
          badge={
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Providence Real Estate
            </div>
          }
          title="Providence Real Estate | Neighborhoods"
          subtitle={`Providence Real Estate serves Providence Las Vegas—a master-planned community of ${providenceCommunity.neighborhoodCount} neighborhoods and more than ${providenceCommunity.homeCount} homes. Each neighborhood has its own amenities, plus access to Knickerbocker Park, Huckleberry Park, and The Promenade.`}
        />
        <div className="container mx-auto px-4 pt-12">

          {/* Community Parks */}
          <section className="mb-12 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="section-parks"
              heading="Community Parks in Providence Las Vegas"
            />
            <p className="text-slate-600 text-center mb-4">
              All Providence Las Vegas residents have access to three community parks:
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center">
              The Promenade, Knickerbocker Park, and Huckleberry Park
            </h3>
            <p className="text-slate-600 text-center mb-4">
              All Providence residents have access to three community parks:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {providenceCommunity.parks.map((park) => (
                <span
                  key={park.slug}
                  className="inline-flex items-center gap-2 bg-slate-100 rounded-lg px-4 py-2 text-slate-700 font-medium"
                >
                  <MapPin className="h-4 w-4 text-blue-600" />
                  {park.name}
                </span>
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href={providenceCommunity.hoaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Providence HOA – Community Info
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* 27 Neighborhoods Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionMedia
              imageKey="section-neighborhoods"
              heading={`All ${providenceCommunity.neighborhoodCount} Providence Las Vegas Neighborhoods`}
            />
            <h3 className="text-lg font-semibold text-slate-800 mb-6 text-center">
              Explore Each Providence Neighborhood
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {providenceNeighborhoods.map((n) => (
                <NeighborhoodCard key={n.slug} slug={n.slug} name={n.name} />
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
                href={providenceCommunity.neighborhoodsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800 font-medium text-sm"
              >
                The Neighborhoods of Providence (HOA)
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection
            faqs={neighborhoodsFAQs}
            title="Frequently Asked Questions About Providence Neighborhoods"
            subtitle="Common questions about Providence neighborhoods and finding the right community"
          />

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Providence is one of Las Vegas's best master-planned communities. With 27
                neighborhoods, each with its own character and amenities, there's a fit for every
                buyer. I know Providence inside and out—from HOA resale to Design Review—and I'm
                here to help you find the right neighborhood and the right home."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="section-cta"
              heading="Buy or Sell in a Providence Neighborhood?"
              invert
            />
            <p className="text-xl text-blue-100 mb-8">
              Dr. Jan Duffy knows every Providence neighborhood. Call for personalized guidance.
            </p>
            <a
              href="tel:+17027442993"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 744-2993
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8 pb-8">
          Last Updated: September 2026 | Providence Las Vegas
        </div>
      </main>
      <Footer />
    </>
  );
}
