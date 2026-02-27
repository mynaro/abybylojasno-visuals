import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Knihovna</Link>
          <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kategorie</Link>
          <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Komentátoři</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
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
          <Link to="/" className="block text-sm text-foreground" onClick={() => setMobileOpen(false)}>Knihovna</Link>
          <Link to="#" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Kategorie</Link>
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
