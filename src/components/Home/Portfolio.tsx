"use client";
import Image from "next/image";
import Link from "next/link";

// Example Project Data
const projects = [
  {
    id: 1,
    image: "/assets/Image/projects/project1.png",
    tags: ["APP", "DEVELOPMENT"],
    title: "Basinik Finance App",
    link: "project-details",
    delay: 300,
  },
  {
    id: 2,
    image: "/assets/Image/projects/project2.png",
    tags: ["APP", "DEVELOPMENT"],
    title: "Oxilex Dashboard design",
    link: "project-details",
    delay: 500,
  },
  // add more projects here...
];

const Portfolio = () => {
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

          {/* Dynamic Projects */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-span-12 md:col-span-6"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <div className="rounded-[20px] overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={636}
                  height={380}
                />
              </div>

              <div className="flex flex-col gap-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Link
                      key={i}
                      href="projects"
                      className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                {/* Title + Icon */}
                <div className="flex items-center justify-between text-black-800 hover:text-orange group">
                  <h4 className="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                    <Link className="transition-all" href={project.link}>
                      {project.title}
                    </Link>
                  </h4>
                  <Link
                    className="group-hover:animate-move-up"
                    href={project.link}
                  >
                    <svg
                      width="40"
                      height="40"
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
                  </Link>
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
    </section>
  );
};

export default Portfolio;
