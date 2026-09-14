import Image from "next/image";
import GbpActionBar from "@/components/gbp/GbpActionBar";
import { getSiteImage, type SiteImageKey } from "@/lib/images";

type PageHeroProps = {
  imageKey: SiteImageKey;
  title: string;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  compact?: boolean;
  priority?: boolean;
  imageAlt?: string;
};

/**
 * Full-width heading photo matched to the page H1, with GBP engagement CTAs.
 */
export default function PageHero({
  imageKey,
  title,
  subtitle,
  badge,
  children,
  compact = false,
  priority = true,
  imageAlt,
}: PageHeroProps) {
  const image = getSiteImage(imageKey);

  return (
    <section
      className={`relative isolate flex items-end overflow-hidden ${
        compact ? "min-h-[48vh] md:min-h-[52vh]" : "min-h-[56vh] md:min-h-[64vh]"
      }`}
      aria-labelledby="page-hero-heading"
    >
      <Image
        src={image.src}
        alt={imageAlt ?? image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        quality={78}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25" />
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-10 md:pb-14">
        {badge ? <div className="mb-4">{badge}</div> : null}
        <h1
          id="page-hero-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl text-balance"
        >
          {title}
        </h1>
        {subtitle ? (
          <div className="text-base md:text-lg text-white/90 max-w-3xl mb-6">{subtitle}</div>
        ) : null}
        {children}
        <GbpActionBar variant="onDark" className="mt-6 max-w-5xl" />
        <p className="mt-4 text-sm text-white/80">
          Providence Real Estate | 7181 N Hualapai Way #135, Las Vegas, NV 89166 | (702) 744-2993
        </p>
      </div>
    </section>
  );
}
