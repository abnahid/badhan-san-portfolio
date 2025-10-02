import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaVideo } from "react-icons/fa";
import { FiBarChart2, FiCamera, FiFilm, FiHeart, FiMic } from "react-icons/fi";

export default function ServicesSection() {
  const services = [
    {
      title: "Reels & Shorts",
      icon: <FiFilm className="w-8 h-8 text-orange" />,
      delay: 500,
      link: "/portfolio/shorts-reels",
    },
    {
      title: "Talking Head",
      icon: <FiHeart className="w-8 h-8 text-orange" />,
      delay: 700,
      link: "/portfolio/talking-head",
    },
    {
      title: "Cashcow",
      icon: <FaVideo className="w-8 h-8 text-orange" />,
      delay: 900,
      link: "/portfolio/cashcow",
    },
    {
      title: "Documentary",
      icon: <FiCamera className="w-8 h-8 text-orange" />,
      delay: 500,
      link: "/portfolio/documentary",
    },
    {
      title: "3D Visuals",
      icon: <FiBarChart2 className="w-8 h-8 text-orange" />,
      delay: 700,
      link: "/portfolio/3d-visuals",
    },
    {
      title: "Other",
      icon: <FiMic className="w-8 h-8 text-orange" />,
      delay: 900,
      link: "/portfolio/other",
    },
  ];

  return (
    <section className="py-[60px] lg:py-[90px]">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="grid grid-cols-12 gap-6 2xl:gap-0 mb-12 items-center"
          data-aos="fade-up"
        >
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
              <span className="text-orange text-xl">Services</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                My specialties
              </h3>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <p className="paragraph">
              Synergistically seize front end methods of empowerment without
              extensive core competencies. Progressively repurpose alternative
              platforms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group flex flex-col justify-between h-full"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                    {service.icon}
                  </div>

                  {/* Title & Arrow */}
                  <div className="mt-auto flex items-end  justify-between gap-3">
                    <Link
                      href={service.link}
                      className="font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all flex-1 leading-snug"
                    >
                      {service.title}
                    </Link>
                    <Link
                      href={service.link}
                      className="text-black-text-600 group-hover:text-orange group-hover:animate-move-up shrink-0"
                    >
                      <ArrowUpRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Contact Card */}
          <div
            className="col-span-12 xl:col-span-4"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <div className="px-6 py-9 bg-black-800 rounded-lg flex flex-wrap flex-col justify-between max-w-[416px] mx-auto h-full group">
              <div className="flex flex-wrap justify-end relative">
                <a href="/contact" className="group-hover:animate-move-up">
                  <Image
                    src="/assets/SVG/orang-Top-ARrow.svg"
                    alt="Arrow"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                    priority
                  />
                </a>
              </div>
              <div className="flex flex-col flex-wrap gap-y-2">
                <span className="text-orange text-lg font-normal leading-none">
                  SAY HELLO!
                </span>
                <h4 className="text-white text-2xl xl:text-[32px] font-bold font-Syne leading-none break-all">
                  badhansencontact@gmail.com
                </h4>
                {/* use break-all or break-words to wrap long email */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
