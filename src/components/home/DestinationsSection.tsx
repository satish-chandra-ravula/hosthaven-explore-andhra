import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    id: "tirupati",
    name: "Tirupati",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=600",
    properties: 45,
  },
  {
    id: "vijayawada",
    name: "Vijayawada",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600",
    properties: 38,
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    properties: 52,
  },
  {
    id: "araku",
    name: "Araku Valley",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    properties: 24,
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            Top Destinations
          </h2>
          <p className="text-muted-foreground mt-1">
            Explore the best of Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              to={`/hotels?destination=${dest.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-square"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-heritage-brown/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif font-semibold text-lg text-cream-light">
                  {dest.name}
                </h3>
                <p className="text-cream-light/80 text-sm">
                  {dest.properties} properties
                </p>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary rounded-full p-2">
                <ArrowRight className="w-4 h-4 text-primary-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
