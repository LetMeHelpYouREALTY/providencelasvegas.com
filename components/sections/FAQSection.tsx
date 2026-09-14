"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionMedia from "@/components/media/SectionMedia";

export interface FAQ {
  question: string;
  answer: string;
}

// Default FAQs for the section (Providence Las Vegas–focused when no custom faqs passed)
export const defaultFaqs: FAQ[] = [
  {
    question: "What areas do you serve in Providence Las Vegas?",
    answer:
      "We specialize in Providence Las Vegas—all 27 neighborhoods including Oxford Commons, Saratoga Highlands, Auburn & Bradford, and every Providence neighborhood. Our expertise covers residential, luxury, and investment properties throughout Providence Las Vegas and the Las Vegas Valley.",
  },
  {
    question: "How long does the home buying process take in Providence Las Vegas?",
    answer:
      "Typically, the home buying process in Providence Las Vegas takes 30-45 days from offer acceptance to closing. However, this can vary based on financing, inspections, and HOA resale requirements. We'll guide you through each step for a smooth Providence Las Vegas transaction.",
  },
  {
    question: "Do you help with home valuations in Providence Las Vegas?",
    answer:
      "Yes! We provide free, no-obligation home valuations for Providence Las Vegas using current market data and comparable sales. This helps you understand your home's value in any Providence neighborhood whether you're considering selling or just curious.",
  },
  {
    question: "What makes you different for Providence Las Vegas real estate?",
    answer:
      "Serving Las Vegas since 2008 with 500+ successful transactions, we combine deep Providence Las Vegas neighborhood knowledge with personalized service. As part of Berkshire Hathaway HomeServices, we have access to extensive resources to serve Providence Las Vegas buyers and sellers better.",
  },
  {
    question: "Can you help with investment properties in Providence Las Vegas?",
    answer:
      "Absolutely! We specialize in investment real estate in Providence Las Vegas including rental properties and fix-and-flip opportunities. We'll help you identify profitable opportunities in Providence Las Vegas neighborhoods and navigate the investment process.",
  },
  {
    question: "What are your fees for Providence Las Vegas real estate?",
    answer:
      "For buyers, our services are typically free as commissions are paid by the seller. For sellers in Providence Las Vegas, we offer competitive commission structures. Contact us for a personalized consultation for your Providence Las Vegas situation.",
  },
];

interface FAQSectionProps {
  /** Custom FAQs to display (defaults to defaultFaqs) */
  faqs?: FAQ[];
  /** Custom title for the section */
  title?: string;
  /** Custom subtitle for the section */
  subtitle?: string;
  /** Whether to include JSON-LD schema (handled separately by FAQSchema component) */
  className?: string;
}

export default function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our real estate services",
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <SectionMedia
          imageKey="section-faq"
          heading={title}
          subtitle={subtitle}
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Helper to generate FAQ schema data from FAQ array
 * Use with FAQSchema component: <FAQSchema faqs={getFAQSchemaData(faqs)} />
 */
export function getFAQSchemaData(faqs: FAQ[]) {
  return faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}
