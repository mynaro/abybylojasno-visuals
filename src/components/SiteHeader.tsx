import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Radio } from "lucide-react";
import { useState } from "react";
import { liveStreams } from "@/lib/mockData";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const liveNow = liveStreams.some((s) => s.isLive);

  const isActive = (path: string) => location.pathname === path;

  const navLink = (to: string, label: string, hasLive = false) => (
    <Link
      to={to}
      className={`text-sm transition-colors flex items-center gap-1.5 ${
        isActive(to) ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {hasLive && liveNow && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="gutter-padding flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-sora font-bold text-sm">A</span>
          </div>
          <span className="font-sora font-bold text-foreground text-lg hidden sm:block">
            AbyByloJasno
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLink("/", "Domů")}
          {navLink("/knihovna", "Knihovna")}
          {navLink("/zive", "Živě", true)}
          {navLink("#", "Komentátoři")}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/knihovna" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <Link
            to="#"
            className="hidden sm:inline-block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md text-sm cta-hover"
          >
            Předplatné
          </Link>
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border gutter-padding py-4 space-y-3">
          <Link to="/" className="block text-sm text-foreground" onClick={() => setMobileOpen(false)}>Domů</Link>
          <Link to="/knihovna" className="block text-sm text-foreground" onClick={() => setMobileOpen(false)}>Knihovna</Link>
          <Link to="/zive" className="flex items-center gap-2 text-sm text-foreground" onClick={() => setMobileOpen(false)}>
            {liveNow && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
            Živě
          </Link>
          <Link to="#" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Komentátoři</Link>
          <Link to="#" className="block bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md text-sm text-center cta-hover" onClick={() => setMobileOpen(false)}>
            Předplatné
          </Link>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
