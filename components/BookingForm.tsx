"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, MessageCircle, Send } from "lucide-react";
import { servicii, site } from "@/content/site";
import { whatsappHref } from "@/lib";

type Fields = { nume: string; telefon: string; email: string; serviciu: string; data: string; mesaj: string; acord: boolean };
type Errors = Partial<Record<keyof Fields, string>>;
const empty: Fields = { nume: "", telefon: "", email: "", serviciu: "", data: "", mesaj: "", acord: false };

const DEMO = site.formspree.includes("PLACEHOLDER");
const pad = (n: number) => String(n).padStart(2, "0");
const isoLocal = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

function validate(f: Fields, today: string): Errors {
  const e: Errors = {};
  if (f.nume.trim().length < 3) e.nume = "Scrieți numele complet (minimum 3 caractere).";
  const tel = f.telefon.replace(/[\s.\-()]/g, "");
  if (!/^(\+4|004)?0?7\d{8}$|^(\+4|004)?0[23]\d{8}$/.test(tel)) e.telefon = "Introduceți un număr de telefon valid, de exemplu 0722 123 456.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Introduceți o adresă de email validă.";
  if (!f.serviciu) e.serviciu = "Alegeți serviciul dorit.";
  if (f.data) {
    const day = new Date(f.data + "T12:00:00").getDay();
    if (f.data < today) e.data = "Alegeți o dată din viitor.";
    else if (day === 0 || day === 6) e.data = "Biroul lucrează de luni până vineri. Alegeți o zi lucrătoare.";
  }
  if (f.mesaj.length > 1500) e.mesaj = "Mesajul poate avea cel mult 1500 de caractere.";
  if (!f.acord) e.acord = "Este necesar acordul pentru prelucrarea datelor, ca să vă putem contacta.";
  return e;
}

export function BookingForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [today, setToday] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Data minimă și serviciul preselectat (din ?serviciu=...) se citesc doar în browser.
  useEffect(() => {
    const t = isoLocal(new Date());
    const s = new URLSearchParams(window.location.search).get("serviciu");
    const pre = s && servicii.some((x) => x.slug === s) ? s : "";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(t);
    if (pre) setF((p) => ({ ...p, serviciu: pre }));
  }, []);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    const next = { ...f, [k]: v };
    setF(next);
    if (touched[k] || errors[k]) setErrors((e) => ({ ...e, [k]: validate(next, today)[k] }));
  };
  const blur = (k: keyof Fields) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors((e) => ({ ...e, [k]: validate(f, today)[k] }));
  };

  const serviciuTitlu = servicii.find((s) => s.slug === f.serviciu)?.titlu ?? "";

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(f, today);
    setErrors(e);
    const first = (Object.keys(e) as (keyof Fields)[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      if (DEMO) {
        await new Promise((r) => setTimeout(r, 700));
      } else {
        const res = await fetch(site.formspree, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ ...f, serviciu: serviciuTitlu, _subject: `Programare: ${serviciuTitlu}` }),
        });
        if (!res.ok) throw new Error(String(res.status));
      }
      setStatus("ok");
      setF(empty);
      setTouched({});
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const waText = [
    `Bună ziua! Doresc o programare la ${site.nume}.`,
    f.nume && `Nume: ${f.nume}`,
    f.telefon && `Telefon: ${f.telefon}`,
    serviciuTitlu && `Serviciu: ${serviciuTitlu}`,
    f.data && `Data preferată: ${f.data.split("-").reverse().join(".")}`,
    f.mesaj && `Mesaj: ${f.mesaj}`,
  ].filter(Boolean).join("\n");

  const field = "mt-2 block w-full rounded-sm border bg-hartie px-4 py-3 text-[16px] text-ink placeholder:text-muted/70 focus:border-navy focus:outline-none focus-visible:outline-2 focus-visible:outline-aur-text";
  const border = (k: keyof Fields) => (errors[k] ? "border-[#a3341f]" : "border-linie");
  const label = "text-[14px] font-medium text-navy";
  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1.5 flex items-start gap-1.5 text-[13px] text-[#a3341f]">
        <CircleAlert className="mt-px h-4 w-4 shrink-0" aria-hidden /> {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Fields, extra?: string) => ({
    "aria-invalid": errors[k] ? (true as const) : undefined,
    "aria-describedby": [errors[k] ? `${k}-err` : "", extra ?? ""].filter(Boolean).join(" ") || undefined,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="border border-linie bg-hartie p-6 shadow-[0_30px_60px_-45px_rgb(13_24_40/.5)] md:p-10">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === "ok" && (
          <div className="mb-8 flex gap-3 border border-[#2f6b4f]/40 bg-[#eef5f0] p-4 text-[15px] text-[#1f4d38]">
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">Mulțumim! Cererea a fost înregistrată.</p>
              <p className="mt-1">Vă contactăm în cel mult o zi lucrătoare pentru confirmarea programării și lista de acte.</p>
              {DEMO && <p className="mt-2 text-[13px]">Mod demonstrativ: formularul nu este conectat, nu s-a trimis nimic.</p>}
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="mb-8 flex gap-3 border border-[#a3341f]/40 bg-[#fbefec] p-4 text-[15px] text-[#7d2616]">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">Cererea nu a putut fi trimisă.</p>
              <p className="mt-1">Încercați din nou peste câteva minute sau scrieți-ne pe WhatsApp, folosind butonul de mai jos.</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="nume" className={label}>Nume și prenume <span aria-hidden className="text-aur-text">*</span></label>
          <input id="nume" name="nume" autoComplete="name" required value={f.nume} onChange={(e) => set("nume", e.target.value)} onBlur={() => blur("nume")} className={`${field} ${border("nume")}`} {...aria("nume")} />
          {err("nume")}
        </div>
        <div>
          <label htmlFor="telefon" className={label}>Telefon <span aria-hidden className="text-aur-text">*</span></label>
          <input id="telefon" name="telefon" type="tel" inputMode="tel" autoComplete="tel" required placeholder="07XX XXX XXX" value={f.telefon} onChange={(e) => set("telefon", e.target.value)} onBlur={() => blur("telefon")} className={`${field} ${border("telefon")}`} {...aria("telefon")} />
          {err("telefon")}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email <span aria-hidden className="text-aur-text">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="nume@exemplu.ro" value={f.email} onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")} className={`${field} ${border("email")}`} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="serviciu" className={label}>Serviciul dorit <span aria-hidden className="text-aur-text">*</span></label>
          <select id="serviciu" name="serviciu" required value={f.serviciu} onChange={(e) => set("serviciu", e.target.value)} onBlur={() => blur("serviciu")} className={`${field} ${border("serviciu")} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='8'%3E%3Cpath%20d='M1%201l5%205%205-5'%20fill='none'%20stroke='%2375592a'%20stroke-width='1.5'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-10`} {...aria("serviciu")}>
            <option value="">Alegeți…</option>
            {servicii.map((s) => <option key={s.slug} value={s.slug}>{s.titlu}</option>)}
            <option value="altul">Alt serviciu / nu știu sigur</option>
          </select>
          {err("serviciu")}
        </div>
        <div>
          <label htmlFor="data" className={label}>Data preferată <span className="font-normal text-muted">(opțional)</span></label>
          <input id="data" name="data" type="date" min={today || undefined} value={f.data} onChange={(e) => set("data", e.target.value)} onBlur={() => blur("data")} className={`${field} ${border("data")}`} {...aria("data", "data-hint")} />
          <p id="data-hint" className="mt-1.5 text-[13px] text-muted">Luni–vineri. Confirmăm ora telefonic.</p>
          {err("data")}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="mesaj" className={label}>Mesaj <span className="font-normal text-muted">(opțional)</span></label>
          <textarea id="mesaj" name="mesaj" rows={4} maxLength={1500} placeholder="Pe scurt: ce act doriți și orice detaliu util (ex. tipul imobilului, numărul de persoane)." value={f.mesaj} onChange={(e) => set("mesaj", e.target.value)} onBlur={() => blur("mesaj")} className={`${field} ${border("mesaj")} resize-y`} {...aria("mesaj")} />
          {err("mesaj")}
        </div>
        <div className="md:col-span-2">
          <div className="flex items-start gap-3">
            <input id="acord" name="acord" type="checkbox" checked={f.acord} onChange={(e) => set("acord", e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-navy" {...aria("acord")} />
            <label htmlFor="acord" className="text-[14px] leading-relaxed text-muted">
              Sunt de acord cu prelucrarea datelor mele pentru a fi contactat(ă) în legătură cu programarea, conform <Link href="/confidentialitate/" className="text-aur-text underline underline-offset-2">politicii de confidențialitate</Link>. <span aria-hidden className="text-aur-text">*</span>
            </label>
          </div>
          {err("acord")}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-navy px-7 font-medium text-hartie hover:bg-navy-3 disabled:opacity-70">
          {status === "sending" ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
          {status === "sending" ? "Se trimite…" : "Trimite cererea"}
        </button>
        <a href={whatsappHref(waText)} target="_blank" rel="noopener noreferrer" className="btn inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-navy/25 px-6 font-medium text-navy hover:border-aur hover:text-aur-text">
          <MessageCircle className="h-4 w-4" aria-hidden /> Trimite pe WhatsApp<span className="sr-only"> (se deschide într-o filă nouă)</span>
        </a>
      </div>
      <p className="mt-4 text-[13px] text-muted">Câmpurile marcate cu * sunt obligatorii. Cererea nu reprezintă o programare confirmată.</p>
    </form>
  );
}
