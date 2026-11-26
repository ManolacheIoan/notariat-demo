import { TriangleAlert } from "lucide-react";

export function Legal({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Informații legale</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold text-navy">{title}</h1>
        <p className="mt-6 flex gap-3 border border-dashed border-aur-text/60 bg-crem px-4 py-3 text-[14px] text-navy">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-aur-text" aria-hidden />
          <span><strong>Text exemplu — de verificat.</strong> Acest text este un model pentru un site demonstrativ, cu o firmă fictivă. Înainte de folosire trebuie adaptat și verificat de un specialist.</span>
        </p>
        <p className="mt-4 text-[13px] text-muted">Ultima actualizare: {updated} [exemplu]</p>
        <div className="prose-legal mt-4">{children}</div>
      </div>
    </section>
  );
}
