import { useState } from "react";
import { Car, Bike, Wrench, Phone, X, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: typeof Car;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: "car-rental",
    name: "Car Rental",
    description: "Explore Andhra Pradesh in comfort with our reliable car rental service. Choose from a wide range of vehicles for your journey.",
    icon: Car,
    features: ["Sedan & SUV options", "Self-drive available", "24/7 roadside assistance", "GPS navigation included"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
  },
  {
    id: "bike-rental",
    name: "Bike Rental",
    description: "Two-wheelers for quick and easy local travel. Perfect for exploring cities and temple towns at your own pace.",
    icon: Bike,
    features: ["Scooters & motorcycles", "Helmets provided", "Fuel efficient options", "Hourly & daily rates"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    id: "car-services",
    name: "Car Services",
    description: "Professional car maintenance and repair services to keep your vehicle in top condition during your travels.",
    icon: Wrench,
    features: ["Emergency repairs", "Regular maintenance", "Towing services", "Doorstep service"],
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800",
  },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <Layout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Travel Services
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Everything you need for a seamless and comfortable journey across Andhra Pradesh
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-heritage-brown/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-serif font-semibold text-xl text-cream-light">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="gold"
                      className="w-full"
                      onClick={() => handleServiceClick(service)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-card rounded-2xl shadow-card p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Need Custom Travel Arrangements?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our team can help you plan custom tours, group transportation, 
              and special travel requirements across Andhra Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919876543210">
                <Button variant="gold" size="lg">
                  <Phone className="w-5 h-5" />
                  Call Us: +91 98765 43210
                </Button>
              </a>
              <a href="mailto:services@hosthaven.in">
                <Button variant="goldOutline" size="lg">
                  <Mail className="w-5 h-5" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Not Available Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">
              Service Coming Soon
            </DialogTitle>
            <DialogDescription className="pt-4">
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {selectedService && <selectedService.icon className="w-8 h-8 text-primary" />}
                </div>
                <p className="text-muted-foreground mb-6">
                  <strong>{selectedService?.name}</strong> service is currently not available in your area. 
                  We're working hard to bring this service to you soon!
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    For immediate assistance, please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a href="tel:+919876543210">
                      <Button variant="gold" className="w-full sm:w-auto">
                        <Phone className="w-4 h-4" />
                        Call Us
                      </Button>
                    </a>
                    <a href="mailto:services@hosthaven.in">
                      <Button variant="outline" className="w-full sm:w-auto">
                        <Mail className="w-4 h-4" />
                        Email Us
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Services;