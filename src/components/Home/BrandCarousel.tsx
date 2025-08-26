"use client";

import Image from "next/image";

const brands = [
  { src: "/assets/Image/brand/logo1.svg", alt: "Brand Logo 1" },
  { src: "/assets/Image/brand/logo2.svg", alt: "Brand Logo 2" },
  { src: "/assets/Image/brand/logo3.svg", alt: "Brand Logo 3" },
  { src: "/assets/Image/brand/logo4.svg", alt: "Brand Logo 4" },
  { src: "/assets/Image/brand/logo5.svg", alt: "Brand Logo 5" },
  { src: "/assets/Image/brand/logo6.svg", alt: "Brand Logo 6" },
  { src: "/assets/Image/brand/logo3.svg", alt: "Brand Logo 7" },
];

const BrandCarousel = () => {
  const loopedBrands = [...brands, ...brands];

  return (
    <div className="bg-white brandCarousel py-[120px]" data-aos="flip-down">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden py-4 border-t border-b border-black-text-100">
        <div className="flex animate-marquee gap-6 ">
          {loopedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={150}
                height={60}
                className="mx-auto block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandCarousel;
