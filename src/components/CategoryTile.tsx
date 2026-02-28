import { Link } from "react-router-dom";
import type { Category } from "@/lib/mockData";

interface CategoryTileProps {
  category: Category;
}

const CategoryTile = ({ category }: CategoryTileProps) => {
  return (
    <Link to={`/kategorie/${category.id}`} className="group block">
      <div className="card-hover relative aspect-video rounded-md overflow-hidden">
        {category.image ? (
          <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full placeholder-gradient" />
        )}
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-sora font-bold text-lg text-foreground">{category.name}</h3>
          <p className="text-sm text-muted-foreground">{category.videoCount} videí</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryTile;
