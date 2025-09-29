import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      className="about-section pb-[120px]"
      data-aos="zoom-out"
      data-aos-delay="300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
          {/* Left Side: Image and Experience */}
          <div className="relative">
            <Image
              src="/assets/Image/about1.png"
              alt="About Image"
              width={531}
              height={609}
            />

            <div className="flex flex-wrap flex-col absolute bottom-0 right-0 md:right-[170px] lg:right-[-30px] z-10">
              <span className="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">
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
          </div>
          {/* Right Side: Details */}
          {/* & Motion Graphic Designer */}
          <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
            <span className="text-orange text-xl">Hello I’m</span>
            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
              Badhan Sen, Video Editor
            </h3>
            <h4 className="text-black-800 text-2xl lg:text-3xl xl:text-[44px] mt-3 mb-4">
              Based in Worldwide
            </h4>
            <p className="paragraph mb-6">
              Collaboratively leverage front end editing techniques to enhance
              visual storytelling, without requiring deep technical expertise.
              Continuously adapt and repurpose diverse content platforms to
              maximize creative impact.
            </p>
            <ul className="flex flex-wrap gap-9 2xl:gap-[40px] mb-7">
              <li>
                <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  210+
                </span>
                <p className="paragraph">Worldwide Clients</p>
              </li>
              <li>
                <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  1000+
                </span>
                <p className="paragraph">Projects Completed</p>
              </li>
              <li>
                <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                  05+
                </span>
                <p className="paragraph">Video Categories</p>
              </li>
            </ul>
            <div className="flex flex-wrap">
              <Link
                href="https://docs.google.com/document/d/17NgOt4tfVWLgzIdsmgfy7XOG0kRcHSV5bIDchqyFeZc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-wrap btn-primary group"
              >
                my resume
                <span className="inline-block ml-3 group-hover:animate-move-up">
                  <ArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
