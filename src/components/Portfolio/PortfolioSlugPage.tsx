"use client";
import Loading from "@/components/ui/Loading";
import type { Transition } from "framer-motion";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useId, useState } from "react";

interface Portfolio {
  _id: string;
  categoryId: string;
  categoryName: string;
  title: string;
  videoUrl: string;
  alt?: string;
  createdAt: string;
}

const transition: Transition = {
  type: "spring",
  duration: 0.4,
};

const PortfolioSlugPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const uniqueId = useId();

  // Category name mapping
  const categoryTitles: { [key: string]: string } = {
    "shorts-reels": "Reels & Shorts",
    "talking-head": "Talking Head",
    cashcow: "Cashcow",
    documentary: "Documentary",
    "3d-visuals": "3D Visuals",
    other: "Other",
  };

  const categoryTitle = categoryTitles[slug] || slug;

  // Fetch portfolio data by slug
  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/portfolio/${slug}`);
        console.log("Fetch response:", res);

        if (!res.ok) {
          throw new Error("Failed to fetch portfolio data");
        }

        const data = await res.json();
        // Ensure data is always an array
        setPortfolios(Array.isArray(data) ? data : data ? [data] : []);
      } catch (err) {
        console.error("Error fetching portfolios:", err);
        setError("Failed to load portfolio items");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPortfolios();
    }
  }, [slug]);

  function getEmbedId(embedUrl: string): string | null {
    try {
      const url = new URL(embedUrl);
      return url.pathname.split("/")[2];
    } catch (e) {
      console.log("error" + e);
      return null;
    }
  }

  if (loading) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-[60px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
            <p className="text-gray-600">{error}</p>
            <Link
              href="/portfolio"
              className="inline-block mt-6 px-6 py-3 bg-orange text-white rounded-lg hover:bg-orange/90 transition"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-[70px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Section Title */}
          <div className="col-span-12" data-aos="fade-up">
            <div className="font-bold font-Syne text-center leading-none flex flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Portfolio</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                {categoryTitle}
              </h3>
              <p className="text-gray-600 text-lg mt-4">
                {portfolios.length}{" "}
                {portfolios.length === 1 ? "project" : "projects"}
              </p>
            </div>
          </div>

          {/* Portfolio Items */}
          {portfolios.length === 0 ? (
            <div className="col-span-12 text-center py-12">
              <p className="text-gray-600 text-lg">
                No portfolio items found in this category yet.
              </p>
              <Link
                href="/portfolio"
                className="inline-block mt-6 px-6 py-3 bg-orange text-white rounded-lg hover:bg-orange/90 transition"
              >
                Back to Portfolio
              </Link>
            </div>
          ) : (
            portfolios.map((portfolio, index) => (
              <div
                key={portfolio._id}
                className="col-span-12 md:col-span-6 lg:col-span-4"
                data-aos="fade-up"
                data-aos-delay={200 * (index + 1)}
              >
                <div
                  onClick={() => setActiveVideo(portfolio.videoUrl)}
                  className="cursor-pointer rounded-2xl overflow-hidden border border-gray-300 shadow hover:shadow-lg transition group"
                >
                  {/* Thumbnail image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${getEmbedId(
                        portfolio.videoUrl
                      )}/hqdefault.jpg`}
                      alt={portfolio.alt || portfolio.title}
                      width={636}
                      height={480}
                      className="w-full h-[250px] lg:h-[225px] object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8 text-orange ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-black-800 line-clamp-2">
                      {portfolio.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      {portfolio.categoryName}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Back to Portfolio */}
        <div className="col-span-12 mt-12">
          <div className="flex justify-center">
            <Link
              href="/portfolio"
              className="flex items-center justify-center flex-wrap btn-primary group"
            >
              <span className="inline-block mr-3 group-hover:animate-move-up rotate-180">
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
              Back to All Categories
            </Link>
          </div>
        </div>
      </div>

      {/* Motion Modal for Video Playback */}
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

export default PortfolioSlugPage;
