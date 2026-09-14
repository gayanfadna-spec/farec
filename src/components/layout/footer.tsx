import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src="/images/farec-logo.png" alt="FAREC Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Bridging Ancient Ayurvedic Wisdom with Modern Clinical Precision.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Research</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/research" className="hover:text-primary">Projects</Link></li>
              <li><Link to="/research#publications" className="hover:text-primary">Publications</Link></li>
              <li><Link to="/research#clinical-trials" className="hover:text-primary">Clinical Trials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Institute</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/education" className="hover:text-primary">Education</Link></li>
              <li><Link to="/partnerships" className="hover:text-primary">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/news" className="hover:text-primary">News & Insights</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fadna Ayurveda Research & Education Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
