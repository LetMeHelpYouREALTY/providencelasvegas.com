// Site Configuration - Providence Real Estate (GBP aligned)
// Providence, North Las Vegas NV 89166

export const siteConfig = {
  name: "Providence Real Estate",
  fullName: "Providence Real Estate | Homes for Sale in Providence Las Vegas",
  brandName: "Providence Real Estate",
  shortName: "Providence Real Estate",
  url: "https://www.providencelasvegas.com",
  description:
    "Providence Real Estate. Homes for sale in Providence Las Vegas and North Las Vegas. Real Estate Agency serving Providence, NV 89166. Call (702) 744-2993.",
};

export const agentInfo = {
  name: "Providence Real Estate",
  title: "REALTOR®",
  license: "S.0197614.LLC",
  phone: "(702) 744-2993",
  phoneFormatted: "(702) 744-2993",
  phoneTel: "tel:+17027442993",
  email: "DrDuffy@ProvidenceLasVegas.com",
  brokerage: "Providence Real Estate",
};

export const officeInfo = {
  name: "Providence Real Estate",
  address: {
    street: "7181 N Hualapai Way #135",
    city: "Las Vegas",
    state: "NV",
    zip: "89166",
    full: "7181 N Hualapai Way #135, Las Vegas, NV 89166",
  },
  coordinates: {
    lat: 36.2889,
    lng: -115.2717,
  },
  phone: "(702) 744-2993",
  phoneTel: "tel:+17027442993",
};

// GBP CTA URLs – from Google Business Profile
export const gbpUrls = {
  profile: "https://g.page/r/Ca9gwAWH5oLcEBM",
  directions: "https://www.google.com/maps/dir//7181+N+Hualapai+Way+%23135,+Las+Vegas,+NV+89166",
  /** Place link (View on Google Maps) – short URL to Providence Real Estate on Google Maps */
  maps: "https://maps.app.goo.gl/mDMRBtoF7WSJSdkZ7",
  review: "https://g.page/r/Ca9gwAWH5oLcEBM/review",
  /** iframe embed URL – highlights Providence Real Estate, no API key required */
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205815.2009312783!2d-115.62090050546874!3d36.2913857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c89382173c649b%3A0xdc82e68705c060af!2sProvidence%20Real%20Estate!5e0!3m2!1sen!2sus!4v1771252456301!5m2!1sen!2sus",
};

// RealScout shared search link - Create Search Link from RealScout dashboard
const REALSCOUT_SHARED_SEARCH_BASE =
  "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xODE0Mw==";
const UTM_BASE =
  "utm_campaign=providence_search&utm_source=providencelasvegas&utm_medium=website";

/** Get RealScout shared search URL with UTM tracking. Use different content per placement. */
export function getRealScoutSearchUrl(utmContent: string): string {
  return `${REALSCOUT_SHARED_SEARCH_BASE}?${UTM_BASE}&utm_content=${utmContent}`;
}

export const realscoutUrls = {
  /** Main RealScout site (no shared search) */
  main: "https://drjanduffy.realscout.com/",
  /** Shared search - hero placement */
  searchHero: getRealScoutSearchUrl("hero"),
  /** Shared search - footer placement */
  searchFooter: getRealScoutSearchUrl("footer"),
  /** Shared search - listings section */
  searchListings: getRealScoutSearchUrl("listings"),
  /** Shared search - navbar */
  searchNavbar: getRealScoutSearchUrl("navbar"),
  /** Shared search - about page */
  searchAbout: getRealScoutSearchUrl("about"),
  /** Shared search - CTA section */
  searchCta: getRealScoutSearchUrl("cta"),
  /** Shared search - 55+ communities */
  search55Plus: getRealScoutSearchUrl("55_plus"),
  /** Shared search - listing detail page */
  searchListingDetail: getRealScoutSearchUrl("listing_detail"),
  /** Shared search - featured properties */
  searchFeatured: getRealScoutSearchUrl("featured"),
  /** Shared search - related pages */
  searchRelated: getRealScoutSearchUrl("related"),
  /** Shared search - listings page */
  searchListingsPage: getRealScoutSearchUrl("listings_page"),
  /** Shared search - contact page */
  searchContact: getRealScoutSearchUrl("contact"),
  /** Shared search - buyers page */
  searchBuyers: getRealScoutSearchUrl("buyers"),
  /** Shared search - homepage services section */
  searchHomepageServices: getRealScoutSearchUrl("homepage_services"),
  /** Shared search - downsizing page (single-story, 55+) */
  searchDownsizing: getRealScoutSearchUrl("downsizing"),
  /** Shared search - relocation page */
  searchRelocation: getRealScoutSearchUrl("relocation"),
};

// Providence community (from providencelvhoa.com)
export const providenceCommunity = {
  neighborhoodCount: 27,
  homeCount: "5,600+",
  parks: [
    { name: "The Promenade", slug: "the-promenade" },
    { name: "Knickerbocker Park", slug: "knickerbocker-park" },
    { name: "Huckleberry Park", slug: "huckleberry-park" },
  ],
  hoaAssessmentDueDates: "Jan 1, Apr 1, Jul 1, Oct 1",
  hoaUrl: "https://www.providencelvhoa.com/home/",
  neighborhoodsUrl: "https://www.providencelvhoa.com/neighborhood-communities-2/",
};

// The 27 neighborhoods of Providence (from providencelvhoa.com)
export const providenceNeighborhoods = [
  { name: "Auburn & Bradford", slug: "auburn-bradford" },
  { name: "Bar Arbor Glen", slug: "bar-arbor-glen" },
  { name: "Barrington Manor", slug: "barrington-manor" },
  { name: "Brighton", slug: "brighton" },
  { name: "Cambridge", slug: "cambridge" },
  { name: "Chestnut Hill", slug: "chestnut-hill" },
  { name: "Easton Place", slug: "easton-place" },
  { name: "Emerson", slug: "emerson" },
  { name: "Franklin Park", slug: "franklin-park" },
  { name: "Hearthstone/Brookstone", slug: "hearthstone-brookstone" },
  { name: "Highgate", slug: "highgate" },
  { name: "Kensington", slug: "kensington" },
  { name: "Living Smart", slug: "living-smart" },
  { name: "Madison Colony", slug: "madison-colony" },
  { name: "Madison Grove", slug: "madison-grove" },
  { name: "Manchester Park", slug: "manchester-park" },
  { name: "Monticello/Liberty Hill", slug: "monticello-liberty-hill" },
  { name: "Northern Terrace", slug: "northern-terrace" },
  { name: "Oak Ridge", slug: "oak-ridge" },
  { name: "Oxford Commons", slug: "oxford-commons" },
  { name: "Saratoga Highlands", slug: "saratoga-highlands" },
  { name: "Somerset", slug: "somerset" },
  { name: "Thrive", slug: "thrive" },
  { name: "Verada View", slug: "verada-view" },
  { name: "West End", slug: "west-end" },
  { name: "Westminster", slug: "westminster" },
  { name: "Windimere", slug: "windimere" },
];

// Market Statistics (Updated September 2026 from GLVAR / 89166 list data)
export const marketStats = {
  lastUpdated: "September 2026",
  sourceLabel:
    "Southern Nevada sold median: Las Vegas REALTORS (GLVAR) August 2026 closings, reported Sept 9, 2026. ZIP 89166 figures are median asking prices, not sold prices.",
  lasVegas: {
    medianPrice: 475000,
    medianPriceFormatted: "$475,000",
    yearOverYearChange: "-1.0%",
    daysOnMarket: 25,
    activeListings: 306,
    closedSales: 2340,
    inventoryMonths: 2.1,
    soldLabel: "Southern Nevada single-family median sold (Aug 2026)",
  },
  zip89166: {
    medianListPrice: 544500,
    medianListPriceFormatted: "$544,500",
    activeListings: 306,
    daysOnMarket: 25,
    listLabel: "ZIP 89166 median list price (Sept 2026)",
  },
  henderson: {
    medianPrice: 485000,
    medianPriceFormatted: "$485,000",
    yearOverYearChange: "+5.1%",
    daysOnMarket: 24,
    activeListings: 1280,
  },
  summerlin: {
    medianPrice: 625000,
    medianPriceFormatted: "$625,000",
    yearOverYearChange: "+6.8%",
    daysOnMarket: 22,
    luxuryMedian: 1200000,
    luxuryMedianFormatted: "$1.2M",
  },
  luxury: {
    medianPrice: 1200000,
    medianPriceFormatted: "$1.2M",
    activeListings: 890,
    daysOnMarket: 45,
    pricePerSqFt: 385,
  },
};

// Recent sales - add new entries as you close (link to BHHSNV listing)
export const recentSales = [
  {
    address: "10559 Pelican Island Avenue",
    city: "Las Vegas",
    state: "NV",
    zip: "89166",
    area: "Providence",
    listingUrl: "https://www.bhhsnv.com/single-family/glv/2754305/10559-pelican-island-avenue-las-vegas-nv-89166",
  },
];

// Agent Stats
export const agentStats = {
  servingSince: 2008,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
  averageRating: 4.9,
  reviewCount: 200,
};

// Value Propositions
export const valuePropositions = {
  main: "When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name synonymous with trust, ethical standards, and financial strength—the same principles that built Warren Buffett's empire.",
  trust:
    "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents.",
  expertise:
    "Serving Providence Las Vegas since 2008 with $127M+ in closed transactions, Dr. Jan Duffy combines deep Providence market knowledge with the resources of a global brand.",
  providence:
    "Providence is a master-planned community in Las Vegas with 27 neighborhoods and more than 5,600 homes. Each neighborhood has its own amenities. Residents enjoy three community parks: The Promenade, Knickerbocker Park, and Huckleberry Park.",
};

/** @deprecated Use providenceNeighborhoods. Kept for legacy compatibility. */
export const neighborhoods = providenceNeighborhoods.slice(0, 10).map((n) => ({
  name: n.name,
  slug: n.slug,
  description: `Providence Las Vegas neighborhood`,
  medianPrice: "$450,000",
  highlights: ["Providence parks", "HOA community", "North Las Vegas", "89166"],
}));

// Services offered
export const services = [
  {
    name: "Home Buying",
    slug: "buyers",
    description: "Expert guidance through every step of the home buying process",
    icon: "Home",
  },
  {
    name: "Home Selling",
    slug: "sellers",
    description: "Maximize your home's value with professional marketing and negotiation",
    icon: "TrendingUp",
  },
  {
    name: "Premium Providence Homes",
    slug: "luxury-homes",
    description: "Oxford Commons, Saratoga Highlands, Auburn & Bradford and premium Providence listings",
    icon: "Star",
  },
  {
    name: "New Construction",
    slug: "new-construction",
    description: "Free buyer representation for new home purchases",
    icon: "Building",
  },
  {
    name: "Investment Properties",
    slug: "investment-properties",
    description: "Strategic consulting for rental and investment opportunities",
    icon: "DollarSign",
  },
  {
    name: "Relocation",
    slug: "relocation",
    description: "California to Providence relocation assistance",
    icon: "Truck",
  },
  {
    name: "Home Valuation",
    slug: "home-valuation",
    description: "Free property valuations using current market data",
    icon: "Calculator",
  },
  {
    name: "Market Analysis",
    slug: "market-report",
    description: "Providence Las Vegas real estate market insights",
    icon: "BarChart",
  },
];

// Expert quotes from Dr. Jan Duffy
export const expertQuotes = {
  market: `"The Providence market remains strong heading into 2026. We're seeing continued demand from California relocators and remote workers. Well-priced Providence homes sell quickly. Buyers have some negotiating power in balanced segments."`,
  buyers: `"My job isn't just to show you houses—it's to make sure you don't overpay, that you understand what you're buying, and that you're protected through every step of the transaction."`,
  sellers: `"Pricing your home correctly from day one is the single most important factor in getting top dollar. Overpriced homes sit, and every day on market costs you money."`,
  luxury: `"Luxury buyers expect discretion, market expertise, and flawless execution. In this price range, one wrong move can cost hundreds of thousands of dollars."`,
  investment: `"Providence and North Las Vegas rental yields can be competitive. Dr. Jan analyzes cap rates and appreciation potential for Providence neighborhoods."`,
  relocation: `"Moving to a new city is stressful enough. I handle everything from neighborhood tours to school research to contractor referrals so you can focus on your new beginning."`,
  newConstruction: `"Builders have sales agents who work for them, not you. Having your own representation costs you nothing but can save you tens of thousands in upgrades and negotiations."`,
  valueProposition: `"When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I tell them: you're not just getting me—you're getting a global network of 50,000 agents, world-class marketing, and a brand that's synonymous with trust."`,
};

// Common FAQs
export const commonFAQs = {
  general: [
    {
      question: "Why should I choose a Berkshire Hathaway HomeServices agent?",
      answer:
        "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents. When you're making the biggest purchase of your life, that trust matters.",
    },
    {
      question: "What areas does Berkshire Hathaway HomeServices Nevada Properties cover?",
      answer:
        "BHHS Nevada Properties serves Providence Las Vegas and all 27 Providence neighborhoods. Dr. Jan Duffy specializes in Providence HOA resale certificates, Design Review, new construction, and neighborhood comparisons across Oxford Commons, Saratoga Highlands, Auburn & Bradford, and every Providence community.",
    },
    {
      question: "How do Berkshire Hathaway HomeServices agents get paid?",
      answer:
        "Commission structures are negotiable. Dr. Jan Duffy offers transparent pricing and will walk you through all costs before you sign anything. For buyers, our services are typically free as commissions are paid by the seller.",
    },
    {
      question: "What is Dr. Jan Duffy's experience in Providence real estate?",
      answer:
        "Dr. Jan Duffy has been serving Providence Las Vegas since 2008, with $127M+ in closed transactions and 500+ satisfied clients. Her expertise spans all 27 Providence neighborhoods—residential, premium homes, investment, and new construction.",
    },
  ],
  buying: [
    {
      question: "How long does the home buying process take in Providence?",
      answer:
        "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days. The timeline depends on financing, inspections, and other contingencies.",
    },
    {
      question: "Do I need a pre-approval before looking at homes?",
      answer:
        "Yes, a pre-approval letter is essential. It shows sellers you're serious and gives you a clear budget. Dr. Jan can connect you with trusted local lenders who offer competitive rates.",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "Down payment requirements vary: FHA loans require 3.5%, conventional loans typically 3-20%, and VA/USDA loans may require 0% down. Dr. Jan can connect you with lenders who specialize in various loan programs.",
    },
  ],
  selling: [
    {
      question: "What is my home worth in today's Las Vegas market?",
      answer:
        "Home values depend on location, condition, size, and recent comparable sales. Dr. Jan provides free, comprehensive home valuations using current MLS data and her expertise serving Las Vegas since 2008.",
    },
    {
      question: "How long will it take to sell my home?",
      answer:
        "Currently, well-priced homes in Las Vegas are selling in an average of 28 days. Luxury homes may take longer (45+ days). Pricing strategy is crucial—overpriced homes can sit for months.",
    },
    {
      question: "What do I need to do to prepare my home for sale?",
      answer:
        "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional photography are the highest-ROI improvements.",
    },
  ],
};
