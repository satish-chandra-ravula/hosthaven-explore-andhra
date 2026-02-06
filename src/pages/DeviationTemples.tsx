import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface DeviationTemple {
  id: string;
  name: string;
  location: string;
  tagline: string;
  image: string;
}

const deviationTemples: DeviationTemple[] = [
  {
    id: "yaganti",
    name: "Yaganti Temple",
    location: "Kurnool District",
    tagline: "The Growing Nandi Wonder",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
  },
  {
    id: "mahanandi",
    name: "Mahanandi Temple",
    location: "Nandyala",
    tagline: "Sacred Springs of Shiva",
    image: "https://images.unsplash.com/photo-1545126221-15d5f92c9e2c?w=800",
  },
  {
    id: "ahobilam",
    name: "Ahobilam Temple",
    location: "Nandyala",
    tagline: "Nine Forms of Narasimha",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800",
  },
  {
    id: "srisailam",
    name: "Srisailam Temple",
    location: "Nallamala Hills",
    tagline: "Jyotirlinga in the Forests",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
  },
  {
    id: "kanaka-durga",
    name: "Kanaka Durga Temple",
    location: "Vijayawada",
    tagline: "Goddess on Indrakeeladri",
    image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=800",
  },
  {
    id: "undavalli",
    name: "Undavalli Caves",
    location: "Vijayawada",
    tagline: "Ancient Rock-Cut Marvels",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800",
  },
];

const DeviationTemples = () => {
  return (
    <Layout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-serif font-bold text-foreground">
              Weekend Deviation Temples
            </h1>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
              Explore sacred heritage sites perfect for a weekend spiritual getaway across Andhra Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deviationTemples.map((temple) => (
              <Link
                key={temple.id}
                to={`/temples/${temple.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-gold-light text-xs font-medium mb-1">{temple.tagline}</p>
                    <h3 className="font-serif font-semibold text-lg text-cream-light">
                      {temple.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    {temple.location}
                  </div>
                  <Button variant="goldOutline" size="sm" className="w-full">
                    View Details
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeviationTemples;
