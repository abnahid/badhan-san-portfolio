import Link from "next/link";

const PortfolioSection = () => {
  const services = [
    { title: "Reels & Shorts", link: "/portfolio/shorts-reels", delay: 500 },
    { title: "Talking Head", link: "/portfolio/talking-head", delay: 900 },
    { title: "Cashcow", link: "/portfolio/cashcow", delay: 1100 },
    { title: "Documentary", link: "/portfolio/documentary", delay: 700 },
    {
      title: "3D Visuals",
      link: "/portfolio/3d-visuals",
      delay: 1300,
    },
    {
      title: "Other",
      link: "/portfolio/other",
      delay: 1500,
    },
  ];

  return (
    <section className="bg-white pt-20 pb-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div
            className="col-span-12"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Portfolio</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                My recent{" "}
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  w
                </span>
                ork
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <div
                data-aos="fade-up"
                data-aos-delay={service.delay}
                className="block overflow-hidden relative rounded-[20px] group h-[380px] cursor-pointer"
              >
                <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black-600 before:opacity-0 group-hover:before:opacity-80 before:transition-opacity before:duration-300"></div>

                <div className="w-full h-full bg-black-500 flex items-center justify-center">
                  <span className="text-active/45 font-bold text-2xl">
                    {service.title}
                  </span>
                </div>

                <div className="absolute bottom-[-150px] left-6 right-6 transition-all duration-300 group-hover:bottom-6">
                  <div className="flex flex-wrap items-center justify-between text-white hover:text-orange">
                    <h4 className="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize">
                      {service.title}
                    </h4>
                    <svg
                      className="w-10 h-10 peer-hover:animate-arrow-move-up"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                        fill="currentColor"
                        fillOpacity="0.9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                        fill="currentColor"
                        fillOpacity="0.9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
