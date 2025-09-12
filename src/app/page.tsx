import AboutSection from "@/components/Home/AboutSection";
import BrandCarousel from "@/components/Home/BrandCarousel";
import FeaturedProperties from "@/components/Home/FeaturedProperties";
import HeroSection from "@/components/Home/HeroSection";
import Portfolie from "@/components/Home/Portfolio";
import PricingSection from "@/components/Home/PricingSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturedProperties />
      <Portfolie />
      <TestimonialSection />
      <BrandCarousel />
      <PricingSection />
    </div>
  );
}
