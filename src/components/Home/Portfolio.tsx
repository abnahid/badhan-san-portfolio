"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroVideoDialog } from "../ui/HeroVideoDialog";

interface Highlight {
  _id: string;
  name: string;
  title: string;
  videoUrl: string;
}

const Portfolio = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Fetch highlights from your API
  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const res = await fetch("/api/highlights");
        const data = await res.json();
        setHighlights(data);
      } catch (err) {
        console.error("Error fetching highlights:", err);
      }
    };

    fetchHighlights();
  }, []);

  return (
    <section className="bg-secondary py-[120px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Section Title */}
          <div className="col-span-12" data-aos="fade-up">
            <div className="font-bold font-Syne text-center leading-none flex flex-col gap-y-2 mb-10">
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

          {/* Dynamic Highlights */}
          {highlights.map((highlight, index) => (
            <div
              key={highlight._id}
              className="col-span-12 md:col-span-6"
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
            >
              {/* Click to open video modal */}
              <div
                onClick={() => setActiveVideo(highlight.videoUrl)}
                className="cursor-pointer rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition"
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold text-black-800">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">{highlight.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="col-span-12 mt-12" data-aos="fade-up">
          <div className="flex group">
            <Link
              href="projects"
              className="flex items-center justify-center flex-wrap btn-primary grow"
            >
              View All Project
              <span className="inline-block ml-3 group-hover:animate-move-up">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal (only opens for clicked video) */}
      {activeVideo && (
        <HeroVideoDialog
          className="block dark:hidden max-w-7xl mx-auto px-4 rounded-2xl"
          animationStyle="from-center"
          videoSrc={activeVideo}
          thumbnailSrc="/assets/Image/about-me.webp"
          thumbnailAlt="Project Video"
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
