import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Bed, Users, ArrowLeft, Calendar, Wifi } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface HomeData {
  id: string;
  name: string;
  location: string;
  address: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  bedrooms: number;
  guests: number;
  amenities: string[];
}

const homesData: Record<string, HomeData> = {
  "1": {
    id: "1",
    name: "Krishna Riverside Villa",
    location: "Vijayawada",
    address: "Near Prakasam Barrage, Vijayawada 520001",
    price: 4500,
    rating: 4.7,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    ],
    description: "Experience the charm of traditional Andhra living at this beautiful riverside villa. Located near the iconic Prakasam Barrage, this home offers stunning views of the Krishna River and easy access to Kanaka Durga Temple. The villa features spacious rooms, a private garden, and authentic South Indian hospitality.",
    bedrooms: 3,
    guests: 6,
    amenities: ["River View", "Kitchen", "Garden", "WiFi", "Parking", "AC"],
  },
  "2": {
    id: "2",
    name: "City Center Apartment",
    location: "Vijayawada",
    address: "MG Road, Vijayawada 520010",
    price: 3200,
    rating: 4.5,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    ],
    description: "Modern apartment in the heart of Vijayawada, perfect for business travelers and families. Walking distance to shopping centers, restaurants, and public transport. Fully furnished with all modern amenities.",
    bedrooms: 2,
    guests: 4,
    amenities: ["AC", "Kitchen", "Parking", "WiFi", "TV", "Washing Machine"],
  },
  "3": {
    id: "3",
    name: "Heritage Cottage",
    location: "Nandyala",
    address: "Temple Road, Nandyala 518501",
    price: 2800,
    rating: 4.4,
    reviews: 56,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
    description: "Charming heritage cottage near the famous Mahanandi Temple. Experience traditional Andhra architecture with modern comforts. The cottage features a beautiful garden and is perfect for spiritual retreats.",
    bedrooms: 2,
    guests: 4,
    amenities: ["Garden", "Kitchen", "Parking", "Temple Proximity"],
  },
  "4": {
    id: "4",
    name: "Traditional Home Stay",
    location: "Nandyala",
    address: "Srisailam Road, Nandyala 518502",
    price: 2200,
    rating: 4.3,
    reviews: 45,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    ],
    description: "Authentic traditional home stay offering a glimpse into local Andhra culture. Includes home-cooked meals and guided tours to nearby temples including Srisailam and Ahobilam.",
    bedrooms: 3,
    guests: 6,
    amenities: ["Courtyard", "Kitchen", "Local Guide", "Home Meals"],
  },
  "5": {
    id: "5",
    name: "Seaside Home",
    location: "Vetapalem",
    address: "Beach Road, Vetapalem 523187",
    price: 3500,
    rating: 4.6,
    reviews: 78,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    ],
    description: "Beautiful seaside home just steps away from the pristine Vetapalem beach. Wake up to the sound of waves and enjoy stunning sunrises. Perfect for beach lovers and families looking for a peaceful coastal getaway.",
    bedrooms: 3,
    guests: 6,
    amenities: ["Beach Access", "Kitchen", "Balcony", "WiFi", "Sea View"],
  },
  "6": {
    id: "6",
    name: "Beach Cottage",
    location: "Vetapalem",
    address: "Vodarevu Road, Vetapalem 523188",
    price: 2900,
    rating: 4.5,
    reviews: 62,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    description: "Cozy beach cottage near Vodarevu beach, one of the cleanest beaches in Andhra Pradesh. Enjoy fresh seafood, local fishing culture, and tranquil beach walks.",
    bedrooms: 2,
    guests: 4,
    amenities: ["Sea View", "Kitchen", "Parking", "Beach Nearby"],
  },
};

const defaultHome = homesData["1"];

const HomeDetails = () => {
  const { id } = useParams();
  const home = homesData[id || "1"] || defaultHome;

  return (
    <Layout>
      <div className="py-6">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/homes" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Homes
          </Link>

          {/* Images - Vertical on mobile, Grid on desktop */}
          <div className="mb-8">
            {/* Mobile: Horizontal scroll gallery */}
            <div className="md:hidden">
              <div className="flex gap-3 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory scrollbar-hide">
                {home.images.map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-[85%] snap-center rounded-xl overflow-hidden aspect-video">
                    <img
                      src={img}
                      alt={`${home.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-1.5 mt-3">
                {home.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full bg-muted-foreground/30`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/10]">
                <img
                  src={home.images[0]}
                  alt={home.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                {home.images.slice(1, 3).map((img, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt={`${home.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{home.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({home.reviews} reviews)</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-serif font-bold text-foreground">
                  {home.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {home.address}
                </div>
              </div>

              {/* Property Details */}
              <div className="flex items-center gap-6 p-4 bg-card rounded-xl shadow-card">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-primary" />
                  <span className="font-medium">{home.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">Up to {home.guests} Guests</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-3">About this Home</h2>
                <p className="text-muted-foreground leading-relaxed">{home.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {home.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
                      <Wifi className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm">Per night</p>
                  <p className="text-3xl font-serif font-bold text-foreground">
                    ₹{home.price.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">Check In</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <input type="date" className="w-full h-10 pl-9 pr-2 bg-muted border-0 rounded-lg text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">Check Out</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <input type="date" className="w-full h-10 pl-9 pr-2 bg-muted border-0 rounded-lg text-sm" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                      <select className="w-full h-10 pl-9 pr-4 bg-muted border-0 rounded-lg text-sm appearance-none cursor-pointer">
                        {Array.from({ length: home.guests }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full" size="xl">
                    Book Now
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Free cancellation up to 24 hours before check-in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeDetails;