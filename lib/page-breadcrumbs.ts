/**
 * Breadcrumb trails for JSON-LD (BreadcrumbList) on inner pages.
 * Aligns with visible breadcrumbs where they exist on the site.
 */

import { providenceNeighborhoods } from "@/lib/site-config";
import type { BreadcrumbItem } from "@/lib/schema";

const HOME: BreadcrumbItem = { name: "Home", url: "/" };

const STATIC_TRAILS: Record<string, BreadcrumbItem[]> = {
  "/about": [HOME, { name: "About Dr. Jan Duffy", url: "/about" }],
  "/amenities": [
    HOME,
    { name: "Providence Las Vegas", url: "/providence" },
    { name: "Nearby Amenities", url: "/amenities" },
  ],
  "/directions": [
    HOME,
    { name: "Providence Las Vegas", url: "/providence" },
    { name: "Directions", url: "/directions" },
  ],
  "/providence": [HOME, { name: "Providence Las Vegas", url: "/providence" }],
  "/providence/hoa-info": [
    HOME,
    { name: "Providence Las Vegas", url: "/providence" },
    { name: "HOA Information", url: "/providence/hoa-info" },
  ],
  "/buyers": [HOME, { name: "Home Buying Services", url: "/buyers" }],
  "/buyers/first-time-buyers": [
    HOME,
    { name: "Buyers", url: "/buyers" },
    { name: "First-Time Buyers", url: "/buyers/first-time-buyers" },
  ],
  "/buyers/california-relocator": [
    HOME,
    { name: "Buyers", url: "/buyers" },
    { name: "California Relocators", url: "/buyers/california-relocator" },
  ],
  "/sellers": [HOME, { name: "Home Selling Services", url: "/sellers" }],
  "/sellers/move-up": [
    HOME,
    { name: "Sellers", url: "/sellers" },
    { name: "Move-Up Sellers", url: "/sellers/move-up" },
  ],
  "/sellers/downsizing": [
    HOME,
    { name: "Sellers", url: "/sellers" },
    { name: "Downsizing", url: "/sellers/downsizing" },
  ],
  "/sellers/divorce-probate": [
    HOME,
    { name: "Sellers", url: "/sellers" },
    { name: "Divorce & Probate", url: "/sellers/divorce-probate" },
  ],
  "/sellers/relocation": [
    HOME,
    { name: "Sellers", url: "/sellers" },
    { name: "Relocation", url: "/sellers/relocation" },
  ],
  "/contact": [HOME, { name: "Contact", url: "/contact" }],
  "/faq": [HOME, { name: "FAQ", url: "/faq" }],
  "/listings": [HOME, { name: "Listings", url: "/listings" }],
  "/market-report": [HOME, { name: "Market Report", url: "/market-report" }],
  "/market-update": [HOME, { name: "Market Update", url: "/market-update" }],
  "/market-insights": [HOME, { name: "Market Insights", url: "/market-insights" }],
  "/neighborhoods": [HOME, { name: "Neighborhoods", url: "/neighborhoods" }],
  "/services": [HOME, { name: "Services", url: "/services" }],
  "/home-valuation": [HOME, { name: "Home Valuation", url: "/home-valuation" }],
  "/site-map": [HOME, { name: "Site Map", url: "/site-map" }],
  "/google-business": [HOME, { name: "Google Business Profile", url: "/google-business" }],
  "/55-plus-communities": [
    HOME,
    { name: "55+ Active Adult Communities", url: "/55-plus-communities" },
  ],
  "/relocation": [HOME, { name: "Relocation", url: "/relocation" }],
  "/why-berkshire-hathaway": [
    HOME,
    { name: "Why Berkshire Hathaway", url: "/why-berkshire-hathaway" },
  ],
  "/new-construction": [HOME, { name: "New Construction", url: "/new-construction" }],
  "/investment-properties": [
    HOME,
    { name: "Investment Properties", url: "/investment-properties" },
  ],
  "/luxury-homes": [HOME, { name: "Luxury Homes", url: "/luxury-homes" }],
};

function normalizePathname(pathname: string): string {
  if (!pathname) return "/";
  const withoutQuery = pathname.split("?")[0] ?? pathname;
  if (withoutQuery === "/") return "/";
  return withoutQuery.replace(/\/$/, "");
}

function titleFromSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function trailFromPathSegments(path: string): BreadcrumbItem[] {
  const segments = path.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [HOME];
  let acc = "";
  for (const segment of segments) {
    acc += `/${segment}`;
    items.push({ name: titleFromSegment(segment), url: acc });
  }
  return items;
}

/**
 * Returns breadcrumb items for JSON-LD, or null on the homepage.
 */
export function resolveBreadcrumbItems(pathname: string): BreadcrumbItem[] | null {
  const path = normalizePathname(pathname);
  if (path === "/") return null;

  if (STATIC_TRAILS[path]) {
    return STATIC_TRAILS[path];
  }

  const neighborhoodMatch = path.match(/^\/providence\/neighborhoods\/([^/]+)$/);
  if (neighborhoodMatch) {
    const slug = neighborhoodMatch[1];
    const neighborhood = providenceNeighborhoods.find((n) => n.slug === slug);
    return [
      HOME,
      { name: "Providence", url: "/providence" },
      {
        name: neighborhood?.name ?? titleFromSegment(slug),
        url: `/providence/neighborhoods/${slug}`,
      },
    ];
  }

  const listingMatch = path.match(/^\/listings\/([^/]+)$/);
  if (listingMatch) {
    const id = listingMatch[1];
    return [
      HOME,
      { name: "Listings", url: "/listings" },
      { name: "Property Details", url: `/listings/${id}` },
    ];
  }

  return trailFromPathSegments(path);
}
