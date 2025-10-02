import AboutPage from "@/components/About/AboutSection";
import ResumeSection from "@/components/About/ResumeSection";
import VisionSection from "@/components/About/VisionSection";
import BrandCarousel from "@/components/Home/BrandCarousel";
import TestimonialSection from "@/components/Home/TestimonialSection";

export const metadata = {
  title: "About Me - Badhan San",
  description:
    "Learn more about Badhan San, a passionate video editor and content creator specializing in YouTube videos, documentaries, and short films. Discover my journey, skills, and the vision that drives my work.",
};

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
