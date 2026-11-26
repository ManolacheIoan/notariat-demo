"use client";
import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/content/site";

/**
 * Harta Google Maps se încarcă doar la cerere: fără cookie-uri terțe la prima vizită (GDPR) și fără impact la viteză.
 */
export function MapEmbed() {
  const [on, setOn] = useState(false);
  return (
    <div className="relative h-full min-h-[22rem] overflow-hidden border border-linie bg-crem">
      {on ? (
        <iframe
          title={`Hartă: zona centrală din ${site.oras}`}
          src={site.harta.embed}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0">
          {/* hartă stilizată, desenată local */}
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
            <rect width="600" height="400" fill="#f4efe5" />
            <path d="M-20 300 C 120 260, 220 340, 360 290 S 560 250, 640 280 L640 420 L-20 420 Z" fill="#dfe4e6" />
            <g stroke="#ddd4c3" strokeWidth="10" fill="none">
              <path d="M0 120 L600 90" /><path d="M0 210 L600 230" /><path d="M140 0 L180 400" /><path d="M420 0 L380 400" />
            </g>
            <g stroke="#e9e1d2" strokeWidth="4" fill="none">
              <path d="M0 60 L600 40" /><path d="M0 165 L600 160" /><path d="M60 0 L90 400" /><path d="M260 0 L280 400" /><path d="M520 0 L500 400" />
            </g>
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-navy">
            <MapPin className="h-10 w-10 fill-aur-deschis" strokeWidth={1.3} aria-hidden />
          </div>
          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2 bg-hartie/95 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-muted">Harta Google se încarcă doar la cerere.<br className="hidden sm:block" /> Punct generic în {site.oras}.</p>
            <div className="flex gap-2">
              <button type="button" onClick={() => setOn(true)} className="btn rounded-sm bg-navy px-4 py-2.5 text-[14px] font-medium text-hartie hover:bg-navy-3">
                Afișează harta
              </button>
              <a href={site.harta.link} target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center gap-1 rounded-sm border border-linie px-3 py-2.5 text-[14px] text-navy hover:border-aur">
                Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden /><span className="sr-only">(se deschide într-o filă nouă)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
