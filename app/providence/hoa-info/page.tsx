import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import RelatedPages from "@/components/navigation/RelatedPages";
import InlineLink from "@/components/content/InlineLink";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, ExternalLink } from "lucide-react";
import { providenceCommunity } from "@/lib/site-config";
import { getRelatedPages } from "@/lib/related-pages";
import { getFAQsForPage } from "@/lib/faq-library";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";
import SectionMedia from "@/components/media/SectionMedia";

export const metadata: Metadata = {
  title: "Providence HOA Information | Providence Las Vegas Real Estate",
  description:
    "Providence Las Vegas HOA info: resale certificate process, Design Review, assessment due dates, and neighborhood requirements. Official Providence HOA link and expert guidance from Dr. Jan Duffy.",
  alternates: { canonical: "https://www.providencelasvegas.com/providence/hoa-info" },
  keywords: [
    "Providence HOA",
    "Providence Las Vegas HOA",
    "Providence resale certificate",
    "Providence Design Review",
    "Providence neighborhoods HOA",
  ],
  ...pageImageMetadata("hero-hoa"),
};

export default function ProvidenceHOAInfoPage() {
  const hoaFAQs = getFAQsForPage("providence/hoa-info");

  return (
    <>
      <FAQSchema faqs={hoaFAQs} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Providence Las Vegas", href: "/providence" }, { label: "HOA Information" }]} />
      <main className="pb-16">
      <PageHero
          imageKey="hero-hoa"
          title="Providence HOA Information"
          subtitle={`The Providence Master HOA oversees all ${providenceCommunity.neighborhoodCount} Providence Las Vegas neighborhoods. Resale certificates, Design Review, and assessment dates keep your transaction on track.`}
        />
        <div className="container mx-auto px-4 max-w-4xl pt-10">
          <p className="text-lg text-slate-700 mb-8">
            The Providence Master HOA oversees all {providenceCommunity.neighborhoodCount} Providence Las Vegas
            neighborhoods. Whether you&apos;re buying or selling, understanding HOA requirements, resale
            certificates, and Design Review will keep your Providence transaction on track.
          </p>

          <section className="mb-12">
            <SectionMedia
              imageKey="hero-hoa"
              heading="HOA Resale Certificate Process"
            />
            <p className="text-slate-700 mb-4">
              When selling a home in Providence Las Vegas, the seller must obtain a resale certificate
              from the Providence Master HOA. This document provides buyers with essential HOA
              information: assessment status, architectural/design review history, and community
              rules. Dr. Jan Duffy is familiar with the Providence HOA resale process and can
              coordinate with the HOA to ensure timely delivery of documents.
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Resale certificate ordered through Providence HOA</li>
              <li>Assessment due dates and payment history</li>
              <li>Design Review records for the property</li>
              <li>CC&amp;Rs and community guidelines</li>
            </ul>
            <a
              href={providenceCommunity.hoaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Providence HOA – Realtors/Resale Info
              <ExternalLink className="h-4 w-4" />
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Design Review</h2>
            <p className="text-slate-700 mb-4">
              The Providence Master HOA oversees Design Review for exterior changes to homes in
              Providence Las Vegas. Modifications such as landscaping upgrades, paint changes,
              and additions require HOA approval. Submitting plans and following Design Review
              guidelines keeps your Providence home in compliance.
            </p>
            <p className="text-slate-700 mb-4">
              For current Design Review guidelines and application forms, visit the official
              Providence HOA website. <InlineLink href="/about">Dr. Jan Duffy</InlineLink> can
              advise on common Providence neighborhood requirements during the buying or selling
              process.
            </p>
            <a
              href={providenceCommunity.hoaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Providence HOA – Design Review Guidelines
              <ExternalLink className="h-4 w-4" />
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Assessment Due Dates</h2>
            <p className="text-slate-700 mb-4">
              Providence Master HOA assessments are due{" "}
              <strong>{providenceCommunity.hoaAssessmentDueDates}</strong> of each year. New homeowners
              should ensure assessments are current before closing. The HOA website provides payment
              options and community contact information.
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Assessment due: {providenceCommunity.hoaAssessmentDueDates}</li>
              <li>Payments and documents: Providence HOA portal</li>
              <li>New homeowner info: Providence HOA</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Providence Neighborhood Requirements</h2>
            <p className="text-slate-700 mb-4">
              Each of the {providenceCommunity.neighborhoodCount} Providence neighborhoods may have sub-associations or
              additional requirements. When buying or selling in Providence Las Vegas—from Oxford
              Commons and Saratoga Highlands to Auburn & Bradford and beyond—Dr. Jan Duffy provides
              hyperlocal expertise on Providence HOA requirements and resale processes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Official Providence HOA Resources</h2>
            <p className="text-slate-700 mb-4">
              For official documents, payment info, Realtor/Resale resources, and community contacts:
            </p>
            <a
              href={providenceCommunity.hoaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Providence HOA Website
              <ExternalLink className="h-4 w-4" />
            </a>
          </section>

          <RelatedPages
            title="You May Also Be Interested In"
            pages={getRelatedPages("providence")}
          />

          <FAQSection
            faqs={hoaFAQs}
            title="Frequently Asked Questions About Providence HOA"
            subtitle="Common questions about HOA assessments, resale certificates, and Design Review"
          />

          <section className="py-12 bg-blue-600 text-white rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Providence HOA?</h2>
            <p className="text-blue-100 mb-6">
              Dr. Jan Duffy knows Providence Las Vegas and can guide you through HOA requirements,
              resale certificates, and Design Review.
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
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
