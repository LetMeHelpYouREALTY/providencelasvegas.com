import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import RelatedPages from "@/components/navigation/RelatedPages";
import dynamic from "next/dynamic";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { getRelatedPages } from "@/lib/related-pages";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";
import SectionMedia from "@/components/media/SectionMedia";

const AmenityMap = dynamic(
  () => import("@/components/location/AmenityMap").then((m) => ({ default: m.default })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl overflow-hidden bg-slate-100 h-[500px] flex items-center justify-center">
        <p className="text-slate-600">Loading map...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Nearby Amenities | Providence Las Vegas Area Map",
  description:
    "Explore restaurants, parks, parking, grocery stores, schools, and more near Providence Las Vegas. Use our amenity map to discover what's nearby in the 89166 area.",
  alternates: { canonical: "https://www.providencelasvegas.com/amenities" },
  keywords: [
    "Providence Las Vegas amenities",
    "nearby restaurants Providence",
    "parks near Providence",
    "shopping near Providence 89166",
    "Providence area map",
  ],
  ...pageImageMetadata("hero-amenities"),
};

export default function AmenitiesPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Providence Las Vegas" }, { label: "Nearby Amenities" }]} />
      <main>
        <PageHero
          compact
          imageKey="hero-amenities"
          title="Nearby Amenities in Providence Las Vegas"
          subtitle="Explore restaurants, parks, grocery stores, and daily conveniences near Providence, NV 89166. Use the map to see what's nearby."
        />
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <AmenityMap defaultType="restaurant" />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionMedia
              imageKey="section-parks"
              heading="Providence Las Vegas Lifestyle"
            />
            <p className="text-slate-700 max-w-3xl mb-6">
              Providence is a master-planned community with easy access to dining, recreation,
              shopping, and services. The community offers three parks—The Promenade,
              Knickerbocker Park, and Huckleberry Park—plus proximity to grocery stores, schools,
              and everyday conveniences. Whether you&apos;re buying or selling in Providence, understanding
              local amenities helps you make informed decisions.
            </p>
            <p className="text-slate-700 max-w-3xl">
              Questions about Providence neighborhoods or amenities?{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact Dr. Jan Duffy
              </Link>{" "}
              for expert guidance on Providence Las Vegas real estate.
            </p>
          </div>
        </section>

        <RelatedPages
          title="You May Also Be Interested In"
          pages={getRelatedPages("amenities")}
        />

        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <SectionMedia
              imageKey="section-ready-home"
              heading="Explore Providence Real Estate"
              invert
            />
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
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Contact Dr. Jan Duffy
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
