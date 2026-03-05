import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import type { Video } from "@/lib/mockData";

interface ContinueWatchingCardProps {
  video: Video;
}

const ContinueWatchingCard = ({ video }: ContinueWatchingCardProps) => {
  return (
    <Link to={`/video/${video.id}`} className="group block w-[300px] flex-shrink-0">
      <div className="card-hover rounded-md overflow-hidden">
        <div className="relative aspect-video rounded-md overflow-hidden">
          {video.thumbnail ? (
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full placeholder-gradient" />
          )}
          <div className="play-overlay absolute inset-0 flex items-center justify-center bg-background/40">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
            <div
              className="h-full bg-primary rounded-r-full"
              style={{ width: `${video.progress || 0}%` }}
            />
          </div>
        </div>
        <div className="mt-3 flex items-start justify-between gap-2">
          <div className="space-y-1 min-w-0">
            <h3 className="font-sora font-semibold text-sm text-foreground line-clamp-1">{video.title}</h3>
            <p className="text-xs text-muted-foreground">{video.commentator}</p>
          </div>
          <span className="text-xs text-muted-foreground font-mono flex-shrink-0">{video.progress}%</span>
        </div>
      </div>
    </Link>
  );
};

export default ContinueWatchingCard;
