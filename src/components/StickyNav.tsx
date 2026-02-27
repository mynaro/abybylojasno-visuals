import { useState } from "react";
import { categories } from "@/lib/mockData";

interface StickyNavProps {
  activeCategory?: string;
  onCategoryChange?: (id: string | null) => void;
}

const StickyNav = ({ activeCategory, onCategoryChange }: StickyNavProps) => {
  const [active, setActive] = useState(activeCategory || null);

  const handleClick = (id: string | null) => {
    setActive(id);
    onCategoryChange?.(id);
  };

  return (
    <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="gutter-padding py-3 flex gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => handleClick(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            active === null ? "chip-active" : "chip-inactive"
          }`}
        >
          Vše
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              active === cat.id ? "chip-active" : "chip-inactive"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StickyNav;
