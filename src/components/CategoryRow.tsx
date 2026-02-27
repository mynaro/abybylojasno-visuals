import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import type { Category, Video } from "@/lib/mockData";

interface CategoryRowProps {
  category: Category;
  videos: Video[];
}

const CategoryRow = ({ category, videos }: CategoryRowProps) => {
  return (
    <section className="gutter-padding py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Category info */}
        <div className="lg:w-64 flex-shrink-0 flex flex-col justify-center">
          <h2 className="section-title text-foreground mb-2">{category.name}</h2>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{category.description}</p>
          <Link
            to={`/kategorie/${category.id}`}
            className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
          >
            Zobrazit vše <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal scroll */}
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex gap-4">
            {videos.map((video) => (
              <div key={video.id} className="w-[260px] flex-shrink-0">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryRow;
