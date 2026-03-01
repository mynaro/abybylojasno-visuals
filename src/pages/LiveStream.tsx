import { Link } from "react-router-dom";
import { Radio, Clock, Users, Bell, Play, Calendar, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import { liveStreams, videos } from "@/lib/mockData";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex gap-3">
      {[
        { value: timeLeft.hours, label: "hod" },
        { value: timeLeft.minutes, label: "min" },
        { value: timeLeft.seconds, label: "sek" },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="font-mono text-3xl md:text-5xl font-bold text-foreground bg-card border border-border rounded-lg px-3 py-2 md:px-5 md:py-3 tabular-nums">
            {pad(item.value)}
          </span>
          <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const LiveStream = () => {
  const liveNow = liveStreams.find((s) => s.isLive);
  const upcoming = liveStreams.filter((s) => !s.isLive).sort(
    (a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime()
  );
  const recentStreams = videos.filter((v) => v.categoryId === "jasne-zpravy" || v.categoryId === "sedmicka-plus").slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        {/* Live now hero */}
        {liveNow && (
          <section className="relative">
            <div className="gutter-padding py-8 md:py-16">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Player area */}
                <div className="flex-1">
                  <div className="relative aspect-video bg-card rounded-lg overflow-hidden border border-primary/30">
                    <div className="w-full h-full placeholder-gradient" />
                    {/* Live indicator */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary px-3 py-1.5 rounded-md">
                      <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                      <span className="text-xs font-mono font-bold text-primary-foreground uppercase tracking-wider">ŽIVĚ</span>
                    </div>
                    {/* Viewer count */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-md">
                      <Users className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs font-mono text-foreground">{liveNow.viewerCount?.toLocaleString()}</span>
                    </div>
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer group">
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors shadow-lg shadow-primary/30">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live info */}
                <div className="lg:w-96 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Radio className="w-5 h-5 text-primary animate-pulse" />
                    <span className="text-primary font-sora font-bold text-sm uppercase tracking-wider">Právě vysíláme</span>
                  </div>
                  <h1 className="hero-title text-foreground !text-2xl md:!text-3xl mb-4">{liveNow.title}</h1>
                  <p className="text-muted-foreground mb-4">{liveNow.description}</p>
                  <div className="flex items-center gap-3 mb-6">
                    <Link to={`/komentator/${liveNow.commentatorId}`} className="flex items-center gap-2 group">
                      <div className="w-10 h-10 rounded-full placeholder-gradient border-2 border-primary" />
                      <span className="font-sora font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {liveNow.commentator}
                      </span>
                    </Link>
                  </div>
                  {/* Chat placeholder */}
                  <div className="bg-card border border-border rounded-lg p-4 flex-1 min-h-[200px] max-h-[300px] flex flex-col">
                    <h3 className="font-sora font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">Živý chat</h3>
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-sm text-muted-foreground text-center">Chat bude k dispozici po přihlášení</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <input
                        type="text"
                        placeholder="Napište zprávu..."
                        className="flex-1 bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
                        disabled
                      />
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold" disabled>
                        Odeslat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Upcoming streams */}
        <section className="gutter-padding py-12">
          <h2 className="section-title text-foreground mb-8">
            {liveNow ? "Nadcházející vysílání" : "Živé vysílání"}
          </h2>

          {!liveNow && upcoming.length > 0 && (
            <div className="mb-12">
              {/* Next stream hero */}
              <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Radio className="w-5 h-5 text-primary" />
                    <span className="text-primary font-sora font-bold text-sm uppercase tracking-wider">Příští živé vysílání</span>
                  </div>
                  <h3 className="hero-title text-foreground !text-xl md:!text-2xl mb-4">{upcoming[0].title}</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto mb-8">{upcoming[0].description}</p>
                  <Countdown targetDate={upcoming[0].scheduledAt} />
                  <div className="mt-8 flex items-center justify-center gap-4">
                    <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sora font-bold px-6 py-3 rounded-lg cta-hover">
                      <Bell className="w-4 h-4" /> Připomenout
                    </button>
                    <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(upcoming[0].scheduledAt).toLocaleString("cs-CZ", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Schedule */}
          <div className="space-y-4">
            {(liveNow ? upcoming : upcoming.slice(1)).map((stream) => (
              <div
                key={stream.id}
                className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-foreground">
                      {new Date(stream.scheduledAt).toLocaleDateString("cs-CZ", { weekday: "short", day: "numeric", month: "short" })}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {new Date(stream.scheduledAt).toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-sora font-semibold text-foreground">{stream.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{stream.description}</p>
                </div>
                <Link
                  to={`/komentator/${stream.commentatorId}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {stream.commentator}
                </Link>
                <button className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-surface-hover transition-colors">
                  <Bell className="w-3.5 h-3.5" /> Připomenout
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Recent streams / replays */}
        <section className="gutter-padding py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title text-foreground">Záznamy z vysílání</h2>
            <Link to="/knihovna" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
              Zobrazit vše <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentStreams.map((video) => (
              <Link key={video.id} to={`/video/${video.id}`} className="group block">
                <div className="card-hover rounded-md overflow-hidden">
                  <div className="relative aspect-video placeholder-gradient rounded-md overflow-hidden">
                    <div className="play-overlay absolute inset-0 flex items-center justify-center bg-background/40">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-sm px-1.5 py-0.5">
                      <span className="text-xs font-dm text-foreground">{video.duration}</span>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="font-sora font-semibold text-sm text-foreground line-clamp-2">{video.title}</h3>
                    <p className="text-xs text-muted-foreground">{video.commentator}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LiveStream;
