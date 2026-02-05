import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CalendarDays, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", format(checkIn, "yyyy-MM-dd"));
    if (checkOut) params.set("checkOut", format(checkOut, "yyyy-MM-dd"));
    if (guests) params.set("guests", guests);
    if (rooms) params.set("rooms", rooms);
    
    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <section className="bg-gradient-to-b from-cream to-cream-light">
      <div className="container mx-auto px-4 pt-2 pb-6">
        {/* Logo - Large and centered on mobile like reference */}
        <div className="flex justify-center mb-4 md:hidden">
          <img 
            src={logo} 
            alt="HostHaven - Explore Andhra's Heritage" 
            className="h-40 w-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <h1 className="text-xl md:text-3xl font-serif font-bold text-center text-foreground mb-4">
          Find Hotels at Best Prices
        </h1>

        {/* Search Card */}
        <div className="bg-card rounded-xl shadow-card p-3 max-w-2xl mx-auto">
          {/* Single Row: Check In - Check Out */}
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg mb-3">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex-1 text-left">
                  <p className="text-[10px] text-muted-foreground font-medium">Check In</p>
                  <p className={cn(
                    "text-xs font-medium",
                    !checkIn && "text-muted-foreground"
                  )}>
                    {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select"}
                  </p>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <span className="text-muted-foreground text-xs">-</span>

            <Popover>
              <PopoverTrigger asChild>
                <button className="flex-1 text-left">
                  <p className="text-[10px] text-muted-foreground font-medium">Date Out</p>
                  <p className={cn(
                    "text-xs font-medium",
                    !checkOut && "text-muted-foreground"
                  )}>
                    {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select"}
                  </p>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <div className="w-px h-8 bg-border" />

            <CalendarDays className="w-4 h-4 text-primary flex-shrink-0" />
            <select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="bg-transparent text-xs font-medium appearance-none cursor-pointer focus:outline-none w-16"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Rm
                </option>
              ))}
            </select>
            <span className="text-muted-foreground text-xs">-</span>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-transparent text-xs font-medium appearance-none cursor-pointer focus:outline-none w-20"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} Guests
                </option>
              ))}
            </select>
            <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </div>

          {/* Search Button */}
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full text-sm"
            onClick={handleSearch}
          >
            Find Hotels Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
