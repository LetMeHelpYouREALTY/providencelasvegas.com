import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import PageHero from "@/components/media/PageHero";
import SectionMedia from "@/components/media/SectionMedia";
import { pageImageMetadata, type SiteImageKey } from "@/lib/images";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  combineSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Providence Las Vegas Real Estate | Berkshire Hathaway HomeServices",
  description:
    "Frequently asked questions about Providence Las Vegas real estate, Berkshire Hathaway HomeServices, buying, selling, and working with Dr. Jan Duffy at BHHS Nevada Properties.",
  alternates: { canonical: "https://www.providencelasvegas.com/faq" },
  keywords: [
    "Berkshire Hathaway HomeServices FAQ",
    "Providence Las Vegas real estate questions",
    "buying a home Providence",
    "selling a home Providence",
    "BHHS agent questions",
  ],
  ...pageImageMetadata("hero-faq"),
};

// Breadcrumb items
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "FAQ", url: "/faq" },
];

const faqCategories: {
  title: string;
  imageKey: SiteImageKey;
  faqs: { q: string; a: string }[];
}[] = [
  {
    title: "About Berkshire Hathaway HomeServices",
    imageKey: "section-bhhs-advantage",
    faqs: [
      {
        q: "Why should I choose a Berkshire Hathaway HomeServices agent?",
        a: "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents. When you're making the biggest purchase of your life, that trust matters.",
      },
      {
        q: "Is Berkshire Hathaway HomeServices owned by Warren Buffett?",
        a: "Berkshire Hathaway HomeServices is part of HSF Affiliates LLC, a joint venture of Berkshire Hathaway Inc. (Warren Buffett's company) and HomeServices of America. The brand carries the trusted Berkshire Hathaway name and upholds its values.",
      },
      {
        q: "What areas does BHHS Nevada Properties serve?",
        a: "BHHS Nevada Properties serves Providence Las Vegas and all 27 Providence neighborhoods. Dr. Jan Duffy specializes in Providence HOA resale certificates, Design Review, new construction, and neighborhood comparisons across Oxford Commons, Saratoga Highlands, Auburn & Bradford, and every Providence community.",
      },
      {
        q: "Does using a Berkshire Hathaway agent cost more?",
        a: "No. Commission rates are negotiable and comparable to other brokerages. The value you receive—global marketing exposure, trusted brand recognition, and experienced agents—often helps homes sell faster and for more money.",
      },
    ],
  },
  {
    title: "Buying a Home in Providence",
    imageKey: "section-buying-process",
    faqs: [
      {
        q: "How long does the home buying process take?",
        a: "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days. The timeline depends on financing, inspections, and contingencies.",
      },
      {
        q: "Do I need a pre-approval before looking at homes?",
        a: "Yes, a pre-approval letter is essential. It shows sellers you're serious and gives you a clear budget. Dr. Jan can connect you with trusted local lenders who offer competitive rates.",
      },
      {
        q: "How much do I need for a down payment?",
        a: "Down payment requirements vary: FHA loans require 3.5%, conventional loans typically 3-20%, and VA/USDA loans may require 0% down. Dr. Jan can connect you with lenders who specialize in various loan programs.",
      },
      {
        q: "Is now a good time to buy in Providence?",
        a: "Yes. With more inventory, returning negotiating power, and stable interest rates, buyers have more options than they've had in years. Well-priced homes still move quickly, but you won't face the bidding wars of 2021-2022.",
      },
      {
        q: "Does BHHS help with new construction homes?",
        a: "Yes! BHHS agents provide free buyer representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities—the builder pays the commission, not you. Having representation protects your interests.",
      },
    ],
  },
  {
    title: "Selling Your Home",
    imageKey: "section-selling-process",
    faqs: [
      {
        q: "What is my home worth in today's market?",
        a: "Home values depend on location, condition, size, and recent comparable sales. Dr. Jan provides free, comprehensive Providence home valuations using current MLS data and her expertise serving Providence Las Vegas since 2008.",
      },
      {
        q: "How long will it take to sell my home?",
        a: `Currently, ZIP 89166 median list time is 25 days. Premium homes may take longer. Pricing strategy is crucial—overpriced homes can sit for months.`,
      },
      {
        q: "What do I need to do to prepare my home for sale?",
        a: "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional photography are the highest-ROI improvements.",
      },
      {
        q: "How does Berkshire Hathaway market my home?",
        a: "BHHS provides world-class marketing including professional photography, virtual tours, MLS syndication to 100+ websites, social media promotion, the BHHS global network exposure, and targeted digital advertising.",
      },
      {
        q: "Should I wait for prices to go higher?",
        a: "Valley sold medians and 89166 list prices move independently. Timing the market is difficult—most sellers do better by listing when ready rather than waiting. Dr. Jan can provide a personalized market analysis.",
      },
    ],
  },
  {
    title: "Investment Properties",
    imageKey: "hero-investment",
    faqs: [
      {
        q: "Is Providence good for real estate investing?",
        a: "Yes. Providence Las Vegas offers strong rental yields, appreciation potential, no state income tax, and a growing population. Dr. Jan can identify Providence neighborhoods with the best investment potential.",
      },
      {
        q: "What kind of returns can I expect?",
        a: "Returns vary by property type and location. Typical Providence Las Vegas rental properties generate 5-8% cash-on-cash returns. Dr. Jan can analyze specific opportunities and provide realistic projections.",
      },
      {
        q: "Does BHHS help with rental properties?",
        a: "Yes. Dr. Jan specializes in investment properties and can help identify opportunities, analyze returns, and connect you with property management resources.",
      },
    ],
  },
  {
    title: "Relocating to Providence Las Vegas",
    imageKey: "section-california-move",
    faqs: [
      {
        q: "Can BHHS help with relocations?",
        a: "Absolutely! Our global network of 50,000+ agents makes relocations seamless. Dr. Jan can coordinate with BHHS agents in your current city while providing expert guidance on Providence Las Vegas neighborhoods, schools, and communities.",
      },
      {
        q: "How do I choose a Providence neighborhood?",
        a: "Providence has 27 neighborhoods—Oxford Commons, Saratoga Highlands, Auburn & Bradford, and more—each with its own amenities and commute patterns. All offer access to three community parks. Dr. Jan can match you with the right Providence neighborhood based on square footage, HOA rules, and commute times.",
      },
      {
        q: "How is the cost of living in Providence Las Vegas?",
        a: "Providence Las Vegas offers lower costs than most major metros, especially California. No state income tax, affordable housing compared to coastal cities ($300K–$700K range), and reasonable utility costs make it attractive for relocators.",
      },
    ],
  },
  {
    title: "Working with Dr. Jan Duffy",
    imageKey: "hero-about",
    faqs: [
      {
        q: "What is Dr. Jan Duffy's experience?",
        a: "Dr. Jan has been serving Providence Las Vegas since 2008, with $127M+ in closed transactions and 500+ satisfied clients. She specializes in all 27 Providence neighborhoods—residential, premium homes, investment, and relocation.",
      },
      {
        q: "How do I contact Dr. Jan Duffy?",
        a: "Call or text (702) 744-2993 or email DrDuffy@ProvidenceLasVegas.com. Office located at 7181 N Hualapai Way #135, Las Vegas, NV 89166.",
      },
      {
        q: "What areas does Dr. Jan cover?",
        a: "Dr. Jan serves all 27 Providence Las Vegas neighborhoods—Oxford Commons, Saratoga Highlands, Auburn & Bradford, and more—plus North Las Vegas (89166). She specializes in Providence HOA, new construction, and resale.",
      },
    ],
  },
];

// Flatten all FAQs for schema generation
const allFaqs = faqCategories.flatMap((category) =>
  category.faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }))
);

// Combined page schemas including all FAQs
const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateWebPageSchema({
    name: "Frequently Asked Questions | Providence Las Vegas Real Estate",
    description:
      "Comprehensive FAQ about Providence Las Vegas real estate, buying, selling, investing, and working with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties.",
    url: "/faq",
    dateModified: "2026-01-25",
  }),
  generateFAQSchema(allFaqs)
);

export default function FAQPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + WebPage + FAQPage (all categories) */}
      <SchemaScript schema={pageSchemas} id="faq-page-schema" />
      <Navbar />
      <main className="pb-16">
      <PageHero
          imageKey="hero-faq"
          title="Frequently Asked Questions"
          subtitle="Answers about buying, selling, and working with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties in Providence Las Vegas."
        />
        <div className="container mx-auto px-4">
          {/* FAQ intro */}
          <div className="max-w-4xl mx-auto text-center mb-12 pt-8">
            <p className="text-xl text-slate-600">
              Typical questions from Providence homebuyers and sellers. Call (702) 744-2993 if you need a specific answer.
            </p>
          </div>

          <RealScoutListings />

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <section key={category.title}>
                <SectionMedia imageKey={category.imageKey} heading={category.title} />
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-6">
                      <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                      <p className="text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-16 text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <SectionMedia
              imageKey="section-cta"
              heading="Still Have Questions?"
              invert
            />
            <p className="text-xl text-blue-100 mb-8">
              Dr. Jan Duffy is happy to answer any questions about Las Vegas real estate or working
              with Berkshire Hathaway HomeServices.
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

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: September 2026</div>
      </main>
      <Footer />
    </>
  );
}
