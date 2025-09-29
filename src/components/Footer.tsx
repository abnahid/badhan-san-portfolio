"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-black pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-hidden" data-aos="flip-down">
          {/* Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 ">
            {/* Left Section */}
            <div className="pt-12">
              <h3 className="text-white font-Syne font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[6px] before:left-0 before:-z-[1] before:w-[28px] sm:before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[28px] sm:before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                  Le
                </span>
                t’s work together
              </h3>
              <div className="flex flex-wrap items-center mt-6 sm:mt-10">
                <span className="text-base sm:text-lg md:text-xl font-bold font-Syne text-white">
                  Based in Worldwide
                </span>
                <div className="ml-3 sm:ml-4 lg:ml-0 xl:ml-4 2xl:ml-5">
                  <ul className="flex flex-wrap gap-x-3 sm:gap-x-4 items-center">
                    {/* Social Icons (unchanged) */}
                    <li>
                      <Link
                        href="#"
                        className="text-white hover:text-orange"
                        aria-label="LinkedIn"
                      >
                        {/* LinkedIn Icon */}
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            d="M7.443 5.3501C8.082..."
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </Link>
                    </li>
                    {/* Other social icons... */}
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle Card */}
            <div className="py-6 sm:py-9 px-5 sm:px-7 border border-border-white rounded-2xl flex flex-col justify-between group bg-black-700/50 backdrop-blur-md">
              <h3 className="text-lg sm:text-xl font-bold font-Syne text-white mb-4 sm:mb-6">
                Looking for a Video Editor and Motion Graphics Artist ?
              </h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <p className="text-lg sm:text-2xl font-bold font-Syne text-orange break-all">
                  badhansencontact@gmail.com
                </p>
                <Link
                  href="mailto:badhansencontact@gmail.com"
                  className="text-white group-hover:animate-move-up group-hover:text-orange flex-shrink-0"
                  aria-label="Send Email"
                >
                  <svg
                    width="32"
                    height="32"
                    sm-width="40"
                    sm-height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="py-6 sm:py-9 px-5 sm:px-7 border border-border-white rounded-2xl flex flex-col justify-between group bg-black-700/50 backdrop-blur-md">
              <h3 className="text-lg sm:text-xl font-bold font-Syne text-white mb-4 sm:mb-6">
                Want a more in depth look at my history?
              </h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <p className="text-lg sm:text-2xl font-bold font-Syne text-orange break-all">
                  +880 1540176951
                </p>
                <Link
                  href="tel:+8801540176951"
                  className="text-white group-hover:animate-move-up group-hover:text-orange flex-shrink-0"
                  aria-label="Call Phone"
                >
                  <svg
                    width="32"
                    height="32"
                    sm-width="40"
                    sm-height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="grid grid-cols-1 gap-6">
            <div className="py-12 flex justify-center">
              <Image
                src="/assets/SVG/Badhan-Sen.svg"
                alt="Badhan Sen Logo"
                width={1281}
                height={77}
                className="lg:w-[1281px]"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border-white pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-white text-sm sm:text-base md:text-lg font-normal font-sans text-center sm:text-left">
                © {new Date().getFullYear()} Badhan Sen, All Rights Reserved
              </p>
              <p className="flex items-center gap-2 text-sm sm:text-base text-white text-center sm:text-right">
                Development by{" "}
                <Link
                  href="https://www.abnahid.com"
                  target="_blank"
                  className="text-orange"
                  rel="noopener noreferrer"
                >
                  AB Nahid Agency
                </Link>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hidden sm:block"
                >
                  <path
                    d="M12 19V5M19 12L12 5L5 12"
                    stroke="#FFB646"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
