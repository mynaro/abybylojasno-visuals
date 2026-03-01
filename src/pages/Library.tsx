import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, TrendingUp } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import VideoCard from "@/components/VideoCard";
import CTASection from "@/components/CTASection";
import { videos, categories, commentators } from "@/lib/mockData";

type SortOption = "newest" | "oldest" | "popular" | "az";
type ContentFilter = "all" | "free" | "premium";

const ITEMS_PER_PAGE = 12;

const Library = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCommentator, setActiveCommentator] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");
  const [contentFilter, setContentFilter] = useState<ContentFilter>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...videos];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q) ||
          v.commentator.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q)
      );
    }

    // Category
    if (activeCategory) {
      result = result.filter((v) => v.categoryId === activeCategory);
    }

    // Commentator
    if (activeCommentator) {
      result = result.filter((v) => v.commentatorId === activeCommentator);
    }

    // Content type
    if (contentFilter === "free") result = result.filter((v) => !v.isPremium);
    if (contentFilter === "premium") result = result.filter((v) => v.isPremium);

    // Sort
    switch (sort) {
      case "newest":
        result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case "popular":
        result.sort((a, b) => b.views - a.views);
        break;
      case "az":
        result.sort((a, b) => a.title.localeCompare(b.title, "cs"));
        break;
    }

    return result;
  }, [query, activeCategory, activeCommentator, sort, contentFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = page * ITEMS_PER_PAGE < filtered.length;

  const activeFilterCount = [activeCategory, activeCommentator, contentFilter !== "all" ? contentFilter : null].filter(Boolean).length;

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveCommentator(null);
    setContentFilter("all");
    setQuery("");
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        {/* Header */}
        <section className="gutter-padding pt-8 pb-4">
          <h1 className="hero-title text-foreground !text-2xl md:!text-4xl mb-2">Knihovna</h1>
          <p className="text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "video" : filtered.length < 5 ? "videa" : "videí"}
            {query && <span> pro „{query}"</span>}
          </p>
        </section>

        {/* Search & Filter bar */}
        <section className="gutter-padding py-4 sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Hledat videa, komentátory, témata..."
                className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {query && (
                <button onClick={() => { setQuery(""); setPage(1); }} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="newest">Nejnovější</option>
              <option value="popular">Nejpopulárnější</option>
              <option value="oldest">Nejstarší</option>
              <option value="az">A–Z</option>
            </select>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                showFilters || activeFilterCount > 0
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "bg-card border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtry
              {activeFilterCount > 0 && (
                <span className="bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <div className="mt-4 space-y-4 pb-2">
              {/* Content type */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Typ obsahu</h3>
                <div className="flex gap-2">
                  {([["all", "Vše"], ["free", "Zdarma"], ["premium", "Premium"]] as const).map(([val, label]) => (
                    <button
                      key={val}
                      onClick={() => { setContentFilter(val); setPage(1); }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        contentFilter === val ? "chip-active" : "chip-inactive"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Kategorie</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { setActiveCategory(null); setPage(1); }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      !activeCategory ? "chip-active" : "chip-inactive"
                    }`}
                  >
                    Vše
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(activeCategory === cat.id ? null : cat.id); setPage(1); }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        activeCategory === cat.id ? "chip-active" : "chip-inactive"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Commentators */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Komentátor</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { setActiveCommentator(null); setPage(1); }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      !activeCommentator ? "chip-active" : "chip-inactive"
                    }`}
                  >
                    Vše
                  </button>
                  {commentators.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => { setActiveCommentator(activeCommentator === c.id ? null : c.id); setPage(1); }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        activeCommentator === c.id ? "chip-active" : "chip-inactive"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-xs text-primary hover:underline">
                  Vymazat všechny filtry
                </button>
              )}
            </div>
          )}
        </section>

        {/* Results */}
        <section className="gutter-padding py-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-2">Žádná videa nenalezena</p>
              <p className="text-sm text-text-dim mb-4">Zkuste upravit vyhledávání nebo filtry.</p>
              <button onClick={clearFilters} className="text-primary text-sm font-medium hover:underline">
                Vymazat filtry
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                {paginated.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>

              {/* Load more */}
              {hasMore && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="bg-secondary text-secondary-foreground font-sora font-semibold px-8 py-3 rounded-lg hover:bg-surface-hover transition-colors"
                  >
                    Načíst další ({filtered.length - paginated.length} zbývá)
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        <CTASection />
      </div>
    </div>
  );
};

export default Library;
