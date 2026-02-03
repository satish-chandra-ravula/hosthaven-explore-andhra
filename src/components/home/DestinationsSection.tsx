import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import vijayawadaImg from "@/assets/destinations/vijayawada.jpg";
import nandyalaImg from "@/assets/destinations/nandyala.jpg";
import vetapalemImg from "@/assets/destinations/vetapalem.jpg";

const destinations = [
  {
    id: "vijayawada",
    name: "Vijayawada",
    image: vijayawadaImg,
    properties: 25,
    description: "Temple city on Krishna River",
  },
  {
    id: "nandyala",
    name: "Nandyala",
    image: nandyalaImg,
    properties: 18,
    description: "Gateway to Nallamala Hills",
  },
  {
    id: "vetapalem",
    name: "Vetapalem",
    image: vetapalemImg,
    properties: 12,
    description: "Serene coastal getaway",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              to={`/hotels?destination=${dest.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-card hover:shadow-card-hover transition-all"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/90 via-heritage-brown/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif font-bold text-2xl text-cream-light mb-1">
                  {dest.name}
                </h3>
                <p className="text-cream-light/80 text-sm mb-2">
                  {dest.description}
                </p>
                <p className="text-gold-light text-sm font-medium">
                  {dest.properties} properties
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary rounded-full p-3 shadow-gold">
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
