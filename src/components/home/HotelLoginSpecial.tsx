import { Link } from "react-router-dom";
import { Star, Gift, Crown, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: 1,
    title: "First Booking Discount",
    discount: "20% OFF",
    description: "Sign up and get 20% off on your first hotel booking",
    icon: Gift,
    color: "from-primary to-saffron",
  },
  {
    id: 2,
    title: "Member Exclusive Rates",
    discount: "Up to 30% OFF",
    description: "Unlock exclusive member-only rates on premium hotels",
    icon: Crown,
    color: "from-saffron to-temple-orange",
  },
  {
    id: 3,
    title: "Weekend Special",
    discount: "15% OFF",
    description: "Book for weekends and save extra on selected properties",
    icon: Percent,
    color: "from-temple-orange to-primary",
  },
];

const HotelLoginSpecial = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Member Benefits
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Hotel Login <span className="text-gradient-gold">Special</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sign up or login to unlock exclusive discounts and member-only benefits
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${offer.color}`} />
                
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${offer.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                      {offer.discount}
                    </span>
                  </div>
                  
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {offer.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card rounded-2xl shadow-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              Ready to unlock these offers?
            </h3>
            <p className="text-muted-foreground mb-6">
              Create a free account and start saving on your heritage journey
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button variant="hero" size="lg">
                  Sign Up Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="goldOutline" size="lg">
                  Already a Member? Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelLoginSpecial;
