# Birou Notarial Ana Vlad — site demonstrativ

Site demonstrativ realizat de **Manotek** pentru portofoliu. **Firma, persoana, adresa și datele de contact sunt fictive.** Pe fiecare pagină apare banda „Site demonstrativ realizat de Manotek — firmă fictivă”.

Live: https://manolacheioan.github.io/notariat-demo/

## Stack

Next.js 16 (App Router, export static) · TypeScript · Tailwind CSS 4 · lucide-react · fonturi locale prin `next/font/local`. Publicat pe GitHub Pages prin GitHub Actions (`.github/workflows/pages.yml`, `BASE_PATH=/notariat-demo`).

```bash
npm install
npm run dev          # dezvoltare
npm run build        # export static în out/
npm run serve        # servește out/ pe http://localhost:4197
sh scripts/lighthouse.sh mobile / /servicii/succesiuni/   # Lighthouse local
```

## Conținut

Tot conținutul este în `content/site.ts` (servicii, liste de acte, pași, FAQ, date de contact). Imaginile sunt în `content/images.ts` + `public/images/`, cu surse în [CREDITS.md](CREDITS.md).

- **Telefon / WhatsApp:** `site.telefon.tel` și `site.whatsapp.numar` sunt goale; până se completează, butoanele „Sună” duc la secțiunea Contact, iar WhatsApp deschide alegerea contactului.
- **Formular:** `site.formspree` conține un endpoint placeholder. Cât timp conține `PLACEHOLDER`, formularul validează datele și afișează mesajul de succes în mod demonstrativ (nu trimite nimic). Pentru trimitere reală: `https://formspree.io/f/<id>`.
- **Harta:** Google Maps se încarcă doar la apăsarea „Afișează harta” (fără cookie-uri terțe la prima vizită); punct generic în centrul Galațiului.

## Marcat „[exemplu]” / de înlocuit

- Numele firmei și al notarului (fictive)
- Adresa „Str. Exemplu nr. 10, Galați” (marcată „adresă fictivă”)
- Telefon `07XX XXX XXX` și email `contact@exemplu.ro`
- Programul de lucru (nota „Program orientativ [exemplu]”)
- Secțiunea „Despre notar”: ambele paragrafe și cele trei repere (Formare, Activitate, Limbi)
- Fotografia notarului: placeholder „Foto notar — [exemplu]”
- Endpointul Formspree
- Paginile Confidențialitate și Cookies: „Text exemplu — de verificat”, inclusiv data actualizării și termenul de păstrare a datelor
- Listele de acte: „orientativă — confirmați la birou”; FAQ: „Informațiile au caracter general”
- Onorarii: nu există sume; doar nota „Onorariile se calculează conform normelor în vigoare; solicitați o estimare.”

Fără recenzii, citate, premii sau statistici. Fără însemne oficiale (stemă, sigla UNNPR) sau date ale unui notar real.
