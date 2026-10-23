"use client";

import { usePathname } from "next/navigation";
import { calendlyUrlFor } from "@/lib/calendly";
import "./types";

/** Booking strip placed directly after the RealScout listings widget. */
export default function CalendlyAfterListings() {
  const pathname = usePathname() || "/";
  const url = calendlyUrlFor(pathname, "after-listings");

  const open = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || !window.Calendly) return;
    event.preventDefault();
    window.Calendly.initPopupWidget({ url });
  };

  return (
    <div className="mx-auto my-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 sm:flex-row">
      <p className="text-base text-gray-800">
        See a home you like? Pick a time with Dr. Jan Duffy.
      </p>
      <a
        href={url}
        onClick={open}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Schedule time with me
      </a>
    </div>
  );
}
