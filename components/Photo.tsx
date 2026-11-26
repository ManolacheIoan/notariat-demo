import { stock, type StockKey } from "@/content/images";
import { BASE } from "@/lib";

type Props = {
  name: StockKey;
  alt?: string;
  className?: string;
  /** atribut sizes pentru srcset */
  sizes?: string;
  priority?: boolean;
  /** încărcare imediată, fără prioritate mare (pentru imagini de sus pe subpagini) */
  eager?: boolean;
  /** clase suplimentare pe <img> (ex. object-position) */
  imgClass?: string;
};

/** Fotografie WebP responsivă (640/1024/1600), lazy implicit. Containerul stabilește dimensiunea. */
export function Photo({ name, alt, className = "", sizes = "100vw", priority = false, eager = false, imgClass = "" }: Props) {
  const s = stock[name];
  const srcSet = [640, 1024, 1600].map((w) => `${BASE}/images/${name}-${w}.webp ${w}w`).join(", ");
  return (
    <div className={`relative overflow-hidden bg-crem-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/images/${name}-1024.webp`}
        srcSet={srcSet}
        sizes={sizes}
        width={s.w}
        height={s.h}
        alt={alt ?? s.alt}
        loading={priority || eager ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${imgClass}`}
      />
    </div>
  );
}
