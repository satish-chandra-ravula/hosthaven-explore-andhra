import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import HotelLoginSpecial from "@/components/home/HotelLoginSpecial";
import HeritageBanner from "@/components/home/HeritageBanner";
import { FeaturedHotels, FeaturedHomes } from "@/components/home/FeaturedSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import TemplesPreview from "@/components/home/TemplesPreview";
import ServicesPreview from "@/components/home/ServicesPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HotelLoginSpecial />
      <HeritageBanner />
      <FeaturedHotels />
      <DestinationsSection />
      <FeaturedHomes />
      <TemplesPreview />
      <ServicesPreview />
    </Layout>
  );
};

export default Index;
