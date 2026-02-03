import { Link } from "react-router-dom";
import { Car, Bike, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "car-rental",
    name: "Car Rental",
    description: "Explore Andhra Pradesh with our reliable car rental service",
    icon: Car,
  },
  {
    id: "bike-rental",
    name: "Bike Rental",
    description: "Two-wheelers for quick and easy local travel",
    icon: Bike,
  },
  {
    id: "car-services",
    name: "Car Services",
    description: "Professional car maintenance and repair services",
    icon: Wrench,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Travel Services
          </h2>
          <p className="text-muted-foreground mt-1">
            Everything you need for a seamless journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-4 group-hover:shadow-gold transition-shadow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link to="/services">
            <Button variant="gold">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
