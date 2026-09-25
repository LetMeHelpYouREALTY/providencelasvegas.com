import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  TrendingDown,
  Home as HomeIcon,
  Calendar,
  DollarSign,
  Clock,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import { getFAQsForPage } from "@/lib/faq-library";
import { marketStats } from "@/lib/site-config";
import PageHero from "@/components/media/PageHero";
import SectionMedia from "@/components/media/SectionMedia";
import { pageImageMetadata } from "@/lib/images";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Berkshire Hathaway HomeServices Las Vegas Market Update | September 2026",
  description:
    "Weekly Las Vegas real estate market update from Berkshire Hathaway HomeServices Nevada Properties. Get the latest stats, notable sales, and expert analysis from Dr. Jan Duffy. Call (702) 744-2993.",
  keywords: [
    "Berkshire Hathaway HomeServices Las Vegas market update",
    "Las Vegas real estate market",
    "Las Vegas housing market 2026",
    "Henderson real estate market",
    "Las Vegas home prices",
  ],
  ...pageImageMetadata("hero-market"),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Las Vegas Real Estate Market Update - September 2026",
  description:
    "Market analysis from Berkshire Hathaway HomeServices Nevada Properties covering GLVAR sold medians and ZIP 89166 list prices.",
  datePublished: "2026-09-09",
  dateModified: "2026-09-21",
  author: {
    "@type": "Person",
    name: "Providence Real Estate",
    jobTitle: "REALTOR®",
    worksFor: {
      "@type": "RealEstateAgent",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    url: "https://www.providencelasvegas.com",
  },
};

export default function MarketUpdatePage() {
  const marketUpdateFAQs = getFAQsForPage("market-update");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <FAQSchema faqs={marketUpdateFAQs} />
      <Navbar />
      <main className="pb-16">
      <PageHero
          imageKey="hero-market"
          title="Berkshire Hathaway HomeServices Las Vegas Market Update"
          subtitle="Weekly Providence and valley context. September 2026 figures below; call for a neighborhood CMA."
        />
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-4xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/market-report" className="hover:text-blue-600">Market Report</Link>
              {" / "}
              <span className="text-slate-900">Weekly Update</span>
            </nav>
          </div>

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              {marketStats.lastUpdated} | {marketStats.sourceLabel}
            </div>
            <p className="text-xl text-slate-600">
              Your weekly insider report on Las Vegas Valley real estate from{" "}
              <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>
            </p>
            <div className="flex items-center justify-center mt-6 text-slate-500 text-sm">
              <span>By Dr. Jan Duffy, REALTOR® | BHHS Nevada Properties</span>
            </div>
          </div>

          <RealScoutListings />

          {/* Key Statistics */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionMedia
              imageKey="section-market-stats"
              heading="Sourced Market Snapshot"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{marketStats.lasVegas.medianPriceFormatted}</div>
                <div className="text-sm text-slate-500 mb-2">Southern Nevada median sold</div>
                <div className="flex items-center justify-center text-amber-700 text-sm font-medium">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  {marketStats.lasVegas.yearOverYearChange} YoY
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <HomeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{marketStats.zip89166.medianListPriceFormatted}</div>
                <div className="text-sm text-slate-500 mb-2">89166 median list</div>
                <div className="text-slate-500 text-sm font-medium">Asking price</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{marketStats.zip89166.daysOnMarket}</div>
                <div className="text-sm text-slate-500 mb-2">89166 median list DOM</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{marketStats.zip89166.activeListings.toLocaleString()}</div>
                <div className="text-sm text-slate-500 mb-2">89166 active listings</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">{marketStats.sourceLabel}</p>
          </section>

          {/* Notable Sale */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="section-recently-sold"
              heading="What the Numbers Mean in 89166"
            />
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8">
              <p className="text-slate-300">
                Southern Nevada&apos;s August 2026 sold median is {marketStats.lasVegas.medianPriceFormatted},
                {marketStats.lasVegas.yearOverYearChange} year over year. ZIP 89166 list prices sit at{" "}
                {marketStats.zip89166.medianListPriceFormatted} with {marketStats.zip89166.daysOnMarket} median
                list days and {marketStats.zip89166.activeListings} actives. Providence pricing needs a
                neighborhood CMA—not a valley average. Call (702) 744-2993 for comps in your village.
              </p>
            </div>
          </section>

          {/* Expert Analysis */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="hero-market-insights"
              heading="Dr. Jan Duffy's Expert Analysis"
            />
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  &quot;The sourced snapshot is a valley sold median of {marketStats.lasVegas.medianPriceFormatted}
                  and 89166 list prices at {marketStats.zip89166.medianListPriceFormatted}. That gap is the
                  whole job in Providence: price the village, not the county.&quot;
                </p>
                <p>
                  {marketStats.zip89166.daysOnMarket} median list days and{" "}
                  {marketStats.zip89166.activeListings} actives mean buyers have choices and sellers need
                  accurate pricing. <strong>Berkshire Hathaway HomeServices</strong> marketing still
                  matters—exposure without a neighborhood CMA does not.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  JD
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dr. Jan Duffy</div>
                  <div className="text-slate-500 text-sm">
                    REALTOR® | Berkshire Hathaway HomeServices Nevada Properties
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What This Means */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionMedia
              imageKey="section-why-choose"
              heading="What This Means for You"
            />
            <div className="grid md:grid-cols-2 gap-8">
              {/* For Buyers */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <HomeIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">For Buyers</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Get pre-approved now.</strong> 89166 listings show{" "}
                      {marketStats.zip89166.daysOnMarket} median list days—be ready with financing
                      when the right Providence home hits.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Ask for a neighborhood CMA.</strong> Valley sold medians sit below
                      89166 list prices, so discounts and premiums are street-specific.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Consider acting before spring.</strong> Declining inventory suggests
                      more competition ahead. January/February can offer less crowded conditions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Work with an expert.</strong> A Berkshire Hathaway HomeServices agent
                      can identify properties before they hit the market and negotiate effectively.
                    </span>
                  </li>
                </ul>
              </div>

              {/* For Sellers */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">For Sellers</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Price strategically.</strong> Homes priced at market value are selling
                      quickly at near-asking prices. Overpricing will cost you time and money.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>List before the spring rush.</strong> Less competition now means more
                      buyer attention on your property. Spring brings more listings competing for buyers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Presentation matters.</strong> With multiple options available, buyers
                      are selective. Professional photos and staging deliver measurable ROI.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Leverage the BHHS brand.</strong> Berkshire Hathaway HomeServices
                      marketing reaches qualified buyers locally, nationally, and internationally.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market by Area */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionMedia
              imageKey="section-market-forces"
              heading="Sourced Figures by Area"
            />
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Area</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Median</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Context</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">DOM / inventory</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Southern Nevada (sold)</td>
                    <td className="px-6 py-4 text-right">{marketStats.lasVegas.medianPriceFormatted}</td>
                    <td className="px-6 py-4 text-right">{marketStats.lasVegas.yearOverYearChange} YoY</td>
                    <td className="px-6 py-4 text-right">GLVAR Aug 2026</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">ZIP 89166 (list)</td>
                    <td className="px-6 py-4 text-right">{marketStats.zip89166.medianListPriceFormatted}</td>
                    <td className="px-6 py-4 text-right">Asking</td>
                    <td className="px-6 py-4 text-right">{marketStats.zip89166.daysOnMarket} DOM / {marketStats.zip89166.activeListings} actives</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Providence villages</td>
                    <td className="px-6 py-4 text-right">CMA on request</td>
                    <td className="px-6 py-4 text-right">Call (702) 744-2993</td>
                    <td className="px-6 py-4 text-right">27 HOA neighborhoods</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection
            faqs={marketUpdateFAQs}
            title="Market Update FAQs"
            subtitle="Common questions about the latest Las Vegas real estate market"
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="section-cta"
              heading="Get Personalized Market Insights"
              invert
            />
            <p className="text-xl text-blue-100 mb-8">
              Want to know what these trends mean for your specific situation?
              Contact Dr. Jan Duffy for a free consultation tailored to your goals.
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
                href="/home-valuation"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Get Free Home Valuation
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Get Weekly Market Updates in Your Inbox
            </h3>
            <p className="text-slate-600 mb-6">
              Join 2,500+ Las Vegas homeowners and investors who receive Dr. Jan's weekly market
              analysis every Monday morning.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              No spam. Unsubscribe anytime. Your data is protected.
            </p>
          </section>
        </div>
        <section className="mt-12 max-w-4xl mx-auto px-4" aria-label="Data sources">
          <p className="text-sm text-slate-600 mb-2">
            <strong>Data sources:</strong> Data from Las Vegas REALTORS® (LVR) MLS; weekly figures from broker analysis and local housing authority. Statistics are subject to change.
          </p>
          <p className="text-center text-sm text-slate-500 mt-6">
            Last Updated: January 24, 2026
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
