"use client";

import { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { calendlyUrlFor } from "@/lib/calendly";
import "./types";

interface CalendlyBadgeProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

export default function CalendlyBadge({
  url,
  text = "Schedule time with me",
  color = "#0069ff",
  textColor = "#ffffff",
  branding = true,
}: CalendlyBadgeProps) {
  const pathname = usePathname() || "/";

  // Rebuild the badge on each route change so its booking URL (event and
  // utm_campaign) matches the page the visitor is on.
  const initBadge = useCallback(() => {
    if (!window.Calendly) return;
    if (window.Calendly.destroyBadgeWidget) {
      window.Calendly.destroyBadgeWidget();
    } else {
      document.querySelector(".calendly-badge-widget")?.remove();
    }
    window.Calendly.initBadgeWidget({
      url: url ?? calendlyUrlFor(pathname, "badge"),
      text,
      color,
      textColor,
      branding,
    });
  }, [url, pathname, text, color, textColor, branding]);

  useEffect(() => {
    initBadge();
  }, [initBadge]);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={initBadge}
      />
    </>
  );
}
