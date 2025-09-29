import { HeroVideoDialog } from "../ui/HeroVideoDialog";

const Homevideo = () => {
  return (
    <div className="pt-[60px] lg:pt-[100px]">
      <HeroVideoDialog
        className="block dark:hidden max-w-7xl mx-auto px-4 rounded-2xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/FufIk50bLUU"
        thumbnailSrc="/assets/Image/about-me.webp"
        thumbnailAlt="Fresh Motion Graphics Project | Badhan Sen"
      />
    </div>
  );
};

export default Homevideo;
