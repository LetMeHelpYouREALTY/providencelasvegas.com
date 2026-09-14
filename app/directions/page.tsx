import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import RelatedPages from "@/components/navigation/RelatedPages";
import dynamic from "next/dynamic";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { getRelatedPages } from "@/lib/related-pages";
import { officeInfo, gbpUrls } from "@/lib/site-config";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";
import SectionMedia from "@/components/media/SectionMedia";

const DirectionsMap = dynamic(
  () =>
    import("@/components/location/DirectionsMap").then((m) => ({ default: m.default })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl overflow-hidden bg-slate-100 h-[500px] flex items-center justify-center">
        <p className="text-slate-600">Loading directions...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Directions | Plan Your Visit | Providence Real Estate Las Vegas",
  description:
    "Get directions to Providence Real Estate office at 7181 N Hualapai Way #135, Las Vegas, NV 89166. View driving, walking, transit, and bicycling routes with estimated travel time.",
  alternates: { canonical: "https://www.providencelasvegas.com/directions" },
  keywords: [
    "directions to Providence Real Estate",
    "Providence Las Vegas office",
    "7181 N Hualapai Way",
    "plan visit Providence real estate",
  ],
  ...pageImageMetadata("hero-directions"),
};

export default function DirectionsPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Providence Las Vegas", href: "/providence" },
          { label: "Directions" },
        ]}
      />
      <main>
        <PageHero
          compact
          imageKey="hero-directions"
          title="Directions to Providence Real Estate"
          subtitle="Plan your visit to 7181 N Hualapai Way #135, Las Vegas, NV 89166. Enter a starting address for driving, walking, transit, or bicycling routes."
        />
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <DirectionsMap />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionMedia
              imageKey="section-office"
              heading="Office Location & Hours"
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Address
                </h3>
                <address className="not-italic text-slate-700">
                  Providence Real Estate
                  <br />
                  {officeInfo.address.street}
                  <br />
                  {officeInfo.address.city}, {officeInfo.address.state} {officeInfo.address.zip}
                </address>
                <a
                  href={`https://www.google.com/maps/dir//${encodeURIComponent(officeInfo.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Office Hours
                </h3>
                <p className="text-slate-700">
                  Monday – Friday: 9:00 AM – 6:00 PM
                  <br />
                  Saturday: 10:00 AM – 4:00 PM
                  <br />
                  Sunday: By Appointment
                </p>
                <a
                  href="tel:+17027442993"
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  (702) 744-2993
                </a>
              </div>
            </div>
          </div>
        </section>

        <RelatedPages
          title="You May Also Be Interested In"
          pages={getRelatedPages("directions")}
        />

        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Visit?
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Schedule an appointment before you come, or give us a call when you&apos;re on your way.
            </p>
            <p className="text-blue-200 text-sm mb-6 max-w-xl mx-auto">
              After your visit, help others find us—leave a Google review.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
              >
                Schedule Appointment
              </Link>
              <a
                href="tel:+17027442993"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (702) 744-2993
              </a>
              <a
                href={gbpUrls.review}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                <Star className="h-5 w-5" />
                Leave us a review
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
