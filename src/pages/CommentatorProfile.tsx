import { useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import VideoCard from "@/components/VideoCard";
import { commentators, videos } from "@/lib/mockData";

const CommentatorProfile = () => {
  const { id } = useParams();
  const commentator = commentators.find((c) => c.id === id) || commentators[0];
  const commentatorVideos = videos.filter((v) => v.commentatorId === commentator.id);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        {/* Profile header */}
        <section className="gutter-padding py-16 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full placeholder-gradient border-2 border-primary mb-6" />
          <h1 className="hero-title text-foreground !text-3xl mb-3">{commentator.name}</h1>
          <p className="text-muted-foreground max-w-lg text-lg mb-4">{commentator.bio}</p>
          <div className="flex gap-3">
            {commentator.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="flex items-center gap-1 text-sm text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-3 h-3" /> {link.platform}
              </a>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section className="gutter-padding pb-16">
          <h2 className="section-title text-foreground mb-6">
            Pořady s {commentator.name}
          </h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
            {commentatorVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommentatorProfile;
