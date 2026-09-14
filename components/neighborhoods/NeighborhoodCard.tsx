import Image from "next/image";
import Link from "next/link";
import { getSiteImage, neighborhoodImageKey } from "@/lib/images";

type NeighborhoodCardProps = {
  slug: string;
  name: string;
};

export default function NeighborhoodCard({ slug, name }: NeighborhoodCardProps) {
  const image = getSiteImage(neighborhoodImageKey(slug));

  return (
    <Link
      href={`/providence/neighborhoods/${slug}`}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white text-center transition-all hover:border-blue-300 hover:shadow-md"
    >
      <div className="relative h-28 w-full overflow-hidden bg-slate-100">
        <Image
          src={image.src}
          alt={`${name} homes in Providence Las Vegas, NV 89166`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 240px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
          {name}
        </h3>
        <p className="mt-1 text-sm text-slate-500">Providence Las Vegas</p>
      </div>
    </Link>
  );
}
