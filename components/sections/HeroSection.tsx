"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { realscoutUrls } from "@/lib/site-config";
import GbpActionBar from "@/components/gbp/GbpActionBar";
import { getSiteImage, type SiteImageKey } from "@/lib/images";

const HERO_KEYS: SiteImageKey[] = [
  "hero-homes-for-sale",
  "hero-providence-community",
  "hero-listings",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = HERO_KEYS.map((key) => getSiteImage(key));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_KEYS.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.key}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
              className="object-cover"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "low"}
              quality={75}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="text-blue-400">Providence Real Estate</span>
          <br />
          Homes for Sale in Providence Las Vegas
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Providence Real Estate serves Providence and North Las Vegas, NV 89166. Buy or sell with expert local guidance. Call (702) 744-2993.
        </p>

        {/* RealScout Search Widget */}
        <div className="realscout-wrapper mb-4">
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>`,
            }}
          />
        </div>
        <a
          href={realscoutUrls.searchHero}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 hover:text-white text-sm underline transition-colors mb-4"
        >
          Open full search →
        </a>
        <GbpActionBar variant="onDark" className="max-w-4xl" />

        {/* Trust Indicators - Services + Locations focus */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Buy</span>
            <span>Home Buying</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Sell</span>
            <span>Home Selling</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Locations</span>
            <span>Providence, North Las Vegas</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - will-change promotes to compositor layer (fixes non-composited animation) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce [will-change:transform] [contain:layout]">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
