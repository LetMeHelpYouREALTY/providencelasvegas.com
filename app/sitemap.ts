import { MetadataRoute } from "next";
import { siteConfig, providenceNeighborhoods } from "@/lib/site-config";

// Stable lastmod date for crawl efficiency; update when content is meaningfully changed
const SITEMAP_LAST_MODIFIED = new Date("2026-09-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = SITEMAP_LAST_MODIFIED;

  // Core pages
  const corePages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/listings`, priority: 0.9, changeFrequency: "daily" as const },
    { url: `${baseUrl}/why-berkshire-hathaway`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/market-report`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/market-update`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/market-insights`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/google-business`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/providence`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/neighborhoods`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/amenities`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/directions`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/site-map`, priority: 0.6, changeFrequency: "monthly" as const },
  ];

  // Service pages
  const servicePages = [
    { url: `${baseUrl}/buyers`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/sellers`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/luxury-homes`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/new-construction`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/investment-properties`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/relocation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/home-valuation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/55-plus-communities`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // Buyer persona pages
  const buyerPersonaPages = [
    { url: `${baseUrl}/buyers/california-relocator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/buyers/first-time-buyers`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Seller persona pages
  const sellerPersonaPages = [
    { url: `${baseUrl}/sellers/move-up`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/sellers/downsizing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/sellers/divorce-probate`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/sellers/relocation`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Providence HOA info
  const providenceHoaPage = [
    { url: `${baseUrl}/providence/hoa-info`, priority: 0.85, changeFrequency: "monthly" as const },
  ];

  // Providence Las Vegas: hub + 27 neighborhood pages
  const providencePages = [
    ...providenceNeighborhoods.map((n) => ({
      url: `${baseUrl}/providence/neighborhoods/${n.slug}`,
      priority: 0.85 as const,
      changeFrequency: "weekly" as const,
    })),
  ];

  const allPages = [
    ...corePages,
    ...servicePages,
    ...buyerPersonaPages,
    ...sellerPersonaPages,
    ...providenceHoaPage,
    ...providencePages,
  ];

  return allPages.map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
