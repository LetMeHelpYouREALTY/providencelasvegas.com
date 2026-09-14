import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import RelatedPages from "@/components/navigation/RelatedPages";
import Link from "next/link";
import { getRelatedPages } from "@/lib/related-pages";
import {
  Phone,
  Sun,
  Home as HomeIcon,
  MapPin,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { realscoutUrls } from "@/lib/site-config";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";

export const metadata: Metadata = {
  title: "Active Adult Living Near Providence | Age-Restricted Options",
  description:
    "Providence has no dedicated 55+ communities. Nearby options include Sun City Aliante (5 mi north) and Del Webb properties. Providence single-story, low-maintenance homes for downsizers. Dr. Jan Duffy. Call (702) 744-2993.",
  alternates: { canonical: "https://www.providencelasvegas.com/55-plus-communities" },
  keywords: [
    "55+ near Providence Las Vegas",
    "active adult living near Providence",
    "Sun City Aliante",
    "Providence single-story homes",
    "downsizing Providence Las Vegas",
  ],
  ...pageImageMetadata("hero-55-plus"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Providence Real Estate",
  description:
    "Providence Las Vegas real estate expert. Helps downsizers and active adults find single-story and low-maintenance homes in Providence and nearby 55+ options.",
  telephone: "(702) 744-2993",
  url: "https://www.providencelasvegas.com/55-plus-communities",
  areaServed: "Providence, North Las Vegas, NV 89166",
  knowsAbout: [
    "Providence Las Vegas real estate",
    "Single-story homes Providence",
    "Age-restricted options near Providence",
    "Sun City Aliante",
    "Del Webb communities",
  ],
};

export default function FiftyFiveCommunitiesPage() {
  const fiftyPlusFAQs = getFAQsForPage("fiftyPlusCommunities");

  return (
    <>
      <FAQSchema faqs={fiftyPlusFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <PageHero
          imageKey="hero-55-plus"
          title="Age-Restricted Options Near Providence"
        />

      <main className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              {" / "}
              <span className="text-slate-900">55+ Options Near Providence</span>
            </nav>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun className="h-4 w-4 mr-2" />
              Active Adult Living Near Providence
            </div>
            <p className="text-xl text-slate-600 mb-8">
              While Providence itself doesn&apos;t have dedicated 55+ communities, nearby options include 
              Sun City Aliante (5 miles north) and Del Webb properties. For Providence single-story, 
              low-maintenance homes perfect for downsizers—explore below.
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
                href={realscoutUrls.search55Plus}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Nearby 55+ Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Sun City Aliante</h3>
                <p className="text-slate-500 text-sm mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  North Las Vegas (approx. 5 miles north of Providence)
                </p>
                <p className="text-slate-600 mb-4">
                  The most affordable Sun City in Las Vegas with 18-hole championship golf, 
                  fitness center, pools, and tennis. Contact Dr. Jan Duffy for details.
                </p>
                <a href="tel:+17027442993" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call for Sun City Aliante Info →
                </a>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Del Webb Properties</h3>
                <p className="text-slate-500 text-sm mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Various Las Vegas Valley locations
                </p>
                <p className="text-slate-600 mb-4">
                  Del Webb offers resort-style 55+ communities throughout the Las Vegas area. 
                  Contact Dr. Jan Duffy for community details and availability.
                </p>
                <a href="tel:+17027442993" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call for Del Webb Info →
                </a>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-blue-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Providence Single-Story & Low-Maintenance Homes
            </h2>
            <p className="text-slate-700 text-center mb-6 max-w-2xl mx-auto">
              Many Providence neighborhoods offer single-story floor plans and newer construction 
              with low-maintenance living—ideal for downsizers who want to stay in Providence.
            </p>
            <div className="text-center">
              <a
                href={realscoutUrls.search55Plus}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                Search Providence Homes
                <HomeIcon className="h-5 w-5 ml-2" />
              </a>
            </div>
          </section>

          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Why Providence Works for Downsizers
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Single-story floor plans available in many neighborhoods</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">HOA handles exterior maintenance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Three community parks for walking and recreation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Zero Nevada state income tax</span>
              </li>
            </ul>
          </section>

          <RelatedPages
            title="You May Also Be Interested In"
            pages={getRelatedPages("fiftyPlusCommunities")}
          />

          <FAQSection
            faqs={fiftyPlusFAQs}
            title="55+ and Downsizing FAQs"
            subtitle="Common questions about age-restricted options and downsizing in the Providence area"
          />

          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Your Options
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for personalized guidance on Providence single-story homes 
              or nearby 55+ communities.
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
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <Footer />
    </>
  );
}
