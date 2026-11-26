import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site, servicii } from "@/content/site";
import { SITE_URL } from "@/lib";
import { DemoBand, Header, MobileBar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";

// next/font descarcă fonturile la build și le servește de pe același domeniu.
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const titlu = `${site.nume} – notar public în ${site.oras}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: { default: titlu, template: `%s | ${site.nume}` },
  description: site.descriere,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: site.nume,
    title: titlu,
    description: site.descriere,
    url: "./",
    images: [{ url: "og.jpg", width: 1200, height: 630, alt: `${site.nume}, ${site.oras} – site demonstrativ` }],
  },
  twitter: { card: "summary_large_image", title: titlu, description: site.descriere, images: ["og.jpg"] },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#14233b" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Notary",
  name: site.nume,
  description: `${site.descriere}`,
  url: SITE_URL + "/",
  image: SITE_URL + "/og.jpg",
  logo: SITE_URL + "/icon.svg",
  telephone: site.telefon.afisat,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.adresa.strada,
    addressLocality: site.adresa.localitate,
    addressRegion: site.adresa.judet,
    addressCountry: site.adresa.tara,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.harta.lat, longitude: site.harta.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: `${site.oras}, România`,
  knowsLanguage: "ro",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicii notariale",
    itemListElement: servicii.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.titlu, url: `${SITE_URL}/servicii/${s.slug}/` },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans text-[16px] antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <DemoBand />
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <MobileBar />
        <RevealObserver />
      </body>
    </html>
  );
}
