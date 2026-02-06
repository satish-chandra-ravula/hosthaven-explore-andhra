import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import templeBanner1 from "@/assets/temple-banner-1.jpg";
import templeBanner2 from "@/assets/temple-banner-2.jpg";
import templeBanner3 from "@/assets/temple-banner-3.jpg";

const bannerImages = [templeBanner1, templeBanner2, templeBanner3];

const WeekendDeviationBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-4">
      <div className="max-w-2xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden h-[200px] md:h-[280px]">
          {/* Carousel Images */}
          {bannerImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Temple heritage"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-brown/80 via-heritage-brown/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-cream-light leading-tight mb-2">
              Planning a Weekend<br />Deviation?
            </h2>
            <p className="text-cream-light/80 text-xs md:text-sm mb-1">
              Discover Sacred Temples
            </p>
            <p className="text-cream-light/70 text-xs mb-4">
              · Yaganti · Mahanandi · Ahobilam
            </p>
            <Link
              to="/deviation-temples"
              className="inline-flex items-center gap-2 bg-cream-light/20 backdrop-blur-sm border border-cream-light/30 rounded-lg px-4 py-2 text-cream-light text-sm font-medium w-fit hover:bg-cream-light/30 transition-colors"
            >
              Know the route
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 right-4 flex gap-1.5">
            {bannerImages.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-cream-light w-4" : "bg-cream-light/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekendDeviationBanner;
