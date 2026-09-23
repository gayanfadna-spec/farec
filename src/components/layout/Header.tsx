import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Education", path: "/education" },
  { name: "Partnerships", path: "/partnerships" },
  { name: "News", path: "/news" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/images/farec-logo.png" 
            alt="FAREC Logo" 
            className="h-11 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-1 transition-all duration-200 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-secondary transition-all" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <span>Collaborate</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </Link>

          <button 
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted/60 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-border/60 bg-background/95 backdrop-blur-xl px-6 py-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200 flex flex-col">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/80 hover:bg-muted/50 hover:text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.name}</span>
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-border/40">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-1.5 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow transition-all hover:bg-primary/90"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Contact Us</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
