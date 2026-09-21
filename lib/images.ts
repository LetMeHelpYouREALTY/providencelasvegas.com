/**
 * Site images: Cloudflare Images is the primary hosted CDN; git
 * (`public/images/generated`) is the backup origin.
 *
 * Hosted Images delivery (2026 docs):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 *
 * Account hash is public. Image IDs are written to cloudflare-image-ids.json only
 * after a successful upload (`npm run images:cloudflare`). Predicted IDs are never
 * used — that would 404 until the file exists in Images storage.
 *
 * Do not orange-cloud www.providencelasvegas.com (Vercel origin). A dedicated
 * images hostname on Cloudflare is OK.
 */

import cloudflareImageIds from "./cloudflare-image-ids.json";

export type SiteImageKey =
  | "hero-homes-for-sale"
  | "hero-providence-community"
  | "hero-buyers"
  | "hero-sellers"
  | "hero-listings"
  | "hero-luxury"
  | "hero-new-construction"
  | "hero-55-plus"
  | "hero-relocation"
  | "hero-valuation"
  | "hero-market"
  | "hero-amenities"
  | "hero-contact"
  | "hero-investment"
  | "hero-services"
  | "hero-hoa"
  | "hero-directions"
  | "hero-first-time"
  | "hero-california-relocator"
  | "hero-about"
  | "hero-why-bhhs"
  | "hero-downsizing"
  | "hero-move-up"
  | "hero-divorce-probate"
  | "hero-market-insights"
  | "hero-google-business"
  | "hero-faq"
  | "neighborhood-premium"
  | "neighborhood-standard"
  | "neighborhood-single-story"
  | "neighborhood-parkside"
  | "neighborhood-desert"
  | "neighborhood-culdesac"
  | "og-providence-default"
  | "section-parks"
  | "section-neighborhoods"
  | "section-services"
  | "section-market-stats"
  | "section-why-choose"
  | "section-reviews"
  | "section-faq"
  | "section-cta"
  | "section-office"
  | "section-financing"
  | "section-core-services"
  | "section-buyers-agent"
  | "section-selling"
  | "section-hours"
  | "section-listings-search"
  | "section-contact";

export type SiteImage = {
  key: SiteImageKey;
  /** Heading this asset was created to illustrate */
  heading: string;
  alt: string;
  file: string;
  width: number;
  height: number;
};

const GIT_IMAGE_PREFIX = "/images/generated";

/** Public Images account hash from the Cloudflare dashboard (not a secret). */
export const DEFAULT_CLOUDFLARE_IMAGES_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

/** Public Cloudflare account id (API uploads only; not used in the browser). */
export const DEFAULT_CLOUDFLARE_ACCOUNT_ID = "2cc579c1ec9e426ed585e933ebf4753b";

export const DEFAULT_CLOUDFLARE_IMAGES_VARIANT = "public";

export const siteImages: Record<SiteImageKey, SiteImage> = {
  "hero-homes-for-sale": {
    key: "hero-homes-for-sale",
    heading: "Providence Real Estate | Homes for Sale in Providence Las Vegas",
    alt: "Stucco homes with tile roofs on an HOA street in Providence Las Vegas, NV 89166",
    file: "hero-homes-for-sale.png",
    width: 1920,
    height: 1080,
  },
  "hero-providence-community": {
    key: "hero-providence-community",
    heading: "Providence, Las Vegas",
    alt: "Aerial view of the Providence Las Vegas master-planned community and surrounding desert mountains",
    file: "hero-providence-community.png",
    width: 1920,
    height: 1080,
  },
  "hero-buyers": {
    key: "hero-buyers",
    heading: "Buy Your Providence Home",
    alt: "Front entry of a Providence Las Vegas home with keys at the door",
    file: "hero-buyers.png",
    width: 1920,
    height: 1080,
  },
  "hero-sellers": {
    key: "hero-sellers",
    heading: "Sell Your Providence Las Vegas Home for Top Dollar",
    alt: "Providence Las Vegas home prepared for listing with desert landscaping",
    file: "hero-sellers.png",
    width: 1920,
    height: 1080,
  },
  "hero-listings": {
    key: "hero-listings",
    heading: "Providence Homes for Sale",
    alt: "Homes for sale along a landscaped street in Providence Las Vegas",
    file: "hero-listings.png",
    width: 1920,
    height: 1080,
  },
  "hero-luxury": {
    key: "hero-luxury",
    heading: "Premium Providence Homes",
    alt: "Premium two-story home with stone accents in Oxford Commons style Providence Las Vegas",
    file: "hero-luxury.png",
    width: 1920,
    height: 1080,
  },
  "hero-new-construction": {
    key: "hero-new-construction",
    heading: "Providence New Construction Homes",
    alt: "Newly built model home in a Providence Las Vegas subdivision",
    file: "hero-new-construction.png",
    width: 1920,
    height: 1080,
  },
  "hero-55-plus": {
    key: "hero-55-plus",
    heading: "Active Adult Living Near Providence",
    alt: "Single-story low-maintenance home in northwest Las Vegas near Providence",
    file: "hero-55-plus.png",
    width: 1920,
    height: 1080,
  },
  "hero-relocation": {
    key: "hero-relocation",
    heading: "Relocation to Providence Las Vegas",
    alt: "Moving day at a Providence Las Vegas suburban home",
    file: "hero-relocation.png",
    width: 1920,
    height: 1080,
  },
  "hero-valuation": {
    key: "hero-valuation",
    heading: "What's Your Providence Home Worth?",
    alt: "Kitchen island with market analysis documents for a Providence home valuation",
    file: "hero-valuation.png",
    width: 1920,
    height: 1080,
  },
  "hero-market": {
    key: "hero-market",
    heading: "Providence Real Estate Market",
    alt: "Elevated view of Providence Las Vegas rooftops used for market reporting",
    file: "hero-market.png",
    width: 1920,
    height: 1080,
  },
  "hero-amenities": {
    key: "hero-amenities",
    heading: "Nearby Amenities in Providence Las Vegas",
    alt: "Community park and walking path in Providence Las Vegas",
    file: "hero-amenities.png",
    width: 1920,
    height: 1080,
  },
  "hero-contact": {
    key: "hero-contact",
    heading: "Contact Providence Real Estate",
    alt: "Northwest Las Vegas office plaza near Hualapai Way serving Providence Real Estate",
    file: "hero-contact.png",
    width: 1920,
    height: 1080,
  },
  "hero-investment": {
    key: "hero-investment",
    heading: "Providence Investment Properties",
    alt: "Rental-ready suburban home in North Las Vegas near Providence",
    file: "hero-investment.png",
    width: 1920,
    height: 1080,
  },
  "hero-services": {
    key: "hero-services",
    heading: "Providence Real Estate Services",
    alt: "Real estate consultation table with keys and a house model in Las Vegas",
    file: "hero-services.png",
    width: 1920,
    height: 1080,
  },
  "hero-hoa": {
    key: "hero-hoa",
    heading: "Providence HOA Information",
    alt: "HOA community entrance and streetscape in Providence Las Vegas",
    file: "hero-hoa.png",
    width: 1920,
    height: 1080,
  },
  "hero-directions": {
    key: "hero-directions",
    heading: "Directions to Providence Real Estate",
    alt: "Road toward the northwest Las Vegas office area near Providence",
    file: "hero-directions.png",
    width: 1920,
    height: 1080,
  },
  "hero-first-time": {
    key: "hero-first-time",
    heading: "First-Time Home Buyers in Providence",
    alt: "Walkway leading to a modest two-story home in Providence Las Vegas",
    file: "hero-first-time.png",
    width: 1920,
    height: 1080,
  },
  "hero-california-relocator": {
    key: "hero-california-relocator",
    heading: "California to Providence Relocation",
    alt: "Packed vehicle in the driveway of a Providence Las Vegas home",
    file: "hero-california-relocator.png",
    width: 1920,
    height: 1080,
  },
  "hero-about": {
    key: "hero-about",
    heading: "Your Providence Las Vegas Real Estate Agent",
    alt: "Providence Real Estate office interior with a desert mountain view, Las Vegas NV 89166",
    file: "hero-about.png",
    width: 1920,
    height: 1080,
  },
  "hero-why-bhhs": {
    key: "hero-why-bhhs",
    heading: "Why Berkshire Hathaway HomeServices",
    alt: "Professional real estate office lobby in Las Vegas",
    file: "hero-why-bhhs.png",
    width: 1920,
    height: 1080,
  },
  "hero-downsizing": {
    key: "hero-downsizing",
    heading: "Downsizing in Providence Las Vegas",
    alt: "Single-story patio home with a covered backyard in Providence Las Vegas",
    file: "hero-downsizing.png",
    width: 1920,
    height: 1080,
  },
  "hero-move-up": {
    key: "hero-move-up",
    heading: "Move-Up Homes in Providence",
    alt: "Move-up homes of different sizes on a Providence Las Vegas street",
    file: "hero-move-up.png",
    width: 1920,
    height: 1080,
  },
  "hero-divorce-probate": {
    key: "hero-divorce-probate",
    heading: "Divorce and Probate Real Estate",
    alt: "Quiet closing table with house keys at a Las Vegas real estate office",
    file: "hero-divorce-probate.png",
    width: 1920,
    height: 1080,
  },
  "hero-market-insights": {
    key: "hero-market-insights",
    heading: "Providence Market Insights",
    alt: "Northwest Las Vegas desert corridor near Providence homes",
    file: "hero-market-insights.png",
    width: 1920,
    height: 1080,
  },
  "hero-google-business": {
    key: "hero-google-business",
    heading: "Providence Real Estate on Google",
    alt: "Map pin on a phone beside office keys for Providence Real Estate Las Vegas",
    file: "hero-google-business.png",
    width: 1920,
    height: 1080,
  },
  "hero-faq": {
    key: "hero-faq",
    heading: "Providence Las Vegas Real Estate FAQs",
    alt: "Providence Real Estate office waiting area in Las Vegas",
    file: "hero-faq.png",
    width: 1920,
    height: 1080,
  },
  "neighborhood-premium": {
    key: "neighborhood-premium",
    heading: "Premier Providence Neighborhoods",
    alt: "Premium two-story homes with stone accents in Providence Las Vegas",
    file: "neighborhood-premium.png",
    width: 1920,
    height: 1080,
  },
  "neighborhood-standard": {
    key: "neighborhood-standard",
    heading: "Providence Neighborhood Homes",
    alt: "Two-story stucco homes on an HOA street in Providence Las Vegas",
    file: "neighborhood-standard.png",
    width: 1920,
    height: 1080,
  },
  "neighborhood-single-story": {
    key: "neighborhood-single-story",
    heading: "Single-Story Providence Homes",
    alt: "Single-story stucco homes on a quiet Providence Las Vegas street",
    file: "neighborhood-single-story.png",
    width: 1920,
    height: 1080,
  },
  "neighborhood-parkside": {
    key: "neighborhood-parkside",
    heading: "Homes Near Providence Parks",
    alt: "Providence Las Vegas homes along a park greenbelt and walking path",
    file: "neighborhood-parkside.png",
    width: 1920,
    height: 1080,
  },
  "neighborhood-desert": {
    key: "neighborhood-desert",
    heading: "Desert-View Providence Neighborhoods",
    alt: "Two-story stucco homes with desert landscaping and mountain views in Providence Las Vegas",
    file: "neighborhood-desert.png",
    width: 1920,
    height: 1080,
  },
  "neighborhood-culdesac": {
    key: "neighborhood-culdesac",
    heading: "Cul-de-Sac Providence Neighborhoods",
    alt: "Cul-de-sac of tile-roof homes in the Providence Las Vegas master-planned community",
    file: "neighborhood-culdesac.png",
    width: 1920,
    height: 1080,
  },
  "og-providence-default": {
    key: "og-providence-default",
    heading: "Providence Real Estate | Homes for Sale in Providence Las Vegas",
    alt: "Golden-hour streetscape of homes in Providence Las Vegas, NV 89166",
    file: "og-providence-default.png",
    width: 1200,
    height: 630,
  },
  "section-parks": {
    key: "section-parks",
    heading: "Community Parks",
    alt: "Walking path and ramada at a Providence Las Vegas community park",
    file: "section-parks.png",
    width: 1600,
    height: 1200,
  },
  "section-neighborhoods": {
    key: "section-neighborhoods",
    heading: "The Neighborhoods of Providence",
    alt: "Multiple Providence Las Vegas neighborhood streetscapes",
    file: "section-neighborhoods.png",
    width: 1600,
    height: 1200,
  },
  "section-services": {
    key: "section-services",
    heading: "Services & Locations",
    alt: "Map and house keys on a consultation table for Providence real estate services",
    file: "section-services.png",
    width: 1600,
    height: 1200,
  },
  "section-market-stats": {
    key: "section-market-stats",
    heading: "Providence Real Estate Market",
    alt: "Dusk lights across Providence Las Vegas homes used for market snapshot",
    file: "section-market-stats.png",
    width: 1600,
    height: 1200,
  },
  "section-why-choose": {
    key: "section-why-choose",
    heading: "Why Providence Real Estate",
    alt: "Handshake over house keys in a Providence Las Vegas home",
    file: "section-why-choose.png",
    width: 1600,
    height: 1200,
  },
  "section-reviews": {
    key: "section-reviews",
    heading: "What Our Clients Say",
    alt: "Tablet showing a map listing beside a window view of Las Vegas homes",
    file: "section-reviews.png",
    width: 1600,
    height: 1200,
  },
  "section-faq": {
    key: "section-faq",
    heading: "Providence Las Vegas Real Estate FAQs",
    alt: "Notebook, model house, and glasses on a desk at Providence Real Estate",
    file: "section-faq.png",
    width: 1600,
    height: 1200,
  },
  "section-cta": {
    key: "section-cta",
    heading: "Call Providence Real Estate",
    alt: "House keys and a phone on a patio table overlooking a Las Vegas backyard",
    file: "section-cta.png",
    width: 1600,
    height: 1200,
  },
  "section-office": {
    key: "section-office",
    heading: "Office Location & Hours",
    alt: "Northwest Las Vegas commercial plaza near Providence Real Estate on N Hualapai Way",
    file: "section-office.png",
    width: 1600,
    height: 1200,
  },
  "section-financing": {
    key: "section-financing",
    heading: "First-Time Buyer Financing Options",
    alt: "Kitchen island with house keys and a calculator for Providence home financing",
    file: "section-financing.png",
    width: 1600,
    height: 1200,
  },
  "section-core-services": {
    key: "section-core-services",
    heading: "Core Real Estate Services",
    alt: "Floor plans, house keys, and a neighborhood map on a consultation table in Las Vegas",
    file: "section-core-services.png",
    width: 1600,
    height: 1200,
  },
  "section-buyers-agent": {
    key: "section-buyers-agent",
    heading: "Why You Need a Buyer's Agent",
    alt: "House keys in the front door of a Providence Las Vegas home",
    file: "section-buyers-agent.png",
    width: 1600,
    height: 1200,
  },
  "section-selling": {
    key: "section-selling",
    heading: "Sell Your Providence Home",
    alt: "Listing-ready Providence Las Vegas home exterior at dusk",
    file: "section-selling.png",
    width: 1600,
    height: 1200,
  },
  "section-hours": {
    key: "section-hours",
    heading: "Business Hours",
    alt: "Providence Real Estate office waiting area in Las Vegas, NV 89166",
    file: "section-hours.png",
    width: 1600,
    height: 1200,
  },
  "section-listings-search": {
    key: "section-listings-search",
    heading: "Popular Property Searches in Providence",
    alt: "Street of homes for sale in Providence Las Vegas, NV 89166",
    file: "section-listings-search.png",
    width: 1600,
    height: 1200,
  },
  "section-contact": {
    key: "section-contact",
    heading: "Get In Touch",
    alt: "Phone, house keys, and a neighborhood map on a Providence Real Estate desk",
    file: "section-contact.png",
    width: 1600,
    height: 1200,
  },
};

const PREMIUM_NEIGHBORHOODS = new Set([
  "oxford-commons",
  "saratoga-highlands",
  "auburn-bradford",
  "verada-view",
  "highgate",
  "kensington",
  "chestnut-hill",
  "easton-place",
]);

const SINGLE_STORY_NEIGHBORHOODS = new Set(["living-smart", "thrive", "westminster"]);

const PARKSIDE_NEIGHBORHOODS = new Set([
  "manchester-park",
  "franklin-park",
  "oak-ridge",
  "brighton",
  "hearthstone-brookstone",
]);

const DESERT_VIEW_NEIGHBORHOODS = new Set([
  "verada-view",
  "northern-terrace",
  "west-end",
  "windimere",
  "somerset",
  "emerson",
]);

export function neighborhoodImageKey(slug: string): SiteImageKey {
  if (PREMIUM_NEIGHBORHOODS.has(slug)) return "neighborhood-premium";
  if (SINGLE_STORY_NEIGHBORHOODS.has(slug)) return "neighborhood-single-story";
  if (PARKSIDE_NEIGHBORHOODS.has(slug)) return "neighborhood-parkside";
  if (DESERT_VIEW_NEIGHBORHOODS.has(slug)) return "neighborhood-desert";
  return "neighborhood-culdesac";
}

function gitSrc(file: string): string {
  return `${GIT_IMAGE_PREFIX}/${file}`;
}

function cloudflareSrc(imageId: string): string {
  const customBase = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_BASE_URL?.replace(/\/$/, "");
  const variant =
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_VARIANT || DEFAULT_CLOUDFLARE_IMAGES_VARIANT;
  const accountHash =
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH ||
    DEFAULT_CLOUDFLARE_IMAGES_ACCOUNT_HASH;

  if (customBase) {
    return `${customBase}/${imageId}/${variant}`;
  }

  return `https://imagedelivery.net/${accountHash}/${imageId}/${variant}`;
}

export type ResolvedSiteImage = SiteImage & {
  src: string;
  source: "cloudflare" | "git";
  /**
   * Cloudflare Images transcodes AVIF/WebP at the edge. Skip Vercel’s optimizer
   * so the browser hits imagedelivery.net directly.
   */
  unoptimized: boolean;
};

export function getSiteImage(key: SiteImageKey): ResolvedSiteImage {
  const image = siteImages[key];
  const cfId = (cloudflareImageIds as Record<string, string>)[key]?.trim();

  if (cfId) {
    return {
      ...image,
      src: cloudflareSrc(cfId),
      source: "cloudflare",
      unoptimized: true,
    };
  }

  return { ...image, src: gitSrc(image.file), source: "git", unoptimized: false };
}

export function ogImageFor(key: SiteImageKey = "og-providence-default") {
  const image = getSiteImage(key);
  return {
    url: image.src,
    width: image.width,
    height: image.height,
    alt: image.alt,
  };
}

const SITE_ORIGIN = "https://www.providencelasvegas.com";

/** Absolute URL for JSON-LD / sitemap. Git paths are origin-prefixed; Cloudflare URLs stay as-is. */
export function absoluteSiteImageSrc(
  key: SiteImageKey,
  origin = SITE_ORIGIN
): string {
  const { src } = getSiteImage(key);
  if (/^https?:\/\//i.test(src)) return src;
  return `${origin.replace(/\/$/, "")}${src}`;
}

export function pageImageMetadata(key: SiteImageKey) {
  const og = ogImageFor(key);
  return {
    openGraph: {
      images: [og],
    },
    twitter: {
      card: "summary_large_image" as const,
      images: [og.url],
    },
  };
}
