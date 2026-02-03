import { useState } from "react";
import { Calendar, Users, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative py-8 md:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a726' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="HostHaven" className="h-32 md:h-48 w-auto" />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Explore Andhra's Heritage
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover divine temples, luxurious stays, and authentic experiences 
            across the rich cultural landscape of Andhra Pradesh
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Destination */}
              <div className="lg:col-span-2">
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10 h-12 bg-muted border-0 rounded-xl"
                  />
                </div>
              </div>

              {/* Check In */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Check In
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="pl-10 h-12 bg-muted border-0 rounded-xl"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Check Out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="pl-10 h-12 bg-muted border-0 rounded-xl"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 bg-muted border-0 rounded-xl text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Button variant="hero" size="xl" className="w-full md:w-auto">
                <Search className="w-5 h-5" />
                Search Hotels
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
          {[
            { value: "50+", label: "Hotels" },
            { value: "100+", label: "Temples" },
            { value: "10K+", label: "Happy Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-gradient-gold">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
