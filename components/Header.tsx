"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { telHref } from "@/lib";
import { Monogram } from "./Monogram";

export function DemoBand() {
  return (
    <div className="bg-navy-2 text-center text-[12px] leading-5 tracking-wide text-aur-deschis">
      <p className="container-x py-1.5">{site.demoBand}</p>
    </div>
  );
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Monogram className="mark h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.35rem] font-semibold tracking-tight ${onDark ? "text-hartie" : "text-navy"}`}>Avalon</span>
        <span className={`mt-1 text-[10px] font-semibold tracking-[0.24em] uppercase ${onDark ? "text-aur-deschis" : "text-aur-text"}`}>Birou notarial</span>
      </span>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Închide meniul la schimbarea paginii.
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) { setPrevPath(pathname); setOpen(false); }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-linie/70 bg-hartie/95" data-scrolled={scrolled || open}>
      <a href="#continut" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-hartie">
        Sari la conținut
      </a>
      <div className="bar container-x flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Logo /><span className="sr-only"> – pagina principală</span>
        </Link>
        <nav aria-label="Navigare principală" className="hidden xl:block">
          <ul className="flex items-center gap-7 text-[14px] text-muted">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="relative py-2 transition-colors hover:text-navy after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-aur after:transition-transform hover:after:scale-x-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={telHref} className="btn hidden items-center gap-2 px-3 py-2 text-[14px] font-medium text-navy hover:text-aur-text md:inline-flex">
            <Phone className="h-4 w-4" aria-hidden /> {site.telefon.afisat}
          </a>
          <Link href="/#programare" className="btn hidden items-center gap-2 rounded-sm bg-navy px-4 py-2.5 text-[14px] font-medium text-hartie hover:bg-navy-3 sm:inline-flex">
            <CalendarCheck className="h-4 w-4" aria-hidden /> Programează-te
          </Link>
          <button
            ref={btnRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-navy hover:bg-crem xl:hidden"
            aria-expanded={open}
            aria-controls="meniu-mobil"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="meniu-mobil" aria-label="Meniu" className="border-t border-linie bg-hartie xl:hidden">
          <ul className="container-x grid gap-px py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-linie/60 py-3.5 font-serif text-xl text-navy">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <Link href="/#programare" onClick={() => setOpen(false)} className="btn flex items-center justify-center gap-2 rounded-sm bg-navy px-4 py-3 font-medium text-hartie">
                <CalendarCheck className="h-4 w-4" aria-hidden /> Programează-te
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

/** Bara fixă de jos, doar pe mobil. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-3 bg-navy-2/97 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a href={telHref} className="btn flex h-12 items-center justify-center gap-2 rounded-sm border border-aur/60 text-[15px] font-medium text-hartie">
          <Phone className="h-4 w-4 text-aur-deschis" aria-hidden /> Sună
        </a>
        <Link href="/#programare" className="btn flex h-12 items-center justify-center gap-2 rounded-sm bg-aur-deschis text-[15px] font-semibold text-navy-2">
          <CalendarCheck className="h-4 w-4" aria-hidden /> Programează-te
        </Link>
      </div>
    </div>
  );
}
