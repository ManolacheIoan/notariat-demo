import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Pagina nu a fost găsită", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x max-w-2xl text-center">
        <p className="font-serif text-7xl text-aur-text">404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-navy">Pagina nu a fost găsită</h1>
        <p className="mt-4 text-muted">Este posibil ca adresa să fie greșită sau pagina să fi fost mutată.</p>
        <Link href="/" className="btn mt-8 inline-flex h-12 items-center gap-2 rounded-sm bg-navy px-6 font-medium text-hartie hover:bg-navy-3">
          <ArrowLeft className="h-4 w-4" aria-hidden /> Înapoi la pagina principală
        </Link>
      </div>
    </section>
  );
}
