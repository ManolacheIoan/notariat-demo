import { Building2, ChevronDown, Feather, FilePen, Gem, Gift, House, Landmark, Languages, ScrollText, Stamp, type LucideIcon } from "lucide-react";
import type { IconName } from "@/content/site";

export const icons: Record<IconName, LucideIcon> = {
  house: House, scroll: ScrollText, gift: Gift, pen: FilePen, stamp: Stamp,
  landmark: Landmark, rings: Gem, feather: Feather, building: Building2, languages: Languages,
};

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const I = icons[name];
  return <I className={className} strokeWidth={1.4} aria-hidden />;
}

export function SectionHead({ eyebrow, title, lead, id, center = false, className = "" }: {
  eyebrow: string; title: React.ReactNode; lead?: React.ReactNode; id?: string; center?: boolean; className?: string;
}) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-4 font-serif text-[2.35rem] leading-[1.08] font-semibold text-balance text-navy md:text-5xl">{title}</h2>
      {lead && <p className="mt-5 text-[17px] leading-relaxed text-muted">{lead}</p>}
    </div>
  );
}

/** Element de acordeon pe <details> nativ: accesibil din tastatură fără JavaScript. */
export function AccordionItem({ summary, children, defaultOpen = false, id }: {
  summary: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean; id?: string;
}) {
  return (
    <details id={id} open={defaultOpen} className="group border-b border-linie">
      <summary className="flex items-center justify-between gap-6 py-5 text-left">
        <span className="font-serif text-[1.3rem] leading-snug font-semibold text-navy group-hover:text-aur-text md:text-[1.45rem]">{summary}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-linie text-aur-text group-open:border-aur">
          <ChevronDown className="chev h-4 w-4" aria-hidden />
        </span>
      </summary>
      <div className="pb-6">{children}</div>
    </details>
  );
}

/** Placeholder premium pentru fotografia notarului: siluetă line-art pe gradient. */
export function NotaryPortrait({ className = "" }: { className?: string }) {
  return (
    <div role="img" aria-label="Loc pentru fotografia notarului (placeholder)" className={`relative overflow-hidden bg-[linear-gradient(160deg,#1f3352_0%,#14233b_55%,#0d1828_100%)] ${className}`}>
      <div className="texture absolute inset-0 opacity-60" />
      <div className="absolute inset-4 border border-aur/35" />
      <svg viewBox="0 0 200 240" className="absolute inset-x-0 bottom-0 mx-auto h-[80%] w-auto" fill="none" stroke="#d9bf8c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="100" cy="82" r="58" strokeOpacity=".18" />
        <circle cx="100" cy="82" r="70" strokeOpacity=".09" />
        <path d="M100 40c-17 0-28 13-28 32 0 22 12 40 28 40s28-18 28-40c0-19-11-32-28-32Z" strokeOpacity=".9" />
        <path d="M89 108v14c0 4-3 7-8 9M111 108v14c0 4 3 7 8 9" strokeOpacity=".75" />
        <path d="M22 240c4-50 24-90 60-107M178 240c-4-50-24-90-60-107" strokeOpacity=".9" />
        <path d="M82 133l18 40 18-40" strokeOpacity=".6" />
        <path d="M82 133l-6 22 14 6M118 133l6 22-14 6" strokeOpacity=".45" />
        <path d="M100 173v67" strokeOpacity=".3" />
      </svg>
      <span className="absolute top-8 left-8 rounded-full border border-aur-deschis/60 bg-navy-2/70 px-3 py-1 text-[12px] font-medium text-aur-deschis">
        Foto notar — [exemplu]
      </span>
    </div>
  );
}
