import { useState } from "react";
import { Calendar, Users, Search, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-saffron/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Hero Content */}
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Discover Divine Andhra Pradesh
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Your Gateway to{" "}
            <span className="text-gradient-gold">Sacred Journeys</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience divine temples, luxurious stays, and authentic heritage 
            across Vijayawada, Nandyala & Vetapalem
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card-hover p-5 md:p-8 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
              {/* Destination */}
              <div className="lg:col-span-2">
                <label className="text-xs font-semibold text-primary mb-2 block uppercase tracking-wide">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 bg-muted border-0 rounded-xl text-base appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                  >
                    <option value="">Where to?</option>
                    <option value="vijayawada">Vijayawada</option>
                    <option value="nandyala">Nandyala</option>
                    <option value="vetapalem">Vetapalem</option>
                  </select>
                </div>
              </div>

              {/* Check In */}
              <div>
                <label className="text-xs font-semibold text-primary mb-2 block uppercase tracking-wide">
                  Check In
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    placeholder="dd-mm-yyyy"
                    className="pl-12 h-14 bg-muted border-0 rounded-xl text-base font-medium"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="text-xs font-semibold text-primary mb-2 block uppercase tracking-wide">
                  Check Out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    placeholder="dd-mm-yyyy"
                    className="pl-12 h-14 bg-muted border-0 rounded-xl text-base font-medium"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="text-xs font-semibold text-primary mb-2 block uppercase tracking-wide">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 bg-muted border-0 rounded-xl text-base appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary font-medium"
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

            <div className="mt-6 flex justify-center">
              <Button variant="hero" size="xl" className="w-full md:w-auto min-w-[250px] text-lg">
                <Search className="w-5 h-5" />
                Search Hotels
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
          {[
            { value: "50+", label: "Premium Hotels" },
            { value: "100+", label: "Sacred Temples" },
            { value: "10K+", label: "Happy Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
