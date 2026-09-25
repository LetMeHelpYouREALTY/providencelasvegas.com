"use client";

import dynamic from "next/dynamic";

// Next 15: `ssr: false` is only allowed inside a Client Component.
const AmenityMap = dynamic(
  () => import("@/components/location/AmenityMap").then((m) => ({ default: m.default })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl overflow-hidden bg-slate-100 h-[500px] flex items-center justify-center">
        <p className="text-slate-600">Loading map...</p>
      </div>
    ),
  }
);

export default AmenityMap;
