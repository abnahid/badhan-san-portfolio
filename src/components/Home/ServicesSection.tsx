import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-[120px]">
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
              Synergistically seize front-end methods of empowerment without
              extensive core competencies. Progressively repurpose alternative
              platforms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Service Item */}
              <div
                className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <ArrowUpRight />
                </div>
                {/* Icon End */}
                <h4>
                  <a
                    href="/projects"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Mobile Apps <br /> design
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <ArrowUpRight />
                    </span>
                  </a>
                </h4>
              </div>
              {/* Service Item End */}

              {/* Service Item */}
              <div
                className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <ArrowUpRight />
                </div>
                {/* Icon End */}
                <h4>
                  <a
                    href="/projects"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    UI/UX <br /> design
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <ArrowUpRight />
                    </span>
                  </a>
                </h4>
              </div>
              {/* Service Item End */}

              {/* Service Item */}
              <div
                className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <ArrowUpRight />
                </div>
                {/* Icon End */}
                <h4>
                  <a
                    href="/projects"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Website <br /> design
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <ArrowUpRight />
                    </span>
                  </a>
                </h4>
              </div>
              {/* Service Item End */}

              {/* Service Item */}
              <div
                className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <ArrowUpRight />
                </div>
                {/* Icon End */}
                <h4>
                  <a
                    href="/projects"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Webflow <br /> development
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <ArrowUpRight />
                    </span>
                  </a>
                </h4>
              </div>
              {/* Service Item End */}

              {/* Service Item */}
              <div
                className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <ArrowUpRight />
                </div>
                {/* Icon End */}
                <h4>
                  <a
                    href="/projects"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Brand <br /> identity
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <ArrowUpRight />
                    </span>
                  </a>
                </h4>
              </div>
              {/* Service Item End */}

              {/* Service Item */}
              <div
                className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <ArrowUpRight />
                </div>
                {/* Icon End */}
                <h4>
                  <a
                    href="/projects"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Interaction <br /> design
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <ArrowUpRight />
                    </span>
                  </a>
                </h4>
              </div>
              {/* Service Item End */}
            </div>
          </div>
          <div
            className="col-span-12 xl:col-span-4"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <div className="px-6 py-9 bg-black-800 rounded-lg flex flex-wrap flex-col justify-between max-w-[416px] mx-auto h-full group">
              <div className="flex flex-wrap justify-end relative">
                <a
                  href="/contact"
                  className="group-hover:animate-arrow-move-up"
                >
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
                <h4 className="text-white text-2xl xl:text-[32px] font-bold font-Syne leading-none">
                  hello@henry.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
