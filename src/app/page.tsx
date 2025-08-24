import AboutSection from "@/components/Home/AboutSection";
import FeaturedProperties from "@/components/Home/FeaturedProperties";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturedProperties />
    </>
  );
}
