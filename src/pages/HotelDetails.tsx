import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Wifi, UtensilsCrossed, Car, Dumbbell, Phone, ArrowLeft, Calendar, Users, X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const hotelData: Record<string, {
  id: string;
  name: string;
  location: string;
  address: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  amenities: { name: string; icon: string }[];
  roomTypes: { name: string; price: number; capacity: number }[];
  mentorContact: string;
}> = {
  "1": {
    id: "1",
    name: "Taj Gateway Hotel",
    location: "Tirupati",
    address: "Renigunta Road, Near Airport, Tirupati 517501",
    price: 8500,
    rating: 4.8,
    reviews: 324,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    ],
    description: "Experience luxury and comfort at Taj Gateway Hotel, perfectly located near Tirumala Temple. Our hotel offers world-class amenities, authentic South Indian cuisine, and personalized service to make your pilgrimage memorable.",
    amenities: [
      { name: "Free WiFi", icon: "wifi" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Parking", icon: "parking" },
      { name: "Gym", icon: "gym" },
    ],
    roomTypes: [
      { name: "Deluxe Room", price: 8500, capacity: 2 },
      { name: "Premium Suite", price: 12500, capacity: 3 },
      { name: "Presidential Suite", price: 25000, capacity: 4 },
    ],
    mentorContact: "+91 98765 43210",
  },
  "2": {
    id: "2",
    name: "Fortune Murali Park",
    location: "Vijayawada",
    address: "MG Road, Vijayawada 520010",
    price: 7200,
    rating: 4.8,
    reviews: 312,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    ],
    description: "Premium hotel in the heart of Vijayawada, close to Kanaka Durga Temple. Features modern amenities, spa facilities, and authentic Andhra cuisine.",
    amenities: [
      { name: "Free WiFi", icon: "wifi" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Parking", icon: "parking" },
      { name: "Gym", icon: "gym" },
    ],
    roomTypes: [
      { name: "Standard Room", price: 7200, capacity: 2 },
      { name: "Deluxe Suite", price: 11000, capacity: 3 },
    ],
    mentorContact: "+91 98765 43211",
  },
  "3": {
    id: "3",
    name: "Sri Sai Residency",
    location: "Nandyala",
    address: "Temple Road, Nandyala 518501",
    price: 3200,
    rating: 4.5,
    reviews: 145,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    ],
    description: "Comfortable stay near Mahanandi Temple. Perfect for pilgrims seeking peace and convenience.",
    amenities: [
      { name: "Free WiFi", icon: "wifi" },
      { name: "Restaurant", icon: "restaurant" },
      { name: "Parking", icon: "parking" },
    ],
    roomTypes: [
      { name: "Standard Room", price: 3200, capacity: 2 },
      { name: "Deluxe Room", price: 4500, capacity: 3 },
    ],
    mentorContact: "+91 98765 43212",
  },
};

const defaultHotel = hotelData["1"];

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = hotelData[id || "1"] || defaultHotel;
  const [bookingRoom, setBookingRoom] = useState<{ name: string; price: number; capacity: number } | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "wifi": return <Wifi className="w-5 h-5" />;
      case "restaurant": return <UtensilsCrossed className="w-5 h-5" />;
      case "parking": return <Car className="w-5 h-5" />;
      case "gym": return <Dumbbell className="w-5 h-5" />;
      default: return <Wifi className="w-5 h-5" />;
    }
  };

  return (
    <Layout>
      <div className="py-6">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/hotels" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Hotels
          </Link>

          {/* Gallery - Horizontal scroll on mobile, Grid on desktop */}
          <div className="mb-8">
            {/* Mobile: Horizontal scroll gallery */}
            <div className="md:hidden">
              <div className="flex gap-3 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory scrollbar-hide">
                {hotel.images.map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-[85%] snap-center rounded-xl overflow-hidden aspect-video">
                    <img
                      src={img}
                      alt={`${hotel.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-1.5 mt-3">
                {hotel.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === 0 ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/10]">
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                {hotel.images.slice(1, 3).map((img, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt={`${hotel.name} ${index + 2}`}
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
                    <span className="font-medium">{hotel.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({hotel.reviews} reviews)</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-serif font-bold text-foreground">
                  {hotel.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {hotel.address}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">{hotel.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {hotel.amenities.map((amenity) => (
                    <div key={amenity.name} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
                      <div className="text-primary">{getIcon(amenity.icon)}</div>
                      <span className="text-sm font-medium">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Types */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Room Types</h2>
                <div className="space-y-4">
                  {hotel.roomTypes.map((room) => (
                    <div key={room.name} className="bg-card rounded-xl p-5 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{room.name}</h3>
                        <p className="text-muted-foreground text-sm">Up to {room.capacity} guests</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-xl font-semibold text-foreground">
                          ₹{room.price.toLocaleString()}
                          <span className="text-muted-foreground font-normal text-sm">/night</span>
                        </p>
                        <Button variant="gold" onClick={() => setBookingRoom(room)}>Book Now</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm">Starting from</p>
                  <p className="text-3xl font-serif font-bold text-foreground">
                    ₹{hotel.price.toLocaleString()}
                    <span className="text-muted-foreground font-normal text-base">/night</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Check In</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                      <Input type="date" className="pl-10 h-12 bg-muted border-0 rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Check Out</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                      <Input type="date" className="pl-10 h-12 bg-muted border-0 rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                      <select className="w-full h-12 pl-10 pr-4 bg-muted border-0 rounded-xl text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary">
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full" size="xl">
                    Book Now
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Need help with booking?</p>
                  <a
                    href={`tel:${hotel.mentorContact}`}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">{hotel.mentorContact}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={!!bookingRoom} onOpenChange={() => setBookingRoom(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif">Book {bookingRoom?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground">Room Price</p>
              <p className="text-2xl font-semibold text-foreground">
                ₹{bookingRoom?.price.toLocaleString()}
                <span className="text-muted-foreground font-normal text-sm">/night</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">Up to {bookingRoom?.capacity} guests</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Check In</label>
                <Input type="date" className="h-10 bg-muted border-0 rounded-lg" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Check Out</label>
                <Input type="date" className="h-10 bg-muted border-0 rounded-lg" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Number of Guests</label>
              <select className="w-full h-10 px-3 bg-muted border-0 rounded-lg text-sm">
                {Array.from({ length: bookingRoom?.capacity || 2 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? "s" : ""}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Full Name</label>
              <Input placeholder="Enter your name" className="h-10 bg-muted border-0 rounded-lg" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Phone Number</label>
              <Input placeholder="+91 98765 43210" className="h-10 bg-muted border-0 rounded-lg" />
            </div>
            <Button variant="hero" className="w-full" size="lg">
              Confirm Booking
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Free cancellation up to 24 hours before check-in
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default HotelDetails;