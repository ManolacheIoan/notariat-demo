import type { Metadata } from "next";
import Link from "next/link";
import { Legal } from "@/components/Legal";
import { og } from "@/lib";

const description = "Ce cookie-uri folosește site-ul Birou Notarial Avalon (text exemplu pentru un site demonstrativ).";
export const metadata: Metadata = {
  title: "Politica de cookies",
  description,
  alternates: { canonical: "cookies/" },
  openGraph: og("Politica de cookies", description, "cookies/"),
};

export default function Page() {
  return (
    <Legal title="Politica de cookies" updated="27.11.2026">
      <h2>Ce sunt cookie-urile</h2>
      <p>Cookie-urile sunt fișiere mici salvate de browser, folosite de site-uri pentru a funcționa sau pentru a reține preferințe.</p>
      <h2>Ce folosește acest site</h2>
      <ul>
        <li><strong>Site-ul propriu-zis</strong> nu setează cookie-uri și nu folosește instrumente de analiză sau publicitate.</li>
        <li><strong>Harta Google Maps</strong> se încarcă doar dacă apăsați „Afișează harta”. Din acel moment, Google poate seta cookie-uri proprii, conform politicii Google.</li>
        <li><strong>WhatsApp</strong> se deschide doar dacă alegeți să trimiteți un mesaj, în aplicația sau pe site-ul WhatsApp.</li>
      </ul>
      <h2>Cum le puteți controla</h2>
      <p>Puteți șterge sau bloca cookie-urile din setările browserului. Dacă nu încărcați harta, nu se setează cookie-uri terțe.</p>
      <p>Pentru datele trimise prin formular, consultați <Link href="/confidentialitate/">politica de confidențialitate</Link>.</p>
    </Legal>
  );
}
