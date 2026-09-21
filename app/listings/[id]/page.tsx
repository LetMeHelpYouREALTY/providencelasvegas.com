import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import { Bed, Bath, Square, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import GbpActionBar from "@/components/gbp/GbpActionBar";
import type { Metadata } from "next";
import { siteConfig, realscoutUrls } from "@/lib/site-config";
import { generateBreadcrumbSchema, generateRealEstateListingSchema } from "@/lib/schema";
import { getSiteImage } from "@/lib/images";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export const revalidate = 3600;

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = await getProperty(id);
  const listingUrl = `${siteConfig.url}/listings/${id}`;
  return {
    title: `${property.name} | Providence Real Estate`,
    description: property.description.slice(0, 160),
    alternates: { canonical: listingUrl },
    robots: { index: false, follow: true },
    openGraph: {
      title: `${property.name} | Providence Real Estate`,
      description: property.description.slice(0, 160),
      url: listingUrl,
      images: property.image ? [{ url: property.image.startsWith("http") ? property.image : `${siteConfig.url}${property.image}` }] : undefined,
    },
  };
}

// Placeholder: replace with RealScout API when wired. When real data exists, add evidence-dense blocks: key specs, price history, neighborhood link, school ratings (see plan Phase 1.6).
async function getProperty(_id: string) {
  const photo = getSiteImage("hero-listings");
  return {
    id: _id,
    name: "Providence Las Vegas Home",
    location: "Providence, North Las Vegas, NV 89166",
    price: "$850,000",
    priceNumber: 850000,
    image: photo.src,
    imageUnoptimized: photo.unoptimized,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
    yearBuilt: 2018,
    description:
      "Spacious home in the Providence master-planned community. Open floor plan, updated kitchen, and backyard. Close to Providence parks and shopping. Dr. Jan Duffy, Providence Las Vegas real estate.",
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = await getProperty(id);
  const listingUrl = `${siteConfig.url}/listings/${id}`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Listings", url: "/listings" },
    { name: property.name, url: `/listings/${id}` },
  ]);
  const listingSchema = generateRealEstateListingSchema({
    name: property.name,
    description: property.description,
    price: (property.priceNumber ?? parseInt(property.price.replace(/[^0-9]/g, ""), 10)) || 0,
    address: { street: "See listing", city: "North Las Vegas", state: "NV", zip: "89166" },
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    sqft: property.squareFeet,
    images: [property.image],
    url: listingUrl,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-slate-600">
              <li>
                <a href="/" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href={realscoutUrls.searchListingDetail} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  Properties
                </a>
              </li>
              <li>/</li>
              <li className="text-slate-900">{property.name}</li>
            </ol>
          </nav>

          {/* Property Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {property.name}
            </h1>
            <div className="flex items-center text-slate-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-4">{property.price}</div>
            <GbpActionBar variant="onLight" />
            <p className="mt-3 text-sm text-slate-500">
              Providence Real Estate | 7181 N Hualapai Way #135, Las Vegas, NV 89166 | (702) 744-2993
            </p>
          </div>

          {/* Main Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              priority
              unoptimized={property.imageUnoptimized}
            />
          </div>

          {/* Property Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Property Details</h2>
              <p className="text-slate-700 mb-6">{property.description}</p>

              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">
                      {property.squareFeet.toLocaleString()} sq ft
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-slate-700">Built {property.yearBuilt}</span>
                  </div>
                </div>
              </div>

              {/* RealScout Widget Integration Point */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Schedule a Showing</h3>
                <p className="text-slate-700 mb-4">
                  Contact us to schedule a private viewing of this property.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="/contact">Contact Agent</a>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Agent</h3>
                <p className="text-slate-600 mb-4">Dr. Jan Duffy</p>
                <p className="text-sm text-slate-600 mb-6">
                  Providence Real Estate
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href="tel:+17027442993">Call (702) 744-2993</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/contact">Send Message</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
