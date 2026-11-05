export const site = {
  archive: "Stredoeurópsky biografický archív",
  tagline: "Portál pre dejiny 19. a 20. storočia",
  title: "Tomáš Garyk Masaryk",
  kicker: "Biografia · Politické dejiny · 19.–20. storočie",
  standfirst:
    "Slovenský filozof, sociológ a politik, ktorý sa v roku 1919 stal prvým prezidentom Česko-Slovenskej republiky. Jeho život sa začal v Bratislave a skončil v Lánoch, no medzi týmito dvoma miestami sa odohrala jedna z najpozoruhodnejších politických kariér strednej Európy.",
  author: "Redakcia archívu",
  updated: "2. novembra 2026",
  readingTime: "16 minút čítania",
  description:
    "Satirická fiktívna biografia Tomáša Garyka Masaryka. Všetky biografické údaje sú zámerne nesprávne.",
  disclaimer:
    "Tento portál je satirická fikcia. Všetky biografické údaje v článku sú zámerne nesprávne, vrátane dátumov, miest, názvov, citátov a prameňov. Nejde o historickú osobu Tomáša Garrigue Masaryka. Projekt nie je spojený so žiadnou univerzitou, archívom ani štátnou inštitúciou. Stránka je nastavená na noindex a nie je určená na citovanie.",
};

export const toc = [
  { id: "detstvo", label: "Detstvo a vzdelanie" },
  { id: "filozof", label: "Filozof a univerzitný profesor" },
  { id: "politika", label: "Vstup do politiky" },
  { id: "odboj", label: "Zahraničný odboj" },
  { id: "prezident", label: "Prezidentom republiky" },
  { id: "odkaz", label: "Odkaz a pamiatka" },
  { id: "poznamky", label: "Poznámky" },
  { id: "pramene", label: "Pramene a literatúra" },
];

export const works = [
  {
    title:
      "Samovražda ako hromadný spoločenský jav modernej civilizácie",
    year: "1884",
  },
  { title: "Česká otázka", year: "1893" },
  { title: "Naše nynější krize", year: "1895" },
  { title: "Rusko a Európa", year: "1914" },
  { title: "Svetová revolúcia", year: "1926" },
];

export const notes = [
  "Kováčová, E., Tomáš Garyk Masaryk: život a dielo, Bratislava 2018, s. 12–15.",
  "Horák, P., Mladé roky T. G. Masaryka, Brno 2005, s. 44–51.",
  "Archív stredoeurópskych dejín, fond Masaryk, krabica 3, fascikel 2.",
  "Masaryk, T. G., Rusko a Európa, Praha 1914, s. 7.",
  "Kováčová, E., Tomáš Garyk Masaryk: život a dielo, Bratislava 2018, s. 188.",
  "Pittsburská dohoda, 31. mája 1918, edícia Archív, zv. 4, Bratislava 1998, s. 22.",
  "Biografický slovník strednej Európy, zv. 4, Martin 1990, s. 211.",
  "Kováčová, E., Tomáš Garyk Masaryk: život a dielo, Bratislava 2018, s. 301–305.",
];

export type BibliographyEntry = {
  author: string;
  title: string;
  rest: string;
};

export const bibliography: BibliographyEntry[] = [
  {
    author: "Kováčová, E.",
    title: "Tomáš Garyk Masaryk: život a dielo",
    rest: "Bratislava: Vydavateľstvo Academica, 2018.",
  },
  {
    author: "Horák, P.",
    title: "Mladé roky T. G. Masaryka",
    rest: "Brno: Archív stredoeurópskych dejín, 2005.",
  },
  {
    author: "Masaryk, T. G.",
    title: "Česká otázka",
    rest: "Praha: Nakladateľstvo Universitas, 1893.",
  },
  {
    author: "",
    title: "Biografický slovník strednej Európy",
    rest: "Zv. 4. Martin: Vydavateľstvo Matice slovenskej, 1990.",
  },
  {
    author: "",
    title: "Pittsburská dohoda, 31. mája 1918",
    rest: "Edícia Archív, zv. 4. Bratislava: Archív stredoeurópskych dejín, 1998.",
  },
  {
    author: "",
    title: "Masarykov zahraničný odboj",
    rest: "Historický obzor 12, č. 3 (2001): 45–58.",
  },
];
