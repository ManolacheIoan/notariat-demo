import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { nav, servicii, site } from "@/content/site";
import { telHref } from "@/lib";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="on-dark bg-navy-2 text-[14px] text-hartie/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-xs leading-relaxed">
            Acte notariale clare, rapide și sigure, în {site.oras}. Explicații pe înțeles și liste de acte trimise din timp.
          </p>
          <p className="mt-5 inline-block border border-aur/40 px-3 py-1.5 text-[12px] text-aur-deschis">{site.demoBand}</p>
        </div>
        <div>
          <h2 className="font-serif text-lg font-semibold text-hartie">Servicii</h2>
          <ul className="mt-4 space-y-2">
            {servicii.slice(0, 6).map((s) => (
              <li key={s.slug}><Link prefetch={false} href={`/servicii/${s.slug}/`} className="hover:text-aur-deschis">{s.titlu.split(" (")[0]}</Link></li>
            ))}
            <li><Link href="/#servicii" className="text-aur-deschis hover:underline">Toate serviciile</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-lg font-semibold text-hartie">Navigare</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-aur-deschis">{n.label}</Link></li>)}
            <li><Link href="/#programare" className="hover:text-aur-deschis">Programare</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-lg font-semibold text-hartie">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aur-deschis" aria-hidden />{site.adresa.completa} <span className="exemplu">fictiv</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-aur-deschis" aria-hidden /><a href={telHref} className="hover:text-aur-deschis">{site.telefon.afisat}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-aur-deschis" aria-hidden /><a href={`mailto:${site.email}`} className="hover:text-aur-deschis">{site.email}</a></li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-aur-deschis" aria-hidden />{site.program[0].zile}, {site.program[0].ore}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hartie/10">
        <div className="container-x flex flex-col gap-3 py-6 text-[13px] text-hartie/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.nume}. Firmă fictivă, site demonstrativ.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/confidentialitate/" className="hover:text-aur-deschis">Confidențialitate</Link></li>
            <li><Link href="/cookies/" className="hover:text-aur-deschis">Cookies</Link></li>
            <li>Realizat de <a href={site.agentie.url} className="text-aur-deschis underline underline-offset-2 hover:text-hartie">{site.agentie.nume}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
