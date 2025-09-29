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
              Badhan Sen
            </h3>

            <h4 className="text-black-800 text-2xl mt-3 mb-4">Video Editor</h4>

            <p className="text-xl font-bold font-Syne leading-7 mb-6">
              I am Badhan Sen, a freelance video editor from Bangladesh, working
              since 2021. I specialize in crafting engaging stories through
              video with expert editing, motion graphics, cinematic color
              grading, sound design, multi camera editing, and subtitles.
            </p>

            <p className="paragraph mb-6">
              Using industry standard software, I can handle large projects with
              over 100GB of footage and collaborate globally to turn ideas into
              compelling visual experiences. My goal is to deliver projects on
              time while remaining open to revisions, ensuring they meet your
              expectations. You can trust that I will provide results you’ll
              love.
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
