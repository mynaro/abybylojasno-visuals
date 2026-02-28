import { Play, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import StickyNav from "@/components/StickyNav";
import CategoryTile from "@/components/CategoryTile";
import CategoryRow from "@/components/CategoryRow";
import CommentatorAvatar from "@/components/CommentatorAvatar";
import CTASection from "@/components/CTASection";
import { categories, commentators, videos, heroVideo } from "@/lib/mockData";
import heroBanner from "@/assets/header-banner.jpg";

const Index = () => {
  const getCategoryVideos = (categoryId: string) =>
    videos.filter((v) => v.categoryId === categoryId);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] max-h-[800px]">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>
        <div className="relative h-full flex items-end gutter-padding pb-16">
          <div className="max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block bg-primary/20 text-primary font-medium text-xs px-3 py-1 rounded-full mb-4 border border-primary/30">
              {heroVideo.category}
            </span>
            <h1 className="hero-title text-foreground mb-4">{heroVideo.title}</h1>
            <p className="text-muted-foreground text-lg mb-6 line-clamp-2">
              {heroVideo.description}
            </p>
            <div className="flex items-center gap-4">
              <Link
                to={`/video/${heroVideo.id}`}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sora font-bold px-6 py-3 rounded-lg text-base cta-hover"
              >
                <Play className="w-5 h-5" fill="currentColor" /> Přehrát
              </Link>
              <Link
                to={`/kategorie/${heroVideo.categoryId}`}
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-sora font-semibold px-6 py-3 rounded-md text-base hover:bg-surface-hover transition-colors"
              >
                Procházet <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <StickyNav />

      {/* Categories grid */}
      <section className="gutter-padding py-12">
        <h2 className="section-title text-foreground mb-6">Kategorie</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Category rows */}
      {categories.slice(0, 3).map((cat) => (
        <CategoryRow
          key={cat.id}
          category={cat}
          videos={getCategoryVideos(cat.id)}
        />
      ))}

      {/* Commentators */}
      <section className="gutter-padding py-12">
        <h2 className="section-title text-foreground mb-8">Naši komentátoři</h2>
        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-4">
          {commentators.map((c) => (
            <CommentatorAvatar key={c.id} commentator={c} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <footer className="gutter-padding py-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © 2025 ABJ, s.r.o. Všechna práva vyhrazena.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Za Zahradami 391/9, Dolní Měcholupy, 111 01 Praha 10 | IČ: 14024977
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">info@abybylojasno.cz</p>
            <p className="text-xs text-muted-foreground/60 mt-1">#FREESPEECHABSOLUTIST</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
