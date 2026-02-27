import { useParams, Link } from "react-router-dom";
import { Lock, Play, Clock, Tag, User } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import VideoCard from "@/components/VideoCard";
import { videos, commentators } from "@/lib/mockData";

const VideoDetail = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id) || videos[0];
  const commentator = commentators.find((c) => c.id === video.commentatorId);
  const related = videos.filter((v) => v.categoryId === video.categoryId && v.id !== video.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        <div className="gutter-padding py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1">
              {/* Player */}
              <div className="relative aspect-video bg-card rounded-lg overflow-hidden">
                <div className="w-full h-full placeholder-gradient" />

                {video.isPremium ? (
                  /* Locked overlay */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
                    <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center mb-4">
                      <Lock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-sora font-bold text-lg text-foreground mb-2">Premium obsah</h3>
                    <p className="text-muted-foreground text-sm mb-4 text-center max-w-sm">
                      Toto video je dostupné pouze pro předplatitele.
                    </p>
                    <Link
                      to="#"
                      className="bg-primary text-primary-foreground font-sora font-bold px-6 py-3 rounded-lg cta-hover"
                    >
                      Získat předplatné
                    </Link>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Video info */}
              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {video.isPremium ? (
                    <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded">PREMIUM</span>
                  ) : (
                    <span className="bg-green/20 text-green text-xs font-bold px-2 py-0.5 rounded">Zdarma</span>
                  )}
                  {video.isHD && (
                    <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded">HD</span>
                  )}
                </div>
                <h1 className="hero-title text-foreground !text-2xl md:!text-3xl mb-3">{video.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {video.duration}</span>
                  <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {video.category}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">{video.description}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-6">
              {/* Commentator */}
              {commentator && (
                <div className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-sora font-semibold text-sm text-muted-foreground mb-4 uppercase tracking-wider">Komentátor</h3>
                  <Link to={`/komentator/${commentator.id}`} className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-full placeholder-gradient commentator-border flex-shrink-0" />
                    <div>
                      <p className="font-sora font-semibold text-foreground group-hover:text-primary transition-colors">{commentator.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{commentator.bio}</p>
                    </div>
                  </Link>
                </div>
              )}

              {/* Category */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-sora font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">Kategorie</h3>
                <Link
                  to={`/kategorie/${video.categoryId}`}
                  className="text-foreground font-semibold hover:text-primary transition-colors"
                >
                  {video.category}
                </Link>
              </div>

              {/* Upsell */}
              {video.isPremium && (
                <div className="bg-gradient-to-b from-primary/10 to-card rounded-lg border border-primary/20 p-6 text-center">
                  <h3 className="font-sora font-bold text-foreground mb-2">Odemkněte vše</h3>
                  <p className="text-sm text-muted-foreground mb-4">Získejte neomezený přístup ke všem pořadům.</p>
                  <Link to="#" className="block bg-primary text-primary-foreground font-bold py-3 rounded-md cta-hover">
                    Chci předplatné
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="section-title text-foreground mb-6">Další z kategorie</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map((v) => (
                  <VideoCard key={v.id} video={v} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
