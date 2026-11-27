import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Info, Phone } from "lucide-react";
import { acteNota, onorarii, servicii } from "@/content/site";
import { og, telHref } from "@/lib";
import { Photo } from "@/components/Photo";
import { ServiceIcon } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return servicii.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = servicii.find((x) => x.slug === slug);
  if (!s) return {};
  const description = `${s.scurt} Ce include și ce acte sunt necesare, pe scurt. Birou Notarial Avalon, Galați (site demonstrativ).`;
  const url = `servicii/${s.slug}/`;
  return { title: s.titlu, description, alternates: { canonical: url }, openGraph: og(s.titlu, description, url) };
}

export default async function ServiciuPage({ params }: Props) {
  const { slug } = await params;
  const idx = servicii.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = servicii[idx];
  const next = servicii[(idx + 1) % servicii.length];
  const programare = `/?serviciu=${s.slug}#programare`;

  return (
    <>
      <section className="border-b border-linie">
        <div className="container-x grid items-center gap-10 py-12 md:py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <nav aria-label="Fir de navigare" className="text-[13px] text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-navy">Acasă</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/#servicii" className="hover:text-navy">Servicii</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-navy">{s.titlu.split(" (")[0]}</li>
              </ol>
            </nav>
            <span className="mt-8 flex h-14 w-14 items-center justify-center border border-aur/50 text-navy"><ServiceIcon name={s.icon} className="h-7 w-7" /></span>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] font-semibold text-balance text-navy md:text-6xl">{s.titlu}</h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted md:text-lg">{s.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={programare} className="btn inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-navy px-6 font-medium text-hartie hover:bg-navy-3">
                <CalendarCheck className="h-4 w-4" aria-hidden /> Programează-te
              </Link>
              <a href={telHref} className="btn inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-navy/25 px-6 font-medium text-navy hover:border-aur">
                <Phone className="h-4 w-4" aria-hidden /> Sună acum
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-3 hidden border border-aur/50 lg:block" aria-hidden />
            <Photo name={s.foto} priority sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[16/10] lg:aspect-[4/5]" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow">Ce include</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-navy">Ce facem pentru dumneavoastră</h2>
            <ul className="mt-8 divide-y divide-linie border-y border-linie">
              {s.include.map((x) => (
                <li key={x} className="flex gap-4 py-4 text-[16px] leading-relaxed text-ink">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-aur" aria-hidden />{x.charAt(0).toUpperCase() + x.slice(1)}
                </li>
              ))}
            </ul>
            {s.bineDeStiut.length > 0 && (
              <div className="mt-10 bg-crem p-6">
                <p className="font-serif text-xl font-semibold text-navy">Bine de știut</p>
                <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                  {s.bineDeStiut.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <p className="mt-4 text-[13px] text-muted">Informațiile au caracter general și nu reprezintă consultanță juridică.</p>
              </div>
            )}
          </div>
          <div className="lg:col-span-6">
            <div className="border border-linie bg-hartie p-7 md:p-9">
              <p className="eyebrow">Ce acte îmi trebuie?</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-navy">Documente necesare</h2>
              <p className="mt-4 flex gap-2.5 border-l-2 border-aur bg-crem px-4 py-3 text-[14px] text-navy">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-aur-text" aria-hidden /> {acteNota}
              </p>
              <ul className="mt-6 grid gap-3">
                {s.acte.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-aur-text" aria-hidden />{a}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-linie pt-6">
                <p className="text-[14px] text-muted">{onorarii.nota}</p>
                <Link href={programare} className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-navy underline decoration-aur underline-offset-4 hover:text-aur-text">
                  Cere o estimare și o programare <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Alte servicii" className="border-t border-linie bg-crem">
        <div className="container-x flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/#servicii" className="inline-flex items-center gap-2 text-[15px] text-navy hover:text-aur-text"><ArrowLeft className="h-4 w-4" aria-hidden /> Toate serviciile</Link>
          <Link prefetch={false} href={`/servicii/${next.slug}/`} className="group inline-flex items-center gap-3 text-right">
            <span><span className="block text-[12px] tracking-[0.14em] text-muted uppercase">Serviciul următor</span><span className="font-serif text-xl font-semibold text-navy group-hover:text-aur-text">{next.titlu}</span></span>
            <ArrowRight className="h-5 w-5 text-aur-text" aria-hidden />
          </Link>
        </div>
      </nav>
    </>
  );
}
