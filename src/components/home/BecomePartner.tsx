import { Link } from "react-router-dom";
import { Building2, TrendingUp, Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Building2,
    title: "List Your Property",
    description: "Showcase your hotel or home to thousands of travelers",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Increase bookings with our marketing support",
  },
  {
    icon: Users,
    title: "Reach More Guests",
    description: "Connect with pilgrims and tourists across India",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Get guaranteed payouts with our secure system",
  },
];

const BecomePartner = () => {
  return (
    <section className="py-16 bg-heritage-brown">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/20 text-gold-light rounded-full text-sm font-medium mb-4">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream-light mb-4">
              Are You a Hotel Manager?{" "}
              <span className="text-gold-light">Become a Partner</span>
            </h2>
            <p className="text-cream-light/80 mb-8 text-lg">
              Join HostHaven as a vendor and list your hotels, resorts, or rental homes. 
              Reach thousands of travelers exploring Andhra Pradesh's heritage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream-light text-sm">
                        {benefit.title}
                      </h4>
                      <p className="text-cream-light/60 text-xs">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/vendor/signup">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  Register as Vendor
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/vendor/login">
                <Button variant="goldOutline" size="lg" className="w-full sm:w-auto border-gold-light text-gold-light hover:bg-gold-light/10">
                  Vendor Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 border border-gold-light/20">
            <h3 className="text-xl font-serif font-semibold text-cream-light mb-6 text-center">
              Why Partner With HostHaven?
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10,000+", label: "Monthly Visitors" },
                { value: "500+", label: "Partner Properties" },
                { value: "95%", label: "Booking Success" },
                { value: "24/7", label: "Partner Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-heritage-brown/50 rounded-xl">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-gold-light">
                    {stat.value}
                  </p>
                  <p className="text-sm text-cream-light/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/20 rounded-xl text-center">
              <p className="text-cream-light text-sm">
                🎉 <strong>Special Offer:</strong> Zero commission for first 3 months!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
