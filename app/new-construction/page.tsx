import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import RelatedPages from "@/components/navigation/RelatedPages";
import Link from "next/link";
import { getRelatedPages } from "@/lib/related-pages";
import {
  Phone,
  Building2,
  Shield,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  Home as HomeIcon,
  MapPin,
  Calendar,
  Users,
  FileText,
  HelpCircle,
} from "lucide-react";
import type { Metadata } from "next";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";

export const metadata: Metadata = {
  title: "Providence New Construction | Providence Las Vegas Real Estate",
  description:
    "Providence new construction homes. Active builders in Providence neighborhoods, current inventory, builder incentives. Free buyer representation. Dr. Jan Duffy. Call (702) 744-2993.",
  keywords: [
    "Providence new construction",
    "new homes Providence Las Vegas",
    "Providence builders",
    "new construction Providence",
  ],
  ...pageImageMetadata("hero-new-construction"),
};

const builders = [
  {
    name: "Active Providence Builders",
    segment: "Providence",
    priceRange: "Varies by neighborhood",
    communities: [
      "Providence Las Vegas neighborhoods",
      "Oxford Commons, Saratoga Highlands",
      "Contact for current inventory",
    ],
    currentIncentives: "Up to $50K in design studio credits on select inventory",
    incentiveDeadline: "February 28, 2026",
    highlights: [
      "Luxury finishes standard",
      "Highly customizable floor plans",
      "Premier locations",
    ],
  },
  {
    name: "Providence New vs Resale",
    segment: "Providence",
    priceRange: "Varies by neighborhood",
    communities: [
      "Oxford Commons, Saratoga Highlands",
      "All 27 Providence neighborhoods",
      "Contact for current new construction",
    ],
    currentIncentives: "Free buyer representation—builder pays",
    incentiveDeadline: "Ongoing",
    highlights: [
      "Contract review and upgrade negotiation",
      "Construction oversight",
      "Providence HOA coordination",
    ],
  },
  {
    name: "Builder Incentives",
    segment: "Providence",
    priceRange: "Contact for specifics",
    communities: [
      "Providence neighborhoods",
    ],
    currentIncentives: "Rate buydowns, design credits often available",
    incentiveDeadline: "Varies by builder",
    highlights: [
      "Dr. Jan negotiates on your behalf",
      "No cost to you—builder pays commission",
      "Providence market expertise",
    ],
  },
  {
    name: "Contact for Current Inventory",
    segment: "Providence",
    priceRange: "Current availability",
    communities: [
      "Providence Las Vegas neighborhoods",
    ],
    currentIncentives: "Contact Dr. Jan for active builder incentives",
    incentiveDeadline: "Varies",
    highlights: [
      "Current Providence new construction",
      "Builder-specific incentives",
      "Free representation",
    ],
  },
];

export default function NewConstructionPage() {
  const newConstructionFAQs = getFAQsForPage("new-construction");

  return (
    <>
      <FAQSchema faqs={newConstructionFAQs} />
      <Navbar />
      <PageHero
          imageKey="hero-new-construction"
          title="Providence New Construction Homes"
        />

      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              {" / "}
              <span className="text-slate-900">New Construction</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Free Buyer Representation
            </div>
            <p className="text-xl text-slate-600 mb-8">
              Your guide to new construction in Providence Las Vegas. Free buyer representation,
              expert contract review, and builder incentive negotiation for Providence neighborhoods.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">
                    Important: Register Dr. Jan Duffy as Your Agent FIRST
                  </h3>
                  <p className="text-amber-800 text-sm">
                    Most builders require agent registration on your <strong>first visit</strong>.
                    Call <a href="tel:+17027442993" className="font-bold underline">(702) 744-2993</a> to 
                    register Dr. Jan Duffy as your buyer's agent before visiting any model home—or you 
                    may lose your right to free professional representation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <RealScoutListings />

          {/* Why Free Representation */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Use a BHHS Agent for New Construction?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-full mr-4 flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">100% Free to You</h3>
                  <p className="text-blue-100">
                    Builders pay the buyer's agent commission (2-3%) as part of their marketing
                    budget. You get professional representation at zero cost.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-full mr-4 flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Contract Review</h3>
                  <p className="text-blue-100">
                    Builder contracts are 50+ pages of legal language favoring the builder.
                    Dr. Jan reviews every clause and explains your rights.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-full mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Your Advocate</h3>
                  <p className="text-blue-100">
                    The builder's sales rep works for the builder. You deserve someone who works
                    exclusively for YOUR interests—negotiating, monitoring, and protecting you.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500 p-2 rounded-full mr-4 flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Construction Oversight</h3>
                  <p className="text-blue-100">
                    We schedule walkthroughs at framing, pre-drywall, and final stages. Problems
                    caught early are fixed—problems missed become your problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-blue-100">
                "Why would you negotiate against professionals without professional help—
                especially when that help is free?"
              </p>
            </div>
          </section>

          {/* Current Incentives Alert */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                  <Calendar className="h-7 w-7 text-green-600 mr-3" />
                  January 2026 Builder Incentives
                </h2>
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Limited Time Offers
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">4.99%</div>
                  <div className="text-slate-700 font-medium">Rate Buydowns</div>
                  <div className="text-slate-500 text-sm mt-1">
                    Multiple builders offering sub-5% rates with preferred lenders
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">$50K+</div>
                  <div className="text-slate-700 font-medium">Upgrade Credits</div>
                  <div className="text-slate-500 text-sm mt-1">
                    Design center and premium options at no additional cost
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">6%</div>
                  <div className="text-slate-700 font-medium">Closing Cost Credits</div>
                  <div className="text-slate-500 text-sm mt-1">
                    Significant credits to offset buyer closing costs
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-600 mt-6">
                Incentives change frequently. Contact Dr. Jan Duffy for current offers specific
                to your preferred communities.
              </p>
            </div>
          </section>

          {/* Builders Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Providence New Home Builders
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {builders.map((builder) => (
                <div
                  key={builder.name}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-slate-900 text-white p-5 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">{builder.name}</h3>
                      <span className="text-slate-400 text-sm">{builder.segment}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-400 font-bold">{builder.priceRange}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                        Current Communities
                      </div>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {builder.communities.map((community) => (
                          <li key={community} className="flex items-center">
                            <MapPin className="h-3 w-3 text-slate-400 mr-2" />
                            {community}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <div className="text-xs text-green-700 uppercase tracking-wide mb-1">
                        Current Incentive
                      </div>
                      <div className="text-slate-900 font-medium text-sm">
                        {builder.currentIncentives}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Deadline: {builder.incentiveDeadline}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {builder.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              New Construction Buying Process with BHHS
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Register Dr. Jan Duffy as Your Agent BEFORE Visiting
                  </h3>
                  <p className="text-slate-600">
                    Call{" "}
                    <a href="tel:+17027442993" className="text-blue-600 font-semibold hover:underline">
                      (702) 744-2993
                    </a>{" "}
                    to register Dr. Jan Duffy as your buyer's agent before any builder visits. We'll 
                    discuss your needs, budget, and preferred locations, then accompany you to model homes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Explore Communities & Compare Builders
                  </h3>
                  <p className="text-slate-600">
                    Tour model homes, review floor plans, and understand what's included vs.
                    upgrades. Dr. Jan provides objective comparisons—no builder pays us more than
                    another.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Negotiate Contract & Design Center Selections
                  </h3>
                  <p className="text-slate-600">
                    We review the purchase agreement, negotiate upgrades and incentives, and guide
                    you through design center selections. Many buyers overspend here—we help you
                    prioritize.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Monitor Construction & Conduct Walkthroughs
                  </h3>
                  <p className="text-slate-600">
                    We schedule walkthroughs at key stages: framing, pre-drywall (when systems are
                    visible), and final. Issues caught early are fixed properly.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Final Walkthrough & Closing
                  </h3>
                  <p className="text-slate-600">
                    Comprehensive final inspection with punch list creation. We ensure everything
                    promised is delivered before you take possession of your new home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I've seen buyers leave $30,000 on the table because they didn't know what to ask
                for. Builders expect negotiation—their sales managers have authority to approve
                upgrades and credits. As your <strong>Berkshire Hathaway HomeServices</strong>
                agent, I know exactly which incentives are available, which upgrades add value, and
                which builder promises are legally binding. This representation costs you nothing
                and can save you tens of thousands."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          <RelatedPages
            title="You May Also Be Interested In"
            pages={getRelatedPages("newConstruction")}
          />

          {/* FAQ Section */}
          <FAQSection
            faqs={newConstructionFAQs}
            title="New Construction FAQs"
            subtitle="Common questions about buying new construction homes in Providence Las Vegas"
          />

          {/* What We Negotiate */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What Dr. Jan Negotiates for New Construction Buyers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Closing cost credits",
                "Rate buydowns",
                "Design center credits",
                "Free premium lot",
                "Upgraded flooring",
                "Appliance packages",
                "Extended warranties",
                "Landscaping packages",
                "Pool/spa credits",
                "Solar panel inclusion",
                "Garage upgrades",
                "Smart home packages",
              ].map((item) => (
                <div key={item} className="flex items-center bg-white border border-slate-200 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Tour New Construction?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Call <strong>(702) 744-2993</strong> to register Dr. Jan Duffy as your buyer's agent 
              <strong> before</strong> visiting any model home—or you may lose your right to free 
              professional representation. Current incentive information available.
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
                Request Builder Info
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026 | Incentives subject to change
        </div>
      </main>
      <Footer />
    </>
  );
}
