import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-gradient-to-b from-muted/30 to-muted/80 text-foreground overflow-hidden">
      {/* Decorative top accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group">
              <img 
                src="/images/farec-logo.png" 
                alt="FAREC Logo" 
                className="h-12 w-auto transition-transform group-hover:scale-105" 
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              FAREC operates at the intersection of Ayurvedic heritage and modern biotechnology, transforming indigenous herbal knowledge into globally validated wellness solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              <span>Dedicated Research Arm of FADNA</span>
            </div>
          </div>

          {/* Research Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Research & Innovation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/research" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Contract Research (CRO)</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/research#publications" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Scientific Publications</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/research#formulations" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Nutraceutical Formulations</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/research#validation" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  <span>Clinical Validation</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Institute Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Institute & Academy</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About FAREC</Link>
              </li>
              <li>
                <Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">Workshops & Training</Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-muted-foreground hover:text-primary transition-colors">University Partnerships</Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">Scientific News & Press</Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span className="text-xs leading-relaxed">Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@farec.lk" className="text-xs hover:text-primary transition-colors">info@farec.lk</a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center text-xs font-medium px-4 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FAREC (Fadna Research Center). All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-foreground transition-colors">Scientific Integrity</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Collaborate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
