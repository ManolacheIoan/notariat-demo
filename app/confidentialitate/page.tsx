import type { Metadata } from "next";
import { Legal } from "@/components/Legal";
import { site } from "@/content/site";
import { og } from "@/lib";

const description = "Cum prelucrează Birou Notarial Avalon datele personale trimise prin site (text exemplu pentru un site demonstrativ).";
export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description,
  alternates: { canonical: "confidentialitate/" },
  openGraph: og("Politica de confidențialitate", description, "confidentialitate/"),
};

export default function Page() {
  return (
    <Legal title="Politica de confidențialitate" updated="27.11.2026">
      <h2>Cine suntem</h2>
      <p>Operatorul datelor este {site.nume}, cu sediul în {site.adresa.completa} (date fictive). Ne puteți contacta la {site.email} sau {site.telefon.afisat}.</p>
      <h2>Ce date colectăm</h2>
      <ul>
        <li>datele trimise prin formularul de programare: nume, telefon, email, serviciul dorit, data preferată și mesajul;</li>
        <li>datele pe care ni le transmiteți prin telefon, email sau WhatsApp.</li>
      </ul>
      <p>Site-ul nu folosește module de analiză a traficului și nici cookie-uri de marketing.</p>
      <h2>De ce le folosim</h2>
      <p>Folosim datele doar pentru a vă răspunde și pentru a stabili programarea (temeiul: demersuri la cererea dumneavoastră, înainte de încheierea unui contract, art. 6 alin. (1) lit. b) din Regulamentul (UE) 2016/679 – GDPR) și pe baza acordului exprimat în formular.</p>
      <p>Prelucrarea datelor în cadrul actelor notariale propriu-zise se face potrivit legislației privind activitatea notarială, separat de acest site.</p>
      <h2>Cui le transmitem</h2>
      <p>Formularul este transmis prin serviciul Formspree, care acționează ca persoană împuternicită. Dacă alegeți WhatsApp, mesajul este transmis prin serviciul respectiv, conform politicii sale. Nu vindem și nu închiriem datele.</p>
      <h2>Cât timp le păstrăm</h2>
      <p>Cererile de programare care nu se finalizează cu un act sunt șterse în cel mult 6 luni [exemplu].</p>
      <h2>Drepturile dumneavoastră</h2>
      <p>Aveți dreptul de acces, rectificare, ștergere, restricționare, opoziție și portabilitate, precum și dreptul de a vă retrage acordul. Ne puteți scrie la {site.email}. Aveți și dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (<a href="https://www.dataprotection.ro/" rel="noopener noreferrer">dataprotection.ro</a>).</p>
    </Legal>
  );
}
