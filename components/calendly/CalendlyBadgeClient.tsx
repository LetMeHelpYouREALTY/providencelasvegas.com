"use client";

import dynamic from "next/dynamic";

// Next 15: `ssr: false` is only allowed inside a Client Component.
const CalendlyBadge = dynamic(() => import("@/components/calendly/CalendlyBadge").then((m) => ({ default: m.default })), {
  ssr: false,
  loading: () => null,
});

export default CalendlyBadge;
