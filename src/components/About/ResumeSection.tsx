"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type TabKey = "about" | "experience" | "education" | "skills" | "awards";

const tabHeadings: Record<TabKey, string> = {
  about: "About Me",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  awards: "Awards",
};

interface AboutMe {
  name: string;
  nationality: string;
  phone: string;
  email: string;
  experience: string;
  freelance: string;
  skype: string;
  language: string;
  bio: string[];
  image: string;
  title: string;
  location: string;
}

interface Experience {
  date: string;
  company: string;
  role: string;
}

interface Education {
  date: string;
  school: string;
  degree: string;
}

interface Skill {
  icon: string;
  title: string;
  level: string;
}

interface Award {
  year: string;
  icon: string;
  title: string;
}

interface ResumeData {
  aboutMe: AboutMe;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  awards: Award[];
}

const resumeData: ResumeData = {
  aboutMe: {
    name: "Badhan San",
    nationality: "Worldwide",
    phone: "+(880) 123-456-789",
    email: "badhansencontact@gmail.com",
    experience: "4+ years",
    freelance: "Available",
    skype: "badhan.san.editor",
    language: "English, Bangla",
    image: "/assets/Image/about1.png",
    title: "Video Editor",
    location: "Worldwide",
    bio: [
      "I’m Badhan San, a professional Video Editor based worldwide.",
      "My passion lies in creating visuals that bring stories to life — editing content that not only showcases who you are but connects with your audience on an emotional level.",
    ],
  },
  experiences: [
    { date: "2021 – Running", company: "Freelance", role: "Lead Video Editor" },
    {
      date: "2019 – 2021",
      company: "Creative Studio",
      role: "Motion Graphics Designer",
    },
    {
      date: "2017 – 2019",
      company: "Media House",
      role: "Video Production Assistant",
    },
  ],
  education: [
    {
      date: "2015 – 2018",
      school: "Dhaka University",
      degree: "BA in Media & Communication",
    },
  ],
  skills: [
    {
      icon: "/assets/Image/skills/premiere-pro.png",
      title: "Adobe Premiere Pro",
      level: "(95%)",
    },
    {
      icon: "/assets/Image/skills/after-effects.png",
      title: "After Effects",
      level: "(85%)",
    },
    {
      icon: "/assets/Image/skills/photoshop.png",
      title: "Photoshop",
      level: "(75%)",
    },
    {
      icon: "/assets/Image/skills/audition.png",
      title: "Audition",
      level: "(80%)",
    },
    {
      icon: "/assets/Image/skills/davinci.png",
      title: "DaVinci Resolve",
      level: "(80%)",
    },
    {
      icon: "/assets/Image/skills/motion-graphics.png",
      title: "Motion Graphics",
      level: "(80%)",
    },
  ],
  awards: [
    {
      year: "2023",
      icon: "/assets/Image/awards/fwa.png",
      title: "Best Freelance Video Editor Award",
    },
    {
      year: "2022",
      icon: "/assets/Image/awards/w-dot.png",
      title: "Top Creative Editing Recognition",
    },
  ],
};

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <section className="bg-black-500 py-[80px] lg:py-[100px]">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
        {/* Header */}
        <div className="font-bold font-Syne text-center leading-none flex flex-col gap-y-2 mb-4">
          <span className="text-orange text-xl">Resume</span>
          <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
            All over my details find{" "}
            <span className="relative before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[15px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
              here.
            </span>
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-14">
          {["about", "experience", "education", "skills", "awards"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabKey)}
                className={`tab-btn justify-between items-center inline-flex group active ${
                  activeTab === tab
                    ? "bg-black-800 text-white"
                    : "bg-black-500 text-black-800"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                <ArrowUpRight className="ml-3" />
              </button>
            )
          )}
        </div>

        {/* Content */}
        <div className="col-span-12">
          {/* About Me */}
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Image
                src={resumeData.aboutMe.image}
                alt="about me"
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div>
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                  {resumeData.aboutMe.name}, {resumeData.aboutMe.title}
                </h4>
                {resumeData.aboutMe.bio.map((p, i) => (
                  <p key={i} className="paragraph mb-6">
                    {p}
                  </p>
                ))}
                <ul className="flex-col gap-3 inline-flex">
                  <li className="flex flex-wrap gap-4 items-center">
                    <strong className="w-[110px] text-black/70 text-lg">
                      Name:
                    </strong>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      {resumeData.aboutMe.name}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 items-center">
                    <strong className="w-[110px] text-black/70 text-lg">
                      Nationality:
                    </strong>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      {resumeData.aboutMe.nationality}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 items-center">
                    <strong className="w-[110px] text-black/70 text-lg">
                      Phone:
                    </strong>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      {resumeData.aboutMe.phone}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 items-center">
                    <strong className="w-[110px] text-black/70 text-lg">
                      Email:
                    </strong>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      {resumeData.aboutMe.email}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 items-center">
                    <strong className="w-[110px] text-black/70 text-lg">
                      Experience:
                    </strong>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      {resumeData.aboutMe.experience}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 items-center">
                    <strong className="w-[110px] text-black/70 text-lg">
                      Freelance:
                    </strong>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      {resumeData.aboutMe.freelance}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 items-center">
                    <strong className="w-[110px] text-black/70 text-lg">
                      Skype:
                    </strong>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      {resumeData.aboutMe.skype}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 items-center">
                    <strong className="w-[110px] text-black/70 text-lg">
                      Language:
                    </strong>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      {resumeData.aboutMe.language}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Experience */}
          {activeTab === "experience" && (
            <div>
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                {tabHeadings["experience"]}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {resumeData.experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="p-6 bg-black-500 rounded-2xl hover:bg-white hover:shadow-lg transition-all"
                  >
                    <span className="text-sm">{exp.date}</span>
                    <h4 className="text-2xl font-bold">{exp.role}</h4>
                    <p className="text-lg">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <div>
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                {tabHeadings[activeTab]}
              </h4>
              <div className="grid grid-cols-1 gap-6">
                {resumeData.education.map((edu, i) => (
                  <div
                    key={i}
                    className="p-6 bg-black-500 rounded-2xl hover:bg-white hover:shadow-lg transition-all"
                  >
                    <span className="text-sm">{edu.date}</span>
                    <h4 className="text-2xl font-bold">{edu.degree}</h4>
                    <p className="text-lg">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {activeTab === "skills" && (
            <div>
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                {tabHeadings[activeTab]}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {resumeData.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-6 bg-black-500 rounded-2xl hover:bg-white hover:shadow-lg flex gap-4 items-center"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.title}
                      width={40}
                      height={40}
                    />
                    <div>
                      <h4 className="font-bold">{skill.title}</h4>
                      <p>{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards */}
          {activeTab === "awards" && (
            <div>
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                {tabHeadings[activeTab]}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {resumeData.awards.map((award, i) => (
                  <div
                    key={i}
                    className="p-6 bg-black-500 rounded-2xl hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <Image
                        src={award.icon}
                        alt={award.title}
                        width={40}
                        height={40}
                      />
                      <span className="text-sm">{award.year}</span>
                    </div>
                    <h4 className="font-bold text-xl">{award.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
