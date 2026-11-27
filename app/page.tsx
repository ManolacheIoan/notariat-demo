import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Clock, Info, Mail, MapPin, MessageCircle, Phone, Calculator } from "lucide-react";
import { acteNota, despre, hero, intrebari, intrebariNota, onorarii, pasi, servicii, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib";
import { Photo } from "@/components/Photo";
import { AccordionItem, NotaryPortrait, SectionHead, ServiceIcon } from "@/components/ui";
import { BookingForm } from "@/components/BookingForm";
import { MapEmbed } from "@/components/MapEmbed";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicii />
      <Acte />
      <Pasi />
      <Despre />
      <Onorarii />
      <Intrebari />
      <Programare />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-titlu" className="relative overflow-hidden border-b border-linie">
      <div className="texture pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-crem lg:block" aria-hidden />
      <div className="container-x relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28 2xl:py-32">
        <div className="lg:col-span-7">
          <p className="eyebrow">{hero.supratitlu}</p>
          <h1 id="hero-titlu" className="mt-6 font-serif text-[2.9rem] leading-[1.02] font-semibold tracking-tight text-navy sm:text-6xl lg:text-[4.6rem]">
            {hero.titlu.replace("Ana Vlad", "Ana\u00a0Vlad")}
            <span className="mt-3 block text-[0.62em] leading-[1.12] font-medium text-aur-text italic">
              — acte notariale clare, rapide și sigure
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted md:text-lg">{hero.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#programare" className="btn inline-flex h-13 items-center justify-center gap-2 rounded-sm bg-navy px-7 font-medium text-hartie hover:bg-navy-3">
              <CalendarCheck className="h-4 w-4" aria-hidden /> Programează-te
            </Link>
            <a href={telHref} className="btn inline-flex h-13 items-center justify-center gap-2 rounded-sm border border-navy/25 px-7 font-medium text-navy hover:border-aur hover:text-aur-text">
              <Phone className="h-4 w-4" aria-hidden /> Sună acum
            </a>
          </div>
          <ul className="mt-11 grid gap-3 border-t border-linie pt-7 text-[14px] text-muted sm:grid-cols-3 sm:gap-6">
            {hero.repere.map((r) => (
              <li key={r} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-aur-text" aria-hidden /> {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative lg:col-span-5">
          <div className="absolute -inset-3 hidden border border-aur/50 lg:block" aria-hidden />
          <Photo name="birou" priority sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] lg:aspect-[4/5]" imgClass="object-[50%_60%]" />
          <div className="absolute -bottom-6 left-6 hidden max-w-[16rem] bg-navy p-5 text-hartie shadow-xl sm:block">
            <p className="font-serif text-xl leading-snug">Fiecare clauză, explicată înainte de semnare.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicii() {
  return (
    <section id="servicii" aria-labelledby="servicii-titlu" className="py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead id="servicii-titlu" eyebrow="Servicii" title="Acte notariale pentru momentele importante" lead="De la cumpărarea unei locuințe până la o succesiune sau o firmă nouă. Alegeți serviciul pentru detalii și lista de acte." />
        </div>
        <ul className="mt-14 grid gap-px border border-linie bg-linie md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicii.map((s, i) => (
            <li key={s.slug} className={`reveal reveal-d${i % 4} bg-hartie`}>
              <Link prefetch={false} href={`/servicii/${s.slug}/`} className="card group relative flex h-full flex-col border border-transparent p-7 hover:z-10 hover:bg-hartie">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-aur/50 text-navy"><ServiceIcon name={s.icon} /></span>
                  <span className="font-serif text-lg text-aur-text">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 font-serif text-[1.45rem] leading-tight font-semibold text-navy">{s.titlu}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{s.scurt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-aur-text">
                  Detalii și acte <ArrowRight className="arrow h-4 w-4" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
          <li className="on-dark reveal flex flex-col justify-between gap-6 bg-navy p-8 text-hartie md:col-span-2 lg:col-span-2">
            <div>
              <p className="font-serif text-3xl leading-tight">Nu știți exact ce act vă trebuie?</p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-hartie/80">Descrieți-ne situația. Vă spunem ce procedură se potrivește și ce documente să pregătiți.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={telHref} className="btn inline-flex h-11 items-center gap-2 rounded-sm bg-aur-deschis px-5 text-[15px] font-semibold text-navy-2 hover:bg-hartie"><Phone className="h-4 w-4" aria-hidden /> Sunați-ne</a>
              <Link href="/#programare" className="btn inline-flex h-11 items-center gap-2 rounded-sm border border-hartie/30 px-5 text-[15px] hover:border-aur-deschis">Scrieți-ne</Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Acte() {
  return (
    <section id="acte" aria-labelledby="acte-titlu" className="border-y border-linie bg-crem py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHead id="acte-titlu" eyebrow="Pregătire" title="Ce acte îmi trebuie?" lead="Alegeți serviciul și vedeți documentele pe care le aduceți de obicei. Vă trimitem lista exactă pentru situația dumneavoastră." />
            <p className="reveal mt-6 flex gap-2.5 border-l-2 border-aur bg-hartie px-4 py-3 text-[14px] text-navy">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-aur-text" aria-hidden /> {acteNota}
            </p>
            <Photo name="stilou" sizes="(min-width: 1024px) 30vw, 100vw" className="reveal mt-8 hidden aspect-[4/3] lg:block" />
          </div>
        </div>
        <div className="border-t border-linie lg:col-span-8">
          {servicii.map((s, i) => (
            <AccordionItem key={s.slug} id={`acte-${s.slug}`} defaultOpen={i === 0} summary={
              <span className="flex items-center gap-4"><span className="text-aur-text"><ServiceIcon name={s.icon} className="h-5 w-5" /></span>{s.titlu}</span>
            }>
              <div className="pl-9">
                <p className="mb-3 text-[12px] font-semibold tracking-[0.14em] text-aur-text uppercase">Orientativ — confirmați la birou</p>
                <ul className="grid gap-2.5">
                  {s.acte.map((a) => (
                    <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-aur-text" aria-hidden /> {a}
                    </li>
                  ))}
                </ul>
                <Link prefetch={false} href={`/servicii/${s.slug}/`} className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-navy underline decoration-aur underline-offset-4 hover:text-aur-text">
                  Mai multe despre {s.titlu.split(" (")[0].toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pasi() {
  return (
    <section id="pasi" aria-labelledby="pasi-titlu" className="on-dark relative overflow-hidden bg-navy py-20 text-hartie md:py-28">
      <div className="texture absolute inset-0 opacity-40" aria-hidden />
      <div className="container-x relative">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Cum decurge</p>
          <h2 id="pasi-titlu" className="mt-4 font-serif text-[2.35rem] leading-[1.08] font-semibold md:text-5xl">Patru pași, fără drumuri inutile</h2>
        </div>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <span className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-aur/20 via-aur to-aur/20 md:block" aria-hidden />
          <span className="absolute top-2 bottom-2 left-6 w-px bg-aur/40 md:hidden" aria-hidden />
          {pasi.map((p, i) => (
            <li key={p.titlu} className={`reveal reveal-d${i} relative flex gap-6 md:flex-col md:items-center md:text-center`}>
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-aur bg-navy font-serif text-xl text-aur-deschis">{i + 1}</span>
              <div>
                <h3 className="font-serif text-2xl font-semibold md:mt-6">{p.titlu}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-hartie/80 md:mx-auto md:max-w-[15rem]">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Despre() {
  return (
    <section id="despre" aria-labelledby="despre-titlu" className="py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal relative lg:col-span-5">
          <NotaryPortrait className="aspect-[4/5] w-full" />
        </div>
        <div className="lg:col-span-7">
          <SectionHead id="despre-titlu" eyebrow={despre.titlu} title={despre.nume} />
          <div className="reveal mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
            {despre.paragrafe.map((p) => <p key={p}>{p}</p>)}
          </div>
          <dl className="reveal mt-9 grid gap-px border border-linie bg-linie sm:grid-cols-3">
            {despre.repere.map((r) => (
              <div key={r.eticheta} className="bg-hartie p-5">
                <dt className="text-[12px] font-semibold tracking-[0.14em] text-aur-text uppercase">{r.eticheta}</dt>
                <dd className="mt-2 text-[15px] leading-snug text-navy">{r.valoare}</dd>
              </div>
            ))}
          </dl>
          <ul className="reveal mt-9 grid gap-6 sm:grid-cols-3">
            {despre.principii.map((p) => (
              <li key={p.titlu}>
                <div className="rule-gold w-12" aria-hidden />
                <p className="mt-4 font-serif text-xl font-semibold text-navy">{p.titlu}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Onorarii() {
  return (
    <section id="onorarii" aria-labelledby="onorarii-titlu" className="border-y border-linie bg-crem">
      <div className="grid lg:grid-cols-2">
        <Photo name="coloane" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[16/9] lg:aspect-auto lg:min-h-[36rem]" imgClass="object-[50%_40%]" />
        <div className="px-5 py-16 md:px-12 md:py-24 xl:px-20">
          <SectionHead id="onorarii-titlu" eyebrow="Onorarii" title="Costuri explicate dinainte" />
          <p className="reveal mt-7 border-l-2 border-aur pl-5 font-serif text-[1.6rem] leading-snug text-navy">{onorarii.nota}</p>
          <p className="reveal mt-6 max-w-xl text-[16px] leading-relaxed text-muted">{onorarii.text}</p>
          <ul className="reveal mt-7 grid gap-3 sm:grid-cols-2">
            {onorarii.componente.map((c) => (
              <li key={c} className="flex items-center gap-3 border border-linie bg-hartie px-4 py-3 text-[14px] text-navy">
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-aur" aria-hidden />{c}
              </li>
            ))}
          </ul>
          <Link href="/#programare" className="btn reveal mt-9 inline-flex h-12 items-center gap-2 rounded-sm bg-navy px-7 font-medium text-hartie hover:bg-navy-3">
            <Calculator className="h-4 w-4" aria-hidden /> Cere o estimare
          </Link>
        </div>
      </div>
    </section>
  );
}

function Intrebari() {
  return (
    <section id="intrebari" aria-labelledby="intrebari-titlu" className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead id="intrebari-titlu" eyebrow="Întrebări frecvente" title="Răspunsuri pe scurt" lead="Cele mai frecvente întrebări despre procedurile notariale." />
          <p className="reveal mt-6 flex gap-2.5 text-[14px] text-muted"><Info className="mt-0.5 h-4 w-4 shrink-0 text-aur-text" aria-hidden />{intrebariNota}</p>
        </div>
        <div className="border-t border-linie lg:col-span-8">
          {intrebari.map((q) => (
            <AccordionItem key={q.q} summary={q.q}>
              <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{q.a}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programare() {
  return (
    <section id="programare" aria-labelledby="programare-titlu" className="border-t border-linie bg-crem py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead id="programare-titlu" eyebrow="Programare" title="Cereți o programare" lead="Completați formularul și vă sunăm pentru confirmare. Preferați mesajele? Trimiteți cererea direct pe WhatsApp." />
          <ul className="reveal mt-8 space-y-4 text-[15px] text-navy">
            <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-aur-text" aria-hidden />Răspundem în cel mult o zi lucrătoare.</li>
            <li className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-aur-text" aria-hidden />Primiți lista de acte pentru cazul dumneavoastră.</li>
            <li className="flex gap-3"><MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-aur-text" aria-hidden />
              <a href={whatsappHref(`Bună ziua! Doresc o programare la ${site.nume}.`)} target="_blank" rel="noopener noreferrer" className="underline decoration-aur underline-offset-4 hover:text-aur-text">Scrieți-ne pe WhatsApp<span className="sr-only"> (se deschide într-o filă nouă)</span></a>
            </li>
          </ul>
        </div>
        <div className="reveal lg:col-span-8">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: MapPin, t: "Adresă", v: <>{site.adresa.completa} <span className="exemplu">{site.adresa.nota}</span></> },
    { icon: Phone, t: "Telefon", v: <a href={telHref} className="hover:text-aur-text">{site.telefon.afisat}</a> },
    { icon: Mail, t: "Email", v: <a href={`mailto:${site.email}`} className="hover:text-aur-text">{site.email}</a> },
  ];
  return (
    <section id="contact" aria-labelledby="contact-titlu" className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead id="contact-titlu" eyebrow="Contact" title="Vă așteptăm la birou" />
          <ul className="reveal mt-9 divide-y divide-linie border-y border-linie">
            {items.map(({ icon: I, t, v }) => (
              <li key={t} className="flex gap-4 py-5">
                <I className="mt-1 h-5 w-5 shrink-0 text-aur-text" strokeWidth={1.5} aria-hidden />
                <div><p className="text-[12px] font-semibold tracking-[0.14em] text-muted uppercase">{t}</p><p className="mt-1 text-[17px] text-navy">{v}</p></div>
              </li>
            ))}
            <li className="flex gap-4 py-5">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-aur-text" strokeWidth={1.5} aria-hidden />
              <div className="w-full">
                <p className="text-[12px] font-semibold tracking-[0.14em] text-muted uppercase">Program</p>
                <dl className="mt-2 grid gap-1 text-[16px] text-navy">
                  {site.program.map((p) => (
                    <div key={p.zile} className="flex justify-between gap-4 border-b border-dotted border-linie pb-1 last:border-0"><dt>{p.zile}</dt><dd>{p.ore}</dd></div>
                  ))}
                </dl>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">{site.programNota}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="reveal lg:col-span-7">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
