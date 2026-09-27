"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { AmenityCategoryId } from "@/lib/amenities-config";

const AmenityMap = dynamic(
  () => import("@/components/location/AmenityMap").then((m) => ({ default: m.default })),
  {
    ssr: false,
    loading: () => (
      <div
        className="rounded-xl overflow-hidden bg-slate-100 h-[500px] flex items-center justify-center"
        aria-busy="true"
        aria-label="Loading amenity map"
      >
        <p className="text-slate-600">Loading map…</p>
      </div>
    ),
  }
);

type AmenityMapClientProps = {
  defaultCategory?: AmenityCategoryId;
  /** @deprecated Use defaultCategory */
  defaultType?: string;
  compact?: boolean;
  className?: string;
};

export default function AmenityMapClient({
  defaultCategory,
  defaultType,
  compact = false,
  className,
}: AmenityMapClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const reservedHeight = compact ? "min-h-[360px]" : "min-h-[500px]";

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const category =
    defaultCategory ??
    (defaultType === "restaurant" ? "restaurants" : undefined);

  return (
    <div ref={containerRef} className={`${reservedHeight} ${className ?? ""}`}>
      {shouldLoad ? (
        <AmenityMap defaultCategory={category} compact={compact} />
      ) : (
        <div
          className={`rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center ${compact ? "h-[360px]" : "h-[500px]"}`}
          aria-hidden
        />
      )}
    </div>
  );
}
