import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import RelatedPages from "@/components/navigation/RelatedPages";
import AmenityMapClient from "@/components/location/AmenityMapClient";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import SchemaScript from "@/components/SchemaScript";
import { BreadcrumbSchema } from "@/components/SchemaScript";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { getRelatedPages } from "@/lib/related-pages";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";
import SectionMedia from "@/components/media/SectionMedia";
import { getFAQsForPage } from "@/lib/faq-library";
import { agentInfo, officeInfo } from "@/lib/site-config";
import { providenceMapCenter } from "@/lib/amenities-config";
import {
  combineSchemas,
  generateAmenitiesAgentAreaServedSchema,
  generateCuratedAmenitiesItemListSchema,
  generateProvidenceCommunityPlaceSchema,
} from "@/lib/schema";

const pageTitle = "Nearby Amenities in Providence Las Vegas";
const pageDescription =
  "Interactive map of restaurants, parks, grocery, healthcare, schools, and shopping near Providence Las Vegas (89166). Hyperlocal guide from Dr. Jan Duffy, BHHS Nevada Properties.";

const amenitiesOg = pageImageMetadata("hero-amenities");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://www.providencelasvegas.com/amenities" },
  keywords: [
    "Providence Las Vegas amenities",
    "nearby restaurants Providence",
    "parks near Providence",
    "shopping near Providence 89166",
    "Providence area map",
    "grocery near Providence Las Vegas",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.providencelasvegas.com/amenities",
    type: "website",
    images: amenitiesOg.openGraph.images,
  },
  twitter: amenitiesOg.twitter,
};

const amenitiesStructuredData = combineSchemas(
  generateProvidenceCommunityPlaceSchema(),
  generateCuratedAmenitiesItemListSchema(),
  generateAmenitiesAgentAreaServedSchema()
);

export default function AmenitiesPage() {
  const amenitiesFAQs = getFAQsForPage("amenities");

  return (
    <>
      <SchemaScript schema={amenitiesStructuredData} id="amenities-structured-data" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Nearby Amenities", url: "/amenities" },
        ]}
      />
      <FAQSchema faqs={amenitiesFAQs} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Providence Las Vegas" }, { label: "Nearby Amenities" }]} />
      <main>
        <PageHero
          compact
          imageKey="hero-amenities"
          title="Nearby Amenities in Providence, Las Vegas"
          subtitle="Explore dining, parks, grocery, healthcare, schools, and shopping around the Providence master-planned community in northwest Las Vegas (89166)."
        />

        <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-slate-50" aria-labelledby="amenity-map-heading">
          <div className="container mx-auto px-4">
            <h2 id="amenity-map-heading" className="sr-only">
              Interactive amenity map
            </h2>
            <AmenityMapClient defaultCategory="restaurants" />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
            <SectionMedia imageKey="section-parks" heading="Dining & Cafes" />
            <p className="text-slate-700">
              Providence residents rely on the N Hualapai Way retail corridor for everyday dining and
              coffee, with additional options in Centennial Hills and Skye Canyon a short drive north.
              Use the map filters for <strong>Restaurants</strong> and <strong>Cafes</strong> to see
              what is open near your Providence neighborhood today.
            </p>

            <SectionMedia imageKey="section-parks" heading="Parks & Recreation" as="h2" />
            <p className="text-slate-700">
              Every Providence homeowner enjoys three Master HOA parks:{" "}
              <strong>The Promenade</strong> (linear walking park and playground),{" "}
              <strong>Knickerbocker Park</strong> (ball fields, splash pad, skyline views, dog parks), and{" "}
              <strong>Huckleberry Park</strong> (basketball, tennis, pickleball, playgrounds, and dog
              parks). These are the anchors of outdoor life inside Providence Las Vegas.
            </p>

            <SectionMedia imageKey="section-neighborhoods" heading="Golf" as="h2" />
            <p className="text-slate-700">
              <strong>Painted Desert Golf Club</strong> on Painted Mirage Drive is a well-known public
              course in the northwest valley, a convenient option for Providence golfers who want a
              full round without crossing town.
            </p>

            <SectionMedia imageKey="section-services" heading="Healthcare & Pharmacies" as="h2" />
            <p className="text-slate-700">
              <strong>Centennial Hills Hospital</strong> at 6900 N Durango Dr provides hospital care for
              northwest Las Vegas. Pharmacies and urgent-care options cluster along Durango and Hualapai;
              filter the map for <strong>Healthcare</strong> and <strong>Pharmacies</strong> for current
              nearby locations.
            </p>

            <SectionMedia imageKey="section-services" heading="Grocery & Shopping" as="h2" />
            <p className="text-slate-700">
              <strong>Albertsons</strong> at 6730 N Hualapai Way is the flagship grocery for many
              Providence households. Larger warehouse and big-box runs often head to Centennial Hills or
              Skye Canyon shopping centers north of the community.
            </p>

            <SectionMedia imageKey="section-neighborhoods" heading="Schools" as="h2" />
            <p className="text-slate-700">
              Clark County School District serves Providence with on-community schools including{" "}
              <strong>Bill &amp; Lillie Heinrich Elementary</strong> (7250 Gilman St) and{" "}
              <strong>Irwin &amp; Susan Molasky Junior High</strong> (7801 Gilman St). Always confirm
              attendance zones with CCSD for your specific address.
            </p>

            <SectionMedia imageKey="section-market-stats" heading="Commute & Regional Access" as="h2" />
            <p className="text-slate-700">
              Providence sits in northwest Las Vegas with access to US-95 and the 215 Beltway. Approximate
              drive times (traffic-dependent): <strong>Las Vegas Strip</strong> about 25–35 minutes;{" "}
              <strong>Harry Reid International Airport</strong> about 30–40 minutes;{" "}
              <strong>Downtown Summerlin</strong> about 20–30 minutes via the 215. Mount Charleston and
              the Spring Mountains are reachable north on US-95 for hiking and cooler weekend escapes.
            </p>
            <p className="text-slate-600 text-sm">
              {providenceMapCenter.centerNote} Map center: {providenceMapCenter.lat},{" "}
              {providenceMapCenter.lng}.
            </p>
          </div>
        </section>

        <FAQSection
          title="Providence Amenities FAQs"
          subtitle="Quick answers for buyers comparing Providence Las Vegas"
          faqs={amenitiesFAQs}
        />

        <RelatedPages title="You May Also Be Interested In" pages={getRelatedPages("amenities")} />

        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <SectionMedia imageKey="section-ready-home" heading="Your Providence Local Expert" invert />
            <p className="text-blue-100 mb-6">
              Dr. Jan Duffy knows all 27 Providence neighborhoods, HOA resale steps, and which amenities
              matter for your lifestyle. Call for tours, market updates, or listing guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={officeInfo.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {officeInfo.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                <MapPin className="h-5 w-5" aria-hidden />
                Contact Dr. Jan Duffy
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">
              Dr. Jan Duffy | License {agentInfo.license} | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
            <p className="mt-2 text-blue-200 text-sm">{officeInfo.address.full}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
