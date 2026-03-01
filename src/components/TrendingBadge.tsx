import { TrendingUp, Eye } from "lucide-react";

interface TrendingBadgeProps {
  rank: number;
  views: number;
}

const TrendingBadge = ({ rank, views }: TrendingBadgeProps) => {
  const formatViews = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return String(n);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-3xl font-bold text-foreground/10">{rank}</span>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Eye className="w-3 h-3" />
        <span className="font-mono">{formatViews(views)}</span>
      </div>
    </div>
  );
};

export default TrendingBadge;
