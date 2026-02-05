import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Hotel, Home, Landmark, Wrench, LogIn, UserPlus, House, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Hotels", path: "/hotels", icon: Hotel },
  { name: "Homes", path: "/homes", icon: House },
  { name: "Temples", path: "/temples", icon: Landmark },
  { name: "Services", path: "/services", icon: Wrench },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo - Desktop Only (centered on mobile is in Hero) */}
            <Link to="/" className="hidden md:flex items-center gap-2">
              <img src={logo} alt="HostHaven" className="h-12 md:h-14 w-auto" />
            </Link>

            {/* Mobile Center - Spacer */}
            <div className="md:hidden flex-1" />

            {/* Mobile Right - Globe Icon Only */}
            <button className="md:hidden p-2 rounded-full bg-primary/10">
                <Globe className="w-5 h-5 text-primary" />
            </button>

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
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="gold" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background animate-fade-in">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-card">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="HostHaven" className="h-10 w-auto" />
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* User Actions - Top Section */}
          <div className="p-4 bg-gradient-to-r from-heritage-brown to-heritage-brown/90">
            <div className="flex gap-3">
              <Link 
                to="/login" 
                className="flex-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl py-3 px-4 border border-white/20">
                  <LogIn className="w-5 h-5 text-cream-light" />
                  <span className="font-medium text-cream-light">Login</span>
                </div>
              </Link>
              <Link 
                to="/signup" 
                className="flex-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark rounded-xl py-3 px-4">
                  <UserPlus className="w-5 h-5 text-heritage-brown" />
                  <span className="font-medium text-heritage-brown">Sign Up</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="p-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
              Browse Categories
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-1 transition-all ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-medium ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links List */}
          <div className="px-4 mt-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
              Quick Access
            </h3>
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {[
                { name: "Vijayawada Hotels", path: "/hotels?city=vijayawada" },
                { name: "Nandyala Stays", path: "/hotels?city=nandyala" },
                { name: "Temple Tours", path: "/temples" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 hover:bg-muted transition-colors ${
                    index !== 3 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                  <span className="text-muted-foreground">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Vendor Section */}
          <div className="px-4 mt-4">
            <div className="bg-gradient-to-r from-gold/10 to-primary/10 rounded-xl p-4 border border-gold/20">
              <h3 className="font-semibold text-foreground mb-1">Are you a property owner?</h3>
              <p className="text-xs text-muted-foreground mb-3">List your property and start earning</p>
              <Link 
                to="/vendor/signup" 
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Become a Partner →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
