"use client";

import Link from "next/link";

type PricingPlan = {
  title: string;
  price: string;
  heading: string;
  description: string;
  delay: number;
};

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$2/min",
    heading: "Essential Editing",
    description: "Cutting, trimming, clean transitions, and subtitles.",
    delay: 300,
  },
  {
    title: "Standard",
    price: "$5/min",
    heading: "With Motion Graphics",
    description: "Smooth edits plus motion graphics, sound sync, and captions.",
    delay: 500,
  },
  {
    title: "Premium",
    price: "$10/min",
    heading: "Full Production",
    description:
      "Everything included: cinematic color grading, advanced motion graphics, sound design, multi camera editing & subtitles.",
    delay: 700,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white pb-[120px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
              <div
                className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 max-w-[325px] lg:max-w-[400px] xl:max-w-[527px]"
                data-aos="fade-up"
              >
                <span className="text-orange text-xl">Pricing</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  Choose the right{" "}
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[13px] before:left-[-4px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    plan
                  </span>{" "}
                  for your video
                </h3>
              </div>

              <div
                className="flex mt-8 md:mt-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link
                  href="contact"
                  className="flex items-center flex-wrap btn-primary group"
                >
                  Contact for Custom Project
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
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className="p-6 lg:p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12"
              data-aos="fade-up"
              data-aos-delay={plan.delay}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-normal font-sans leading-none text-black-text-600">
                  {plan.title}
                </span>
                <span className="font-bold text-xl font-Syne text-orange">
                  {plan.price}
                </span>
              </div>

              <div>
                <h4 className="font-bold font-Syne leading-10 text-[28px] text-black-800 mb-1">
                  {plan.heading}
                </h4>
                <p className="text-lg font-normal font-sans leading-none text-black-text-600">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
