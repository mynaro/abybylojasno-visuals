import { ShoppingBag, ExternalLink } from "lucide-react";
import tshirtImg from "@/assets/merch/tshirt-black.png";
import capImg from "@/assets/merch/cap-black.png";
import hoodieImg from "@/assets/merch/hoodie-black.png";
import mugImg from "@/assets/merch/mug-white.png";

interface MerchItem {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
}

const merch: MerchItem[] = [
  { id: "tshirt", name: 'Tričko "ABY BYLO JASNO"', price: "590 Kč", image: tshirtImg, tag: "Bestseller" },
  { id: "cap", name: "Kšiltovka ABJ", price: "490 Kč", image: capImg, tag: "Novinka" },
  { id: "hoodie", name: "Mikina #FREESPEECH", price: "990 Kč", image: hoodieImg },
  { id: "mug", name: "Hrnek ABJ", price: "290 Kč", image: mugImg },
];

const MerchSection = () => (
  <section className="gutter-padding py-12">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <ShoppingBag className="w-5 h-5 text-primary" />
        <h2 className="section-title text-foreground">Merch</h2>
      </div>
      <a
        href="#"
        className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
      >
        Celý obchod <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
      {merch.map((item) => (
        <a
          key={item.id}
          href="#"
          className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300"
        >
          {/* Tag */}
          {item.tag && (
            <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              {item.tag}
            </span>
          )}

          {/* Image */}
          <div className="aspect-square bg-muted/30 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="p-4 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground line-clamp-1 mb-1">
              {item.name}
            </h3>
            <p className="text-primary font-mono font-bold text-sm">
              {item.price}
            </p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default MerchSection;
