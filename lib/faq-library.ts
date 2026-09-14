/**
 * FAQ Library - Page-specific FAQ content for all 47 pages
 * Used for FAQSection component and FAQPage JSON-LD schema
 */

export interface FAQItem {
  question: string;
  answer: string;
}

type FAQPageType = keyof typeof faqLibrary;

const faqLibrary: Record<string, FAQItem[]> = {
  // ============ Core Pages ============
  home: [
    {
      question: "Why should I choose a Berkshire Hathaway HomeServices agent in Providence Las Vegas?",
      answer:
        "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents. When you're making the biggest purchase of your life, that trust matters.",
    },
    {
      question: "What areas does Berkshire Hathaway HomeServices Nevada Properties serve?",
      answer:
        "BHHS Nevada Properties serves Providence Las Vegas and all 27 Providence neighborhoods. Dr. Jan Duffy specializes in Providence HOA resale certificates, Design Review, new construction, and neighborhood comparisons across Oxford Commons, Saratoga Highlands, Auburn & Bradford, and every Providence community.",
    },
    {
      question: "How do I contact Dr. Jan Duffy at Berkshire Hathaway HomeServices?",
      answer:
        "You can reach Dr. Jan Duffy at (702) 744-2993 or email DrDuffy@ProvidenceLasVegas.com. Office located at 7181 N Hualapai Way #135, Las Vegas, NV 89166.",
    },
    {
      question: "Does Berkshire Hathaway HomeServices help with new construction homes?",
      answer:
        "Yes! BHHS agents provide free buyer representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities—the builder pays the commission, not you.",
    },
    {
      question: "What is the current Providence Las Vegas real estate market like in 2026?",
      answer:
        "As of January 2026, the Providence and North Las Vegas median home price is approximately $450,000 (+4.2% YoY), with homes selling in an average of 28 days. The Providence market remains competitive but balanced.",
    },
    {
      question: "What is Providence, Las Vegas?",
      answer:
        "Providence is a master-planned community in Las Vegas with 27 neighborhoods and more than 5,600 homes. Each neighborhood has its own amenities. Residents enjoy three community parks: The Promenade, Knickerbocker Park, and Huckleberry Park. The Providence Master HOA manages the community.",
    },
    {
      question: "Where can I find HOA and resale information for Providence?",
      answer:
        "The official Providence Master HOA website at providencelvhoa.com has Design Review, Realtors/Resale, Community Info, and Documents. HOA assessments are due Jan 1, Apr 1, Jul 1, and Oct 1. Dr. Jan Duffy can help you buy or sell in any Providence neighborhood.",
    },
  ],

  about: [
    {
      question: "How long has Dr. Jan Duffy been serving Providence Las Vegas real estate?",
      answer:
        "Dr. Jan Duffy has been serving Providence Las Vegas since 2008, with over $127 million in closed transactions and 500+ satisfied clients. Her expertise spans all 27 Providence neighborhoods—residential, premium homes, investment, and new construction.",
    },
    {
      question: "Why choose Dr. Jan Duffy over other Providence Las Vegas realtors?",
      answer:
        "Dr. Jan combines deep local market knowledge with the global resources of Berkshire Hathaway HomeServices. She offers personalized service, expert negotiation, and a commitment to educating clients—not sales pressure. Her track record speaks for itself.",
    },
    {
      question: "What certifications or credentials does Dr. Jan Duffy have?",
      answer:
        "Dr. Jan Duffy is a licensed REALTOR® (License S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. She holds expertise in luxury homes, 55+ communities, California relocation, and investment properties.",
    },
    {
      question: "Does Dr. Jan Duffy work with first-time home buyers?",
      answer:
        "Absolutely. Dr. Jan guides first-time buyers through every step, including pre-approval, loan programs (FHA, VA, conventional), down payment assistance, and the closing process. Her goal is to make buying your first home stress-free.",
    },
    {
      question: "How can I schedule a consultation with Dr. Jan Duffy?",
      answer:
        "Call or text (702) 744-2993 for immediate assistance, or email DrDuffy@ProvidenceLasVegas.com. Office visits are available at 7181 N Hualapai Way #135, Las Vegas, NV 89166. Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday By Appointment.",
    },
    {
      question: "What neighborhoods does Dr. Jan Duffy specialize in?",
      answer:
        "Dr. Jan has specialized expertise in all 27 Providence Las Vegas neighborhoods—Oxford Commons, Saratoga Highlands, Auburn & Bradford, and more. She serves Providence and North Las Vegas (89166) with deep knowledge of Providence HOA, new construction, and resale processes.",
    },
  ],

  contact: [
    {
      question: "What is the best way to contact Dr. Jan Duffy?",
      answer:
        "For immediate assistance, call or text (702) 744-2993. You can also email DrDuffy@ProvidenceLasVegas.com or use the contact form on this site. Dr. Jan typically responds within a few hours during business hours.",
    },
    {
      question: "What are Dr. Jan Duffy's office hours?",
      answer:
        "Office hours are Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday By Appointment. The office is located at 7181 N Hualapai Way #135, Las Vegas, NV 89166.",
    },
    {
      question: "Can I get a free home valuation without visiting the office?",
      answer:
        "Yes. You can request a free, no-obligation home valuation through the contact form or by calling (702) 744-2993. Dr. Jan uses current MLS data and comparable sales to provide an accurate estimate.",
    },
    {
      question: "Does Dr. Jan Duffy work with out-of-state buyers?",
      answer:
        "Yes. Dr. Jan specializes in helping California relocators and other out-of-state buyers purchase Las Vegas homes. She can conduct virtual tours, coordinate inspections remotely, and guide you through the entire process from afar.",
    },
    {
      question: "How quickly will I hear back after submitting the contact form?",
      answer:
        "Dr. Jan typically responds to contact form submissions within 24 hours, often same-day during business hours. For urgent inquiries, calling (702) 744-2993 is the fastest option.",
    },
    {
      question: "Is there a fee for an initial consultation?",
      answer:
        "No. Initial consultations with Dr. Jan Duffy are free and come with no obligation. She offers complimentary home valuations for sellers and buyer consultations to discuss your needs and timeline.",
    },
  ],

  "providence/hoa-info": [
    {
      question: "Where can I find Providence HOA documents and assessment due dates?",
      answer:
        "Providence Master HOA assessments are due January 1, April 1, July 1, and October 1. The official HOA website at providencelvhoa.com has Design Review, Realtors/Resale, Community Info, and Documents. Dr. Jan Duffy is familiar with the resale process.",
    },
    {
      question: "What does the Providence HOA cover?",
      answer:
        "The Providence Master HOA oversees community standards, Design Review for modifications, common areas, and maintains the three community parks: The Promenade, Knickerbocker Park, and Huckleberry Park.",
    },
    {
      question: "How do I get a resale certificate for my Providence home?",
      answer:
        "Resale certificates are obtained through the Providence Master HOA. Dr. Jan Duffy guides buyers and sellers through the resale process. Visit providencelvhoa.com or call (702) 744-2993 for assistance.",
    },
    {
      question: "Do I need Design Review approval for home modifications in Providence?",
      answer:
        "Yes. Many modifications require Design Review approval from the Providence HOA. Dr. Jan can explain the process and help you understand what's required when buying or selling in Providence.",
    },
  ],

  providence: [
    {
      question: "What is Providence Las Vegas?",
      answer:
        "Providence is a master-planned community in northwest Las Vegas with 27 neighborhoods and more than 5,600 homes. Each neighborhood has its own character and amenities. Residents enjoy three community parks: The Promenade, Knickerbocker Park, and Huckleberry Park.",
    },
    {
      question: "What are the HOA assessment due dates for Providence?",
      answer:
        "Providence Master HOA assessments are due January 1, April 1, July 1, and October 1 of each year. The HOA oversees community standards, Design Review for modifications, and maintains common areas.",
    },
    {
      question: "Where can I find Providence HOA documents and resale information?",
      answer:
        "The official Providence Master HOA website at providencelvhoa.com has Design Review guidelines, Realtors/Resale info, Community Info, and Documents. Dr. Jan Duffy is familiar with the resale process and Design Review requirements.",
    },
    {
      question: "What are the community parks in Providence Las Vegas?",
      answer:
        "Providence has three community parks: The Promenade (linear walking park and playground), Knickerbocker Park (skyline views, ball field, splash pad, dog parks), and Huckleberry Park (basketball, tennis, pickleball, playgrounds, splash pad, dog parks).",
    },
    {
      question: "How do I buy or sell a home in Providence?",
      answer:
        "Dr. Jan Duffy at Berkshire Hathaway HomeServices knows all 27 Providence neighborhoods, the HOA resale process, and Design Review requirements. Call (702) 744-2993 for buyer or seller representation in any Providence community.",
    },
    {
      question: "Are there gated neighborhoods in Providence?",
      answer:
        "Some Providence neighborhoods have private entry gates, community pools, and other amenities. Each of the 27 neighborhoods has its own character. Dr. Jan can explain the differences and help you find the right fit.",
    },
  ],

  neighborhoods: [
    {
      question: "What Providence neighborhoods does Dr. Jan Duffy serve?",
      answer:
        "Dr. Jan serves all 27 Providence Las Vegas neighborhoods—Oxford Commons, Saratoga Highlands, Auburn & Bradford, and more. She has deep expertise in Providence HOA resale certificates, Design Review, new construction, and neighborhood comparisons.",
    },
    {
      question: "Which Providence neighborhoods have parks and nearby schools?",
      answer:
        "Oxford Commons, Saratoga Highlands, Auburn & Bradford, and other Providence neighborhoods sit near three community parks and Clark County School District campuses. Dr. Jan can help you compare commute times, park access, and current inventory. Call (702) 744-2993.",
    },
    {
      question: "Where are the premium Providence neighborhoods?",
      answer:
        "Oxford Commons, Saratoga Highlands, and Auburn & Bradford offer some of Providence's finest homes with custom upgrades, larger lots, and move-in-ready options. Dr. Jan specializes in premium Providence real estate.",
    },
    {
      question: "What Providence neighborhoods have the most affordable homes?",
      answer:
        "Providence offers a range of price points across its 27 neighborhoods. Dr. Jan can show you current inventory and help you find value in your price range. Call (702) 744-2993 for a free consultation.",
    },
    {
      question: "How do I choose the right Providence neighborhood?",
      answer:
        "Consider schools, commute, amenities, HOA fees, and lifestyle. Dr. Jan offers neighborhood tours and can match you with Providence communities that fit your budget, needs, and preferences. Call (702) 744-2993 to get started.",
    },
    {
      question: "Are there new construction communities in Providence?",
      answer:
        "Yes. Providence has active new construction in several neighborhoods. Dr. Jan provides free buyer representation for new construction and can guide you through builder contracts and Design Review. Visit /new-construction for details.",
    },
  ],

  // ============ Providence Neighborhood Template ============
  // Use replacements: { neighborhoodName: "Oxford Commons" }
  providenceNeighborhood: [
    {
      question: "What parks are near {neighborhoodName}?",
      answer:
        "All Providence Las Vegas residents, including {neighborhoodName}, have access to three community parks: The Promenade, Knickerbocker Park, and Huckleberry Park. See the Providence HOA website for details.",
    },
    {
      question: "Is {neighborhoodName} part of the Providence Master HOA?",
      answer:
        "Yes. {neighborhoodName} is one of 27 neighborhoods in Providence Las Vegas. HOA assessments are due Jan 1, Apr 1, Jul 1, and Oct 1 of each year.",
    },
    {
      question: "How do I get HOA resale or Design Review info for {neighborhoodName}?",
      answer:
        "For Design Review, Realtors/Resale, and community documents for {neighborhoodName}, visit the official Providence Master HOA website at providencelvhoa.com. Dr. Jan Duffy can also guide you through the resale process.",
    },
    {
      question: "Are there homes for sale in {neighborhoodName}?",
      answer:
        "Yes. Providence Las Vegas homes for sale in {neighborhoodName} are listed on the MLS and through this site. Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties specializes in Providence real estate. Call (702) 744-2993.",
    },
    {
      question: "What amenities does {neighborhoodName} offer?",
      answer:
        "Each Providence neighborhood has its own amenities. All {neighborhoodName} residents have access to The Promenade, Knickerbocker Park, and Huckleberry Park. Some neighborhoods add pools, gates, or other features. Dr. Jan can provide specifics.",
    },
    {
      question: "How do I contact Dr. Jan Duffy about {neighborhoodName}?",
      answer:
        "Call (702) 744-2993 or email DrDuffy@ProvidenceLasVegas.com. Dr. Jan offers free consultations and can schedule neighborhood tours, showings, or provide a home valuation for your {neighborhoodName} property.",
    },
  ],

  // ============ Other Neighborhoods (reframed for Providence focus) ============
  summerlin: [
    {
      question: "Looking for Summerlin?",
      answer:
        "Dr. Jan specializes exclusively in Providence Las Vegas—a master-planned community with 27 neighborhoods, three parks, and 5,600+ homes. Visit /providence or call (702) 744-2993 for Providence listings.",
    },
  ],

  henderson: [
    {
      question: "Looking for Henderson?",
      answer:
        "Dr. Jan specializes exclusively in Providence Las Vegas—27 neighborhoods, three parks, 5,600+ homes. Visit /providence or call (702) 744-2993 for Providence listings.",
    },
  ],

  "green-valley": [
    {
      question: "Looking for Green Valley?",
      answer:
        "Dr. Jan specializes exclusively in Providence Las Vegas. Visit /providence for all 27 neighborhoods or call (702) 744-2993.",
    },
  ],

  "the-ridges": [
    {
      question: "Looking for premium homes?",
      answer:
        "Dr. Jan specializes in Providence's finest—Oxford Commons, Saratoga Highlands, Auburn & Bradford. Visit /luxury-homes or call (702) 744-2993.",
    },
  ],

  "southern-highlands": [
    {
      question: "Looking for luxury communities?",
      answer:
        "Dr. Jan specializes in Providence's premium neighborhoods—Oxford Commons, Saratoga Highlands, Auburn & Bradford. Visit /luxury-homes or call (702) 744-2993.",
    },
  ],

  "north-las-vegas": [
    {
      question: "Providence and North Las Vegas",
      answer:
        "Providence (89166) is in North Las Vegas. Dr. Jan specializes in all 27 Providence neighborhoods. Visit /providence or call (702) 744-2993.",
    },
  ],

  "skye-canyon": [
    {
      question: "Looking for new construction?",
      answer:
        "Dr. Jan specializes in Providence Las Vegas new construction. Visit /new-construction or call (702) 744-2993 for Providence builder options.",
    },
  ],

  "centennial-hills": [
    {
      question: "Looking for Northwest Las Vegas?",
      answer:
        "Dr. Jan specializes in Providence Las Vegas (89166). Visit /providence for 27 neighborhoods or call (702) 744-2993.",
    },
  ],

  inspirada: [
    {
      question: "Looking for Inspirada?",
      answer:
        "Dr. Jan specializes exclusively in Providence Las Vegas. Visit /providence for all 27 neighborhoods or call (702) 744-2993.",
    },
  ],

  "mountains-edge": [
    {
      question: "What is Mountains Edge, Las Vegas?",
      answer:
        "Mountains Edge is a southwest Las Vegas master-planned community with mountain views, parks, and growing amenities. Median prices are around $475,000. It offers affordable luxury and newer construction.",
    },
    {
      question: "What is the Mountains Edge real estate market like?",
      answer:
        "Mountains Edge has a mix of resale and new construction. The area has grown significantly with added shopping and services. Dr. Jan Duffy provides current market data—call (702) 744-2993.",
    },
    {
      question: "What outdoor amenities does Mountains Edge have?",
      answer:
        "Mountains Edge offers parks and trails. Schools in the area are part of the Clark County School District. Dr. Jan can provide campus names and commute times for specific addresses.",
    },
  ],

  // ============ Buyer Service Pages ============
  buyers: [
    {
      question: "How long does the home buying process take in Las Vegas?",
      answer:
        "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in 7-14 days. The timeline depends on financing, inspections, and other contingencies. Dr. Jan Duffy guides you through each step.",
    },
    {
      question: "Do I need a pre-approval before looking at homes?",
      answer:
        "Yes. A pre-approval letter shows sellers you're serious and gives you a clear budget. Dr. Jan can connect you with trusted local lenders who offer competitive rates and various loan programs.",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "Down payment requirements vary: FHA loans require 3.5%, conventional typically 3-20%, and VA/USDA may require 0% down. Dr. Jan connects you with lenders who specialize in various programs including Nevada down payment assistance.",
    },
    {
      question: "Are buyer's agent services free?",
      answer:
        "Yes. In most cases, the seller pays the buyer's agent commission. You get full representation from Dr. Jan Duffy at no cost. She works exclusively for you—not the seller.",
    },
    {
      question: "What should I look for when viewing homes?",
      answer:
        "Consider layout, condition, location, schools, HOA, and resale potential. Dr. Jan points out red flags, discusses comparables, and helps you evaluate each property objectively.",
    },
    {
      question: "How do I make an offer on a Las Vegas home?",
      answer:
        "Dr. Jan prepares a competitive offer based on market data, comparable sales, and your budget. She handles negotiations, inspections, and contingencies. Call (702) 744-2993 to get started.",
    },
  ],

  "buyers/first-time-buyers": [
    {
      question: "What loan programs are available for first-time buyers?",
      answer:
        "FHA (3.5% down), VA (0% down for eligible veterans), conventional (3-20% down), and Nevada down payment assistance programs. Dr. Jan connects you with lenders who specialize in first-time buyer programs.",
    },
    {
      question: "How much can I afford as a first-time buyer?",
      answer:
        "Your budget depends on income, debts, credit score, and down payment. Get pre-approved to know your exact number. Dr. Jan works with first-time buyers to find homes in their budget without overextending.",
    },
    {
      question: "What are closing costs for first-time buyers?",
      answer:
        "Closing costs typically run 2-5% of the loan amount. They include appraisal, title insurance, and lender fees. Some programs offer closing cost assistance. Dr. Jan explains all costs upfront.",
    },
    {
      question: "Should I use the listing agent to buy a home?",
      answer:
        "No. The listing agent represents the seller. You need your own buyer's agent who works exclusively for you. Dr. Jan's services are free—the seller pays her commission. You get advocacy at no cost.",
    },
    {
      question: "What's the first step to buying my first home?",
      answer:
        "Get pre-approved with a lender. Then call (702) 744-2993 to schedule a consultation with Dr. Jan Duffy. She'll discuss your needs, timeline, and neighborhoods—with zero pressure.",
    },
  ],

  "buyers/california-relocator": [
    {
      question: "Why are so many Californians moving to Las Vegas?",
      answer:
        "Nevada has 0% state income tax, and Las Vegas home prices are 40-60% lower than comparable California markets. You get more house for your money, no state income tax, and a lower cost of living.",
    },
    {
      question: "How do I buy a Las Vegas home from California?",
      answer:
        "Dr. Jan Duffy specializes in California relocation. She conducts virtual tours, coordinates inspections remotely, and guides you through the entire process. Many clients close without visiting until move-in.",
    },
    {
      question: "Should I sell my California home first or buy in Nevada first?",
      answer:
        "It depends on your equity, timeline, and risk tolerance. Dr. Jan can discuss options including bridge loans, rent-back agreements, and timing strategies. Every situation is different.",
    },
    {
      question: "Why do California relocators choose Providence?",
      answer:
        "Providence is popular with California buyers for its master-planned design, 27 neighborhoods, modern construction, low maintenance, three community parks, and I-15 access. Price points ($300K–$700K) compare favorably to $1M+ in many California markets. Dr. Jan helps you find the right Providence neighborhood.",
    },
    {
      question: "How do I get started with my California to Las Vegas move?",
      answer:
        "Call (702) 744-2993 or email DrDuffy@ProvidenceLasVegas.com. Dr. Jan offers free relocation consultations. She'll discuss neighborhoods, schools, timing, and create a customized plan for your move.",
    },
  ],

  "buyers/luxury-homes-las-vegas": [
    {
      question: "What defines a premium Providence home?",
      answer:
        "Premium Providence homes include Oxford Commons, Saratoga Highlands, and Auburn & Bradford offerings with custom upgrades, larger lots, and move-in-ready finishes. Dr. Jan specializes in Providence's finest listings.",
    },
    {
      question: "What are the best premium neighborhoods in Providence?",
      answer:
        "Oxford Commons, Saratoga Highlands, and Auburn & Bradford are Providence's premier neighborhoods. Each offers different lifestyles, lot sizes, and amenities. Dr. Jan helps you find the right fit.",
    },
    {
      question: "How does buying a premium Providence home differ?",
      answer:
        "Luxury transactions require discretion, strong negotiation, and attention to detail. One wrong move can cost hundreds of thousands. Dr. Jan Duffy has $127M+ in closed transactions and understands luxury buyer expectations.",
    },
    {
      question: "Do I need proof of funds for luxury purchases?",
      answer:
        "For cash purchases, yes. For financing, you'll need a jumbo loan pre-approval. Dr. Jan works with luxury lenders and can guide you through the requirements for high-end transactions.",
    },
    {
      question: "How do I schedule a premium Providence home viewing?",
      answer:
        "Call (702) 744-2993 for a confidential consultation. Dr. Jan specializes in Providence Las Vegas real estate and can show you MLS listings across Oxford Commons, Saratoga Highlands, Auburn & Bradford, and all 27 Providence neighborhoods.",
    },
  ],

  // ============ Seller Service Pages ============
  sellers: [
    {
      question: "What is my Providence home worth in today's market?",
      answer:
        "Home values depend on location, condition, size, and recent comparable sales. Dr. Jan provides free, comprehensive Providence home valuations using current MLS data and her expertise serving Providence Las Vegas since 2008.",
    },
    {
      question: "How long will it take to sell my Providence home?",
      answer:
        "Currently, well-priced Providence homes sell in an average of 28 days. Premium homes may take 45+ days. Pricing strategy is crucial—overpriced homes sit for months. Dr. Jan's pricing gets results.",
    },
    {
      question: "What do I need to do to prepare my home for sale?",
      answer:
        "Dr. Jan provides a personalized preparation checklist. Generally, decluttering, minor repairs, fresh paint, and professional photography yield the highest ROI. She coordinates staging and photography for her listings.",
    },
    {
      question: "What is your commission structure?",
      answer:
        "Commission structures are negotiable. Dr. Jan offers transparent pricing and walks you through all costs before you sign. She invests in professional marketing to get top dollar for your home.",
    },
    {
      question: "Should I make repairs before listing?",
      answer:
        "It depends. Some repairs (cosmetic, safety) add value. Others don't pay back. Dr. Jan provides honest guidance on what to fix, what to leave, and how to price accordingly.",
    },
    {
      question: "How do I get a free home valuation?",
      answer:
        "Call (702) 744-2993 or request one through this site. Dr. Jan provides free, no-obligation valuations using current market data. You'll receive a comprehensive analysis with no pressure.",
    },
  ],

  "sellers/move-up": [
    {
      question: "How do I sell and buy a bigger home at the same time?",
      answer:
        "Options include selling first (with a rent-back or short-term rental), buying first (with a bridge loan or contingent offer), or simultaneous closings. Dr. Jan helps you choose the strategy that minimizes stress and risk.",
    },
    {
      question: "What is a contingent offer?",
      answer:
        "A contingent offer means your purchase depends on selling your current home. In competitive markets, non-contingent offers often win. Dr. Jan explains the pros/cons and helps you structure the best approach.",
    },
    {
      question: "Should I sell before or after buying my move-up home?",
      answer:
        "It depends on equity, market conditions, and risk tolerance. Selling first gives you cash and clarity but may require temporary housing. Dr. Jan guides you through the options for your situation.",
    },
  ],

  "sellers/downsizing": [
    {
      question: "How do I downsize from a large home?",
      answer:
        "Dr. Jan helps you declutter, stage, and price your current home while identifying smaller properties that fit your new lifestyle. Many downsizers choose 55+ communities or maintenance-free condos.",
    },
    {
      question: "What are good downsizing options near Providence?",
      answer:
        "Providence offers single-story and low-maintenance homes. Nearby 55+ options include Sun City Aliante (5 mi north) and Del Webb communities. Dr. Jan can help you find the right fit. Call (702) 744-2993.",
    },
    {
      question: "How do I handle excess belongings when downsizing?",
      answer:
        "Dr. Jan can refer you to estate sale companies, donation resources, and moving services. The goal is to simplify your move and make the transition to a smaller home as smooth as possible.",
    },
  ],

  "sellers/relocation": [
    {
      question: "How do I sell my home when relocating for a job?",
      answer:
        "Dr. Jan coordinates with your relocation timeline. Options include selling before you move, selling after (with a property manager), or corporate relocation programs. She works with employers and relocation companies.",
    },
    {
      question: "What if I need to sell quickly for a relocation?",
      answer:
        "Pricing right and staging for quick sale are key. Dr. Jan has a strong track record of selling homes in 28 days or less when priced correctly. She can discuss accelerated marketing strategies.",
    },
  ],

  "sellers/divorce-probate": [
    {
      question: "How does a divorce home sale work?",
      answer:
        "Dr. Jan provides neutral representation, working with both parties' attorneys. The goal is a fair sale that divides the asset appropriately. She handles the transaction with discretion and professionalism.",
    },
    {
      question: "What is involved in a probate real estate sale?",
      answer:
        "Probate sales require court approval and coordination with the estate attorney. Dr. Jan has experience with probate transactions and ensures compliance with Nevada probate requirements.",
    },
    {
      question: "Do I need both parties to agree to sell in a divorce?",
      answer:
        "Generally yes, unless one party has been awarded the property. Dr. Jan works with divorce attorneys to understand the decree and facilitate a sale that satisfies the court and both parties.",
    },
  ],

  // ============ Other Service Pages ============
  "luxury-homes": [
    {
      question: "What Providence neighborhoods have premium homes?",
      answer:
        "Oxford Commons, Saratoga Highlands, and Auburn & Bradford offer Providence's finest homes—custom upgrades, larger lots, move-in-ready options. Dr. Jan specializes in premium Providence real estate.",
    },
    {
      question: "What should I expect when buying a luxury home?",
      answer:
        "Discretion, expert negotiation, and attention to detail. Luxury transactions often involve custom terms, inspections, and longer timelines. Dr. Jan has $127M+ in closed transactions and understands luxury buyer expectations.",
    },
    {
      question: "Are there off-market luxury listings?",
      answer:
        "Yes. Dr. Jan has access to off-market and pocket listings through the Berkshire Hathaway HomeServices network. Call (702) 744-2993 for a confidential discussion of your luxury home search.",
    },
  ],

  "new-construction": [
    {
      question: "Is buyer representation free for new construction?",
      answer:
        "Yes. The builder pays the buyer's agent commission. You get Dr. Jan's expertise at no cost. She negotiates upgrades, reviews contracts, and protects your interests—the builder's agent works for the builder, not you.",
    },
    {
      question: "Which Providence areas have new construction?",
      answer:
        "Providence has active new construction in several neighborhoods. Dr. Jan represents you with every builder—free buyer representation. Visit /new-construction for current inventory and builder information.",
    },
    {
      question: "Should I use the builder's sales agent?",
      answer:
        "No. The builder's agent represents the builder. You need your own agent who negotiates for you, reviews contracts, and ensures you're not overpaying for upgrades. Dr. Jan's services are free.",
    },
  ],

  "investment-properties": [
    {
      question: "Are Providence homes good for investment?",
      answer:
        "Providence offers a range of investment opportunities. Dr. Jan analyzes cap rates, appreciation potential, and rental demand for Providence neighborhoods. Call (702) 744-2993 for investment guidance.",
    },
    {
      question: "What is the average rental yield in Providence?",
      answer:
        "Providence and North Las Vegas rental yields vary by neighborhood. Dr. Jan provides investment analysis including cap rates, cash flow projections, and market trends for the 89166 area.",
    },
    {
      question: "Are short-term rentals allowed in Las Vegas?",
      answer:
        "Short-term rental regulations vary by area. Some neighborhoods restrict or prohibit them. Dr. Jan stays current on HOA and municipal rules and can advise on STR feasibility for specific properties.",
    },
  ],

  relocation: [
    {
      question: "Does Dr. Jan Duffy help with corporate relocation?",
      answer:
        "Yes. Dr. Jan works with relocation companies and employers. She helps transferees find homes, sell existing properties, and navigate the relocation process with minimal stress.",
    },
    {
      question: "What if I'm relocating from another state?",
      answer:
        "Dr. Jan specializes in out-of-state relocations, especially California. She conducts virtual tours, coordinates inspections, and guides you through the process remotely. Many clients close without visiting until move-in.",
    },
    {
      question: "How do I find a rental while I look for a home?",
      answer:
        "Dr. Jan can refer you to rental resources and short-term options. She helps you understand neighborhoods before committing to a purchase, so you make an informed decision when you're ready to buy.",
    },
  ],

  "home-valuation": [
    {
      question: "How is my home's value determined?",
      answer:
        "Value is based on comparable sales (comps), condition, location, and market trends. Dr. Jan uses current MLS data and her market expertise to provide an accurate valuation. The valuation is free and no-obligation.",
    },
    {
      question: "Is the home valuation really free?",
      answer:
        "Yes. Dr. Jan provides free home valuations with no obligation. You'll receive a comprehensive analysis. There's no pressure—whether you're ready to sell now or just curious about your home's value.",
    },
    {
      question: "How accurate are online home value estimators?",
      answer:
        "Online estimators (Zillow, Redfin) use algorithms and can be off by 10-20% or more. Dr. Jan's valuation uses real MLS data, local expertise, and comparable sales for greater accuracy.",
    },
  ],

  "market-report": [
    {
      question: "What is the Providence median home price in 2026?",
      answer:
        "As of January 2026, the Providence and North Las Vegas median home price is approximately $450,000, up 4.2% year-over-year. Dr. Jan provides current Providence market data. Call (702) 744-2993.",
    },
    {
      question: "How long do Providence homes sit on the market?",
      answer:
        "Well-priced Providence homes sell in an average of 28 days. Premium homes may take 45+ days. Overpriced homes sit for months. Pricing correctly from day one is the key to a successful sale.",
    },
    {
      question: "Is now a good time to buy or sell in Providence?",
      answer:
        "Market conditions change. Dr. Jan provides current Providence data and honest advice. Generally, low inventory favors sellers; balanced markets give buyers more negotiating power. Call (702) 744-2993 for a market consultation.",
    },
  ],

  "market-insights": [
    {
      question: "What drives Providence real estate prices?",
      answer:
        "Employment, population growth, interest rates, and housing inventory. Providence and North Las Vegas benefit from no state income tax, master-planned amenities, and a growing local economy. Dr. Jan monitors trends and provides insights.",
    },
    {
      question: "How do interest rates affect Las Vegas home prices?",
      answer:
        "Higher rates reduce buying power and can cool demand. Lower rates boost affordability. Dr. Jan helps you understand how rate changes affect your purchase or sale strategy.",
    },
  ],

  "market-update": [
    {
      question: "What's the latest Providence real estate market update?",
      answer:
        "As of January 2026, the Providence and North Las Vegas market shows a median of approximately $450K, 28 days on market. Dr. Jan provides ongoing Providence market updates—call (702) 744-2993.",
    },
    {
      question: "Where can I get current Providence market statistics?",
      answer:
        "Dr. Jan Duffy provides Providence market reports and insights. GLVAR (Greater Las Vegas Association of REALTORS) provides official MLS statistics. Call (702) 744-2993 for a personalized Providence market briefing.",
    },
  ],

  // ============ 55+ Communities ============
  fiftyPlusCommunities: [
    {
      question: "Are there 55+ communities in Providence?",
      answer:
        "Providence has no dedicated 55+ community. Nearby options include Sun City Aliante (5 mi north) and Del Webb communities. For single-story, low-maintenance living in Providence, search Providence homes or call (702) 744-2993.",
    },
    {
      question: "What is the age requirement for 55+ communities?",
      answer:
        "At least one resident must be 55 or older. Some communities allow 18+ in the household under certain rules. Each community has specific age restriction details—Dr. Jan can explain the rules for any community.",
    },
    {
      question: "What amenities do nearby 55+ communities offer?",
      answer:
        "Sun City Aliante and Del Webb communities offer pools, fitness centers, clubs, golf, pickleball, and social activities. Providence residents seeking low-maintenance living can also find single-story options across all 27 neighborhoods.",
    },
    {
      question: "Are 55+ community homes good investments?",
      answer:
        "55+ communities often have steady demand from retirees and relocators. Resale values depend on the community and market. Dr. Jan can provide investment and resale analysis for 55+ properties.",
    },
    {
      question: "How do I choose the right 55+ community?",
      answer:
        "Consider amenities, location, HOA fees, resale history, and lifestyle fit. Dr. Jan offers community tours and can match you with the right active adult community. Call (702) 744-2993.",
    },
  ],

  "sun-city-summerlin": [
    {
      question: "Looking for 55+ living?",
      answer:
        "Dr. Jan specializes in Providence Las Vegas. Providence has no dedicated 55+ community. Nearby options include Sun City Aliante (5 mi north) and Del Webb communities. For single-story Providence homes, visit /55-plus-communities or call (702) 744-2993.",
    },
  ],

  "sun-city-anthem": [
    {
      question: "Looking for 55+ living near Providence?",
      answer:
        "Providence has no 55+ community. Sun City Aliante is 5 miles north of Providence. For age-restricted options and single-story Providence homes, visit /55-plus-communities or call (702) 744-2993.",
    },
  ],

  "sun-city-aliante": [
    {
      question: "What is Sun City Aliante?",
      answer:
        "Sun City Aliante is a 55+ community about 5 miles north of Providence. It offers active adult living with recreation centers, pools, and amenities. Dr. Jan can discuss Providence and nearby 55+ options—call (702) 744-2993.",
    },
  ],

  "heritage-stonebridge": [
    {
      question: "Looking for 55+ living?",
      answer:
        "Dr. Jan focuses on Providence Las Vegas. For single-story, low-maintenance options in Providence or nearby 55+ communities like Sun City Aliante, visit /55-plus-communities or call (702) 744-2993.",
    },
  ],

  "solera-anthem": [
    {
      question: "Looking for 55+ living?",
      answer:
        "Dr. Jan specializes in Providence Las Vegas. For single-story Providence homes or nearby 55+ communities like Sun City Aliante, visit /55-plus-communities or call (702) 744-2993.",
    },
  ],

  "trilogy-summerlin": [
    {
      question: "Looking for 55+ living?",
      answer:
        "Dr. Jan focuses on Providence Las Vegas. For age-restricted options near Providence or single-story homes in all 27 Providence neighborhoods, visit /55-plus-communities or call (702) 744-2993.",
    },
  ],

  "del-webb-lake-las-vegas": [
    {
      question: "Looking for 55+ living?",
      answer:
        "Dr. Jan specializes in Providence Las Vegas. Providence has no 55+ community. Nearby options include Sun City Aliante and Del Webb communities. Visit /55-plus-communities or call (702) 744-2993.",
    },
  ],

  // ============ Misc Pages ============
  faq: [
    {
      question: "Why choose Berkshire Hathaway HomeServices for Providence real estate?",
      answer:
        "BHHS is backed by Warren Buffett's Berkshire Hathaway Inc.—unmatched trust and financial stability. You get a global network of 50,000+ agents, world-class marketing, and a brand synonymous with integrity.",
    },
    {
      question: "How do I contact Dr. Jan Duffy?",
      answer:
        "Call (702) 744-2993 or email DrDuffy@ProvidenceLasVegas.com. Office: 7181 N Hualapai Way #135, Las Vegas, NV 89166. Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday By Appointment.",
    },
  ],

  "google-business": [
    {
      question: "Where can I read Dr. Jan Duffy's Google reviews?",
      answer:
        "Search 'Dr. Jan Duffy Berkshire Hathaway' on Google to find her Google Business Profile. You can read 200+ reviews from satisfied clients. Click through to leave your own review after working with Dr. Jan.",
    },
  ],

  "why-berkshire-hathaway": [
    {
      question: "Why is Berkshire Hathaway HomeServices different from other real estate brands?",
      answer:
        "BHHS is the only major real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means financial stability, ethical standards, and a global referral network of 50,000+ agents.",
    },
    {
      question: "Does Berkshire Hathaway charge higher fees?",
      answer:
        "Commission structures are negotiable. Dr. Jan offers transparent pricing. For buyers, representation is typically free—the seller pays. You get BHHS resources without paying more.",
    },
  ],

  services: [
    {
      question: "What real estate services does Dr. Jan Duffy offer in Providence?",
      answer:
        "Buyer and seller representation, premium Providence homes, new construction, investment properties, age-restricted options near Providence, California to Providence relocation, probate and divorce sales, and home valuations.",
    },
    {
      question: "Are buyer services free?",
      answer:
        "Yes. In most transactions, the seller pays the buyer's agent commission. You get full representation from Dr. Jan at no cost. This includes new construction—the builder pays her commission.",
    },
  ],

  listings: [
    {
      question: "How do I search for Providence homes for sale?",
      answer:
        "Use the property search on this site or visit Dr. Jan's MLS portal. You can filter by price, beds, baths, and Providence neighborhood. Call (702) 744-2993 to set up automated Providence listing alerts.",
    },
    {
      question: "Are the listings on this site current?",
      answer:
        "Listings are fed from the MLS and update regularly. For the most current information, call (702) 744-2993. Dr. Jan can also show you off-market and coming-soon listings.",
    },
    {
      question: "How competitive is the Providence housing market in 2026?",
      answer:
        "The Providence market is moderately competitive with 2.1 months of inventory—a slight seller's market. Well-priced Providence homes in desirable neighborhoods often receive multiple offers within the first week. Having a pre-approval and experienced agent gives you a significant advantage.",
    },
    {
      question: "What's the best time of year to buy a home in Providence?",
      answer:
        "Providence has a year-round real estate market, but inventory typically peaks in spring (March-May) while competition is lowest in winter (November-January). The best time depends on your priorities: more selection in spring, potentially better deals in winter.",
    },
    {
      question: "How much do I need for a down payment in Providence?",
      answer:
        "Down payment requirements vary by loan type: FHA loans require 3.5%, conventional loans typically 3-20%, VA loans 0% for eligible veterans. Nevada also offers down payment assistance programs for first-time buyers. Dr. Jan can connect you with lenders who specialize in various loan programs.",
    },
    {
      question: "Are Providence HOA fees expensive?",
      answer:
        "HOA fees in Providence range from $25/month for basic community maintenance to $400+/month for guard-gated communities with extensive amenities. Most standard Providence neighborhoods fall between $50-$150/month. Dr. Jan always reviews HOA documents to ensure you understand what's included.",
    },
  ],
};

/**
 * Get FAQ items for a specific page type
 * @param pageType - Key from faqLibrary (e.g. "home", "providence", "summerlin")
 * @param replacements - Optional object for template replacements (e.g. { neighborhoodName: "Oxford Commons" })
 */
export function getFAQsForPage(
  pageType: string,
  replacements?: Record<string, string>
): FAQItem[] {
  const faqs = faqLibrary[pageType] || faqLibrary.home;

  if (!replacements || Object.keys(replacements).length === 0) {
    return faqs;
  }

  return faqs.map((faq) => ({
    question: Object.entries(replacements).reduce(
      (q, [key, val]) => q.replace(new RegExp(`{${key}}`, "g"), val),
      faq.question
    ),
    answer: Object.entries(replacements).reduce(
      (a, [key, val]) => a.replace(new RegExp(`{${key}}`, "g"), val),
      faq.answer
    ),
  }));
}

/**
 * Get all available page types for FAQ lookup
 */
export function getFAQPageTypes(): string[] {
  return Object.keys(faqLibrary);
}
