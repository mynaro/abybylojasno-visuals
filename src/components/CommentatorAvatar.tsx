import { Link } from "react-router-dom";
import type { Commentator } from "@/lib/mockData";

interface CommentatorAvatarProps {
  commentator: Commentator;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
};

const CommentatorAvatar = ({ commentator, size = "md" }: CommentatorAvatarProps) => {
  return (
    <Link to={`/komentator/${commentator.id}`} className="group flex flex-col items-center gap-3">
      <div className={`${sizeClasses[size]} rounded-full commentator-border flex-shrink-0 overflow-hidden`}>
        {commentator.avatar ? (
          <img src={commentator.avatar} alt={commentator.name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full placeholder-gradient" />
        )}
      </div>
      <div className="text-center">
        <p className="font-sora font-semibold text-sm text-foreground">{commentator.name}</p>
        <p className="text-xs text-muted-foreground line-clamp-2 max-w-[140px]">{commentator.bio}</p>
      </div>
    </Link>
  );
};

export default CommentatorAvatar;
