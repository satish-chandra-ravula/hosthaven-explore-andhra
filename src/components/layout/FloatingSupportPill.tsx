import { Headphones } from "lucide-react";

const FloatingSupportPill = () => {
  return (
    <div className="fixed top-24 right-4 z-40">
      <a 
        href="tel:+919876543210"
        className="flex items-center gap-3 rounded-full pl-1.5 pr-5 py-1.5 bg-gradient-to-r from-heritage-brown via-heritage-brown/95 to-heritage-brown/90 shadow-lg shadow-heritage-brown/30 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-heritage-brown/40 border border-gold/30"
      >
        {/* Icon with elegant glow */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-inner">
          <Headphones className="w-5 h-5 text-heritage-brown" />
        </div>
        
        {/* Text content */}
        <div className="text-cream-light">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-bold text-sm text-gold-light tracking-wide animate-subtle-pulse">24/7</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-sm shadow-green-400/50"></span>
          </div>
          <p className="text-xs text-cream-light/80 font-medium">Premium Support</p>
        </div>
      </a>
    </div>
  );
};

export default FloatingSupportPill;
