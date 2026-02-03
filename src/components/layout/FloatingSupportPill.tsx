import { Headphones } from "lucide-react";

const FloatingSupportPill = () => {
  return (
    <div className="fixed top-24 right-4 z-40">
      <a 
        href="tel:+919876543210"
        className="flex items-center gap-2 rounded-full px-4 py-2.5 animate-color-blink cursor-pointer group transition-transform hover:scale-105"
      >
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <Headphones className="w-5 h-5 text-white" />
        </div>
        <div className="text-white">
          <p className="font-bold text-sm">24/7</p>
          <p className="text-xs opacity-90">Support</p>
        </div>
      </a>
    </div>
  );
};

export default FloatingSupportPill;
