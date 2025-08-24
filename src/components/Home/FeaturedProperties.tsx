"use client";
import Image from "next/image";
import { useState } from "react";

const TABS = [
  { label: "About me", key: "about_me_tab" },
  { label: "Experience", key: "experience_tab" },
  { label: "Education", key: "education_tab" },
  { label: "Skills", key: "skills_tab" },
  { label: "Awards", key: "awards_tab" },
];

export default function FeaturedProperties() {
  // State for active tab, default: About me
  const [active, setActive] = useState<string>("about_me_tab");

  return (
    <section className="featured-properties py-[80px] lg:py-[100px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">
          {/* Left Column */}
          <div
            className="col-span-12 lg:col-span-5 2xl:col-span-4"
            data-aos="fade-up"
          >
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
              <span className="text-orange text-xl">Resume</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                All over my details find here...
              </h3>
            </div>
            <div className="tabs flex flex-wrap lg:flex-col gap-2 my-8 lg:my-0">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`tab-btn justify-between items-center inline-flex group${
                    active === tab.key ? " active" : ""
                  }`}
                  onClick={() => setActive(tab.key)}
                >
                  {tab.label}
                  <span className="inline-block ml-3 group-hover:animate-move-up">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-span-12 lg:col-span-7 2xl:col-span-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* About Me Tab */}
            <div
              className={`tab-content ${
                active === "about_me_tab" ? "block" : "hidden"
              } relative`}
            >
              <div className="grid grid-cols-1">
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                  Based in Bangladesh
                </h4>
                <p
                  className="font-dm-sans text-[1.125rem] font-normal leading-[1.75rem] mb-7"
                  style={{ color: "rgba(8,8,8,0.6)" }}
                >
                  Badhan Sen,
                  <span className="text-black-800">
                    Video Editor & Motion Graphics Artist
                  </span>
                  , based worldwide. This is where I come in—cutting scenes,
                  building stories, and turning raw footage into engaging
                  visuals that connect with your audience.
                </p>
                <p
                  className="font-dm-sans text-[1.125rem] font-normal leading-[1.75rem] mb-14"
                  style={{ color: "rgba(8,8,8,0.6)" }}
                >
                  From YouTube videos and reels to documentaries, weddings, and
                  corporate films, I bring ideas to life with sharp edits,
                  cinematic color grading, motion graphics, sound design, and
                  subtitles—frame by frame.
                </p>

                <ul className="flex-col gap-3 inline-flex">
                  {[
                    { label: "Name", value: "Badhan Sen" },
                    { label: "Nationality", value: "Bangladesh" },
                    { label: "Phone", value: "+880 1540176951" },
                    { label: "Email", value: "badhansencontact@gmail.com" },
                    { label: "Experience", value: "04+ years" },
                    { label: "Freelance", value: "Available" },
                    { label: "Discord", value: "badhansen.info" },
                    { label: "Language", value: "English, Hindi" },
                  ].map(({ label, value }) => (
                    <li key={label} className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        {label}
                      </span>
                      <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Experience Tab */}
            <div
              className={`tab-content ${
                active === "experience_tab" ? "block" : "hidden"
              } relative`}
            >
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Experience
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {[
                  { date: "03/216 – Running", role: "Lead digital marketer" },
                  { date: "03/2008 – 07/2011", role: "JavaScript developer" },
                  { date: "03/2008 – 07/2011", role: "Product designer" },
                  { date: "03/2008 – 07/2011", role: "UX researcher" },
                ].map(({ date, role }, i) => (
                  <div
                    key={i}
                    className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between"
                  >
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      {date}
                    </span>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        {role}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Tab */}
            <div
              className={`tab-content ${
                active === "education_tab" ? "block" : "hidden"
              }`}
            >
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Education
              </h4>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    date: "003/2008 – 07/2011",
                    degree: "BA Business Management",
                  },
                  {
                    date: "03/2008 – 07/2011",
                    degree: "BA Business Management",
                  },
                  {
                    date: "03/2008 – 07/2011",
                    degree: "BA Business Management",
                  },
                ].map(({ date, degree }, i) => (
                  <div
                    key={i}
                    className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]"
                  >
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      {date}
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        {degree}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Tab */}
            <div
              className={`tab-content ${
                active === "skills_tab" ? "block" : "hidden"
              }`}
            >
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {[
                  {
                    img: "premiere-pro.png",
                    skill: "Adobe Premiere Pro",
                    percent: "95%",
                  },
                  {
                    img: "after-effects.png",
                    skill: "Adobe After Effects",
                    percent: "92%",
                  },
                  {
                    img: "davinci.png",
                    skill: "DaVinci Resolve (Color Grading)",
                    percent: "88%",
                  },
                  {
                    img: "photoshop.png",
                    skill: "Adobe Photoshop",
                    percent: "80%",
                  },
                  {
                    img: "audition.png",
                    skill: "Adobe Audition (Sound Design)",
                    percent: "75%",
                  },
                  {
                    img: "final-cut.png",
                    skill: "Final Cut Pro",
                    percent: "70%",
                  },
                  {
                    img: "motion-graphics.png",
                    skill: "Motion Graphics & VFX",
                    percent: "90%",
                  },
                ].map(({ img, skill, percent }, i) => (
                  <div
                    key={i}
                    className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start"
                  >
                    <Image
                      className="items-start"
                      src={`/assets/Image/skills/${img}`}
                      alt="icons"
                      width={32}
                      height={32}
                    />
                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        {skill}
                      </h4>
                      <p className="text-sm font-normal font-Inter leading-none text-black-800">
                        ({percent})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Tab */}
            <div
              className={`tab-content ${
                active === "awards_tab" ? "block" : "hidden"
              }`}
            >
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Awards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { img: "w-dot.png", year: "2018" },
                  { img: "webby.png", year: "2018" },
                  { img: "fwa.png", year: "2018" },
                  { img: "wordpress.png", year: "2018" },
                ].map(({ img, year }, i) => (
                  <div
                    key={i}
                    className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8"
                  >
                    <div className="flex items-start justify-between">
                      <Image
                        src={`/assets/Image/skills/${img}`}
                        alt="icons"
                        width={40}
                        height={40}
                      />
                      <span className="font-normal text-sm font-Inter text-black-text-800">
                        {year}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Winner
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        01X Developer Award
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative SVG */}
            <span className="flex justify-end mt-14 -mr-3">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z"
                  fill="#FFB646"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
