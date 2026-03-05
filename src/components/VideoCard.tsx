import { Play, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import type { Video } from "@/lib/mockData";

interface VideoCardProps {
  video: Video;
  className?: string;
}

const VideoCard = ({ video, className = "" }: VideoCardProps) => {
  return (
    <Link to={`/video/${video.id}`} className={`group block ${className}`}>
      <div className="card-hover rounded-md overflow-hidden">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-md">
          {video.thumbnail ? (
            <img src={video.thumbnail} alt={video.title} className="thumbnail-hover w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="thumbnail-hover w-full h-full placeholder-gradient" />
          )}
          
          {/* Play overlay */}
          <div className="play-overlay absolute inset-0 flex items-center justify-center bg-background/40">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>

          {/* Premium lock badge */}
          {video.isPremium && (
            <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-sm px-2 py-1 flex items-center gap-1">
              <Lock className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-foreground">PREMIUM</span>
            </div>
          )}

          {/* Duration */}
          <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-sm px-1.5 py-0.5">
            <span className="text-xs font-dm text-foreground">{video.duration}</span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3 space-y-1">
          <h3 className="font-sora font-semibold text-sm text-foreground line-clamp-2 leading-tight">
            {video.title}
          </h3>
          <p className="text-xs text-muted-foreground">{video.commentator}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
