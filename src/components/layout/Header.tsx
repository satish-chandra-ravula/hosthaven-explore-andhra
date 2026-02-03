import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Hotels", path: "/hotels" },
  { name: "Homes", path: "/homes" },
  { name: "Temples", path: "/temples" },
  { name: "Services", path: "/services" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-card">
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="HostHaven" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-1" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="gold" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Auth (visible on mobile only) */}
          <div className="flex md:hidden items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="px-3">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="gold" size="sm" className="px-3">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation - Always visible below header */}
        <nav className="md:hidden flex flex-wrap justify-center gap-1 pb-3 -mt-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
