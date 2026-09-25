"use client";

import SectionMedia from "@/components/media/SectionMedia";

export default function RealScoutInContractSection() {
  return (
    <section className="py-12 md:py-16 bg-white realscout-in-contract" aria-labelledby="in-contract">
      <div className="container mx-auto px-4">
        <SectionMedia
          imageKey="section-in-contract"
          heading="Properties In Contract"
          headingId="in-contract"
        />
        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
          Providence Real Estate helps buyers and sellers across Providence, North Las Vegas, and Las Vegas.
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="In Contract" property-types=",SFR,MF,TC" price-min="500000" price-max="800000"></realscout-office-listings>`,
          }}
        />
      </div>
    </section>
  );
}
