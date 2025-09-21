import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { HeroVideoDialog } from "../ui/HeroVideoDialog";

const VisionSection: React.FC = () => {
  return (
    <div className="pb-[80px] lg:pb-[100px]">
      <section className="bg-white py-[120px] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4" data-aos="zoom-out">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] xl:gap-[134px]">
            {/* Left Content */}
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] mb-5">
                Editing stories that connect with everyone
              </h3>
              <p className="paragraph mb-7">
                I believe every video has the potential to connect deeply with
                an audience. My goal is to craft edits that capture emotions,
                deliver impact, and keep viewers engaged — whether it’s a short
                social clip, a YouTube video, or a cinematic production.
              </p>
              <ul className="flex flex-wrap gap-9 2xl:gap-[40px]">
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    400+
                  </span>
                  <p className="paragraph">Videos edited</p>
                </li>
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    10+
                  </span>
                  <p className="paragraph">Worldwide Clients</p>
                </li>
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    08+
                  </span>
                  <p className="paragraph">Video Categories</p>
                </li>
              </ul>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-end">
              <div className="flex flex-wrap flex-col mb-12">
                <span className="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative z-10 before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">
                  4+
                </span>
                <span
                  className="font-syne text-[3rem] leading-[48px] font-bold tracking-[-1.5px] mt-5"
                  style={{
                    color: "var(--color-stroke-text, #fff)",
                    textShadow: `
      1px 1px 0 rgba(8,8,8,0.4),
      -1px -1px 0 rgba(8,8,8,0.4),
      1px -1px 0 rgba(8,8,8,0.4),
      -1px 1px 0 rgba(8,8,8,0.4),
      1px 1px 0 rgba(8,8,8,0.4)
    `,
                  }}
                >
                  Years of <br />
                  experience
                </span>
              </div>

              <div className="px-6 py-6 bg-black-800 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group">
                {/* Left side */}
                <div className="flex flex-col gap-y-2 min-w-0">
                  <span className="text-orange text-lg font-normal leading-none">
                    SAY HELLO!
                  </span>
                  <h4 className="text-white text-base sm:text-xl xl:text-[30px] font-bold font-Syne leading-snug break-words">
                    badhansencontact@gmail.com
                  </h4>
                </div>

                {/* Right side */}
                <div className="flex justify-end flex-shrink-0">
                  <Link
                    href="mailto:badhansencontact@gmail.com"
                    className="group-hover:animate-move-up"
                  >
                    <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-orange" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroVideoDialog
        className="block dark:hidden max-w-7xl mx-auto px-4 rounded-2xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/Bg37lGPpNjM?si=PNCzSwH-QOascG-b"
        thumbnailSrc="/assets/Image/about-me.webp"
        thumbnailAlt="Fresh Motion Graphics Project | Badhan Sen"
      />
    </div>
  );
};

export default VisionSection;
