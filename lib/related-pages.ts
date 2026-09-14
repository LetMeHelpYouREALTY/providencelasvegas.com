/**
 * Related Pages Configuration
 * Defines internal linking relationships for SEO and user navigation
 */

import { realscoutUrls } from "./site-config";

export const relatedPagesMap = {
  // Homepage
  home: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Providence Neighborhoods",
      description: "Explore all 27 neighborhoods in the Providence master-planned community",
      href: "/providence",
    },
    {
      title: "Nearby Amenities Map",
      description: "Restaurants, parks, shopping, and more near Providence Las Vegas",
      href: "/amenities",
    },
    {
      title: "Premium Providence Homes",
      description: "Oxford Commons, Saratoga Highlands, and premier Providence neighborhoods",
      href: "/luxury-homes",
    },
    {
      title: "Providence Market Report",
      description: "Current Providence real estate market statistics and trends",
      href: "/market-report",
    },
    {
      title: "Contact Dr. Jan Duffy",
      description: "Schedule a consultation for buying or selling in Providence",
      href: "/contact",
    },
  ],

  // Providence pages
  providence: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Nearby Amenities Map",
      description: "Restaurants, parks, shopping, and more near Providence Las Vegas",
      href: "/amenities",
    },
    {
      title: "Get Directions",
      description: "Plan your visit with driving, walking, transit, or cycling routes",
      href: "/directions",
    },
    {
      title: "Why Berkshire Hathaway",
      description: "Learn about the BHHS advantage and Warren Buffett's real estate brand",
      href: "/why-berkshire-hathaway",
    },
    {
      title: "Contact Dr. Jan Duffy",
      description: "Schedule a consultation for buying or selling in Providence",
      href: "/contact",
    },
    {
      title: "Providence Market Insights",
      description: "Providence market trends and analysis",
      href: "/market-insights",
    },
  ],

  providenceNeighborhood: [
    {
      title: "All Providence Neighborhoods",
      description: "Browse all 27 neighborhoods in the Providence community",
      href: "/providence",
    },
    {
      title: "Nearby Amenities Map",
      description: "Restaurants, parks, shopping, and more near Providence Las Vegas",
      href: "/amenities",
    },
    {
      title: "Get Directions",
      description: "Plan your visit with driving, walking, transit, or cycling routes",
      href: "/directions",
    },
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Providence HOA Information",
      description: "Resale certificates, Design Review, and HOA process",
      href: "/providence/hoa-info",
    },
    {
      title: "Contact About This Neighborhood",
      description: "Get expert guidance from Dr. Jan Duffy about this community",
      href: "/contact",
    },
  ],

  // Buyer pages
  buyers: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Providence Neighborhoods",
      description: "Explore all 27 neighborhoods in the Providence community",
      href: "/providence",
    },
    {
      title: "First-Time Home Buyers",
      description: "Essential guide for first-time buyers in Providence",
      href: "/buyers/first-time-buyers",
    },
    {
      title: "California to Providence",
      description: "Moving from California? Why Providence is perfect for CA relocators",
      href: "/buyers/california-relocator",
    },
    {
      title: "Premium Providence Homes",
      description: "Oxford Commons, Saratoga Highlands, and premier Providence neighborhoods",
      href: "/luxury-homes",
    },
    {
      title: "Nearby Amenities Map",
      description: "Restaurants, parks, shopping near Providence Las Vegas",
      href: "/amenities",
    },
  ],

  // Seller pages
  sellers: [
    {
      title: "Search Providence Homes",
      description: "Browse current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Free Home Valuation",
      description: "Get a free estimate of your home's current market value",
      href: "/home-valuation",
    },
    {
      title: "Move-Up Sellers",
      description: "Ready to upgrade? Learn how to sell and buy simultaneously",
      href: "/sellers/move-up",
    },
    {
      title: "Downsizing Guide",
      description: "Transition to a smaller home with expert guidance",
      href: "/sellers/downsizing",
    },
    {
      title: "Relocation Sellers",
      description: "Selling your home due to relocation? We can help",
      href: "/sellers/relocation",
    },
    {
      title: "Providence HOA Information",
      description: "Resale certificates and Design Review process",
      href: "/providence/hoa-info",
    },
  ],

  // Service pages
  luxuryHomes: [
    {
      title: "Search Providence Homes",
      description: "View luxury and all listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Oxford Commons Providence",
      description: "Premier Providence neighborhood with modern homes",
      href: "/providence/neighborhoods/oxford-commons",
    },
    {
      title: "Saratoga Highlands Providence",
      description: "Upscale Providence neighborhood with desirable floor plans",
      href: "/providence/neighborhoods/saratoga-highlands",
    },
    {
      title: "Auburn & Bradford Providence",
      description: "Providence neighborhood with HOA streets and park access",
      href: "/providence/neighborhoods/auburn-bradford",
    },
  ],

  fiftyPlusCommunities: [
    {
      title: "Search Providence Homes",
      description: "Browse single-story and low-maintenance options in Providence",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Age-Restricted Options Near Providence",
      description: "55+ communities within driving distance of Providence",
      href: "/55-plus-communities",
    },
    {
      title: "Providence New Construction",
      description: "New build options across Providence neighborhoods",
      href: "/new-construction",
    },
    {
      title: "Providence HOA Information",
      description: "Resale certificates, Design Review, and HOA process",
      href: "/providence/hoa-info",
    },
  ],

  newConstruction: [
    {
      title: "Search Providence New Construction",
      description: "Browse new build and all Providence listings",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Oxford Commons Providence",
      description: "Providence neighborhood with new construction inventory",
      href: "/providence/neighborhoods/oxford-commons",
    },
    {
      title: "Saratoga Highlands Providence",
      description: "Providence neighborhood with builder homes",
      href: "/providence/neighborhoods/saratoga-highlands",
    },
    {
      title: "All 27 Providence Neighborhoods",
      description: "Explore every Providence community",
      href: "/providence",
    },
  ],

  // Neighborhood pages
  neighborhoods: [
    {
      title: "Search Providence Homes",
      description: "View current listings across Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Providence Las Vegas",
      description: "Master-planned community with 27 neighborhoods",
      href: "/providence",
    },
    {
      title: "Auburn & Bradford Providence",
      description: "Providence neighborhood with park access and mixed floor plans",
      href: "/providence/neighborhoods/auburn-bradford",
    },
    {
      title: "Oxford Commons Providence",
      description: "Premier Providence neighborhood",
      href: "/providence/neighborhoods/oxford-commons",
    },
    {
      title: "Saratoga Highlands Providence",
      description: "Upscale Providence neighborhood",
      href: "/providence/neighborhoods/saratoga-highlands",
    },
  ],

  summerlin: [
    { title: "Providence Las Vegas", description: "Master-planned community with 27 neighborhoods", href: "/providence" },
    { title: "Search Providence Homes", description: "View all Providence listings", href: realscoutUrls.searchRelated },
    { title: "Premium Providence Homes", description: "Oxford Commons, Saratoga Highlands, custom upgrades", href: "/luxury-homes" },
  ],

  henderson: [
    { title: "Providence Las Vegas", description: "Master-planned community with 27 neighborhoods", href: "/providence" },
    { title: "Search Providence Homes", description: "View all Providence listings", href: realscoutUrls.searchRelated },
    { title: "Age-Restricted Options Near Providence", description: "55+ communities near Providence", href: "/55-plus-communities" },
  ],

  // Market pages
  marketReport: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Market Update",
      description: "Latest Providence Las Vegas real estate market trends and news",
      href: "/market-update",
    },
    {
      title: "Market Insights",
      description: "In-depth analysis of Providence market conditions",
      href: "/market-insights",
    },
    {
      title: "Home Valuation",
      description: "Get a free estimate of your home's current market value",
      href: "/home-valuation",
    },
  ],

  // About/Contact pages
  about: [
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Providence Neighborhoods",
      description: "Explore all 27 neighborhoods in the Providence community",
      href: "/providence",
    },
    {
      title: "Why Berkshire Hathaway",
      description: "Learn about the BHHS brand and its Warren Buffett connection",
      href: "/why-berkshire-hathaway",
    },
    {
      title: "Contact Dr. Jan Duffy",
      description: "Schedule a consultation or property showing",
      href: "/contact",
    },
    {
      title: "Client Reviews",
      description: "See what clients say about working with Dr. Jan Duffy",
      href: "/google-business",
    },
    {
      title: "Get Directions",
      description: "Plan your visit to our Providence office",
      href: "/directions",
    },
  ],

  contact: [
    {
      title: "Get Directions",
      description: "Plan your visit with driving, walking, transit, or cycling directions",
      href: "/directions",
    },
    {
      title: "Nearby Amenities Map",
      description: "Restaurants, parks, shopping near our Providence office",
      href: "/amenities",
    },
    {
      title: "Free Home Valuation",
      description: "Find out what your home is worth in today's market",
      href: "/home-valuation",
    },
    {
      title: "Search Properties",
      description: "Browse current Providence Las Vegas listings",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "About Dr. Jan Duffy",
      description: "Learn about your BHHS Nevada Properties agent",
      href: "/about",
    },
    {
      title: "Providence Neighborhoods",
      description: "Explore all 27 Providence Las Vegas neighborhoods",
      href: "/providence",
    },
  ],

  amenities: [
    {
      title: "Get Directions",
      description: "Plan your visit to our Providence office",
      href: "/directions",
    },
    {
      title: "Providence Neighborhoods",
      description: "Explore all 27 neighborhoods in Providence Las Vegas",
      href: "/providence",
    },
    {
      title: "Contact Dr. Jan Duffy",
      description: "Schedule a consultation for buying or selling in Providence",
      href: "/contact",
    },
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
    {
      title: "Providence HOA Information",
      description: "Community parks and HOA details",
      href: "/providence/hoa-info",
    },
  ],

  directions: [
    {
      title: "Nearby Amenities Map",
      description: "Restaurants, parks, shopping near Providence Las Vegas",
      href: "/amenities",
    },
    {
      title: "Contact Dr. Jan Duffy",
      description: "Schedule an appointment before you visit",
      href: "/contact",
    },
    {
      title: "Providence Neighborhoods",
      description: "Explore all 27 Providence Las Vegas neighborhoods",
      href: "/providence",
    },
    {
      title: "Search Providence Homes",
      description: "View current listings in Providence Las Vegas",
      href: realscoutUrls.searchRelated,
    },
  ],
};

/**
 * Get related pages for a specific page type
 */
export function getRelatedPages(pageType: keyof typeof relatedPagesMap) {
  return relatedPagesMap[pageType] || [];
}
