import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Sun,
  Home as HomeIcon,
  CheckCircle,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";
import { realscoutUrls } from "@/lib/site-config";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import SectionMedia from "@/components/media/SectionMedia";
import { pageImageMetadata } from "@/lib/images";

export const metadata: Metadata = {
  title: "California to Providence, Las Vegas | Relocate to Providence",
  description:
    "Why California buyers love Providence Las Vegas: master-planned community, 27 neighborhoods, $300K–$700K price range vs $1M+ in CA. Dr. Jan Duffy helps CA relocators find their Providence home. Call (702) 744-2993.",
  keywords: [
    "California to Providence Las Vegas",
    "moving from California to Providence",
    "California relocator Providence",
    "Providence master-planned community",
    "Providence homes California buyers",
  ],
  ...pageImageMetadata("hero-california-relocator"),
};

const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Providence Real Estate",
  telephone: "+17027442993",
  url: "https://www.providencelasvegas.com/buyers/california-relocator",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7181 N Hualapai Way #135",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
  },
  areaServed: "Providence, North Las Vegas, NV 89166",
  priceRange: "$300,000 - $700,000",
};

export default function CaliforniaRelocatorPage() {
  const californiaRelocatorFAQs = getFAQsForPage("buyers/california-relocator");

  return (
    <>
      <FAQSchema faqs={californiaRelocatorFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <Navbar />
      <main className="pb-16">
      <PageHero
          imageKey="hero-california-relocator"
          title="California to Providence, Las Vegas"
          subtitle="Master-planned streets, 27 neighborhoods, and $300K–$700K pricing versus $1M+ in many California markets."
        />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/buyers" className="hover:text-blue-600">Buyers</Link>
              {" / "}
              <span className="text-slate-900">California to Providence</span>
            </nav>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun className="h-4 w-4 mr-2" />
              California Buyers Love Providence
            </div>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Why California buyers choose Providence: master-planned community feel, 27 neighborhoods, 
              $300K–$700K price range (vs $1M+ in CA), modern construction, and low maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027442993"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 744-2993
              </a>
              <a
                href={realscoutUrls.searchRelated}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-slate-100 text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-200 transition-colors"
              >
                Search Providence Homes
              </a>
            </div>
          </div>

          <RealScoutListings />

          <section className="mb-16 max-w-5xl mx-auto">
            <SectionMedia
              imageKey="section-california-move"
              heading="Why California Buyers Love Providence"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="font-bold text-lg text-slate-900">Master-Planned Community Feel</h3>
                </div>
                <p className="text-slate-600">
                  Providence offers the same master-planned lifestyle Californians expect—parks, trails, 
                  community amenities—at a fraction of the cost. 27 neighborhoods to choose from.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg text-slate-900">$300K–$700K Price Range</h3>
                </div>
                <p className="text-slate-600">
                  Providence homes typically sell for $300K–$700K—compared to $1M+ for similar 
                  quality in California. Keep six figures in the bank.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="font-bold text-lg text-slate-900">Modern Construction, Low Maintenance</h3>
                </div>
                <p className="text-slate-600">
                  Many Providence homes are newer construction with modern finishes. HOA handles 
                  exterior maintenance so you can enjoy retirement or work remotely.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Sun className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="font-bold text-lg text-slate-900">Easy I-15 Access to California</h3>
                </div>
                <p className="text-slate-600">
                  Providence is minutes from I-15. Direct flights from Las Vegas to LAX, SFO, 
                  and San Diego make it easy to visit family or return for work when needed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <SectionMedia
              imageKey="section-glance"
              heading="Providence at a Glance"
            />
            <ul className="grid md:grid-cols-2 gap-4 text-slate-700 max-w-2xl mx-auto">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                27 neighborhoods
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                Three community parks
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                5,600+ homes
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                Zero Nevada state income tax
              </li>
            </ul>
          </section>

          <FAQSection
            faqs={californiaRelocatorFAQs}
            title="California to Providence FAQs"
            subtitle="Common questions about moving from California to Providence Las Vegas"
          />

          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="section-ready-home"
              heading="Ready to Explore Providence?"
              invert
            />
            <p className="text-xl text-blue-100 mb-8">
              Dr. Jan Duffy helps California relocators find their perfect Providence home. 
              Zero state income tax. More home for your money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027442993"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 744-2993
              </a>
              <a
                href={realscoutUrls.searchRelated}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Search Providence Homes
              </a>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: September 2026</div>
      </main>
      <Footer />
    </>
  );
}
