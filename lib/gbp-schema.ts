// Google Business Profile Schema Data
// Supports GBP ranking factors: Relevance, Distance, Prominence

export const businessInfo = {
  // NAP - Must match GBP exactly (Providence Real Estate)
  name: "Providence Real Estate",
  address: {
    streetAddress: "7181 N Hualapai Way #135",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89166",
    addressCountry: "US",
  },
  phone: {
    display: "(702) 744-2993",
    tel: "+17027442993",
  },
  email: "DrDuffy@ProvidenceLasVegas.com",
  url: "https://www.providencelasvegas.com",

  // Business Details
  license: "S.0197614.LLC",
  priceRange: "$$",

  // Hours - GBP single source of truth: M-F 9-6, Sat 10-4, Sun By Appointment
  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "By Appointment",
  },

  // Geo coordinates (Providence, North Las Vegas area)
  geo: {
    latitude: 36.2889,
    longitude: -115.2717,
  },

  // Service areas - GBP aligned
  serviceAreas: [
    "Providence, North Las Vegas, NV 89166",
    "North Las Vegas, NV",
    "Las Vegas, NV",
  ],

  // Categories - GBP Primary
  categories: {
    primary: "Real Estate Agency",
    secondary: [
      "Real Estate Agent",
      "Real Estate Consultant",
    ],
  },

  // Services - Each creates searchable fields in GBP
  services: [
    // Core Services
    { name: "Buyer Representation", description: "Full-service home buying assistance" },
    { name: "Seller Representation", description: "List and sell your home for top dollar" },
    { name: "Luxury Home Sales", description: "High-end properties $1M+" },
    // Niche Services (trigger intent phrases)
    { name: "California Relocation Services", description: "Helping CA buyers transition to Providence Las Vegas" },
    { name: "55+ Options Near Providence", description: "Single-story Providence homes, Sun City Aliante, Del Webb" },
    { name: "First-Time Home Buyer Guidance", description: "FHA, VA, down payment assistance" },
    { name: "Probate Real Estate Sales", description: "Estate and probate property transactions" },
    { name: "Divorce Real Estate Sales", description: "Neutral representation for marital asset division" },
    { name: "Relocation Services", description: "Corporate and individual relocation assistance" },
    { name: "Investment Property Consulting", description: "Rental properties and investment analysis" },
    { name: "New Construction Representation", description: "Builder negotiations and buyer protection" },
    { name: "Military/VA Home Buying", description: "Specialized service for veterans" },
    { name: "Downsizing Consultation", description: "Transition to smaller, maintenance-free living" },
    { name: "Luxury Condo Sales", description: "High-rise and resort-style condominiums" },
  ],

  // Attributes for GBP - Fill out ALL available
  attributes: {
    // Accessibility (important for GBP)
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible restroom",
    ],
    // Service options
    serviceOptions: [
      "Online appointments",
      "Onsite services",
      "Same-day appointments",
    ],
    // Highlights
    highlights: [
      "Identifies as women-owned",
      "LGBTQ+ friendly",
      "Veteran-led",
    ],
    // Offerings
    offerings: [
      "Free consultation",
      "Free estimates",
    ],
    // Amenities
    amenities: [
      "Free Wi-Fi",
      "Free parking",
    ],
    // Planning
    planning: [
      "Appointment required",
      "Accepts new clients",
    ],
    // Payments (if applicable)
    payments: [
      "Credit cards",
      "Checks",
      "Wire transfer",
    ],
  },

  // Social profiles for sameAs schema
  socialProfiles: [
    "https://www.facebook.com/ProvidenceLasVegasRealEstate",
    "https://www.instagram.com/drjanduffy",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.youtube.com/@drjanduffy",
    "https://twitter.com/drjanduffy",
  ],

  // Languages spoken
  languages: ["English", "Spanish"],

  // Payment methods accepted
  paymentAccepted: ["Credit Card", "Check", "Wire Transfer"],

  // Year established
  foundingDate: "2010",
};

/**
 * Opening hours for schema.org - generated from businessInfo.hours.
 * Days with "By Appointment" are omitted (no fixed hours in schema).
 */
export const gbpOpeningHoursSpecification = (() => {
  const dayMap: Record<string, string> = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  };
  return Object.entries(businessInfo.hours)
    .filter(([, value]) => value !== "By Appointment")
    .map(([day, value]) => {
      const [opens, closes] = value.split("-");
      return {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: dayMap[day],
        opens: opens.trim(),
        closes: closes.trim(),
      };
    });
})();

// 750-word GBP Description (3 sections)
export const gbpDescription = {
  // Section 1: Who you are/mission (~250 words)
  whoWeAre: `Dr. Jan Duffy is a trusted REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, serving Providence Las Vegas real estate since 2008. Backed by Warren Buffett's Berkshire Hathaway—the most recognized name in real estate—Dr. Jan combines local expertise with world-class resources to deliver exceptional results for buyers and sellers alike.

With $127 million in closed transactions and hundreds of satisfied clients, Dr. Jan has earned a reputation for integrity, market knowledge, and personalized service. Whether you're a first-time buyer navigating the process, a premium home seeker exploring Oxford Commons or Saratoga Highlands, or a California family relocating to Providence for Nevada's tax advantages, Dr. Jan provides the guidance you need to make confident real estate decisions.`,

  // Section 2: What/why - Value proposition (~250 words)
  whatWeDo: `What sets Dr. Jan apart is a commitment to education and advocacy. Clients receive comprehensive market analysis, expert negotiation, and honest advice—not sales pressure. As a Berkshire Hathaway HomeServices agent, Dr. Jan offers access to a global network of 50,000+ agents, world-class marketing for sellers, and off-market opportunities for buyers.

Specialized services include: buyer and seller representation, premium Providence home sales, age-restricted options near Providence (Sun City Aliante, Del Webb communities), California to Providence relocation assistance, probate and divorce real estate, investment property consulting, Providence new construction representation, and first-time buyer programs including FHA, VA, and down payment assistance guidance.

Dr. Jan's approach is simple: treat every client like family, know the market inside and out, and never stop working until the deal closes successfully.`,

  // Section 3: Where - Areas served (~250 words)
  whereWeServe: `Dr. Jan serves Providence Las Vegas exclusively—all 27 Providence neighborhoods including Oxford Commons, Saratoga Highlands, Auburn & Bradford, and every Providence community. Providence is a master-planned community in North Las Vegas (89166) with 5,600+ homes, three community parks, and comprehensive HOA services.

For age-restricted options, Sun City Aliante (5 mi north of Providence) and Del Webb communities are nearby. Dr. Jan provides expertise in Providence HOA resale certificates, Design Review, new construction, and neighborhood comparisons.

Office located at 7181 N Hualapai Way #135, Las Vegas, NV 89166. Available Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday By Appointment. Call (702) 744-2993 for a free consultation or visit www.providencelasvegas.com to start your Providence real estate journey today.`,
};

// FAQ Schema for GBP Q&A section
export const gbpFAQs = [
  {
    question: "What areas does Dr. Jan Duffy serve?",
    answer: "Dr. Jan serves Providence Las Vegas exclusively—all 27 Providence neighborhoods including Oxford Commons, Saratoga Highlands, Auburn & Bradford. Providence is in North Las Vegas (89166).",
  },
  {
    question: "Does Dr. Jan help buyers relocating from California?",
    answer: "Yes! California to Providence relocation is a specialty. Dr. Jan helps CA buyers understand Nevada's 0% state income tax advantage, compare home values (Providence $300K–$700K vs $1M+ in CA), and find the right Providence neighborhood. Call (702) 744-2993 for California to Providence assistance.",
  },
  {
    question: "Are there 55+ communities in Providence?",
    answer: "Providence has no dedicated 55+ community. Nearby options include Sun City Aliante (5 mi north) and Del Webb communities. Dr. Jan can help with single-story, low-maintenance Providence homes or nearby 55+ options. Call (702) 744-2993.",
  },
  {
    question: "Does Berkshire Hathaway HomeServices help with new construction?",
    answer: "Yes! Dr. Jan provides free buyer representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities. The builder pays the commission, but Dr. Jan works exclusively for you—protecting your interests during the build process.",
  },
  {
    question: "How does Dr. Jan help with probate or divorce real estate sales?",
    answer: "Dr. Jan handles sensitive transactions with discretion and professionalism. For probate sales, she coordinates with estate attorneys and ensures court compliance. For divorce sales, she provides neutral representation and works with both parties' attorneys. Call (702) 744-2993 for a confidential consultation.",
  },
  {
    question: "What is the average home price in Providence in 2026?",
    answer: "As of January 2026, the Providence and North Las Vegas median home price is approximately $450,000, up 4.2% year-over-year. Contact Dr. Jan for current Providence market data. Call (702) 744-2993.",
  },
  {
    question: "Does Dr. Jan work with first-time home buyers?",
    answer: "Absolutely! Dr. Jan guides first-time buyers through every step, including pre-approval, loan programs (FHA 3.5% down, VA 0% down, conventional options), Nevada down payment assistance programs, and new construction incentives. Free buyer consultations available.",
  },
  {
    question: "Why choose Berkshire Hathaway HomeServices over other agencies?",
    answer: "Berkshire Hathaway HomeServices is backed by Warren Buffett's Berkshire Hathaway Inc.—the only real estate brand with this level of financial stability and trust. You get a global network of 50,000+ agents, world-class marketing, and a name synonymous with integrity.",
  },
  {
    question: "How do I schedule a consultation with Dr. Jan Duffy?",
    answer: "Call or text (702) 744-2993 for immediate assistance, or email DrDuffy@ProvidenceLasVegas.com. Office visits available at 7181 N Hualapai Way #135, Las Vegas, NV 89166. Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday By Appointment.",
  },
  {
    question: "Does Dr. Jan help with investment properties in Las Vegas?",
    answer: "Yes! Dr. Jan provides investment property consulting including rental property analysis, cap rate calculations, short-term rental regulations, and multi-family opportunities across the Las Vegas Valley. Contact (702) 744-2993 for investment property guidance.",
  },
];

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.providencelasvegas.com/#organization",
    name: businessInfo.name,
    image: [
      "https://www.providencelasvegas.com/images/generated/og-providence-default.png",
      "https://www.providencelasvegas.com/images/generated/hero-about.png",
      "https://www.providencelasvegas.com/images/generated/hero-contact.png",
    ],
    url: businessInfo.url,
    telephone: businessInfo.phone.tel,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: gbpOpeningHoursSpecification,
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    sameAs: [
      "https://g.page/r/Ca9gwAWH5oLcEBM", // GBP profile – links site to Business Profile
      "https://www.facebook.com/ProvidenceLasVegasRealEstate",
      "https://www.instagram.com/drjanduffy",
      "https://www.linkedin.com/in/drjanduffy",
    ],
  };
}

// Generate FAQPage Schema
export function generateFAQSchema(faqs = gbpFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
