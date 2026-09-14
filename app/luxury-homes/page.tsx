import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import RelatedPages from "@/components/navigation/RelatedPages";
import Link from "next/link";
import { getRelatedPages } from "@/lib/related-pages";
import {
  Phone,
  Star,
  Shield,
  CheckCircle,
  Home,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";

export const metadata: Metadata = {
  title: "Premium Providence Homes | Providence Las Vegas Real Estate",
  description:
    "Discover Providence's finest properties in Oxford Commons, Saratoga Highlands, and premier neighborhoods. Custom upgrades, larger lots, move-in ready homes. Dr. Jan Duffy, BHHS. Call (702) 744-2993.",
  alternates: { canonical: "https://www.providencelasvegas.com/luxury-homes" },
  keywords: [
    "Premium Providence homes",
    "Oxford Commons homes",
    "Saratoga Highlands real estate",
    "Providence luxury homes",
    "Providence Las Vegas premium",
  ],
  ...pageImageMetadata("hero-luxury"),
};

const luxurySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Premium Providence Home Services",
  provider: {
    "@type": "RealEstateAgent",
    name: "Providence Real Estate",
    telephone: "+17027442993",
  },
  areaServed: "Providence, North Las Vegas, NV 89166",
  serviceType: "Real Estate Services",
};

const premiumNeighborhoods = [
  {
    name: "Oxford Commons",
    slug: "oxford-commons",
    description:
      "Providence's premier neighborhood with custom upgrades, larger lots, and move-in ready luxury. A sought-after address within the master-planned community.",
    features: ["Custom upgrades", "Larger lots", "Premium finishes", "Community amenities"],
  },
  {
    name: "Saratoga Highlands",
    slug: "saratoga-highlands",
    description:
      "Upscale Providence living with well-appointed homes and excellent neighborhood character. Popular with discerning buyers.",
    features: ["Upscale homes", "Prime location", "HOA amenities", "Quality construction"],
  },
  {
    name: "Auburn & Bradford",
    slug: "auburn-bradford",
    description:
      "Established Providence neighborhood with mature landscaping and a mix of floor plans. Great value for premium living.",
    features: ["Mature landscaping", "Varied floor plans", "Established community", "Three parks access"],
  },
];

export default function LuxuryHomesPage() {
  const luxuryFAQs = getFAQsForPage("luxury-homes");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(luxurySchema) }}
      />
      <FAQSchema faqs={luxuryFAQs} />
      <Navbar />
      <main className="pb-16">
        <PageHero
          imageKey="hero-luxury"
          badge={
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Providence Las Vegas Real Estate
            </div>
          }
          title="Premium Providence Homes"
          subtitle="Discover Providence's finest properties in Oxford Commons, Saratoga Highlands, and other premier neighborhoods. Custom upgrades, larger lots, and move-in ready homes."
        >
          <div className="flex flex-wrap gap-4 text-sm text-white/90">
            <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-1" /> Custom Upgrades</span>
            <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-1" /> Larger Lots</span>
            <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-1" /> Move-In Ready</span>
          </div>
        </PageHero>
        <div className="container mx-auto px-4 pt-12">

          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Premier Providence Neighborhoods
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Providence Las Vegas offers premium homes across its 27 neighborhoods. Oxford Commons, 
              Saratoga Highlands, and Auburn & Bradford are among the most sought-after for 
              discerning buyers seeking quality and value.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {premiumNeighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/providence/neighborhoods/${neighborhood.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-600">
                    {neighborhood.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.features.map((feature) => (
                      <span key={feature} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center mt-4 text-blue-600 font-semibold group-hover:text-blue-700">
                    Explore {neighborhood.name} <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/providence"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                View All 27 Providence Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Why Choose Berkshire Hathaway for Providence
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Trusted Brand", desc: "Berkshire Hathaway HomeServices brings reputation and resources to your Providence transaction." },
                { icon: Star, title: "Local Expertise", desc: "Dr. Jan Duffy knows every Providence neighborhood and HOA requirement inside and out." },
                { icon: Home, title: "White Glove Service", desc: "Personalized attention from first showing to closing for your Providence home." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                &quot;Providence offers exceptional value for buyers seeking premium living at accessible 
                prices. Oxford Commons and Saratoga Highlands attract discerning buyers who want 
                custom upgrades and move-in ready luxury. I&apos;ve helped hundreds of families find their 
                perfect Providence home—every transaction receives my full attention and the 
                complete resources of Berkshire Hathaway HomeServices.&quot;
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties | Serving Providence Las Vegas Since 2008
              </cite>
            </div>
          </section>

          <RelatedPages
            title="You May Also Be Interested In"
            pages={getRelatedPages("luxuryHomes")}
          />

          <FAQSection
            faqs={luxuryFAQs}
            title="Providence Premium Homes FAQs"
            subtitle="Common questions about buying or selling premium homes in Providence Las Vegas"
          />

          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Premium Providence Living
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether buying or selling a premium Providence home, Dr. Jan Duffy provides 
              the expertise and Berkshire Hathaway prestige your transaction deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027442993"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 744-2993
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-4 text-slate-400 text-sm">
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
