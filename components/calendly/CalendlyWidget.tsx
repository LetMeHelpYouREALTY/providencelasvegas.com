"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { calendlyUrlFor } from "@/lib/calendly";

interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({
  url: eventUrl,
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const url = calendlyUrlFor(usePathname() || "/", "inline", eventUrl);

  useEffect(() => {
    // Ensure Calendly script is loaded and widget is initialized
    const initWidget = () => {
      if (typeof window !== "undefined" && (window as any).Calendly && widgetRef.current) {
        // Clear any existing content
        widgetRef.current.innerHTML = "";
        
        // Create the widget div
        const widgetDiv = document.createElement("div");
        widgetDiv.className = "calendly-inline-widget";
        widgetDiv.setAttribute("data-url", url);
        widgetDiv.style.minWidth = minWidth;
        widgetDiv.style.height = height;
        widgetDiv.style.width = "100%";
        
        widgetRef.current.appendChild(widgetDiv);
        
        // Initialize the widget
        (window as any).Calendly.initInlineWidget({
          url: url,
          parentElement: widgetDiv,
        });
      }
    };

    // Try to initialize immediately if Calendly is already loaded
    if ((window as any).Calendly) {
      initWidget();
    } else {
      // Wait for the script to load
      const checkCalendly = setInterval(() => {
        if ((window as any).Calendly) {
          clearInterval(checkCalendly);
          initWidget();
        }
      }, 100);

      // Clean up interval after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000);
    }
  }, [url, minWidth, height]);

  return (
    <div 
      ref={widgetRef} 
      style={{ minWidth, height, width: "100%" }}
    />
  );
}
