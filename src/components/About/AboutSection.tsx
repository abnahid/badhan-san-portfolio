import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="bg-secondary pt-20 pb-[120px]" data-aos="zoom-in">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
          {/* Profile Image */}
          <Image
            className="mx-auto"
            src="/assets/Image/about1.png"
            alt="about me"
            width={526}
            height={526}
          />

          {/* Text Content */}
          <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
            <span className="text-orange text-xl">About me</span>

            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
              Badhan San
            </h3>

            <h4 className="text-black-800 text-2xl mt-3 mb-4">Video Editor</h4>

            <p className="text-xl font-bold font-Syne leading-7 mb-6">
              A passionate Video Editor with 4+ years of experience in crafting
              cinematic edits, social media content, and brand storytelling.
              Dedicated to transforming raw footage into engaging visuals that
              connect with audiences worldwide.
            </p>

            <p className="paragraph mb-6">
              I believe every story deserves to be told in the most powerful
              way. My mission is to help creators, businesses, and brands bring
              their vision to life through seamless editing, creative
              storytelling, and professional finishing touches that leave a
              lasting impact.
            </p>

            <div>
              <Image
                src="/assets/SVG/Badhan-signature.svg"
                alt="signature"
                width={195}
                height={56}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
