import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { cn } from "lib/utils";
import SchemaScript from "@/components/SchemaScript";
import GlobalBreadcrumbSchema from "@/components/navigation/GlobalBreadcrumbSchema";
import AIChatWidget from "@/components/chat/AIChatWidgetClient";
import CalendlyBadge from "@/components/calendly/CalendlyBadgeClient";
import {
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";
import { ogImageFor } from "@/lib/images";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";

const title = "Providence Las Vegas Real Estate | All 27 Neighborhoods | Dr. Jan Duffy";
const description =
  "Providence Las Vegas master-planned community expert. 27 neighborhoods, 5,600+ homes, 3 parks. Buy, sell, or invest in Providence with Dr. Jan Duffy, BHHS Nevada Properties.";
const url = "https://www.providencelasvegas.com";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Providence Las Vegas Real Estate",
  },
  description,
  metadataBase: new URL(url),
  keywords: [
    "Providence Las Vegas",
    "Providence real estate",
    "Providence homes for sale",
    "Providence neighborhoods",
    "89166 homes",
    "Oxford Commons",
    "Saratoga Highlands",
    "Providence HOA",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "Providence Real Estate | Homes for Sale in Providence Las Vegas",
    type: "website",
    locale: "en_US",
    images: [ogImageFor("og-providence-default")],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageFor("og-providence-default").url],
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
  },
  // Add your Google Search Console verification code in .env as GOOGLE_SITE_VERIFICATION
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }),
};

// Combined site-wide schemas using the schema utility
const siteWideSchemas = combineSchemas(
  generateRealEstateAgentSchema(),
  generateWebSiteSchema()
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        {/* Preconnect to critical third-party origins (Lighthouse performance) */}
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.realscout.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        {/* Site-wide JSON-LD Schema: RealEstateAgent + WebSite */}
        <SchemaScript schema={siteWideSchemas} id="site-schema" />
        <GlobalBreadcrumbSchema />
        {/* Google tag (gtag.js) - Providence Las Vegas - afterInteractive so GA4 receives data */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRG4ZVGKDK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MRG4ZVGKDK');
          `}
        </Script>
        {/* RealScout Widget Script - loaded once globally - lazyOnload to avoid blocking LCP */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
        />
        {/* Calendly Widget Script - loaded once globally - lazyOnload for performance */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          "antialiased bg-white text-sm md:text-base text-slate-800",
        )}
      >
        {children}
        <Script src="/ads-conversions.js" strategy="afterInteractive" />
        <AIChatWidget />
        <CalendlyBadge />
                {/* Google Tag */}
        {process.env.NEXT_PUBLIC_GOOGLE_TAG_ID && (
          <>
            <Script
              id="google-tag"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');
              `}
            </Script>
          </>
        )}
{/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      
        {/* Follow Up Boss pixel (Widget Tracker) */}
        <Script id="fub-widget-tracker" strategy="afterInteractive">{`
if(location.hostname.slice(-11)!==".vercel.app"&&location.hostname!=="localhost"){(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
{(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
e.parentNode.insertBefore(t,e);})
(window,"https://widgetbe.com/agent",document,"widgetTracker");
window.widgetTracker("create", "WT-XQHVYQWW");
window.widgetTracker("send", "pageview");}
        `}</Script>
  <VercelAnalytics />
  <VercelSpeedInsights />
</body>
    </html>
  );
}

