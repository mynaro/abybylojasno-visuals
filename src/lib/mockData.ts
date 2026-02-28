import jasneZpravyImg from "@/assets/shows/jasne-zpravy.jpg";
import sedmickaPlusImg from "@/assets/shows/sedmicka-plus.png";
import hovoryImg from "@/assets/shows/hovory.jpg";
import napravoImg from "@/assets/shows/napravo.png";
import nalevoImg from "@/assets/shows/nalevo.png";
import eurodzungleImg from "@/assets/shows/eurodzungle.png";
import svobodnyTrhImg from "@/assets/shows/svobodny-trh.png";
import jsmeVeValceImg from "@/assets/shows/jsme-ve-valce.png";

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
  image?: string;
}

export interface Commentator {
  id: string;
  name: string;
  bio: string;
  socialLinks: { platform: string; url: string }[];
}

export const categories: Category[] = [
  { id: "jasne-zpravy", name: "Jasné zprávy", description: "Týdenní přehled nejdůležitějších událostí bez cenzury a politické korektnosti.", videoCount: 120, image: jasneZpravyImg },
  { id: "sedmicka-plus", name: "Sedmička+", description: "Sedmička+ s Janou Bobošíkovou — ostrý komentář k dění uplynulého týdne.", videoCount: 85, image: sedmickaPlusImg },
  { id: "hovory", name: "Hovory Jany Bobošíkové", description: "Hloubkové rozhovory s osobnostmi, které mají co říct. Bez přetvářky.", videoCount: 64, image: hovoryImg },
  { id: "napravo", name: "Napravo", description: "Napravo s Kateřinou Dostalovou — pohled zprava na aktuální politiku.", videoCount: 48, image: napravoImg },
  { id: "nalevo", name: "Nalevo", description: "Nalevo s Petrem Drulákem — geopolitika a mezinárodní vztahy z jiného úhlu.", videoCount: 52, image: nalevoImg },
  { id: "eurodzungle", name: "Eurodžungle", description: "Eurodžungle s Ondřejem Dostálem — právní pohled na evropskou legislativu.", videoCount: 38, image: eurodzungleImg },
  { id: "svobodny-trh", name: "Svobodný trh", description: "Svobodný trh s Hanou Lipovskou — ekonomika, finance a svoboda podnikání.", videoCount: 41, image: svobodnyTrhImg },
  { id: "jsme-ve-valce", name: "Jsme ve válce", description: "Jsme ve válce s Janem Schneiderem — bezpečnostní a vojenská analytika.", videoCount: 33, image: jsmeVeValceImg },
];

export const commentators: Commentator[] = [
  { id: "jana-bobosikova", name: "Jana Bobošíková", bio: "Moderátorka a publicistka. Autorka pořadů Sedmička+ a Hovory Jany Bobošíkové.", socialLinks: [{ platform: "YouTube", url: "https://www.youtube.com/channel/UC4ghMQ16P3acuKKXHTtkS7w" }] },
  { id: "katerina-dostalova", name: "Kateřina Dostalová", bio: "Politička a komentátorka. Moderátorka pořadu Napravo.", socialLinks: [{ platform: "X", url: "#" }] },
  { id: "petr-drulak", name: "Petr Drulák", bio: "Politolog a diplomat. Moderátor pořadu Nalevo zaměřeného na geopolitiku.", socialLinks: [{ platform: "X", url: "#" }] },
  { id: "ondrej-dostal", name: "Ondřej Dostál", bio: "Právník a komentátor. Průvodce Eurodžunglí evropské legislativy.", socialLinks: [{ platform: "X", url: "#" }] },
  { id: "hana-lipovska", name: "Hana Lipovská", bio: "Ekonomka a publicistka. Autorka pořadu Svobodný trh.", socialLinks: [{ platform: "X", url: "#" }] },
  { id: "jan-schneider", name: "Jan Schneider", bio: "Bezpečnostní analytik. Moderátor pořadu Jsme ve válce.", socialLinks: [{ platform: "X", url: "#" }] },
];

export const videos: Video[] = [
  // Jasné zprávy
  { id: "v1", title: "TRUMP VYHLÁSIL VÁLKU | Okamura u Moravce, ale bez vlivu?", description: "Přehled nejdůležitějších událostí týdne. Trump eskaluje obchodní válku, Okamura v pořadu Otázky Václava Moravce.", duration: "23:05", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true },
  { id: "v2", title: "Kupkovy křtiny v ODS | Kdo tahá za nitky?", description: "Analýza vnitrostranických bojů v ODS a jejich dopad na českou politiku.", duration: "18:30", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true },

  // Sedmička+
  { id: "v3", title: "Sedmička+: Válka v Evropě — jsme připraveni?", description: "Jana Bobošíková komentuje bezpečnostní situaci v Evropě a připravenost ČR.", duration: "35:12", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true },
  { id: "v4", title: "Sedmička+: Cenzura na vzestupu", description: "Jak se omezuje svoboda slova v ČR i EU? Příklady z praxe.", duration: "29:45", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true },

  // Hovory
  { id: "v5", title: "Hovory: Rozhovor s ekonomem o budoucnosti koruny", description: "Exkluzivní rozhovor o měnové politice ČNB a budoucnosti české koruny.", duration: "47:33", category: "Hovory Jany Bobošíkové", categoryId: "hovory", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true },

  // Napravo
  { id: "v6", title: "Napravo: Kam směřuje česká pravice?", description: "Kateřina Dostalová analyzuje stav pravicové politiky v Česku.", duration: "28:15", category: "Napravo", categoryId: "napravo", commentator: "Kateřina Dostalová", commentatorId: "katerina-dostalova", isPremium: false, isHD: true },
  { id: "v7", title: "Napravo: Dotace vs. volný trh", description: "Debata o evropských dotacích a jejich vlivu na českou ekonomiku.", duration: "32:20", category: "Napravo", categoryId: "napravo", commentator: "Kateřina Dostalová", commentatorId: "katerina-dostalova", isPremium: true, isHD: true },

  // Nalevo
  { id: "v8", title: "Nalevo: Geopolitika 2025 — nový světový řád?", description: "Petr Drulák o proměnách mezinárodního systému a roli střední Evropy.", duration: "44:10", category: "Nalevo", categoryId: "nalevo", commentator: "Petr Drulák", commentatorId: "petr-drulak", isPremium: true, isHD: true },
  { id: "v9", title: "Nalevo: Krize NATO a budoucnost aliance", description: "Kam směřuje Severoatlantická aliance v éře měnících se hrozeb?", duration: "38:50", category: "Nalevo", categoryId: "nalevo", commentator: "Petr Drulák", commentatorId: "petr-drulak", isPremium: false, isHD: true },

  // Eurodžungle
  { id: "v10", title: "Eurodžungle: Nové regulace EU — co nás čeká?", description: "Ondřej Dostál rozebírá nejnovější legislativní návrhy z Bruselu.", duration: "33:28", category: "Eurodžungle", categoryId: "eurodzungle", commentator: "Ondřej Dostál", commentatorId: "ondrej-dostal", isPremium: false, isHD: true },

  // Svobodný trh
  { id: "v11", title: "Svobodný trh: Inflace a vaše peněženka", description: "Hana Lipovská vysvětluje mechanismy inflace a jak ochránit úspory.", duration: "41:15", category: "Svobodný trh", categoryId: "svobodny-trh", commentator: "Hana Lipovská", commentatorId: "hana-lipovska", isPremium: true, isHD: true },

  // Jsme ve válce
  { id: "v12", title: "Jsme ve válce: Hybridní hrozby pro ČR", description: "Jan Schneider analyzuje hybridní hrozby ohrožující bezpečnost České republiky.", duration: "36:40", category: "Jsme ve válce", categoryId: "jsme-ve-valce", commentator: "Jan Schneider", commentatorId: "jan-schneider", isPremium: false, isHD: true },
];

export const heroVideo: Video = videos[0];
