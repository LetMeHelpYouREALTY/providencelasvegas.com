import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import LocationMap from "@/components/location/LocationMap";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  MessageSquare,
  Camera,
  FileText,
  Award,
  Users,
  Home,
  Building,
  Heart,
} from "lucide-react";
import type { Metadata } from "next";
import {
  businessInfo,
  gbpDescription,
  gbpFAQs,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/gbp-schema";
import { gbpUrls } from "@/lib/site-config";
import PageHero from "@/components/media/PageHero";
import { getSiteImage, ogImageFor } from "@/lib/images";
import SectionMedia from "@/components/media/SectionMedia";

export const metadata: Metadata = {
  title: "Dr. Jan Duffy, Providence Las Vegas REALTOR® | Berkshire Hathaway HomeServices",
  description:
    "Dr. Jan Duffy is the Providence Las Vegas real estate expert with Berkshire Hathaway HomeServices Nevada Properties. Specializing in all 27 Providence neighborhoods, California-to-Providence relocation, and premium homes. Call (702) 744-2993.",
  alternates: { canonical: "https://www.providencelasvegas.com/google-business" },
  keywords: [
    "Dr. Jan Duffy Providence realtor",
    "Providence Las Vegas real estate agent",
    "Berkshire Hathaway HomeServices Providence",
    "Oxford Commons realtor",
    "Saratoga Highlands real estate agent",
    "55+ options near Providence",
    "California to Providence Las Vegas",
  ],
  openGraph: {
    title: "Providence Real Estate",
    description: "Providence Las Vegas real estate expert serving since 2008. All 27 Providence neighborhoods, premium homes, California relocation.",
    url: "https://www.providencelasvegas.com/google-business",
    type: "profile",
    images: [ogImageFor("hero-google-business")],
  },
};

export default function GoogleBusinessPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pb-16">
        <PageHero
          imageKey="hero-google-business"
          title="Providence Real Estate on Google"
          subtitle="NAP matches Google Business Profile: Providence Real Estate, 7181 N Hualapai Way #135, Las Vegas, NV 89166, (702) 744-2993."
        />
        <div className="container mx-auto px-4 pt-12">
          {/* Hero - NAP Prominent */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400 mb-4">
                    <Image
                      src={getSiteImage("hero-about").src}
                      alt="Providence Real Estate office, Las Vegas NV 89166"
                      fill
                      sizes="96px"
                      className="object-cover"
                      priority
                      unoptimized={getSiteImage("hero-about").unoptimized}
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">Berkshire Hathaway HomeServices</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Jan Duffy
                  </h2>
                  <p className="text-xl text-blue-200 mb-2">REALTOR® | License {businessInfo.license}</p>
                  <p className="text-slate-300 mb-6">Nevada Properties</p>
                  
                  {/* NAP - Exact match to GBP */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{businessInfo.address.streetAddress}</p>
                        <p>{businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <a href={`tel:${businessInfo.phone.tel}`} className="font-medium hover:text-blue-300">
                        {businessInfo.phone.display}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <a href={`mailto:${businessInfo.email}`} className="hover:text-blue-300">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Rating & CTA */}
                <div className="text-center bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold mb-2">4.9 / 5.0</p>
                  <p className="text-blue-200 mb-6">200+ Client Reviews</p>
                  <a
                    href={`tel:${businessInfo.phone.tel}`}
                    className="inline-block w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    Call Now: {businessInfo.phone.display}
                  </a>
                  <p className="text-sm text-blue-300 mt-3">Free Consultation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Business Hours */}
          <section className="max-w-5xl mx-auto mb-16">
            <SectionMedia imageKey="section-hours" heading="Business Hours" />
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><span className="font-medium">Monday:</span> 8am - 8pm</div>
                <div><span className="font-medium">Tuesday:</span> 8am - 8pm</div>
                <div><span className="font-medium">Wednesday:</span> 8am - 8pm</div>
                <div><span className="font-medium">Thursday:</span> 8am - 8pm</div>
                <div><span className="font-medium">Friday:</span> 8am - 8pm</div>
                <div><span className="font-medium">Saturday:</span> 8am - 8pm</div>
                <div><span className="font-medium">Sunday:</span> 8am - 8pm</div>
              </div>
            </div>
          </section>

          {/* Office Location Map - GBP CTA: Directions, Call, Reviews */}
          <section className="max-w-5xl mx-auto mb-16">
            <LocationMap variant="full" />
          </section>

          {/* About - 750 Word Description Structure */}
          <section className="max-w-4xl mx-auto mb-16">
            <SectionMedia imageKey="hero-about" heading="About Dr. Jan Duffy" />
            
            {/* Section 1: Who We Are */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Experience & Background
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whoWeAre}</p>
            </div>
            
            {/* Section 2: What We Do */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                Services & Value
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whatWeDo}</p>
            </div>
            
            {/* Section 3: Where We Serve */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Areas Served
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whereWeServe}</p>
            </div>
          </section>

          {/* Services - Each creates searchable GBP field */}
          <section className="max-w-5xl mx-auto mb-16">
            <SectionMedia imageKey="section-core-services" heading="Real Estate Services" />
            <div className="grid md:grid-cols-3 gap-4">
              {businessInfo.services.map((service) => (
                <div key={service.name} className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{service.name}</h3>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Areas - Providence focus */}
          <section className="max-w-5xl mx-auto mb-16">
            <SectionMedia imageKey="section-services" heading="Service Areas" />
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Primary Market</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Providence, Las Vegas NV</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> North Las Vegas (89166)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Featured Neighborhoods</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Oxford Commons</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Saratoga Highlands</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Full Coverage</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Auburn & Bradford</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> All 27 Providence Neighborhoods</li>
                  </ul>
                </div>
              </div>
              
              {/* Neighborhood Specialties */}
              <div className="mt-8 pt-8 border-t border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4">Providence Neighborhood Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="/providence/neighborhoods/oxford-commons" className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 hover:bg-blue-100 transition-colors">Oxford Commons</Link>
                  <Link href="/providence/neighborhoods/saratoga-highlands" className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 hover:bg-blue-100 transition-colors">Saratoga Highlands</Link>
                  <Link href="/providence/neighborhoods/auburn-bradford" className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 hover:bg-blue-100 transition-colors">Auburn & Bradford</Link>
                  <Link href="/providence" className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 hover:bg-blue-100 transition-colors">All 27 Neighborhoods</Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section - Extra ranking boost */}
          <section className="max-w-4xl mx-auto mb-16">
            <SectionMedia
              imageKey="section-faq"
              heading="Frequently Asked Questions"
            />
            <div className="space-y-4">
              {gbpFAQs.map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Review CTA - Prominence factor */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <SectionMedia
                imageKey="section-reviews"
                heading="Your Review Helps Others Find Quality Service"
              />
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                If Dr. Jan helped you buy or sell a home, please consider sharing your experience.
                Mention your neighborhood, type of transaction, and what made the experience valuable.
              </p>
              <a
                href={gbpUrls.review}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Leave a Google Review
              </a>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <SectionMedia imageKey="section-cta" heading="Ready to Get Started?" invert />
              <p className="text-xl text-slate-300 mb-8">
                Contact Dr. Jan Duffy for a free consultation about buying or selling in Las Vegas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${businessInfo.phone.tel}`}
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {businessInfo.phone.display}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Link>
              </div>
              <p className="text-slate-400 text-sm mt-6">
                {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
              </p>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: September 2026</div>
      </main>
      <Footer />
    </>
  );
}
