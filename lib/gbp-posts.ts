// GBP Posts - Weekly posts for freshness signal
// Posts are a modest but real ranking factor (a few percent)

export interface GBPPost {
  id: string;
  type: "update" | "offer" | "event" | "product";
  title: string;
  content: string;
  cta?: {
    text: string;
    url: string;
  };
  publishDate: string;
  expiresDate?: string;
  keywords: string[]; // Natural keyword inclusion
}

// Template posts - Rotate these weekly
export const gbpPostTemplates: GBPPost[] = [
  {
    id: "market-update-jan-2026",
    type: "update",
    title: "Providence Las Vegas Real Estate Market Update - January 2026",
    content: `The Providence housing market remains strong heading into 2026! Here's what buyers and sellers need to know:

📊 Median home price: ~$450,000 (+4.2% YoY)
🏠 27 Providence neighborhoods
⏱️ Average days on market: 28 days
📈 Well-priced homes sell quickly

Whether you're buying your first Providence home, selling in Oxford Commons or Saratoga Highlands, or exploring single-story options, now is a great time to make your move.

Call Dr. Jan Duffy at (702) 744-2993 for a free Providence market analysis.`,
    cta: {
      text: "Get Free Market Analysis",
      url: "https://www.providencelasvegas.com/home-valuation",
    },
    publishDate: "2026-01-20",
    keywords: ["Providence real estate", "Providence homes", "89166", "market update"],
  },
  {
    id: "california-relocation",
    type: "update",
    title: "California Buyers: Your Home Equity Goes Further in Providence",
    content: `Thinking about relocating from California to Providence Las Vegas? Here's why California buyers love Providence:

✅ 0% state income tax (save thousands annually)
✅ $300K–$700K vs $1M+ in comparable CA markets
✅ Master-planned, 27 neighborhoods, 3 community parks
✅ I-15 access, 4-hour drive to LA, easy flights everywhere

Providence offers modern construction, low maintenance, and California-quality living at Nevada prices. Dr. Jan Duffy specializes in California-to-Providence relocations.

Call (702) 744-2993 for a free California equity comparison.`,
    cta: {
      text: "California to Providence Guide",
      url: "https://www.providencelasvegas.com/buyers/california-relocator",
    },
    publishDate: "2026-01-13",
    keywords: ["California relocation", "Providence Las Vegas", "no state income tax", "89166"],
  },
  {
    id: "55-plus-spotlight",
    type: "update",
    title: "Age-Restricted Options Near Providence Las Vegas",
    content: `Looking for 55+ or single-story living near Providence?

Providence has no dedicated 55+ community. Nearby options:
🏌️ Sun City Aliante - 5 mi north, active adult living
🌄 Del Webb communities - Resort-style options

For single-story, low-maintenance living IN Providence, search across all 27 neighborhoods. Dr. Jan Duffy can help you find the right fit.

Schedule a consultation: (702) 744-2993`,
    cta: {
      text: "Age-Restricted Near Providence",
      url: "https://www.providencelasvegas.com/55-plus-communities",
    },
    publishDate: "2026-01-06",
    keywords: ["55+ near Providence", "Sun City Aliante", "single-story Providence", "active adult"],
  },
  {
    id: "first-time-buyer",
    type: "offer",
    title: "First-Time Home Buyer? Down Payment Assistance Available",
    content: `Nevada offers several programs to help first-time buyers:

💰 FHA loans: Only 3.5% down required
🎖️ VA loans: 0% down for veterans
🏠 Nevada Housing Division: Down payment assistance up to 5%
🏗️ Builder incentives: Many offering closing cost credits

Dr. Jan Duffy guides first-time buyers through every step—from pre-approval to keys. Free consultation, no pressure.

Popular Providence neighborhoods for first-time buyers:
- Oxford Commons, Saratoga Highlands, Auburn & Bradford
- All 27 Providence neighborhoods with a range of price points

Call (702) 744-2993 to start your Providence homeownership journey.`,
    cta: {
      text: "First-Time Buyer Guide",
      url: "https://www.providencelasvegas.com/buyers/first-time-buyers",
    },
    publishDate: "2025-12-30",
    keywords: ["first-time buyer", "down payment assistance", "FHA", "VA loan", "Providence Las Vegas"],
  },
  {
    id: "seller-tips",
    type: "update",
    title: "Selling Your Providence Home? 5 Tips for Top Dollar",
    content: `Thinking about selling? Here's how to maximize your sale price:

1️⃣ Price right from day one (overpriced homes sit)
2️⃣ Professional photography is non-negotiable
3️⃣ Declutter and depersonalize
4️⃣ Address minor repairs before listing
5️⃣ Work with an agent who knows your neighborhood

Current seller stats:
📈 +4.2% appreciation YoY
⏱️ 28 days average time to sell
💰 98.5% list-to-sale ratio

Get a free home valuation from Dr. Jan Duffy: (702) 744-2993`,
    cta: {
      text: "Get Free Home Valuation",
      url: "https://www.providencelasvegas.com/home-valuation",
    },
    publishDate: "2025-12-23",
    keywords: ["sell Providence home", "home valuation", "listing agent", "Providence Las Vegas"],
  },
  {
    id: "luxury-homes",
    type: "update",
    title: "Premium Providence Homes: Oxford Commons, Saratoga Highlands & More",
    content: `Providence's finest homes offer exceptional living at Nevada prices:

🏔️ Oxford Commons - Premier Providence neighborhood, custom upgrades
⛰️ Saratoga Highlands - Upscale floor plans, desirable lots
🌳 Auburn & Bradford - Mature landscaping, mixed floor plans

Why buyers choose premium Providence:
✅ No state income tax
✅ Master-planned, 27 neighborhoods, 3 community parks
✅ Modern construction, low maintenance
✅ $300K–$700K vs $1M+ in comparable CA markets

Premium Providence home search: (702) 744-2993`,
    cta: {
      text: "Premium Providence Homes",
      url: "https://www.providencelasvegas.com/luxury-homes",
    },
    publishDate: "2025-12-16",
    keywords: ["premium Providence homes", "Oxford Commons", "Saratoga Highlands", "Providence luxury"],
  },
];

// Review Response Templates
// Respond promptly and in depth using who/what/when/where/why
export const reviewResponseTemplates = {
  fiveStarBuyer: (clientName: string, neighborhood: string, details: string) => `
Thank you so much, ${clientName}! It was truly a pleasure helping you find your perfect home in ${neighborhood}. ${details}

Working with buyers who know what they want makes my job a joy. I'm always here if you have questions about your new home or need recommendations for local services.

Welcome to the neighborhood! 🏠

- Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
`,

  fiveStarSeller: (clientName: string, neighborhood: string, details: string) => `
Thank you for the kind words, ${clientName}! Selling your ${neighborhood} home was a great experience, and I'm thrilled we were able to ${details}.

The Las Vegas market is competitive, but with the right pricing strategy and marketing, we got you excellent results. Wishing you all the best in your next chapter!

- Dr. Jan Duffy, BHHS Nevada Properties
`,

  fourStar: (clientName: string, details: string) => `
Thank you for your review, ${clientName}! I appreciate your feedback about ${details}. Your satisfaction is my priority, and I'm always looking for ways to improve.

If there's anything I can help with going forward, please don't hesitate to reach out. I value your trust in choosing Berkshire Hathaway HomeServices.

- Dr. Jan Duffy
`,

  constructive: (clientName: string, issue: string, resolution: string) => `
${clientName}, thank you for sharing your experience. I take all feedback seriously, and I apologize that ${issue}.

${resolution}

Real estate transactions can be complex, and I'm committed to learning from every experience. If you'd like to discuss this further, please call me directly at (702) 744-2993.

- Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
`,
};

// Citation Sources for NAP consistency
export const citationSources = {
  // Tier 1: Major aggregators
  tier1: [
    { name: "Google Business Profile", url: "https://business.google.com", priority: "critical" },
    { name: "Bing Places", url: "https://www.bingplaces.com", priority: "high" },
    { name: "Apple Maps", url: "https://mapsconnect.apple.com", priority: "high" },
    { name: "Yelp", url: "https://biz.yelp.com", priority: "high" },
  ],
  // Tier 2: Real estate specific
  tier2: [
    { name: "Realtor.com", url: "https://www.realtor.com/realestateagents", priority: "critical" },
    { name: "Zillow", url: "https://www.zillow.com/agent-finder", priority: "critical" },
    { name: "Homes.com", url: "https://www.homes.com", priority: "high" },
    { name: "Trulia", url: "https://www.trulia.com", priority: "high" },
    { name: "Redfin", url: "https://www.redfin.com", priority: "medium" },
  ],
  // Tier 3: Local Nevada/Las Vegas directories
  tier3: [
    { name: "Nevada Real Estate Division", url: "https://red.nv.gov", priority: "high" },
    { name: "Las Vegas Chamber of Commerce", url: "https://www.lvchamber.com", priority: "medium" },
    { name: "Henderson Chamber of Commerce", url: "https://www.hendersonchamber.com", priority: "medium" },
    { name: "Vegas.com Business Directory", url: "https://www.vegas.com", priority: "low" },
  ],
  // Tier 4: General business directories
  tier4: [
    { name: "Facebook Business", url: "https://www.facebook.com/business", priority: "high" },
    { name: "LinkedIn", url: "https://www.linkedin.com", priority: "high" },
    { name: "BBB", url: "https://www.bbb.org", priority: "medium" },
    { name: "Yellow Pages", url: "https://www.yellowpages.com", priority: "low" },
  ],
};

// Photo categories for GBP
export const photoCategories = [
  {
    category: "Office & Team",
    description: "Exterior office, interior, team photos",
    examples: ["Office exterior", "Reception area", "Dr. Jan headshot", "Team photo"],
    count: "5-10 photos",
  },
  {
    category: "Neighborhoods",
    description: "Providence area photos showing geography expertise",
    examples: ["Providence parks", "Oxford Commons", "Saratoga Highlands", "The Promenade"],
    count: "10-15 photos",
  },
  {
    category: "Listings & Closings",
    description: "Active listings, sold properties, closing day photos",
    examples: ["Featured listings", "Sold signs", "Key handoff photos", "Happy clients"],
    count: "15-20 photos",
  },
  {
    category: "55+ Communities",
    description: "Nearby 55+ amenities, Providence single-story options",
    examples: ["Sun City Aliante", "Providence single-story", "Community pools", "Low-maintenance homes"],
    count: "10-15 photos",
  },
  {
    category: "Premium Providence",
    description: "Oxford Commons, Saratoga Highlands, Auburn & Bradford listings",
    examples: ["Oxford Commons homes", "Providence custom upgrades", "Community features", "Pool/backyard"],
    count: "10-15 photos",
  },
];
