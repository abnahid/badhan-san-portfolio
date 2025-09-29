"use client";

import type { Transition } from "framer-motion";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

interface Highlight {
  _id: string;
  name: string;
  title: string;
  videoUrl: string;
}

const transition: Transition = {
  type: "spring",
  duration: 0.4,
};

const Portfolio = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const uniqueId = useId();

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

  function getEmbedId(embedUrl: string): string | null {
    try {
      const url = new URL(embedUrl);
      return url.pathname.split("/")[2];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (e: any) {
      return null;
    }
  }

  return (
    <section className="bg-secondary py-[70px] lg:py-[120px]">
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
          {Array.isArray(highlights) &&
            highlights.map((highlight, index) => (
              <div
                key={highlight._id}
                className="col-span-12 md:col-span-6"
                data-aos="fade-up"
                data-aos-delay={200 * (index + 1)}
              >
                <div
                  onClick={() => setActiveVideo(highlight.videoUrl)} // use embed URL in modal
                  className="cursor-pointer rounded-2xl overflow-hidden border border-gray-300 shadow hover:shadow-lg transition"
                >
                  {/* Thumbnail image */}
                  <Image
                    src={`https://img.youtube.com/vi/${getEmbedId(
                      highlight.videoUrl
                    )}/hqdefault.jpg`}
                    alt={highlight.title}
                    width={636}
                    height={480}
                    className="w-full h-[210px] lg:h-[342px] object-cover  rounded-t-2xl"
                  />

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-black-800">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      {highlight.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View All Projects */}
        <div className="col-span-12 mt-12">
          <div className="flex group">
            <Link
              href="portfolio"
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

      {/* Motion Modal */}
      <MotionConfig transition={transition}>
        <AnimatePresence>
          {activeVideo && (
            <>
              {/* Backdrop */}
              <motion.div
                key={`backdrop-${uniqueId}`}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveVideo(null)}
              />

              {/* Modal */}
              <motion.div
                key="dialog"
                className="fixed inset-0 flex items-center justify-center z-50"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="relative w-[90%] max-w-4xl aspect-video border-white border-2 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src={`${activeVideo}?autoplay=1&modestbranding=1&showinfo=0&rel=0`}
                    title="YouTube video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Close button */}
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition"
                  >
                    <XIcon size={24} />
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MotionConfig>
    </section>
  );
};

export default Portfolio;
