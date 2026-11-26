/**
 * Tot conținutul site-ului. Firma, persoana și datele de contact sunt FICTIVE (site demonstrativ Manotek).
 * Textele marcate „[exemplu]” sunt de înlocuit cu informații reale înainte de orice folosire.
 */

export const EXEMPLU = "[exemplu]";

export const site = {
  nume: "Birou Notarial Ana Vlad",
  numeScurt: "Notariat Ana Vlad",
  notar: "Ana Vlad",
  oras: "Galați",
  slogan: "acte notariale clare, rapide și sigure",
  descriere:
    "Birou notarial în Galați: vânzări de imobile, succesiuni, donații, procuri, legalizări, testamente și acte de firmă. Programări rapide, liste clare de acte. Site demonstrativ – firmă fictivă.",
  demoBand: "Site demonstrativ realizat de Manotek — firmă fictivă",
  adresa: {
    strada: "Str. Exemplu nr. 10",
    localitate: "Galați",
    judet: "Galați",
    tara: "RO",
    completa: "Str. Exemplu nr. 10, Galați",
    nota: "adresă fictivă",
  },
  // Punct generic în centrul Galațiului (nu corespunde adresei fictive).
  harta: {
    lat: 45.4353,
    lng: 28.008,
    embed: "https://www.google.com/maps?q=45.4353,28.0080&z=15&output=embed",
    link: "https://www.google.com/maps/search/?api=1&query=45.4353,28.0080",
  },
  telefon: {
    afisat: "07XX XXX XXX",
    /** Număr real în format internațional (ex. "+40712345678"). Gol = placeholder: butoanele „Sună” duc la Contact. */
    tel: "",
  },
  whatsapp: {
    /** Număr real fără „+” (ex. "40712345678"). Gol = WhatsApp deschide alegerea contactului. */
    numar: "",
  },
  email: "contact@exemplu.ro",
  program: [
    { zile: "Luni – Vineri", ore: "9:00 – 17:00" },
    { zile: "Sâmbătă – Duminică", ore: "Închis" },
  ],
  programNota: "Program orientativ [exemplu]. Pentru situații urgente (ex. deplasări la domiciliu sau în spital), sunați pentru o programare separată.",
  /** Endpoint Formspree real: "https://formspree.io/f/<id>". Placeholderul de mai jos activează modul demonstrativ. */
  formspree: "https://formspree.io/f/PLACEHOLDER",
  agentie: { nume: "Manotek", url: "https://manolacheioan.github.io/johnmnl-portfolio/" },
};

export const nav = [
  { href: "/#servicii", label: "Servicii" },
  { href: "/#acte", label: "Acte necesare" },
  { href: "/#pasi", label: "Cum decurge" },
  { href: "/#despre", label: "Despre" },
  { href: "/#onorarii", label: "Onorarii" },
  { href: "/#intrebari", label: "Întrebări" },
  { href: "/#contact", label: "Contact" },
];

export const hero = {
  supratitlu: "Birou notarial · Galați",
  titlu: "Birou Notarial Ana Vlad",
  subtitlu: "Acte notariale clare, rapide și sigure.",
  text: "Vă explicăm fiecare pas pe înțelesul tuturor și vă trimitem din timp lista de acte. Ajungeți la birou pregătiți, semnați fără drumuri în plus.",
  repere: ["Listă de acte înainte de programare", "Explicații clare, fără termeni inutili", "Programare la ora stabilită"],
};

export type IconName =
  | "house" | "scroll" | "gift" | "pen" | "stamp" | "landmark" | "rings" | "feather" | "building" | "languages";

export type Serviciu = {
  slug: string;
  titlu: string;
  scurt: string;
  icon: IconName;
  intro: string;
  include: string[];
  acte: string[];
  bineDeStiut: string[];
  foto: "semnare" | "documente" | "stilou" | "sigiliu" | "biblioteca" | "rafturi" | "cabinet" | "coloane";
};

export const servicii: Serviciu[] = [
  {
    slug: "vanzare-cumparare-imobile",
    titlu: "Contracte de vânzare-cumpărare imobile",
    scurt: "Apartamente, case și terenuri, cu verificarea actelor și a cărții funciare.",
    icon: "house",
    foto: "semnare",
    intro:
      "Transferul dreptului de proprietate asupra unui imobil se face prin act autentic notarial. Înainte de semnare verificăm actele de proprietate, situația din cartea funciară și eventualele sarcini.",
    include: [
      "verificarea actelor de proprietate și a identității părților",
      "obținerea extrasului de carte funciară pentru autentificare",
      "redactarea și citirea contractului împreună cu părțile",
      "calculul și încasarea taxelor și impozitelor legale",
      "transmiterea cererii de înscriere în cartea funciară",
    ],
    acte: [
      "Actele de identitate ale vânzătorilor și cumpărătorilor (valabile)",
      "Actul de proprietate (contract, certificat de moștenitor, titlu de proprietate etc.)",
      "Documentația cadastrală și numărul de carte funciară",
      "Certificatul fiscal de la primărie pentru vânzător",
      "Certificatul de performanță energetică (pentru clădiri)",
      "Adeverința de la asociația de proprietari privind datoriile (pentru apartamente)",
      "Certificatul de căsătorie, dacă imobilul este bun comun",
      "Polița de asigurare obligatorie a locuinței (PAD), după caz",
    ],
    bineDeStiut: [
      "Dacă imobilul este bun comun, este nevoie de acordul ambilor soți.",
      "Plata prețului se poate face și prin virament; vă recomandăm să stabiliți modalitatea înainte de semnare.",
    ],
  },
  {
    slug: "succesiuni",
    titlu: "Succesiuni",
    scurt: "Dezbaterea moștenirii și eliberarea certificatului de moștenitor.",
    icon: "scroll",
    foto: "biblioteca",
    intro:
      "Procedura succesorală notarială stabilește cine sunt moștenitorii și ce bunuri le revin. La final se eliberează certificatul de moștenitor, actul care dovedește calitatea de moștenitor și drepturile asupra bunurilor.",
    include: [
      "deschiderea dosarului succesoral și verificarea registrelor naționale",
      "citarea moștenitorilor și stabilirea masei succesorale",
      "redactarea încheierii finale și a certificatului de moștenitor",
      "îndrumare pentru înscrierea bunurilor pe numele moștenitorilor",
    ],
    acte: [
      "Certificatul de deces (original)",
      "Actele de identitate ale moștenitorilor",
      "Actele de stare civilă care dovedesc rudenia (naștere, căsătorie)",
      "Actele de proprietate asupra bunurilor (imobile, autoturisme, conturi)",
      "Certificatul fiscal de la primăria ultimului domiciliu al defunctului",
      "Testamentul, dacă există",
      "Documentația cadastrală pentru imobile, după caz",
    ],
    bineDeStiut: [
      "Termenul general de acceptare sau renunțare la moștenire este de un an de la data decesului.",
      "Termenul în care se finalizează procedura poate influența impozitul datorat; vă explicăm situația concretă la birou.",
    ],
  },
  {
    slug: "donatii",
    titlu: "Donații",
    scurt: "Transmiterea gratuită a unui bun către familie sau alte persoane.",
    icon: "gift",
    foto: "stilou",
    intro:
      "Donația este contractul prin care o persoană transmite gratuit un bun alteia. Legea cere forma autentică notarială, cu excepția darului manual de bunuri mobile de valoare mică.",
    include: [
      "verificarea bunului donat și a situației juridice",
      "redactarea contractului, inclusiv eventuale clauze (de exemplu drept de uzufruct)",
      "calculul taxelor legale, care depind de gradul de rudenie",
      "înscrierea în cartea funciară, pentru imobile",
    ],
    acte: [
      "Actele de identitate ale donatorului și donatarului",
      "Actul de proprietate al bunului donat",
      "Documentația cadastrală și extrasul de carte funciară (pentru imobile)",
      "Certificatul fiscal de la primărie",
      "Certificatul de performanță energetică (pentru clădiri)",
      "Acte de stare civilă care dovedesc rudenia, dacă este cazul",
    ],
    bineDeStiut: [
      "Donatorul își poate rezerva dreptul de a locui în imobil (uzufruct sau abitație), stabilit prin contract.",
    ],
  },
  {
    slug: "procuri-si-declaratii",
    titlu: "Procuri și declarații",
    scurt: "Împuterniciri pentru vânzări, administrare, ridicare de acte, declarații pe proprie răspundere.",
    icon: "pen",
    foto: "documente",
    intro:
      "Prin procură împuterniciți o altă persoană să vă reprezinte. Declarațiile notariale confirmă, în formă autentică, situații sau angajamente ale dumneavoastră.",
    include: [
      "procuri speciale (pentru un act anume) sau generale (de administrare)",
      "declarații pentru plecarea minorilor din țară",
      "declarații de acord, de renunțare sau pe proprie răspundere",
      "revocarea unei procuri anterioare",
    ],
    acte: [
      "Actul de identitate al persoanei care dă procura sau declarația",
      "Datele complete ale persoanei împuternicite (nume, CNP, domiciliu)",
      "Datele bunului sau actului vizat (adresă, număr de carte funciară, număr de înmatriculare etc.)",
      "Pentru minori: certificatul de naștere al copilului și datele însoțitorului",
    ],
    bineDeStiut: [
      "Pentru acte care trebuie încheiate în formă autentică (de exemplu o vânzare de imobil), procura trebuie să fie tot autentică.",
    ],
  },
  {
    slug: "legalizari",
    titlu: "Legalizări de semnătură și copii",
    scurt: "Copii conforme cu originalul și legalizarea semnăturii pe înscrisuri.",
    icon: "stamp",
    foto: "sigiliu",
    intro:
      "Notarul poate certifica faptul că o copie este conformă cu documentul original prezentat sau că o semnătură aparține persoanei care a semnat în fața sa.",
    include: [
      "legalizarea copiilor după diplome, certificate și alte documente",
      "legalizarea semnăturii pe înscrisuri sub semnătură privată",
      "legalizarea specimenului de semnătură",
      "certificarea datei unui înscris",
    ],
    acte: [
      "Documentul original (pentru legalizarea copiilor)",
      "Actul de identitate al semnatarului (pentru legalizarea semnăturii)",
      "Înscrisul de semnat, nesemnat încă (semnarea se face în fața notarului)",
    ],
    bineDeStiut: [
      "Legalizarea semnăturii confirmă identitatea semnatarului, nu conținutul înscrisului.",
    ],
  },
  {
    slug: "imprumut-ipoteca-garantie",
    titlu: "Contracte de împrumut, ipotecă, garanție",
    scurt: "Împrumuturi între persoane, ipoteci imobiliare și alte garanții.",
    icon: "landmark",
    foto: "cabinet",
    intro:
      "Contractul de împrumut încheiat la notar poate constitui titlu executoriu, iar ipoteca asupra unui imobil se constituie obligatoriu în formă autentică.",
    include: [
      "contracte de împrumut între persoane fizice sau juridice",
      "contracte de ipotecă imobiliară, inclusiv pentru credite bancare",
      "contracte de garanție și fideiusiune",
      "acte de radiere a ipotecii după achitarea datoriei",
    ],
    acte: [
      "Actele de identitate ale părților",
      "Actul de proprietate al imobilului ipotecat",
      "Documentația cadastrală și extrasul de carte funciară",
      "Contractul de credit sau condițiile împrumutului (sumă, termen, dobândă)",
      "Certificatul fiscal, după caz",
    ],
    bineDeStiut: [
      "Condițiile de rambursare trebuie să fie clar stabilite în contract; le discutăm înainte de redactare.",
    ],
  },
  {
    slug: "conventii-matrimoniale-divort",
    titlu: "Convenții matrimoniale și divorț pe cale notarială",
    scurt: "Alegerea regimului matrimonial și divorțul prin acordul soților.",
    icon: "rings",
    foto: "stilou",
    intro:
      "Convenția matrimonială stabilește regimul bunurilor soților (comunitate, separație sau comunitate convențională). Divorțul notarial este posibil atunci când soții sunt de acord asupra desfacerii căsătoriei.",
    include: [
      "convenții matrimoniale înainte sau în timpul căsătoriei",
      "schimbarea regimului matrimonial",
      "divorț prin acordul soților, inclusiv cu copii minori, dacă există acord asupra tuturor aspectelor privind copiii",
      "partajul bunurilor comune",
    ],
    acte: [
      "Actele de identitate ale ambilor soți",
      "Certificatul de căsătorie (original)",
      "Certificatele de naștere ale copiilor minori, după caz",
      "Dovada ultimei locuințe comune, dacă este diferită de domiciliul din acte",
      "Actele de proprietate ale bunurilor comune, pentru partaj",
    ],
    bineDeStiut: [
      "La divorțul notarial ambii soți se prezintă personal; legea prevede un termen de reflecție de 30 de zile.",
      "Competent este notarul din localitatea în care s-a încheiat căsătoria sau în care a fost ultima locuință comună.",
    ],
  },
  {
    slug: "testamente",
    titlu: "Testamente",
    scurt: "Testament autentic, redactat clar și înregistrat în registrul național.",
    icon: "feather",
    foto: "rafturi",
    intro:
      "Prin testament stabiliți cui revin bunurile după deces. Testamentul autentic se încheie în fața notarului și se înregistrează în registrul național notarial, astfel încât să poată fi găsit la nevoie.",
    include: [
      "redactarea testamentului autentic, potrivit voinței dumneavoastră",
      "legate universale sau cu titlu particular",
      "revocarea sau modificarea unui testament anterior",
      "explicații privind rezerva succesorală prevăzută de lege",
    ],
    acte: [
      "Actul de identitate al testatorului",
      "Datele beneficiarilor (nume, CNP, după caz)",
      "Informații despre bunurile vizate, dacă doriți să le menționați",
    ],
    bineDeStiut: [
      "Testamentul poate fi revocat sau modificat oricând de testator.",
      "Testamentul este un act personal: nu se poate face prin reprezentant.",
    ],
  },
  {
    slug: "acte-de-firma",
    titlu: "Constituire societăți / acte de firmă",
    scurt: "Acte constitutive, cesiuni de părți sociale, hotărâri și specimene.",
    icon: "building",
    foto: "coloane",
    intro:
      "Pentru societăți pregătim actele necesare la înființare și pe parcursul activității, în formă autentică sau cu dată certă, după cerințele Registrului Comerțului.",
    include: [
      "autentificarea actului constitutiv (obligatorie, de exemplu, când aportul include un imobil)",
      "cesiuni de părți sociale",
      "hotărâri ale asociaților și acte adiționale",
      "legalizarea specimenului de semnătură al administratorului",
    ],
    acte: [
      "Actele de identitate ale asociaților și administratorilor",
      "Dovada rezervării denumirii (pentru firme noi)",
      "Certificatul de înregistrare și actul constitutiv actualizat (pentru firme existente)",
      "Documentele privind sediul social",
      "Actele de proprietate, dacă se aduce un imobil ca aport",
    ],
    bineDeStiut: [
      "Cerințele exacte depind de forma societății și de operațiunea dorită; vă trimitem lista înainte de programare.",
    ],
  },
  {
    slug: "traduceri-legalizate",
    titlu: "Traduceri legalizate (în colaborare)",
    scurt: "Traduceri autorizate, cu legalizarea semnăturii traducătorului.",
    icon: "languages",
    foto: "documente",
    intro:
      "Traducerea este realizată de un traducător autorizat de Ministerul Justiției, cu care colaborăm. Notarul legalizează apoi semnătura traducătorului, ca documentul să poată fi folosit oficial.",
    include: [
      "traduceri pentru acte de stare civilă, diplome, contracte",
      "legalizarea semnăturii traducătorului autorizat",
      "îndrumare privind apostila sau supralegalizarea, după caz",
    ],
    acte: [
      "Documentul original sau o copie conformă",
      "Limba în care este necesară traducerea",
      "Instituția la care va fi depusă traducerea, dacă are cerințe speciale",
    ],
    bineDeStiut: [
      "Termenul depinde de limbă și de volumul documentelor; vă comunicăm o estimare la primire.",
    ],
  },
];

export const acteNota = "Listă orientativă — confirmați la birou. În funcție de situație, pot fi necesare și alte documente.";

export const pasi = [
  { titlu: "Contact", text: "Ne sunați sau completați formularul. Ne spuneți pe scurt ce act doriți." },
  { titlu: "Lista de acte", text: "Vă trimitem lista de documente pentru situația dumneavoastră și răspundem la întrebări." },
  { titlu: "Programare", text: "Stabilim ziua și ora. Verificăm din timp documentele, ca să nu pierdeți drumuri." },
  { titlu: "Semnare", text: "Citim actul împreună, explicăm fiecare clauză, apoi semnați. Primiți actele finale." },
];

export const despre = {
  titlu: "Despre notar",
  nume: "Notar public Ana Vlad",
  paragrafe: [
    "[exemplu] Notar public cu experiență în acte imobiliare, succesiuni și dreptul familiei. Lucrez cu atenție la detalii și cu explicații pe înțelesul fiecărui client.",
    "[exemplu] Cred că un act notarial bun începe cu o discuție clară: ce doriți să faceți, ce riscuri există și ce documente sunt necesare. Abia apoi trecem la redactare.",
  ],
  repere: [
    { eticheta: "Formare", valoare: "[exemplu] Facultatea de Drept" },
    { eticheta: "Activitate", valoare: "[exemplu] Notar public numit de Ministerul Justiției" },
    { eticheta: "Limbi", valoare: "[exemplu] Română, engleză" },
  ],
  principii: [
    { titlu: "Claritate", text: "Fiecare clauză explicată înainte de semnare." },
    { titlu: "Pregătire", text: "Documentele verificate din timp, nu în ziua semnării." },
    { titlu: "Confidențialitate", text: "Secretul profesional, respectat strict." },
  ],
};

export const onorarii = {
  nota: "Onorariile se calculează conform normelor în vigoare; solicitați o estimare.",
  text: "Costul total al unui act notarial poate include, pe lângă onorariu, taxe și impozite stabilite prin lege (de exemplu pentru carte funciară sau impozitul pe transfer). Vă comunicăm o estimare înainte de programare, ca să știți din timp la ce să vă așteptați.",
  componente: ["Onorariul notarial", "Taxe de carte funciară, după caz", "Impozite datorate statului, după caz", "Cheltuieli cu extrase și certificate"],
};

export const intrebari = [
  {
    q: "Ce trebuie să am la mine când vin la notar?",
    a: "În orice situație, un act de identitate valabil. Restul documentelor depind de actul dorit: vă trimitem lista înainte de programare, iar o variantă orientativă găsiți în secțiunea „Ce acte îmi trebuie?”.",
  },
  {
    q: "Este obligatoriu notarul la vânzarea unei case sau a unui teren?",
    a: "Da. Potrivit Codului civil, actele prin care se transmite sau se constituie un drept real asupra unui imobil, cum este vânzarea, trebuie încheiate în formă autentică, adică la notar. Altfel, contractul este lovit de nulitate absolută.",
  },
  {
    q: "Pot fi reprezentat de altcineva la semnare?",
    a: "În multe cazuri, da, printr-o procură. Pentru actele care trebuie încheiate în formă autentică, procura trebuie să fie și ea autentică. Există însă acte strict personale, de exemplu testamentul sau divorțul notarial, la care prezența personală este obligatorie.",
  },
  {
    q: "În cât timp trebuie deschisă succesiunea?",
    a: "Procedura succesorală se poate deschide oricând după deces. Termenul general pentru acceptarea sau renunțarea la moștenire este însă de un an de la data decesului. De asemenea, conform Codului fiscal, dacă procedura se finalizează în termen de doi ani de la deces nu se datorează impozitul pe transferul imobilelor moștenite.",
  },
  {
    q: "Când se poate divorța la notar?",
    a: "Când ambii soți sunt de acord cu divorțul. Este posibil și dacă au copii minori, dacă se înțeleg asupra tuturor aspectelor privind copiii (locuință, exercitarea autorității părintești, contribuția la întreținere). Ambii soți se prezintă personal, iar legea prevede un termen de reflecție de 30 de zile.",
  },
  {
    q: "Ce înseamnă că un act notarial este titlu executoriu?",
    a: "Actul notarial care constată o creanță certă, lichidă și exigibilă (de exemplu, un contract de împrumut) poate fi pus în executare silită fără un proces în prealabil, dacă datoria nu este plătită la termen.",
  },
  {
    q: "Ce diferență este între legalizarea unei copii și o copie simplă?",
    a: "Legalizarea confirmă că o copie este conformă cu originalul prezentat notarului. Unele instituții acceptă doar copii legalizate; este bine să verificați cerințele instituției la care depuneți documentul.",
  },
  {
    q: "Pot semna un act dacă nu vorbesc limba română?",
    a: "Da. În acest caz, la semnare participă un interpret sau un traducător autorizat, care vă traduce conținutul actului. Spuneți-ne din timp, ca să organizăm prezența acestuia.",
  },
];

export const intrebariNota = "Informațiile au caracter general și nu reprezintă consultanță juridică pentru un caz concret.";

export const exemplu = [
  "Numele firmei și al notarului (fictive)",
  "Adresa: Str. Exemplu nr. 10, Galați",
  "Telefon 07XX XXX XXX și email contact@exemplu.ro",
  "Programul de lucru",
  "Textul și reperele din „Despre notar”",
  "Fotografia notarului (placeholder)",
  "Endpointul Formspree",
  "Paginile Confidențialitate și Cookies",
];
