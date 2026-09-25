"use client";

import dynamic from "next/dynamic";

// Next 15: `ssr: false` is only allowed inside a Client Component.
const AIChatWidget = dynamic(() => import("@/components/chat/AIChatWidget").then((m) => ({ default: m.default })), {
  ssr: false,
  loading: () => null,
});

export default AIChatWidget;
