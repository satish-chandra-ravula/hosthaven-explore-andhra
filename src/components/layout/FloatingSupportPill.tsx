import { Clock, Headphones, Phone } from "lucide-react";

const FloatingSupportPill = () => {
  return (
    <div className="fixed top-24 right-4 z-40 animate-float">
      <a 
        href="tel:+919876543210"
        className="block bg-gradient-to-r from-primary to-saffron rounded-2xl px-5 py-4 shadow-gold animate-pulse-glow hover:scale-105 transition-transform cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-primary">
              <Clock className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="text-primary-foreground">
            <p className="font-bold text-base">24/7 Available</p>
            <p className="text-sm opacity-90">Support Anytime</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FloatingSupportPill;
