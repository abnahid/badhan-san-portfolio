"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    text: "Badhan perfectly understood the vibe I wanted for my Instagram reel. The pacing, music, and transitions were spot on. Super smooth process!",
    author: "Sarah M. – Content Creator",
  },
  {
    text: "Working with Badhan was amazing. He turned my raw clips into a clean, engaging YouTube video with great flow and sound. Highly recommend!",
    author: "Jake R. – YouTuber",
  },
  {
    text: "Badhan brought our documentary to life with thoughtful editing, beautiful color grading, and perfect timing. Truly professional work.",
    author: "Maya D. – Filmmaker",
  },
  {
    text: "From sound design to motion graphics, Badhan elevated our wedding film beyond expectations. Every moment felt cinematic and emotional.",
    author: "Emily K. – Bride",
  },
  {
    text: "We collaborated on a corporate video project, and Badhan’s editing expertise made our brand message clear and powerful. Very reliable!",
    author: "David W. – Manager",
  },
  {
    text: "As a fellow creative, I’ve seen how dedicated Badhan is to his craft. His editing and storytelling skills are top-notch and inspiring.",
    author: "Ab Nahid – Creative Director",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chunkArray = (arr: any[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const TestimonialSection = () => {
  const slides = chunkArray(testimonials, 2);

  return (
    <section className="bg-white py-[120px]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-x-[55px] 2xl:gap-x-[100px] 3xl:gap-x-[165px]">
          {/* Section Title */}
          <div className="font-bold font-Syne leading-none flex flex-col gap-y-2 md:text-center xl:text-left mb-10">
            <span className="text-orange text-xl">Testimonial</span>
            <h3 className="inline-block text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
              <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-2px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                Cl
              </span>
              ient <br className="hidden xl:inline-block" />
              feedback
            </h3>
          </div>

          {/* Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((group, index) => (
                <CarouselItem key={index} className="p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                    {group.map((t, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start gap-6"
                      >
                        <span>
                          <Image
                            src="/assets/SVG/testimonial.svg"
                            alt="Testimonial"
                            width={48}
                            height={48}
                          />
                        </span>
                        <p className="text-black-text-800 text-lg xl:text-xl font-bold font-Syne leading-7 mb-4">
                          “{t.text}”
                        </p>
                        <h4 className="flex items-center gap-4 text-black-800 text-lg font-extrabold font-Syne">
                          <svg
                            width="48"
                            height="2"
                            viewBox="0 0 48 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 1H48"
                              stroke="#080808"
                              strokeOpacity="0.4"
                            />
                          </svg>
                          {t.author}
                        </h4>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
