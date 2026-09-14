import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import RelatedPages from "@/components/navigation/RelatedPages";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import InlineLink from "@/components/content/InlineLink";
import ExternalResources from "@/components/content/ExternalResources";
import Link from "next/link";
import { getFAQsForPage } from "@/lib/faq-library";
import type { Metadata } from "next";
import { Phone, ExternalLink, MapPin } from "lucide-react";
import { providenceCommunity, providenceNeighborhoods, marketStats } from "@/lib/site-config";
import { getRelatedPages } from "@/lib/related-pages";
import { getExternalResources } from "@/lib/external-resources";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";
import NeighborhoodCard from "@/components/neighborhoods/NeighborhoodCard";
import SectionMedia from "@/components/media/SectionMedia";

export const metadata: Metadata = {
  title: "Providence Las Vegas Community | Dr. Jan Duffy, REALTOR®",
  description:
    "Providence is a master-planned community in Las Vegas with 27 neighborhoods and 5,600+ homes. Community parks, HOA info, and real estate with Dr. Jan Duffy, BHHS Nevada Properties.",
  alternates: { canonical: "https://www.providencelasvegas.com/providence" },
  keywords: [
    "Providence Las Vegas",
    "Providence community",
    "Providence neighborhoods",
    "Providence HOA",
    "homes for sale Providence Las Vegas",
  ],
  ...pageImageMetadata("hero-providence-community"),
};

export default function ProvidencePage() {
  const providenceFAQs = getFAQsForPage("providence");

  return (
    <>
      <FAQSchema faqs={providenceFAQs} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Providence Las Vegas" }]} />
      <main>
        <PageHero
          compact
          imageKey="hero-providence-community"
          title="Providence, Las Vegas"
          subtitle={`Providence is a master-planned community in the northwest Las Vegas Valley with ${providenceCommunity.neighborhoodCount} neighborhoods and more than ${providenceCommunity.homeCount} homes. Three community parks—The Promenade, Knickerbocker Park, and Huckleberry Park—plus a master HOA.`}
        />
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <p className="text-slate-700 max-w-3xl">
              Whether you are{" "}
              <InlineLink href="/buyers">buying</InlineLink> or{" "}
              <InlineLink href="/sellers">selling</InlineLink> a home in Providence Las Vegas,
              <InlineLink href="/listings">browse current listings</InlineLink> or explore from{" "}
              <InlineLink href="/providence/neighborhoods/oxford-commons">Oxford Commons</InlineLink> to{" "}
              <InlineLink href="/providence/neighborhoods/saratoga-highlands">Saratoga Highlands</InlineLink> to{" "}
              <InlineLink href="/providence/neighborhoods/auburn-bradford">Auburn & Bradford</InlineLink> and all 27
              neighborhoods. <InlineLink href="/about">Dr. Jan Duffy</InlineLink> offers hyperlocal
              expertise and HOA resale guidance for Providence Las Vegas.
            </p>

            {/* Providence at a glance - data-rich block for AI parsing */}
            <section className="mt-8 max-w-3xl" aria-label="Providence at a glance">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Providence at a Glance</h2>
              <p className="text-slate-700 mb-3 text-sm">
                Quick facts about Providence Las Vegas. Southern Nevada median sold ({marketStats.lastUpdated}): {marketStats.lasVegas.medianPriceFormatted} ({marketStats.lasVegas.yearOverYearChange} YoY). ZIP 89166 median list: {marketStats.zip89166.medianListPriceFormatted}; {marketStats.zip89166.daysOnMarket} days on market (list).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-lg">
                  <tbody>
                    <tr className="border-b border-slate-200"><td className="px-3 py-2 font-medium text-slate-900">Neighborhoods</td><td className="px-3 py-2">{providenceCommunity.neighborhoodCount}</td></tr>
                    <tr className="border-b border-slate-200"><td className="px-3 py-2 font-medium text-slate-900">Homes</td><td className="px-3 py-2">{providenceCommunity.homeCount}</td></tr>
                    <tr className="border-b border-slate-200"><td className="px-3 py-2 font-medium text-slate-900">Community parks</td><td className="px-3 py-2">{providenceCommunity.parks.length}</td></tr>
                    <tr><td className="px-3 py-2 font-medium text-slate-900">HOA assessments due</td><td className="px-3 py-2">{providenceCommunity.hoaAssessmentDueDates}</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>

        <RealScoutListings />

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Community Parks in Providence Las Vegas
            </h2>
            <p className="text-slate-700 mb-6 max-w-2xl">
              All Providence Las Vegas residents have access to three community parks. Each park
              offers amenities for families, fitness, and outdoor recreation in Providence.
            </p>
            <ul className="space-y-4 text-slate-700">
              {providenceCommunity.parks.map((park) => (
                <li key={park.slug} className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{park.name}</h3>
                    <span className="text-sm">
                      {park.slug === "the-promenade" &&
                        "Linear walking park and community centerpiece with seating, landscaping, and interactive playground."}
                      {park.slug === "knickerbocker-park" &&
                        "Multigenerational park with Las Vegas skyline views, workout stations, baseball field, playgrounds, splash pad, and dog parks."}
                      {park.slug === "huckleberry-park" &&
                        "Basketball, tennis, pickleball courts, multi-use fields, two playgrounds, splash pad, and large and small dog parks."}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={providenceCommunity.hoaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-blue-700 font-medium"
            >
              Community park info – Providence HOA
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="mt-4">
              <InlineLink href="/amenities">
                View our amenity map
              </InlineLink>{" "}
              to explore restaurants, parks, shopping, and more nearby Providence Las Vegas.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <SectionMedia
              imageKey="section-neighborhoods"
              heading="The 27 Neighborhoods of Providence Las Vegas"
              subtitle="Each neighborhood has its own streetscape. All share Knickerbocker Park, Huckleberry Park, and The Promenade."
            />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Explore Each Providence Las Vegas Neighborhood</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {providenceNeighborhoods.map((n) => (
                <NeighborhoodCard key={n.slug} slug={n.slug} name={n.name} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              For Buyers & Sellers in Providence Las Vegas
            </h2>
            <p className="text-slate-700 mb-8 max-w-2xl">
              Whether you are{" "}
              <InlineLink href="/buyers">buying</InlineLink> or{" "}
              <InlineLink href="/sellers">selling</InlineLink> a home in Providence Las Vegas,{" "}
              <InlineLink href="/about">Dr. Jan Duffy</InlineLink> knows the 27 neighborhoods,
              HOA resale process, and Design Review. Providence Las Vegas real estate is served
              by <InlineLink href="/why-berkshire-hathaway">Berkshire Hathaway HomeServices Nevada Properties</InlineLink>.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Resale in Providence Las Vegas</h3>
            <p className="text-slate-700 mb-6 max-w-2xl">
              <InlineLink href="/about">Dr. Jan Duffy</InlineLink> can help you{" "}
              <InlineLink href="/buyers">buy</InlineLink> or{" "}
              <InlineLink href="/sellers">sell</InlineLink> in any Providence neighborhood. 
              For downsizers, see{" "}
              <InlineLink href="/55-plus-communities">55+ options near Providence</InlineLink>.
              Familiar with Providence Master HOA resale requirements and Design Review so your 
              Providence Las Vegas transaction stays on track.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">HOA Assessments for Providence</h3>
            <p className="text-slate-700 mb-6 max-w-2xl">
              Providence Master HOA assessments are due {providenceCommunity.hoaAssessmentDueDates}{" "}
              of each year. The HOA oversees community standards and Design Review for
              modifications. New homeowners can find New Homeowner Info and Community Contacts on
              the official Providence HOA site. For current{" "}
              <InlineLink href="/market-report">market statistics</InlineLink> and{" "}
              <InlineLink href="/market-insights">market insights</InlineLink>, visit our market pages.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Design Review & Documents</h3>
            <p className="text-slate-700 mb-6 max-w-2xl">
              The Providence Master HOA oversees design review for exterior changes. For
              guidelines, Realtors/Resale info, and community documents, visit{" "}
              <InlineLink href="/providence/hoa-info">our Providence HOA information page</InlineLink> or the
              official Providence HOA website. Have questions?{" "}
              <InlineLink href="/contact">Contact Dr. Jan Duffy</InlineLink> for expert guidance.
            </p>
            <ul className="space-y-2 text-slate-700 max-w-2xl list-disc list-inside">
              <li>Providence Las Vegas HOA assessments: {providenceCommunity.hoaAssessmentDueDates}</li>
              <li>Design Review and Realtors/Resale: Providence HOA</li>
              <li>New Homeowner Info and Community Contacts: Providence HOA</li>
            </ul>
            <a
              href={providenceCommunity.hoaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-blue-700 font-medium"
            >
              Providence HOA – Design Review, Documents, Payment Info
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* External Authority Resources for E-E-A-T */}
        <ExternalResources
          title="Official Providence & Las Vegas Resources"
          resources={getExternalResources("providenceResources")}
        />

        {/* FAQ Section */}
        <FAQSection
          faqs={providenceFAQs}
          title="Frequently Asked Questions About Providence Las Vegas"
          subtitle="Common questions about the Providence community, HOA, and real estate"
        />

        {/* Related Pages for Internal Linking */}
        <RelatedPages
          title="You May Also Be Interested In"
          pages={getRelatedPages("providence")}
        />

        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Buy or Sell in Providence?
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Dr. Jan Duffy knows Providence and can guide you through buying or selling in any of
              the 27 neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027442993"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (702) 744-2993
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
