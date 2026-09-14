import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FAQSection from "@/components/sections/FAQSection";
import FAQSchema from "@/components/schemas/FAQSchema";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import LocationMap from "@/components/location/LocationMap";
import { Phone, Mail, MapPin, Clock, Calendar, Star, Users, Shield, Search } from "lucide-react";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import RelatedPages from "@/components/navigation/RelatedPages";
import Link from "next/link";
import { getRelatedPages } from "@/lib/related-pages";
import type { Metadata } from "next";
import { getFAQsForPage } from "@/lib/faq-library";
import { realscoutUrls } from "@/lib/site-config";
import PageHero from "@/components/media/PageHero";
import { pageImageMetadata } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact | Providence Real Estate | Providence Las Vegas",
  description:
    "Contact Providence Real Estate. Schedule an appointment, get directions, or call (702) 744-2993. Providence, North Las Vegas, NV 89166.",
  alternates: { canonical: "https://www.providencelasvegas.com/contact" },
  keywords: [
    "contact Providence Las Vegas real estate agent",
    "Dr. Jan Duffy Providence Las Vegas",
    "Berkshire Hathaway contact",
    "Providence Las Vegas realtor contact",
    "schedule Providence Las Vegas real estate appointment",
  ],
  ...pageImageMetadata("hero-contact"),
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: "Providence Real Estate",
    telephone: "+17027442993",
    email: "DrDuffy@ProvidenceLasVegas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7181 N Hualapai Way #135",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89166",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
  const contactFAQs = getFAQsForPage("contact");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <FAQSchema faqs={contactFAQs} />
      <Navbar />
      <main className="pb-16">
        <PageHero
          imageKey="hero-contact"
          badge={
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Providence Real Estate
            </div>
          }
          title="Contact Providence Real Estate"
          subtitle="Questions about Providence Las Vegas real estate? Call, get directions, or schedule a visit. Office at 7181 N Hualapai Way #135, Las Vegas, NV 89166."
        >
          <a
            href={realscoutUrls.searchContact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-700 no-underline hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold"
          >
            <Search className="h-5 w-5" />
            Search Providence Homes
          </a>
        </PageHero>
        <div className="container mx-auto px-4 pt-12">

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Map */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch for Providence Las Vegas Real Estate</h2>
              <p className="text-slate-700 mb-8">
                Whether you're buying your first home in Providence Las Vegas, selling a
                property in any of the 27 Providence neighborhoods, or exploring investment
                opportunities, I'm here to provide expert guidance backed by the trusted{" "}
                <strong>Berkshire Hathaway HomeServices</strong> brand. Serving Las Vegas since
                2008 with $127M+ in closed transactions. Providence Las Vegas real estate
                specialist.
              </p>

              {/* NAP Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone (Call or Text)</h3>
                    <a
                      href="tel:+17027442993"
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      (702) 744-2993
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Available Mon-Fri 9am-6pm, Sat 10am-4pm, Sun By Appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:DrDuffy@ProvidenceLasVegas.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      DrDuffy@ProvidenceLasVegas.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Typically respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                    <address className="not-italic text-slate-700">
                      Providence Real Estate<br />
                      7181 N Hualapai Way #135<br />
                      Las Vegas, NV 89166
                    </address>
                    <Link
                      href="/directions"
                      className="inline-flex items-center gap-2 mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      <MapPin className="h-4 w-4" />
                      Get directions (driving, walking, transit)
                    </Link>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Available by appointment outside these hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed + Call, Directions, Reviews CTAs */}
              <LocationMap variant="full" className="mb-8" />

              {/* Credentials */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Dr. Jan Duffy, REALTOR®</strong><br />
                  License S.0197614.LLC<br />
                  Berkshire Hathaway HomeServices Nevada Properties
                </p>
              </div>
            </div>

            {/* Schedule Appointment - Calendly Widget */}
            <div>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-blue-600 text-white p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto mb-3" />
                  <h2 className="text-2xl font-bold mb-2">Schedule an Appointment</h2>
                  <p className="text-blue-100">
                    Book a time that works for you—phone consultation, property showing, 
                    or in-person meeting at our office.
                  </p>
                </div>
                <CalendlyWidget height="600px" />
              </div>

              {/* Why Contact BHHS */}
              <div className="mt-6 bg-slate-900 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Why Contact Dr. Jan Duffy for Providence Las Vegas?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Trusted Brand:</strong> The only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Proven Results:</strong> $127M+ in closed transactions serving Las Vegas since 2008.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Global Network:</strong> 50,000+ agents worldwide for seamless relocations and referrals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <section className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Areas We Serve
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Dr. Jan Duffy provides expert real estate services throughout Providence Las Vegas. 
              Whether you're buying, selling, or investing in any of these Providence neighborhoods, contact us 
              for personalized guidance backed by Berkshire Hathaway HomeServices.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Providence",
                "Oxford Commons",
                "Saratoga Highlands",
                "Auburn & Bradford",
                "North Las Vegas",
                "Cambridge",
                "Somerset",
                "Manchester Park",
                "Franklin Park",
                "Barrington Manor",
                "Kensington",
                "Easton Place",
              ].map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors">
                  <span className="text-slate-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Contact Options */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Prefer to Reach Out Directly?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="tel:+17027442993"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-colors"
              >
                <Phone className="h-8 w-8 mr-4" />
                <div className="text-left">
                  <div className="font-bold text-lg">Call Now</div>
                  <div className="text-blue-100">(702) 744-2993</div>
                </div>
              </a>
              <a
                href="mailto:DrDuffy@ProvidenceLasVegas.com"
                className="flex items-center justify-center bg-slate-700 hover:bg-slate-800 text-white p-6 rounded-xl transition-colors"
              >
                <Mail className="h-8 w-8 mr-4" />
                <div className="text-left">
                  <div className="font-bold text-lg">Send Email</div>
                  <div className="text-slate-300">DrDuffy@ProvidenceLasVegas.com</div>
                </div>
              </a>
            </div>
          </section>

          <RelatedPages
            title="You May Also Be Interested In"
            pages={getRelatedPages("contact")}
          />

          {/* FAQ Section */}
          <FAQSection
            faqs={contactFAQs}
            title="Frequently Asked Questions"
            subtitle="Common questions about contacting Dr. Jan Duffy for Providence Las Vegas real estate"
          />
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: September 2026</div>
      </main>
      <Footer />
    </>
  );
}
