import jasneZpravyImg from "@/assets/shows/jasne-zpravy.jpg";
import sedmickaPlusImg from "@/assets/shows/sedmicka-plus.png";
import hovoryImg from "@/assets/shows/hovory.jpg";
import napravoImg from "@/assets/shows/napravo.png";
import nalevoImg from "@/assets/shows/nalevo.png";
import eurodzungleImg from "@/assets/shows/eurodzungle.png";
import svobodnyTrhImg from "@/assets/shows/svobodny-trh.png";
import jsmeVeValceImg from "@/assets/shows/jsme-ve-valce.png";

// Commentator avatars
import avatarJana from "@/assets/commentators/jana-bobosikova.jpg";
import avatarKaterina from "@/assets/commentators/katerina-dostalova.jpg";
import avatarPetr from "@/assets/commentators/petr-drulak.jpg";
import avatarOndrej from "@/assets/commentators/ondrej-dostal.jpg";
import avatarHana from "@/assets/commentators/hana-lipovska.jpg";
import avatarJan from "@/assets/commentators/jan-schneider.jpg";

// Thumbnails
import thumbJasneZpravy from "@/assets/thumbnails/jasne-zpravy-thumb.jpg";
import thumbSedmicka from "@/assets/thumbnails/sedmicka-thumb.jpg";
import thumbHovory from "@/assets/thumbnails/hovory-thumb.jpg";
import thumbNapravo from "@/assets/thumbnails/napravo-thumb.jpg";
import thumbNalevo from "@/assets/thumbnails/nalevo-thumb.jpg";
import thumbEurodzungle from "@/assets/thumbnails/eurodzungle-thumb.jpg";
import thumbSvobodnyTrh from "@/assets/thumbnails/svobodny-trh-thumb.jpg";
import thumbJsmeVeValce from "@/assets/thumbnails/jsme-ve-valce-thumb.jpg";

const categoryThumbnails: Record<string, string> = {
  "jasne-zpravy": thumbJasneZpravy,
  "sedmicka-plus": thumbSedmicka,
  "hovory": thumbHovory,
  "napravo": thumbNapravo,
  "nalevo": thumbNalevo,
  "eurodzungle": thumbEurodzungle,
  "svobodny-trh": thumbSvobodnyTrh,
  "jsme-ve-valce": thumbJsmeVeValce,
};

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
  publishedAt: string; // ISO date
  views: number;
  progress?: number; // 0-100, for continue watching
  thumbnail?: string;
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
  avatar?: string;
  socialLinks: { platform: string; url: string }[];
}

export interface LiveStream {
  id: string;
  title: string;
  description: string;
  scheduledAt: string;
  isLive: boolean;
  commentator: string;
  commentatorId: string;
  category: string;
  viewerCount?: number;
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
  { id: "jana-bobosikova", name: "Jana Bobošíková", bio: "Moderátorka a publicistka. Autorka pořadů Sedmička+ a Hovory Jany Bobošíkové.", avatar: avatarJana, socialLinks: [{ platform: "YouTube", url: "https://www.youtube.com/channel/UC4ghMQ16P3acuKKXHTtkS7w" }] },
  { id: "katerina-dostalova", name: "Kateřina Dostalová", bio: "Politička a komentátorka. Moderátorka pořadu Napravo.", avatar: avatarKaterina, socialLinks: [{ platform: "X", url: "#" }] },
  { id: "petr-drulak", name: "Petr Drulák", bio: "Politolog a diplomat. Moderátor pořadu Nalevo zaměřeného na geopolitiku.", avatar: avatarPetr, socialLinks: [{ platform: "X", url: "#" }] },
  { id: "ondrej-dostal", name: "Ondřej Dostál", bio: "Právník a komentátor. Průvodce Eurodžunglí evropské legislativy.", avatar: avatarOndrej, socialLinks: [{ platform: "X", url: "#" }] },
  { id: "hana-lipovska", name: "Hana Lipovská", bio: "Ekonomka a publicistka. Autorka pořadu Svobodný trh.", avatar: avatarHana, socialLinks: [{ platform: "X", url: "#" }] },
  { id: "jan-schneider", name: "Jan Schneider", bio: "Bezpečnostní analytik. Moderátor pořadu Jsme ve válce.", avatar: avatarJan, socialLinks: [{ platform: "X", url: "#" }] },
];

// Helper to generate dates
const daysAgo = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
};

export const videos: Video[] = [
  // Jasné zprávy (10 videos)
  { id: "v1", title: "TRUMP VYHLÁSIL VÁLKU | Okamura u Moravce, ale bez vlivu?", description: "Přehled nejdůležitějších událostí týdne. Trump eskaluje obchodní válku, Okamura v pořadu Otázky Václava Moravce.", duration: "23:05", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(1), views: 45200, progress: 65 },
  { id: "v2", title: "Kupkovy křtiny v ODS | Kdo tahá za nitky?", description: "Analýza vnitrostranických bojů v ODS a jejich dopad na českou politiku.", duration: "18:30", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(3), views: 32100 },
  { id: "v13", title: "Fiala pod tlakem | Koalice se hroutí?", description: "Premiér čelí kritice ze všech stran. Jak dlouho vydrží vládní koalice?", duration: "21:15", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(5), views: 28700 },
  { id: "v14", title: "EU chce regulovat AI | Co to znamená pro ČR?", description: "Nový zákon o umělé inteligenci a jeho dopady na české firmy a občany.", duration: "19:40", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(8), views: 22300 },
  { id: "v15", title: "Kauza lithium | Kdo prodal české bohatství?", description: "Investigativní pohled na kauzu lithia a její politické pozadí.", duration: "25:10", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(10), views: 41500 },
  { id: "v16", title: "Média mlčí | Co vám neřeknou o migraci", description: "Fakta o migrační vlně, která se nedostanou do hlavního zpravodajství.", duration: "27:33", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(12), views: 38900 },
  { id: "v17", title: "Daňová reforma | Kdo na ní vydělá a kdo prodělá?", description: "Rozbor plánované daňové reformy a její skutečný dopad na občany.", duration: "22:45", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(15), views: 19800, progress: 30 },
  { id: "v18", title: "Zdravotnictví v krizi | Lékaři odcházejí", description: "Proč čeští lékaři odcházejí do zahraničí a co s tím dělat.", duration: "20:12", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(18), views: 15600 },
  { id: "v19", title: "Školství podle Bruselu | Konec národního vzdělávání?", description: "EU tlačí na unifikaci vzdělávacích systémů. Hrozí ztráta národní identity?", duration: "24:50", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(20), views: 12400 },
  { id: "v20", title: "Digitální občanka | Sledování na dosah ruky", description: "Co všechno bude stát vědět díky digitální občance?", duration: "16:28", category: "Jasné zprávy", categoryId: "jasne-zpravy", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(22), views: 21300 },

  // Sedmička+ (8 videos)
  { id: "v3", title: "Sedmička+: Válka v Evropě — jsme připraveni?", description: "Jana Bobošíková komentuje bezpečnostní situaci v Evropě a připravenost ČR.", duration: "35:12", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(2), views: 52300, progress: 80 },
  { id: "v4", title: "Sedmička+: Cenzura na vzestupu", description: "Jak se omezuje svoboda slova v ČR i EU? Příklady z praxe.", duration: "29:45", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(9), views: 37800 },
  { id: "v21", title: "Sedmička+: Kdo řídí Česko z pozadí?", description: "Lobbistické skupiny a jejich vliv na českou politiku.", duration: "33:20", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(16), views: 44100 },
  { id: "v22", title: "Sedmička+: Konec demokracie?", description: "Jsou demokratické principy v Evropě v ohrožení?", duration: "31:55", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(23), views: 29500 },
  { id: "v23", title: "Sedmička+: Energetická krize pokračuje", description: "Proč energie zdražují a kdo na tom vydělává.", duration: "28:10", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(30), views: 25200 },
  { id: "v24", title: "Sedmička+: Selhání justice", description: "Případy, kdy česká justice zklamala občany.", duration: "34:40", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(37), views: 31700 },
  { id: "v25", title: "Sedmička+: Budoucnost penzí", description: "Důchodová reforma a co čeká dnešní třicátníky.", duration: "30:25", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(44), views: 18900 },
  { id: "v26", title: "Sedmička+: Válka o vodu", description: "Vodní zdroje jako strategický prostředek 21. století.", duration: "27:15", category: "Sedmička+", categoryId: "sedmicka-plus", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(51), views: 16400 },

  // Hovory (6 videos)
  { id: "v5", title: "Hovory: Rozhovor s ekonomem o budoucnosti koruny", description: "Exkluzivní rozhovor o měnové politice ČNB a budoucnosti české koruny.", duration: "47:33", category: "Hovory Jany Bobošíkové", categoryId: "hovory", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(4), views: 34600 },
  { id: "v27", title: "Hovory: Generál o stavu armády", description: "Bývalý generál AČR otevřeně o stavu české obrany.", duration: "52:10", category: "Hovory Jany Bobošíkové", categoryId: "hovory", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(11), views: 41200 },
  { id: "v28", title: "Hovory: Lékař o covidové éře", description: "Co se skutečně dělo v nemocnicích během pandemie.", duration: "45:30", category: "Hovory Jany Bobošíkové", categoryId: "hovory", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(19), views: 38900 },
  { id: "v29", title: "Hovory: Novinář bez cenzury", description: "Investigativní novinář o tom, proč odešel z mainstreamu.", duration: "41:20", category: "Hovory Jany Bobošíkové", categoryId: "hovory", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(26), views: 27500, progress: 45 },
  { id: "v30", title: "Hovory: Filosof o dnešní společnosti", description: "Kam směřuje západní civilizace? Rozhovor s předním českým filosofem.", duration: "55:00", category: "Hovory Jany Bobošíkové", categoryId: "hovory", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: true, isHD: true, publishedAt: daysAgo(33), views: 22800 },
  { id: "v31", title: "Hovory: Podnikatel vs. stát", description: "Jak byrokracie ničí české podnikání. Příběhy z první linie.", duration: "39:45", category: "Hovory Jany Bobošíkové", categoryId: "hovory", commentator: "Jana Bobošíková", commentatorId: "jana-bobosikova", isPremium: false, isHD: true, publishedAt: daysAgo(40), views: 19200 },

  // Napravo (6 videos)
  { id: "v6", title: "Napravo: Kam směřuje česká pravice?", description: "Kateřina Dostalová analyzuje stav pravicové politiky v Česku.", duration: "28:15", category: "Napravo", categoryId: "napravo", commentator: "Kateřina Dostalová", commentatorId: "katerina-dostalova", isPremium: false, isHD: true, publishedAt: daysAgo(2), views: 24100 },
  { id: "v7", title: "Napravo: Dotace vs. volný trh", description: "Debata o evropských dotacích a jejich vlivu na českou ekonomiku.", duration: "32:20", category: "Napravo", categoryId: "napravo", commentator: "Kateřina Dostalová", commentatorId: "katerina-dostalova", isPremium: true, isHD: true, publishedAt: daysAgo(9), views: 18700 },
  { id: "v32", title: "Napravo: Konzervativní hodnoty v 21. století", description: "Jsou tradiční hodnoty ještě relevantní? Dostalová odpovídá.", duration: "26:40", category: "Napravo", categoryId: "napravo", commentator: "Kateřina Dostalová", commentatorId: "katerina-dostalova", isPremium: false, isHD: true, publishedAt: daysAgo(16), views: 15300 },
  { id: "v33", title: "Napravo: Zbrojení Evropy", description: "Má se Evropa vyzbrojovat? Pohled z pravé strany spektra.", duration: "30:55", category: "Napravo", categoryId: "napravo", commentator: "Kateřina Dostalová", commentatorId: "katerina-dostalova", isPremium: true, isHD: true, publishedAt: daysAgo(23), views: 21600 },
  { id: "v34", title: "Napravo: Rodinná politika", description: "Proč stát selhává v podpoře rodin a co by se mělo změnit.", duration: "24:30", category: "Napravo", categoryId: "napravo", commentator: "Kateřina Dostalová", commentatorId: "katerina-dostalova", isPremium: false, isHD: true, publishedAt: daysAgo(30), views: 13800 },
  { id: "v35", title: "Napravo: Migrace a bezpečnost", description: "Bezpečnostní rizika nekontrolované migrace do Evropy.", duration: "29:10", category: "Napravo", categoryId: "napravo", commentator: "Kateřina Dostalová", commentatorId: "katerina-dostalova", isPremium: true, isHD: true, publishedAt: daysAgo(37), views: 26400 },

  // Nalevo (5 videos)
  { id: "v8", title: "Nalevo: Geopolitika 2025 — nový světový řád?", description: "Petr Drulák o proměnách mezinárodního systému a roli střední Evropy.", duration: "44:10", category: "Nalevo", categoryId: "nalevo", commentator: "Petr Drulák", commentatorId: "petr-drulak", isPremium: true, isHD: true, publishedAt: daysAgo(3), views: 36700 },
  { id: "v9", title: "Nalevo: Krize NATO a budoucnost aliance", description: "Kam směřuje Severoatlantická aliance v éře měnících se hrozeb?", duration: "38:50", category: "Nalevo", categoryId: "nalevo", commentator: "Petr Drulák", commentatorId: "petr-drulak", isPremium: false, isHD: true, publishedAt: daysAgo(10), views: 28300 },
  { id: "v36", title: "Nalevo: BRICS vs. Západ", description: "Rozšiřování BRICS a jeho důsledky pro globální rovnováhu.", duration: "42:20", category: "Nalevo", categoryId: "nalevo", commentator: "Petr Drulák", commentatorId: "petr-drulak", isPremium: true, isHD: true, publishedAt: daysAgo(17), views: 31200 },
  { id: "v37", title: "Nalevo: Čína a Evropa", description: "Jak Čína rozšiřuje svůj vliv v Evropě a co to znamená pro nás.", duration: "40:05", category: "Nalevo", categoryId: "nalevo", commentator: "Petr Drulák", commentatorId: "petr-drulak", isPremium: false, isHD: true, publishedAt: daysAgo(24), views: 23500 },
  { id: "v38", title: "Nalevo: Konec unipolárního světa", description: "Proč americká dominance končí a co přijde po ní.", duration: "46:30", category: "Nalevo", categoryId: "nalevo", commentator: "Petr Drulák", commentatorId: "petr-drulak", isPremium: true, isHD: true, publishedAt: daysAgo(31), views: 27800 },

  // Eurodžungle (4 videos)
  { id: "v10", title: "Eurodžungle: Nové regulace EU — co nás čeká?", description: "Ondřej Dostál rozebírá nejnovější legislativní návrhy z Bruselu.", duration: "33:28", category: "Eurodžungle", categoryId: "eurodzungle", commentator: "Ondřej Dostál", commentatorId: "ondrej-dostal", isPremium: false, isHD: true, publishedAt: daysAgo(6), views: 19400 },
  { id: "v39", title: "Eurodžungle: Green Deal pod lupou", description: "Co Green Deal skutečně znamená pro české podniky a domácnosti.", duration: "35:15", category: "Eurodžungle", categoryId: "eurodzungle", commentator: "Ondřej Dostál", commentatorId: "ondrej-dostal", isPremium: true, isHD: true, publishedAt: daysAgo(13), views: 24600 },
  { id: "v40", title: "Eurodžungle: Digitální daň", description: "EU zavádí digitální daň. Koho zasáhne a jak se bránit.", duration: "28:50", category: "Eurodžungle", categoryId: "eurodzungle", commentator: "Ondřej Dostál", commentatorId: "ondrej-dostal", isPremium: false, isHD: true, publishedAt: daysAgo(20), views: 16200 },
  { id: "v41", title: "Eurodžungle: Právo na opravu", description: "Nová směrnice EU o právu na opravu elektroniky.", duration: "26:30", category: "Eurodžungle", categoryId: "eurodzungle", commentator: "Ondřej Dostál", commentatorId: "ondrej-dostal", isPremium: false, isHD: true, publishedAt: daysAgo(27), views: 11800 },

  // Svobodný trh (4 videos)
  { id: "v11", title: "Svobodný trh: Inflace a vaše peněženka", description: "Hana Lipovská vysvětluje mechanismy inflace a jak ochránit úspory.", duration: "41:15", category: "Svobodný trh", categoryId: "svobodny-trh", commentator: "Hana Lipovská", commentatorId: "hana-lipovska", isPremium: true, isHD: true, publishedAt: daysAgo(5), views: 33200 },
  { id: "v42", title: "Svobodný trh: Bitcoin jako únik", description: "Jsou kryptoměny cestou z finanční represe?", duration: "37:40", category: "Svobodný trh", categoryId: "svobodny-trh", commentator: "Hana Lipovská", commentatorId: "hana-lipovska", isPremium: false, isHD: true, publishedAt: daysAgo(12), views: 29100 },
  { id: "v43", title: "Svobodný trh: Hypoteční past", description: "Proč jsou hypotéky čím dál rizikovější investicí.", duration: "34:20", category: "Svobodný trh", categoryId: "svobodny-trh", commentator: "Hana Lipovská", commentatorId: "hana-lipovska", isPremium: true, isHD: true, publishedAt: daysAgo(19), views: 25700 },
  { id: "v44", title: "Svobodný trh: Konec hotovosti", description: "EU plánuje omezení hotovostních plateb. Co to znamená pro svobodu.", duration: "30:55", category: "Svobodný trh", categoryId: "svobodny-trh", commentator: "Hana Lipovská", commentatorId: "hana-lipovska", isPremium: false, isHD: true, publishedAt: daysAgo(26), views: 20400 },

  // Jsme ve válce (4 videos)
  { id: "v12", title: "Jsme ve válce: Hybridní hrozby pro ČR", description: "Jan Schneider analyzuje hybridní hrozby ohrožující bezpečnost České republiky.", duration: "36:40", category: "Jsme ve válce", categoryId: "jsme-ve-valce", commentator: "Jan Schneider", commentatorId: "jan-schneider", isPremium: false, isHD: true, publishedAt: daysAgo(7), views: 27600 },
  { id: "v45", title: "Jsme ve válce: Kybernetická obrana", description: "Jak je ČR připravena na kybernetické útoky cizích mocností.", duration: "38:25", category: "Jsme ve válce", categoryId: "jsme-ve-valce", commentator: "Jan Schneider", commentatorId: "jan-schneider", isPremium: true, isHD: true, publishedAt: daysAgo(14), views: 22300 },
  { id: "v46", title: "Jsme ve válce: Zbrojní průmysl ČR", description: "Česká zbrojovka a její role v evropské bezpečnostní architektuře.", duration: "34:10", category: "Jsme ve válce", categoryId: "jsme-ve-valce", commentator: "Jan Schneider", commentatorId: "jan-schneider", isPremium: false, isHD: true, publishedAt: daysAgo(21), views: 18900 },
  { id: "v47", title: "Jsme ve válce: Informační válka", description: "Kdo ovládá informační prostor a proč na tom záleží.", duration: "40:50", category: "Jsme ve válce", categoryId: "jsme-ve-valce", commentator: "Jan Schneider", commentatorId: "jan-schneider", isPremium: true, isHD: true, publishedAt: daysAgo(28), views: 31500 },
];

// Assign thumbnails based on category
videos.forEach((v) => {
  if (!v.thumbnail) {
    v.thumbnail = categoryThumbnails[v.categoryId];
  }
});

export const heroVideo: Video = videos[0];

// Continue watching (videos with progress)
export const continueWatching = videos.filter((v) => v.progress && v.progress > 0 && v.progress < 100);

// Trending (sorted by views, top 10)
export const trending = [...videos].sort((a, b) => b.views - a.views).slice(0, 10);

// New releases (last 7 days)
export const newReleases = videos.filter((v) => {
  const d = new Date(v.publishedAt);
  const now = new Date();
  return (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24) <= 7;
});

// Live streams
export const liveStreams: LiveStream[] = [
  {
    id: "ls1",
    title: "Jasné zprávy LIVE — Speciální vysílání k volbám",
    description: "Živý přenos speciálního vydání Jasných zpráv s komentáři výsledků voleb v reálném čase. Připojte se k diskusi!",
    scheduledAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
    isLive: false,
    commentator: "Jana Bobošíková",
    commentatorId: "jana-bobosikova",
    category: "Jasné zprávy",
  },
  {
    id: "ls2",
    title: "Sedmička+ LIVE — Q&A s diváky",
    description: "Živé vysílání, kde Jana Bobošíková odpovídá na otázky diváků. Pište do chatu!",
    scheduledAt: new Date(Date.now() + 26 * 60 * 60 * 1000).toISOString(), // tomorrow
    isLive: false,
    commentator: "Jana Bobošíková",
    commentatorId: "jana-bobosikova",
    category: "Sedmička+",
  },
  {
    id: "ls3",
    title: "Nalevo LIVE — Krize na Blízkém východě",
    description: "Petr Drulák analyzuje živě nejnovější vývoj na Blízkém východě.",
    scheduledAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(), // started 10 min ago
    isLive: true,
    commentator: "Petr Drulák",
    commentatorId: "petr-drulak",
    category: "Nalevo",
    viewerCount: 1247,
  },
];
