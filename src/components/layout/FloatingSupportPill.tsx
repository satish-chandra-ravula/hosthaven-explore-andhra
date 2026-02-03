import { Headphones } from "lucide-react";

const FloatingSupportPill = () => {
  return (
    <div className="fixed top-24 right-4 z-40">
      <a 
        href="tel:+919876543210"
        className="flex items-center gap-2 bg-card border border-primary/30 rounded-full px-4 py-2 shadow-card hover:shadow-gold hover:border-primary transition-all cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Headphones className="w-4 h-4 text-primary" />
        </div>
        <div className="text-xs">
          <p className="font-semibold text-foreground">24/7</p>
          <p className="text-muted-foreground">Support</p>
        </div>
      </a>
    </div>
  );
};

export default FloatingSupportPill;
