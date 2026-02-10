import { Link } from "react-router-dom";
import { Clock, Settings2 } from "lucide-react";

const FeatureCards = () => {
  return (
    <section className="py-6 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {/* 24 Hour Check-In */}
          <div className="bg-card rounded-xl p-4 shadow-card border-2 border-primary/20 flex flex-col items-center text-center hover:shadow-card-hover hover:border-primary/40 transition-all">
            <div className="w-12 h-12 rounded-full bg-saffron/20 flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-saffron" />
            </div>
            <h3 className="font-semibold text-sm text-foreground mb-1">24 Hour Check-In</h3>
            <p className="text-xs text-muted-foreground leading-snug">
              59 sec resolve · refund
            </p>
          </div>

          {/* Customizable Rooms */}
          <Link 
            to="/contact"
            className="bg-card rounded-xl p-4 shadow-card border-2 border-primary/20 flex flex-col items-center text-center hover:shadow-card-hover hover:border-primary/40 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
              <Settings2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-sm text-foreground mb-1">Customizable Rooms</h3>
            <p className="text-xs text-muted-foreground leading-snug">
              Tailor your stay to your needs
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
