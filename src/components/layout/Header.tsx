import { Link } from "react-router-dom";
import { Leaf, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img src="/images/farec-logo.png" alt="FAREC Logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/about" className="transition-colors hover:text-primary">About Us</Link>
          <Link to="/research" className="transition-colors hover:text-primary">Research</Link>
          <Link to="/education" className="transition-colors hover:text-primary">Education</Link>
          <Link to="/partnerships" className="transition-colors hover:text-primary">Partnerships</Link>
          <Link to="/news" className="transition-colors hover:text-primary">News</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contact
          </Link>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
