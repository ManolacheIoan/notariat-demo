/** Fotografii Unsplash (Unsplash License), descărcate în public/images ca WebP la 640/1024/1600 px. Surse în CREDITS.md. */
export const stock = {
  birou: { w: 2000, h: 1330, alt: "Birou clasic din lemn, cu fotoliu de piele și lampă, într-o încăpere luminoasă" },
  semnare: { w: 2000, h: 3000, alt: "Mâini care semnează un formular pe un birou de lemn" },
  stilou: { w: 2000, h: 1502, alt: "Stilou negru cu inserții aurii pe un carnet, pe o masă de lemn" },
  biblioteca: { w: 2000, h: 1701, alt: "Rafturi înalte de lemn cu volume vechi într-o bibliotecă" },
  rafturi: { w: 2000, h: 3010, alt: "Raft cu volume legate în piele, în nuanțe calde" },
  coloane: { w: 2000, h: 2800, alt: "Coloane clasice de piatră, privite de jos" },
  sigiliu: { w: 2000, h: 2870, alt: "Sigiliu de lemn pentru ceară, pe o masă cu documente" },
  cabinet: { w: 2000, h: 2666, alt: "Cabinet de lucru cu birou sculptat, lampă și scaun de epocă" },
  documente: { w: 2000, h: 1335, alt: "Mână care scrie cu stiloul pe o foaie albă" },
} as const;

export type StockKey = keyof typeof stock;
