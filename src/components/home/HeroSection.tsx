import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, Search, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (checkIn) params.set("checkIn", format(checkIn, "yyyy-MM-dd"));
    if (checkOut) params.set("checkOut", format(checkOut, "yyyy-MM-dd"));
    if (guests) params.set("guests", guests);
    
    navigate(`/hotels?${params.toString()}`);
  };

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
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary z-10" />
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-14 pl-12 justify-start text-left font-medium bg-muted border-0 rounded-xl hover:bg-muted/80",
                        !checkIn && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="absolute left-4 w-5 h-5 text-primary" />
                      {checkIn ? format(checkIn, "dd-MM-yyyy") : "dd-mm-yyyy"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check Out */}
              <div>
                <label className="text-xs font-semibold text-primary mb-2 block uppercase tracking-wide">
                  Check Out
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-14 pl-12 justify-start text-left font-medium bg-muted border-0 rounded-xl hover:bg-muted/80",
                        !checkOut && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="absolute left-4 w-5 h-5 text-primary" />
                      {checkOut ? format(checkOut, "dd-MM-yyyy") : "dd-mm-yyyy"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < (checkIn || new Date())}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guests */}
              <div>
                <label className="text-xs font-semibold text-primary mb-2 block uppercase tracking-wide">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary z-10" />
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
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full md:w-auto min-w-[250px] text-lg"
                onClick={handleSearch}
              >
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
