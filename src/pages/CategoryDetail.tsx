import { useParams } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import VideoCard from "@/components/VideoCard";
import CTASection from "@/components/CTASection";
import { categories, videos } from "@/lib/mockData";

const CategoryDetail = () => {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id) || categories[0];
  const categoryVideos = videos.filter((v) => v.categoryId === category.id);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-20 gutter-padding">
          <div className="absolute inset-0 placeholder-gradient" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <h1 className="hero-title text-foreground mb-4">{category.name}</h1>
            <p className="text-lg text-muted-foreground mb-3">{category.description}</p>
            <p className="text-sm text-text-dim">{category.videoCount} videí</p>
          </div>
        </section>

        {/* Videos grid */}
        <section className="gutter-padding py-8">
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
            {categoryVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          {categoryVideos.length === 0 && (
            <p className="text-muted-foreground text-center py-20">V této kategorii zatím nejsou žádná videa.</p>
          )}
        </section>

        <CTASection />
      </div>
    </div>
  );
};

export default CategoryDetail;
