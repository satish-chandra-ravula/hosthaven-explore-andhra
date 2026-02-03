import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const temples = [
  {
    id: "tirumala",
    name: "Tirumala Venkateswara Temple",
    location: "Tirupati",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600",
  },
  {
    id: "kanaka-durga",
    name: "Kanaka Durga Temple",
    location: "Vijayawada",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
  },
  {
    id: "simhachalam",
    name: "Simhachalam Temple",
    location: "Visakhapatnam",
    image: "https://images.unsplash.com/photo-1545126221-15d5f92c9e2c?w=600",
  },
];

const TemplesPreview = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Divine Temples
            </h2>
            <p className="text-muted-foreground mt-1">
              Experience spiritual journeys across ancient temples
            </p>
          </div>
          <Link to="/temples">
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Explore All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {temples.map((temple) => (
            <Link
              key={temple.id}
              to={`/temples/${temple.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-all"
            >
              <img
                src={temple.image}
                alt={temple.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/90 via-heritage-brown/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif font-semibold text-lg text-cream-light group-hover:text-gold-light transition-colors">
                  {temple.name}
                </h3>
                <div className="flex items-center gap-1 text-cream-light/80 text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  {temple.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplesPreview;
