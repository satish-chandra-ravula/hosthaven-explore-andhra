import { Clock, Headphones } from "lucide-react";

const FloatingSupportPill = () => {
  return (
    <div className="fixed top-24 right-4 z-40 animate-float">
      <div className="bg-card border-2 border-primary rounded-full px-4 py-3 shadow-gold animate-pulse-glow">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Headphones className="w-5 h-5 text-primary" />
            <Clock className="w-3 h-3 text-primary absolute -bottom-1 -right-1 bg-card rounded-full" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-foreground">24/7 Available</p>
            <p className="text-muted-foreground">Support Anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingSupportPill;
