import AboutPage from "@/components/About/AboutSection";
import ResumeSection from "@/components/About/ResumeSection";
import VisionSection from "@/components/About/VisionSection";
import BrandCarousel from "@/components/Home/BrandCarousel";
import TestimonialSection from "@/components/Home/TestimonialSection";

const page = () => {
  return (
    <div>
      <AboutPage />
      <VisionSection />
      <ResumeSection />
      <TestimonialSection />
      <BrandCarousel />
    </div>
  );
};

export default page;
