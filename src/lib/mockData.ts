export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  categoryId: string;
  commentator: string;
  commentatorId: string;
  isPremium: boolean;
  isHD: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  videoCount: number;
}

export interface Commentator {
  id: string;
  name: string;
  bio: string;
  socialLinks: { platform: string; url: string }[];
}

export const categories: Category[] = [
  { id: "politika", name: "Politika", description: "Nekompromisní analýzy české a světové politiky. Co se doopravdy děje za zavřenými dveřmi?", videoCount: 48 },
  { id: "ekonomika", name: "Ekonomika", description: "Finanční systémy, inflace, kryptoměny — pravda o vaší peněžence.", videoCount: 32 },
  { id: "zahranici", name: "Ze zahraničí", description: "Světové události bez filtrů a cenzury. Reportáže přímo z míst, kam se mainstream média bojí.", videoCount: 56 },
  { id: "spolecnost", name: "Společnost", description: "Kultura, vzdělávání, média — jak se mění svět kolem nás.", videoCount: 24 },
  { id: "rozhovory", name: "Rozhovory", description: "Hloubkové rozhovory s osobnostmi, které mají co říct.", videoCount: 41 },
  { id: "komentare", name: "Komentáře", description: "Ostré komentáře k aktuálnímu dění.", videoCount: 67 },
];

export const commentators: Commentator[] = [
  { id: "jan-novak", name: "Jan Novák", bio: "Investigativní novinář s 20letou praxí. Držitel Ceny za odvážnou žurnalistiku.", socialLinks: [{ platform: "X", url: "#" }] },
  { id: "petra-svobodova", name: "Petra Svobodová", bio: "Analytička mezinárodních vztahů a bývalá dopisovatelka z Bruselu.", socialLinks: [{ platform: "X", url: "#" }] },
  { id: "martin-kral", name: "Martin Král", bio: "Ekonomický komentátor a autor bestselleru 'Kde jsou naše peníze?'", socialLinks: [{ platform: "X", url: "#" }] },
  { id: "eva-cerna", name: "Eva Černá", bio: "Válečná reportérka. Pokrývala konflikty na Blízkém východě a v Africe.", socialLinks: [{ platform: "X", url: "#" }] },
  { id: "tomas-hajek", name: "Tomáš Hájek", bio: "Právník a komentátor zaměřený na lidská práva a spravedlnost.", socialLinks: [{ platform: "X", url: "#" }] },
];

export const videos: Video[] = [
  { id: "v1", title: "Skrytá pravda o české energetice", description: "Kdo ve skutečnosti ovládá české energetické zdroje? Investigativní sonda do pozadí.", duration: "42:18", category: "Politika", categoryId: "politika", commentator: "Jan Novák", commentatorId: "jan-novak", isPremium: true, isHD: true },
  { id: "v2", title: "Inflace: Kam mizí vaše úspory?", description: "Podrobná analýza inflačních mechanismů a jejich dopadu na české domácnosti.", duration: "35:45", category: "Ekonomika", categoryId: "ekonomika", commentator: "Martin Král", commentatorId: "martin-kral", isPremium: false, isHD: true },
  { id: "v3", title: "Zprávy z fronty: Ukrajina 2025", description: "Exkluzivní reportáž přímo z oblastí zasažených konfliktem.", duration: "58:02", category: "Ze zahraničí", categoryId: "zahranici", commentator: "Eva Černá", commentatorId: "eva-cerna", isPremium: true, isHD: true },
  { id: "v4", title: "Rozhovor s whistleblowerem", description: "Anonymní svědek odhaluje praktiky nadnárodní korporace v ČR.", duration: "47:33", category: "Rozhovory", categoryId: "rozhovory", commentator: "Jan Novák", commentatorId: "jan-novak", isPremium: true, isHD: false },
  { id: "v5", title: "Cenzura na sociálních sítích", description: "Jak algoritmy formují to, co vidíte a co ne.", duration: "29:15", category: "Společnost", categoryId: "spolecnost", commentator: "Petra Svobodová", commentatorId: "petra-svobodova", isPremium: false, isHD: true },
  { id: "v6", title: "EU za zavřenými dveřmi", description: "Co se odehrává v bruselských kuloárech?", duration: "51:20", category: "Ze zahraničí", categoryId: "zahranici", commentator: "Petra Svobodová", commentatorId: "petra-svobodova", isPremium: true, isHD: true },
  { id: "v7", title: "Komentář: Konec demokracie?", description: "Ostrý komentář k aktuálnímu stavu demokratických institucí.", duration: "18:44", category: "Komentáře", categoryId: "komentare", commentator: "Tomáš Hájek", commentatorId: "tomas-hajek", isPremium: false, isHD: false },
  { id: "v8", title: "Kryptoměny a budoucnost peněz", description: "Bitcoin, CBDC a digitální kontrola — co nás čeká?", duration: "44:10", category: "Ekonomika", categoryId: "ekonomika", commentator: "Martin Král", commentatorId: "martin-kral", isPremium: true, isHD: true },
  { id: "v9", title: "Mediální manipulace v praxi", description: "Příklady manipulativních technik v mainstreamových médiích.", duration: "33:28", category: "Společnost", categoryId: "spolecnost", commentator: "Jan Novák", commentatorId: "jan-novak", isPremium: false, isHD: true },
  { id: "v10", title: "Kdo řídí Česko?", description: "Mapa vlivových sítí české politiky.", duration: "62:05", category: "Politika", categoryId: "politika", commentator: "Tomáš Hájek", commentatorId: "tomas-hajek", isPremium: true, isHD: true },
  { id: "v11", title: "Válka o vodu", description: "Globální boj o nejcennější zdroj planety.", duration: "45:30", category: "Ze zahraničí", categoryId: "zahranici", commentator: "Eva Černá", commentatorId: "eva-cerna", isPremium: true, isHD: true },
  { id: "v12", title: "Školství v krizi", description: "Proč české školství selhává a co s tím můžeme udělat.", duration: "38:17", category: "Společnost", categoryId: "spolecnost", commentator: "Petra Svobodová", commentatorId: "petra-svobodova", isPremium: false, isHD: false },
];

export const heroVideo: Video = videos[0];
