import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, Search } from "lucide-react";
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
      <div className="container mx-auto px-4 pt-4 pb-6">
        {/* Logo - Centered on mobile, visible on all screens */}
        <div className="flex justify-center mb-6 md:hidden">
          <img 
            src={logo} 
            alt="HostHaven - Explore Andhra's Heritage" 
            className="h-28 w-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <h1 className="text-xl md:text-3xl font-serif font-bold text-center text-foreground mb-6">
          Find Hotels at Best Prices
        </h1>

        {/* Search Card */}
        <div className="bg-card rounded-xl shadow-card p-4 max-w-2xl mx-auto">
          {/* Date Row */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Check In */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-left p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <p className="text-xs text-muted-foreground font-medium mb-0.5">Check In</p>
                  <p className={cn(
                    "text-sm font-medium",
                    !checkIn && "text-muted-foreground"
                  )}>
                    {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
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

            {/* Check Out */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-left p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <p className="text-xs text-muted-foreground font-medium mb-0.5">Date Out</p>
                  <p className={cn(
                    "text-sm font-medium",
                    !checkOut && "text-muted-foreground"
                  )}>
                    {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
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
          </div>

          {/* Room & Guest Row */}
          <div className="flex items-center gap-3 p-3 bg-muted rounded-lg mb-4">
            <CalendarIcon className="w-5 h-5 text-primary flex-shrink-0" />
            <select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="bg-transparent text-sm font-medium appearance-none cursor-pointer focus:outline-none flex-1"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Room{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <span className="text-muted-foreground">-</span>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-transparent text-sm font-medium appearance-none cursor-pointer focus:outline-none flex-1"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} Guest{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <Users className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </div>

          {/* Search Button */}
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full text-base"
            onClick={handleSearch}
          >
            <Search className="w-4 h-4 mr-2" />
            Find Hotels Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
