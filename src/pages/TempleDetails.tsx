import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface DarshanType {
  name: string;
  duration: string;
  price: string;
  description: string;
}

interface TempleData {
  id: string;
  name: string;
  location: string;
  region: string;
  images: string[];
  history: string;
  timings: {
    morning: string;
    evening: string;
    special: string;
  };
  darshanTypes: DarshanType[];
  nearbyHotels: string[];
}

const templeData: Record<string, TempleData> = {
  tirumala: {
    id: "tirumala",
    name: "Tirumala Venkateswara Temple",
    location: "Tirupati, Chittoor District",
    region: "Rayalaseema",
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
      "https://images.unsplash.com/photo-1545126221-15d5f92c9e2c?w=800",
    ],
    history: `The Tirumala Venkateswara Temple is one of the most visited religious sites in the world. Located on the seventh peak of Tirumala Hills, this ancient temple is dedicated to Lord Venkateswara, a form of Lord Vishnu. 

The temple's origins date back over 2,000 years, with references in ancient texts and scriptures. The current structure was built by various dynasties including the Pallavas, Cholas, and the Vijayanagara Empire. The temple is known for its unique blend of Dravidian and Chalukyan architectural styles.

According to legend, Lord Vishnu took a loan from Kubera (the god of wealth) for his marriage to Goddess Padmavati. The gold and wealth donated by millions of devotees is said to repay this divine debt. The temple is one of the richest in the world and attracts around 50,000-100,000 pilgrims daily.`,
    timings: {
      morning: "3:00 AM - 12:00 PM",
      evening: "1:00 PM - 9:00 PM",
      special: "During festivals, temple opens 24 hours",
    },
    darshanTypes: [
      {
        name: "Sarva Darshan",
        duration: "6-12 hours",
        price: "Free",
        description: "Free darshan available to all devotees with long waiting times",
      },
      {
        name: "Special Entry Darshan",
        duration: "2-4 hours",
        price: "₹300",
        description: "Faster darshan with dedicated queue",
      },
      {
        name: "Divya Darshan",
        duration: "1-2 hours",
        price: "₹500",
        description: "Priority entry with minimal waiting",
      },
      {
        name: "VIP Break Darshan",
        duration: "30-60 mins",
        price: "₹10,000+",
        description: "Premium darshan for special guests and donors",
      },
    ],
    nearbyHotels: ["Taj Gateway", "Fortune Kences", "Marasa Sarovar"],
  },
  "kanaka-durga": {
    id: "kanaka-durga",
    name: "Kanaka Durga Temple",
    location: "Vijayawada, Krishna District",
    region: "Coastal Andhra",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
      "https://images.unsplash.com/photo-1545126221-15d5f92c9e2c?w=800",
    ],
    history: `The Kanaka Durga Temple is an ancient Hindu temple dedicated to Goddess Durga, situated atop the Indrakeeladri hill on the banks of the Krishna River in Vijayawada.

According to mythology, Goddess Durga killed the demon Mahishasura at this very spot after a fierce battle. The temple has mentions in the Rig Veda and is believed to be one of the Shakti Peethas.

The temple was originally built during the rule of the Rajendra Chola dynasty and was later renovated by various rulers. The goddess here is known as Kanaka Durga because she is adorned with gold ornaments. The annual Dasara festival celebrated here attracts millions of devotees.`,
    timings: {
      morning: "5:30 AM - 12:30 PM",
      evening: "4:00 PM - 9:00 PM",
      special: "Extended hours during Navaratri",
    },
    darshanTypes: [
      {
        name: "Free Darshan",
        duration: "2-4 hours",
        price: "Free",
        description: "Regular queue darshan",
      },
      {
        name: "Special Darshan",
        duration: "1-2 hours",
        price: "₹100",
        description: "Faster darshan through special entrance",
      },
      {
        name: "Abhishekam",
        duration: "45 mins",
        price: "₹1,000",
        description: "Participate in ritual bathing of the deity",
      },
    ],
    nearbyHotels: ["Fortune Murali Park", "The Gateway Hotel", "Quality Inn DV Manor"],
  },
  "mahanandi": {
    id: "mahanandi",
    name: "Mahanandi Temple",
    location: "Nandyala, Kurnool District",
    region: "Rayalaseema",
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200",
      "https://images.unsplash.com/photo-1545126221-15d5f92c9e2c?w=800",
    ],
    history: `Mahanandi Temple is a famous Hindu temple dedicated to Lord Shiva. It is one of the nine Nandi temples in the Nallamala forest region.

The temple is known for its sacred pushkarini (temple tank) and the beautiful surroundings of the Nallamala Hills.`,
    timings: {
      morning: "5:30 AM - 12:30 PM",
      evening: "4:00 PM - 8:30 PM",
      special: "Special timings during Maha Shivaratri",
    },
    darshanTypes: [
      {
        name: "Regular Darshan",
        duration: "1-2 hours",
        price: "Free",
        description: "Standard darshan for all devotees",
      },
    ],
    nearbyHotels: ["Sri Sai Residency", "Local Lodges"],
  },
};

const defaultTemple: TempleData = {
  id: "default",
  name: "Temple",
  location: "Andhra Pradesh",
  region: "Andhra",
  images: ["https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200"],
  history: "This ancient temple holds deep spiritual significance in the region.",
  timings: {
    morning: "6:00 AM - 12:00 PM",
    evening: "4:00 PM - 8:00 PM",
    special: "Extended hours during festivals",
  },
  darshanTypes: [
    {
      name: "Regular Darshan",
      duration: "1-2 hours",
      price: "Free",
      description: "Standard darshan for all devotees",
    },
  ],
  nearbyHotels: ["Local Hotels Available"],
};

const TempleDetails = () => {
  const { id } = useParams();
  const temple = templeData[id || ""] || defaultTemple;

  return (
    <Layout>
      <div className="py-6">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/temples" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Temples
          </Link>

          {/* Images - Vertical on mobile, Hero on desktop */}
          <div className="mb-8">
            {/* Mobile: Horizontal scroll gallery */}
            <div className="md:hidden">
              <div className="flex gap-3 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory scrollbar-hide">
                {temple.images.map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-[85%] snap-center rounded-xl overflow-hidden aspect-video relative">
                    <img
                      src={img}
                      alt={`${temple.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-transparent to-transparent">
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-2">
                            {temple.region}
                          </span>
                          <h1 className="text-xl font-serif font-bold text-cream-light">
                            {temple.name}
                          </h1>
                          <div className="flex items-center gap-1 text-cream-light/80 text-sm mt-1">
                            <MapPin className="w-4 h-4" />
                            {temple.location}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-1.5 mt-3">
                {temple.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full bg-muted-foreground/30`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Hero Image */}
            <div className="hidden md:block relative rounded-2xl overflow-hidden aspect-[21/9]">
              <img
                src={temple.images[0]}
                alt={temple.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-heritage-brown/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full mb-3">
                  {temple.region}
                </span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-cream-light">
                  {temple.name}
                </h1>
                <div className="flex items-center gap-2 text-cream-light/80 mt-2">
                  <MapPin className="w-5 h-5" />
                  {temple.location}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* History */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">
                  History & Significance
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {temple.history}
                </div>
              </div>

              {/* Darshan Types */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Types of Darshan
                </h2>
                <div className="space-y-4">
                  {temple.darshanTypes.map((darshan, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-muted rounded-xl"
                    >
                      <div>
                        <h3 className="font-semibold text-foreground">{darshan.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{darshan.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {darshan.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold text-primary">{darshan.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Timings Card */}
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-24">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Temple Timings
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Morning</p>
                    <p className="font-medium text-foreground">{temple.timings.morning}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Evening</p>
                    <p className="font-medium text-foreground">{temple.timings.evening}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">Special Note</p>
                    <p className="text-sm text-foreground">{temple.timings.special}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-3">Nearby Hotels</h4>
                  <div className="space-y-2">
                    {temple.nearbyHotels.map((hotel, index) => (
                      <Link
                        key={index}
                        to="/hotels"
                        className="block text-sm text-primary hover:underline"
                      >
                        {hotel}
                      </Link>
                    ))}
                  </div>
                  <Link to="/hotels" className="block mt-4">
                    <Button variant="gold" className="w-full">
                      Book Nearby Stay
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TempleDetails;