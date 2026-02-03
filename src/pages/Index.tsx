import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import HeritageBanner from "@/components/home/HeritageBanner";
import { FeaturedHotels, FeaturedHomes } from "@/components/home/FeaturedSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import TemplesPreview from "@/components/home/TemplesPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import BecomePartner from "@/components/home/BecomePartner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HeritageBanner />
      <FeaturedHotels />
      <DestinationsSection />
      <FeaturedHomes />
      <TemplesPreview />
      <ServicesPreview />
      <BecomePartner />
    </Layout>
  );
};

export default Index;
