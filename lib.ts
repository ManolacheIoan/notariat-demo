import { site } from "@/content/site";

export const SITE_URL = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Open Graph pentru subpagini (Next înlocuiește tot obiectul la fiecare pagină, deci repetăm imaginea). */
export const og = (title: string, description: string, url: string) => ({
  type: "website" as const,
  locale: "ro_RO",
  siteName: site.nume,
  title,
  description,
  url,
  images: [{ url: "og.jpg", width: 1200, height: 630, alt: `${site.nume}, ${site.oras} – site demonstrativ` }],
});

/** Link „Sună”: numărul real dacă e configurat, altfel secțiunea Contact. */
export const telHref = site.telefon.tel ? `tel:${site.telefon.tel}` : "/#contact";

export const whatsappHref = (text: string) =>
  `https://wa.me/${site.whatsapp.numar}?text=${encodeURIComponent(text)}`;
