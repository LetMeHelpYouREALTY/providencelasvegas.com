import Image from "next/image";
import { getSiteImage, type SiteImageKey } from "@/lib/images";

type SectionMediaProps = {
  imageKey: SiteImageKey;
  heading: string;
  headingId?: string;
  subtitle?: React.ReactNode;
  as?: "h2" | "h3";
  className?: string;
  invert?: boolean;
};

/**
 * Section heading with a photo created for that H2/H3.
 */
export default function SectionMedia({
  imageKey,
  heading,
  headingId,
  subtitle,
  as = "h2",
  className = "",
  invert = false,
}: SectionMediaProps) {
  const image = getSiteImage(imageKey);
  const HeadingTag = as;

  return (
    <div className={`mb-8 ${className}`}>
      <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          unoptimized={image.unoptimized}
        />
      </div>
      <HeadingTag
        id={headingId}
        className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${
          invert ? "text-white" : "text-slate-900"
        }`}
      >
        {heading}
      </HeadingTag>
      {subtitle ? (
        <div className={invert ? "text-slate-200" : "text-slate-600"}>{subtitle}</div>
      ) : null}
    </div>
  );
}
