import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface Temple {
  id: string;
  name: string;
  location: string;
  region: string;
  image: string;
  description: string;
}

const temples: Temple[] = [
  {
    id: "tirumala",
    name: "Tirumala Venkateswara Temple",
    location: "Tirupati",
    region: "Rayalaseema",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
    description: "One of the most visited pilgrimage destinations in the world, dedicated to Lord Venkateswara.",
  },
  {
    id: "kanaka-durga",
    name: "Kanaka Durga Temple",
    location: "Vijayawada",
    region: "Coastal Andhra",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    description: "Ancient temple dedicated to Goddess Durga, situated atop Indrakeeladri hill.",
  },
  {
    id: "simhachalam",
    name: "Simhachalam Temple",
    location: "Visakhapatnam",
    region: "Coastal Andhra",
    image: "https://images.unsplash.com/photo-1545126221-15d5f92c9e2c?w=800",
    description: "A stunning temple dedicated to Lord Narasimha, known for its unique architecture.",
  },
  {
    id: "srikalahasti",
    name: "Srikalahasti Temple",
    location: "Srikalahasti",
    region: "Rayalaseema",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=800",
    description: "One of the Pancha Bhoota Sthalas representing the element of air (Vayu).",
  },
  {
    id: "annavaram",
    name: "Annavaram Temple",
    location: "East Godavari",
    region: "Coastal Andhra",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    description: "Temple dedicated to Lord Satyanarayana Swamy, known for its scenic hilltop location.",
  },
  {
    id: "ahobilam",
    name: "Ahobilam Temple",
    location: "Kurnool",
    region: "Rayalaseema",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800",
    description: "A cluster of nine Narasimha temples in the forested Nallamala Hills.",
  },
  {
    id: "lepakshi",
    name: "Lepakshi Temple",
    location: "Anantapur",
    region: "Rayalaseema",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    description: "Famous for its hanging pillar and exquisite Vijayanagara-style sculptures.",
  },
  {
    id: "undavalli",
    name: "Undavalli Caves",
    location: "Guntur",
    region: "Coastal Andhra",
    image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=800",
    description: "Ancient rock-cut cave temples dating back to the 4th-5th century CE.",
  },
  {
    id: "bhadrachalam",
    name: "Bhadrachalam Temple",
    location: "Bhadrachalam",
    region: "North Andhra",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800",
    description: "Temple dedicated to Lord Rama on the banks of the Godavari River.",
  },
];

const regions = ["All Regions", "Rayalaseema", "Coastal Andhra", "North Andhra"];

const Temples = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const filteredTemples = selectedRegion === "All Regions"
    ? temples
    : temples.filter((t) => t.region === selectedRegion);

  return (
    <Layout>
      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Divine Temples of Andhra Pradesh
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Explore sacred temples across three distinct regions, each with its own 
              unique spiritual significance and architectural beauty
            </p>
          </div>

          {/* Region Filter */}
          <div className="flex justify-center gap-2 flex-wrap mb-10">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedRegion === region
                    ? "gradient-gold text-primary-foreground shadow-gold"
                    : "bg-card text-muted-foreground hover:bg-muted shadow-card"
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Temples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemples.map((temple) => (
              <Link
                key={temple.id}
                to={`/temples/${temple.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-2">
                      {temple.region}
                    </span>
                    <h3 className="font-serif font-semibold text-xl text-cream-light">
                      {temple.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    {temple.location}
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {temple.description}
                  </p>
                  <Button variant="goldOutline" className="w-full group-hover:variant-gold">
                    Learn More
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

export default Temples;