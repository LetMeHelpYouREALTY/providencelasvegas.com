import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import RelatedPages from "@/components/navigation/RelatedPages";
import Link from "next/link";
import { getRelatedPages } from "@/lib/related-pages";
import { TrendingUp, TrendingDown, Home, DollarSign, BarChart, Phone } from "lucide-react";
import type { Metadata } from "next";
import { marketStats } from "@/lib/site-config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import SectionMedia from "@/components/media/SectionMedia";
import { pageImageMetadata } from "@/lib/images";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market Report September 2026 | Berkshire Hathaway HomeServices",
  description:
    "September 2026 Las Vegas real estate snapshot: Southern Nevada sold median $475,000 and ZIP 89166 list prices. Analysis from Providence Real Estate, Berkshire Hathaway HomeServices Nevada Properties.",
  keywords: [
    "Las Vegas real estate market",
    "Las Vegas home prices 2026",
    "Henderson real estate market",
    "Nevada housing market",
    "Berkshire Hathaway market report",
  ],
  ...pageImageMetadata("hero-market"),
};

// Report Schema
const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "Las Vegas Real Estate Market Report - September 2026",
  author: {
    "@type": "RealEstateAgent",
    name: "Providence Real Estate",
    worksFor: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  datePublished: "2026-01-23",
  about: {
    "@type": "Place",
    name: "Las Vegas, Nevada",
  },
};

const marketReportBreadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Market Report", url: "/market-report" },
]);

export default function MarketReportPage() {
  const marketReportFAQs = getFAQsForPage("market-report");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(marketReportBreadcrumbs) }} />
      <FAQSchema faqs={marketReportFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <Navbar />
      <main className="pb-16">
      <PageHero
          imageKey="hero-market"
          title="Las Vegas Real Estate Market Report"
          subtitle="September 2026 snapshot: Southern Nevada sold median and ZIP 89166 list prices, with a CMA available for any Providence neighborhood."
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10 pt-8">
            <p className="text-xl text-slate-600">
              {marketStats.lastUpdated} | {marketStats.sourceLabel}
            </p>
          </div>

          <RealScoutListings />

          {/* Key Stats Overview - from site-config marketStats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <SectionMedia
              imageKey="section-market-stats"
              heading={`Market Snapshot | ${marketStats.lastUpdated}`}
              invert
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{marketStats.lasVegas.medianPriceFormatted}</div>
                <div className="text-slate-300 text-sm">Southern Nevada median sold</div>
                <div className="flex items-center justify-center mt-1 text-amber-300 text-sm">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  {marketStats.lasVegas.yearOverYearChange} YoY
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{marketStats.zip89166.medianListPriceFormatted}</div>
                <div className="text-slate-300 text-sm">89166 median list</div>
                <div className="flex items-center justify-center mt-1 text-slate-400 text-sm">
                  Asking price
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{marketStats.zip89166.daysOnMarket}</div>
                <div className="text-slate-300 text-sm">89166 median list DOM</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{marketStats.zip89166.activeListings.toLocaleString()}</div>
                <div className="text-slate-300 text-sm">89166 active listings</div>
              </div>
            </div>
          </section>

          {/* Area Breakdown - uses marketStats where available */}
          <section className="mb-16 max-w-6xl mx-auto">
            <SectionMedia
              imageKey="section-market-forces"
              heading="Market Data by Area"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  area: "Southern Nevada (sold)",
                  median: marketStats.lasVegas.medianPriceFormatted,
                  change: marketStats.lasVegas.yearOverYearChange,
                  dom: "GLVAR Aug 2026",
                  trend: "down",
                },
                {
                  area: "ZIP 89166 (list)",
                  median: marketStats.zip89166.medianListPriceFormatted,
                  change: "Asking",
                  dom: `${marketStats.zip89166.daysOnMarket} list DOM`,
                  trend: "down",
                },
                {
                  area: "Providence neighborhoods",
                  median: "CMA on request",
                  change: "Call (702) 744-2993",
                  dom: "27 HOA villages",
                  trend: "up",
                },
              ].map((item) => (
                <div
                  key={item.area}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-4">{item.area}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Median Price</span>
                      <span className="font-semibold text-slate-900">{item.median}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">YoY Change</span>
                      <span
                        className={`font-semibold ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {item.change}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Context</span>
                      <span className="font-semibold text-slate-900">{item.dom}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Expert Analysis */}
          <section className="mb-16 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="hero-market-insights"
              heading="Expert Market Analysis"
            />
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-6">
                "Southern Nevada's August 2026 sold median is $475,000, down 1% from a year earlier. ZIP 89166 list prices sit higher than the valley sold median, so Providence pricing needs a neighborhood CMA—not a valley average."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <Home className="h-5 w-5 text-blue-600 mr-2" />
                  For Buyers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• More inventory = more choices</li>
                  <li>• Negotiating power is returning</li>
                  <li>• Interest rates stabilizing around 6.5%</li>
                  <li>• New construction offering incentives</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  For Sellers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• 89166 has {marketStats.zip89166.activeListings} active listings</li>
                  <li>• Accurate pricing matters more when list prices sit above sold medians</li>
                  <li>• Valley sold median is {marketStats.lasVegas.yearOverYearChange} year over year</li>
                  <li>• 89166 median list time is {marketStats.zip89166.daysOnMarket} days</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Trends */}
          <section className="mb-16 max-w-5xl mx-auto">
            <SectionMedia
              imageKey="section-builder-incentives"
              heading="Key Market Trends to Watch"
            />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">California Migration</h3>
                <p className="text-slate-600 text-sm">
                  Continued influx of California buyers seeking affordability and no state income
                  tax. Summerlin and Henderson remain top destinations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">New Construction</h3>
                <p className="text-slate-600 text-sm">
                  Builders offering significant incentives including rate buydowns, closing cost
                  credits, and upgrades. Great time for new home buyers.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Premium Segment</h3>
                <p className="text-slate-600 text-sm">
                  Premium and $1M+ pricing is neighborhood-specific. Call (702) 744-2993 for a
                  comparable-sales CMA rather than a valley average.
                </p>
              </div>
            </div>
          </section>

          <RelatedPages
            title="You May Also Be Interested In"
            pages={getRelatedPages("marketReport")}
          />

          {/* FAQ */}
          <FAQSection
            faqs={marketReportFAQs}
            title="Market Questions We're Hearing"
            subtitle="Common questions about the Las Vegas real estate market"
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="section-cta"
              heading="Get Personalized Market Insights"
              invert
            />
            <p className="text-xl text-blue-100 mb-8">
              Want to know what these numbers mean for your specific neighborhood or situation? Dr.
              Jan Duffy provides free market consultations.
            </p>
            <a
              href="tel:+17027442993"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 744-2993
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Data sources and last updated */}
        <section className="mt-12 max-w-4xl mx-auto px-4" aria-label="Data sources">
          <p className="text-sm text-slate-600 mb-2">
            <strong>Data sources:</strong> {marketStats.sourceLabel} Neighborhood sold prices require a CMA from MLS. Figures change; call (702) 744-2993 for a current neighborhood read.
          </p>
          <p className="text-center text-sm text-slate-500 mt-6">Last Updated: {marketStats.lastUpdated}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
