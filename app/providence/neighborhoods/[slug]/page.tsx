import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import RelatedPages from "@/components/navigation/RelatedPages";
import Link from "next/link";
import { getRelatedPages } from "@/lib/related-pages";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import { providenceNeighborhoods, providenceCommunity, marketStats } from "@/lib/site-config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import { neighborhoodImageKey, ogImageFor } from "@/lib/images";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return providenceNeighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = providenceNeighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) return { title: "Providence Las Vegas" };
  const canonical = `${siteConfig.url}/providence/neighborhoods/${slug}`;
  return {
    title: `${neighborhood.name} | Providence Las Vegas | Dr. Jan Duffy, REALTOR®`,
    description: `Homes for sale in ${neighborhood.name}, Providence Las Vegas. Providence Real Estate serves Providence and North Las Vegas. Call (702) 744-2993.`,
    keywords: [
      `${neighborhood.name} Providence`,
      `${neighborhood.name} Las Vegas real estate`,
      "Providence Las Vegas homes",
    ],
    alternates: { canonical },
    openGraph: {
      images: [ogImageFor(neighborhoodImageKey(slug))],
    },
  };
}

export default async function ProvidenceNeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = providenceNeighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Providence", url: "/providence" },
    { name: neighborhood.name, url: `/providence/neighborhoods/${slug}` },
  ]);
  const providenceFaqs = getFAQsForPage("providenceNeighborhood", {
    neighborhoodName: neighborhood.name,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FAQSchema faqs={providenceFaqs} />
      <Navbar />
      <main>
        <PageHero
          compact
          imageKey={neighborhoodImageKey(slug)}
          imageAlt={`${neighborhood.name} homes in Providence Las Vegas, NV 89166`}
          title={`${neighborhood.name}, Providence Las Vegas`}
          subtitle={`${neighborhood.name} is one of ${providenceCommunity.neighborhoodCount} neighborhoods in Providence Las Vegas, a master-planned community with more than ${providenceCommunity.homeCount} homes, three community parks, and HOA-maintained streetscapes.`}
        />
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600 mb-4">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              {" / "}
              <Link href="/providence" className="hover:text-blue-600">
                Providence
              </Link>
              {" / "}
              <span className="text-slate-900">{neighborhood.name}</span>
            </nav>
            <p className="text-lg text-slate-700 max-w-3xl mb-4">
              Explore{" "}
              <Link href="/amenities" className="text-blue-600 hover:text-blue-700 font-medium">
                nearby restaurants, parks, and shopping
              </Link>{" "}
              or{" "}
              <Link href="/directions" className="text-blue-600 hover:text-blue-700 font-medium">
                get directions
              </Link>{" "}
              to our office. Buying or selling in {neighborhood.name} means access to Providence&apos;s three community parks, strong HOA,
              and well-maintained streetscapes. Dr. Jan Duffy at Berkshire Hathaway HomeServices
              Nevada Properties specializes in Providence Las Vegas real estate and can{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                guide you
              </Link>{" "}
              through {neighborhood.name} and every Providence neighborhood.
            </p>
            <p className="text-slate-700 max-w-3xl">
              Providence Las Vegas homes for sale in {neighborhood.name} are listed on the MLS
              and through this site. For HOA resale information, Design Review, or community
              documents for {neighborhood.name}, see our{" "}
              <Link href="/providence/hoa-info" className="text-blue-600 hover:text-blue-700 font-medium">
                Providence HOA information
              </Link>{" "}
              and the Providence Master HOA website. HOA assessments for Providence are due {providenceCommunity.hoaAssessmentDueDates}{" "}
              of each year.
            </p>

            {/* Market snapshot - data-rich for AI parsing */}
            <section className="mt-6 max-w-3xl" aria-label="Market snapshot">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Providence & Las Vegas Market Snapshot</h2>
              <p className="text-slate-700 text-sm mb-2">
                {neighborhood.name} is one of {providenceCommunity.neighborhoodCount} Providence neighborhoods; Providence has {providenceCommunity.homeCount} homes and {providenceCommunity.parks.length} community parks. Southern Nevada median sold ({marketStats.lastUpdated}): {marketStats.lasVegas.medianPriceFormatted}. ZIP 89166 median list: {marketStats.zip89166.medianListPriceFormatted}; {marketStats.zip89166.daysOnMarket} days on market (list).
              </p>
              <ul className="text-slate-700 text-sm list-disc list-inside space-y-1">
                <li>Providence HOA due: {providenceCommunity.hoaAssessmentDueDates}</li>
                <li>Parks: {providenceCommunity.parks.map((p) => p.name).join(", ")}</li>
              </ul>
            </section>
          </div>
        </section>

        <RealScoutListings />

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Community Parks Near {neighborhood.name}, Providence Las Vegas
            </h2>
            <p className="text-slate-700 mb-4">
              All Providence Las Vegas residents, including {neighborhood.name}, have access to
              three community parks:
            </p>
            <ul className="space-y-3 text-slate-700">
              {providenceCommunity.parks.map((park) => (
                <li key={park.slug} className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{park.name}</h3>
                    <span className="text-sm">
                      {park.slug === "the-promenade" &&
                        "Linear walking park and community centerpiece with seating, landscaping, and interactive playground."}
                      {park.slug === "knickerbocker-park" &&
                        "Multigenerational park with Las Vegas skyline views, workout stations, ball field, playgrounds, splash pad, and dog parks."}
                      {park.slug === "huckleberry-park" &&
                        "Basketball, tennis, pickleball courts, multi-use fields, playgrounds, splash pad, and dog parks."}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={providenceCommunity.hoaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Providence HOA – Community Info
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              HOA & Resale in {neighborhood.name}, Providence Las Vegas
            </h2>
            <p className="text-slate-700 mb-4">
              For Design Review, Realtors/Resale, and community documents for Providence Las
              Vegas and {neighborhood.name}, visit the official Providence Master HOA website.
              HOA assessments for Providence are due {providenceCommunity.hoaAssessmentDueDates}{" "}
              of each year. Dr. Jan Duffy can help you buy or sell in {neighborhood.name} and
              navigate Providence HOA resale requirements.
            </p>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Design Review & Documents</h3>
            <p className="text-slate-700 mb-4">
              The Providence Master HOA oversees design review for exterior modifications. For
              guidelines and neighborhood-specific information for {neighborhood.name}, see the
              Providence HOA site or your Sub Association.
            </p>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">New Homeowners in Providence Las Vegas</h3>
            <p className="text-slate-700 mb-4">
              New homeowners in {neighborhood.name} and other Providence Las Vegas neighborhoods
              can find New Homeowner Info and Community Contacts on the official Providence HOA
              website.
            </p>
            <a
              href={providenceCommunity.neighborhoodsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              The Neighborhoods of Providence (HOA)
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        <FAQSection
          faqs={providenceFaqs}
          title={`Frequently Asked Questions About ${neighborhood.name}`}
          subtitle={`Common questions about the ${neighborhood.name} neighborhood in Providence Las Vegas`}
        />

        <RelatedPages
          title="Explore Providence Las Vegas"
          pages={getRelatedPages("providenceNeighborhood")}
        />

        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Buy or Sell in {neighborhood.name}
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Dr. Jan Duffy knows Providence and can help you in {neighborhood.name} and every
              neighborhood.
            </p>
            <a
              href="tel:+17027442993"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (702) 744-2993
            </a>
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
