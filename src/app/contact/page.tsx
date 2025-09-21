"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/badhansen",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
          fill="currentColor"
          fillOpacity="0.9"
        ></path>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/badhansen.info",
    icon: <Instagram />,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01fbcf69a2d60720ae?mp_source=share",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Upwork icon</title>
        <path
          d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/badhansen.info",
    icon: <Facebook />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/badhansen_info",
    icon: <Twitter />,
  },
];

const Contact: React.FC = () => {
  return (
    <section className="bg-white pt-20 pb-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 max-sm:px-4 ">
          {/* Left Side */}
          <div className="col-span-12 lg:col-span-6" data-aos="fade-up">
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Contact</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  Le
                </span>
                t’s
                <br className="hidden lg:block" />
                connect
              </h3>
            </div>

            <div className="flex flex-wrap flex-col gap-7">
              {/* Email */}
              <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                <span>
                  {/* Email Icon */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M5.33366 5.33325H26.667C28.1337 5.33325 29.3337 6.53325 29.3337 7.99992V23.9999C29.3337 25.4666 28.1337 26.6666 26.667 26.6666H5.33366C3.86699 26.6666 2.66699 25.4666 2.66699 23.9999V7.99992C2.66699 6.53325 3.86699 5.33325 5.33366 5.33325Z"
                      stroke="#080808"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.3337 8L16.0003 17.3333L2.66699 8"
                      stroke="#080808"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex flex-wrap flex-col flex-1">
                  <span className="paragraph !leading-none">Email me</span>
                  <h5 className="text-xl font-bold font-Syne text-black-800 leading-7">
                    badhansencontact@gmail.com
                  </h5>
                </div>
              </div>
              {/* Phone */}
              <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                <span>
                  {/* Phone Icon */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M20.0663 6.66658C21.3686 6.92067 22.5654 7.55759 23.5037 8.49583C24.4419 9.43407 25.0788 10.6309 25.3329 11.9333M20.0663 1.33325C22.772 1.63383 25.295 2.84548 27.2212 4.76926C29.1474 6.69304 30.3623 9.2146 30.6663 11.9199M29.3329 22.5599V26.5599C29.3344 26.9313 29.2584 27.2988 29.1096 27.639C28.9608 27.9793 28.7427 28.2847 28.469 28.5357C28.1954 28.7868 27.8724 28.9779 27.5206 29.0969C27.1688 29.2158 26.7961 29.26 26.4263 29.2266C22.3234 28.7808 18.3823 27.3788 14.9196 25.1333C11.698 23.0861 8.9667 20.3548 6.91959 17.1333C4.66622 13.6549 3.26391 9.69458 2.82625 5.57325C2.79293 5.20454 2.83675 4.83293 2.95492 4.48208C3.07309 4.13124 3.26301 3.80884 3.51261 3.53541C3.7622 3.26199 4.06599 3.04353 4.40464 2.89395C4.74329 2.74436 5.10937 2.66693 5.47959 2.66659H9.47959C10.1267 2.66022 10.754 2.88936 11.2446 3.3113C11.7352 3.73323 12.0557 4.31918 12.1463 4.95992C12.3151 6.24001 12.6282 7.49689 13.0796 8.70659C13.259 9.18382 13.2978 9.70247 13.1915 10.2011C13.0851 10.6997 12.8381 11.1574 12.4796 11.5199L10.7863 13.2133C12.6843 16.5513 15.4482 19.3152 18.7863 21.2133L20.4796 19.5199C20.8421 19.1614 21.2998 18.9144 21.7984 18.808C22.297 18.7017 22.8157 18.7405 23.2929 18.9199C24.5026 19.3713 25.7595 19.6844 27.0396 19.8533C27.6873 19.9446 28.2788 20.2709 28.7016 20.7699C29.1245 21.269 29.3491 21.906 29.3329 22.5599Z"
                      stroke="#080808"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex flex-wrap flex-col flex-1">
                  <span className="paragraph !leading-none">Call me</span>
                  <h5 className="text-xl font-bold font-Syne text-black-800 leading-7">
                    +880 1540176951
                  </h5>
                </div>
              </div>
              {/* Address */}
              <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                <span>
                  {/* Address Icon */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 29C6 28.4477 6.44772 28 7 28H25C25.5523 28 26 28.4477 26 29C26 29.5523 25.5523 30 25 30H7C6.44772 30 6 29.5523 6 29Z"
                      fill="#080808"
                      fillOpacity="0.9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 10C14.3431 10 13 11.3431 13 13C13 14.6569 14.3431 16 16 16C17.6569 16 19 14.6569 19 13C19 11.3431 17.6569 10 16 10ZM11 13C11 10.2386 13.2386 8 16 8C18.7614 8 21 10.2386 21 13C21 15.7614 18.7614 18 16 18C13.2386 18 11 15.7614 11 13Z"
                      fill="#080808"
                      fillOpacity="0.9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C7 17.1399 9.31185 20.9096 11.7546 23.7188C12.9638 25.1094 14.1755 26.2305 15.0851 27.0037C15.4449 27.3095 15.7562 27.5599 16 27.75C16.2438 27.5599 16.5551 27.3095 16.9149 27.0037C17.8245 26.2305 19.0362 25.1094 20.2454 23.7188C22.6882 20.9096 25 17.1399 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4ZM16 29C15.4265 29.8192 15.4263 29.819 15.4259 29.8188L15.4251 29.8182L15.4228 29.8166L15.4154 29.8114L15.39 29.7933C15.3683 29.7778 15.3375 29.7557 15.2981 29.7269C15.2192 29.6693 15.1059 29.5853 14.9631 29.4762C14.6775 29.2579 14.2732 28.9384 13.7899 28.5276C12.8245 27.707 11.5362 26.5156 10.2454 25.0312C7.68815 22.0904 5 17.8601 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27 17.8601 24.3118 22.0904 21.7546 25.0312C20.4638 26.5156 19.1755 27.707 18.2101 28.5276C17.7268 28.9384 17.3225 29.2579 17.0369 29.4762C16.8941 29.5853 16.7808 29.6693 16.7019 29.7269C16.6625 29.7557 16.6317 29.7778 16.61 29.7933L16.5846 29.8114L16.5772 29.8166L16.5749 29.8182L16.5741 29.8188C16.5737 29.819 16.5735 29.8192 16 29ZM16 29L16.5735 29.8192C16.2291 30.0603 15.7709 30.0603 15.4265 29.8192L16 29Z"
                      fill="#080808"
                      fillOpacity="0.9"
                    />
                  </svg>
                </span>
                <div className="flex flex-wrap flex-col flex-1">
                  <span className="paragraph !leading-none">
                    Office address
                  </span>
                  <h5 className="text-xl font-bold font-Syne text-black-800 leading-7">
                    3240 Rajnagar, Sylhet, Bangladesh
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Form */}
          <div
            className="col-span-12 lg:col-span-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <form
              id="contact-form"
              action="mail.php"
              method="post"
              className="grid grid-cols-12 gap-[18px]"
            >
              <div className="col-span-12 md:col-span-6">
                <label
                  className="text-sm font-normal font-Inter leading-tight mb-3 block"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800/40 rounded-[8px] p-4 focus:border-black-800/40 focus:outline-none"
                  type="text"
                  required
                  placeholder="Your name*"
                  name="name"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label
                  className="text-sm font-normal font-Inter leading-tight mb-3 block"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  id="Email"
                  className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800/40 rounded-[8px] p-4 focus:border-black-800/40 focus:outline-none"
                  type="email"
                  required
                  placeholder="Your email*"
                  name="email"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label
                  className="text-sm font-normal font-Inter leading-tight mb-3 block"
                  htmlFor="Phone"
                >
                  Phone
                </label>
                <input
                  id="Phone"
                  className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800/40 rounded-[8px] p-4 focus:border-black-800/40 focus:outline-none"
                  type="text"
                  required
                  placeholder="Your number"
                  name="phone"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label
                  className="text-sm font-normal font-Inter leading-tight mb-3 block"
                  htmlFor="Subject"
                >
                  Subject*
                </label>
                <input
                  id="Subject"
                  className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800/40 rounded-[8px] p-4 focus:border-black-800/40 focus:outline-none"
                  type="text"
                  required
                  placeholder="Your subject*"
                  name="subject"
                />
              </div>
              <div className="col-span-12">
                <label
                  className="text-sm font-normal font-Inter leading-tight mb-3 block"
                  htmlFor="Message"
                >
                  Message
                </label>
                <textarea
                  className="h-[100px] font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800/40  rounded-[8px] p-4 focus:border-black-800/40  focus:outline-none resize-none"
                  name="message"
                  id="Message"
                  cols={30}
                  rows={10}
                  required
                  placeholder="Type your message"
                ></textarea>
              </div>
              <div className="col-span-12">
                <button
                  type="submit"
                  className="flex items-center flex-wrap rounded-lg border border-transparent bg-[rgba(8,8,8,0.95)] py-3 px-6 text-[15px] font-bold capitalize leading-none text-white transition-all duration-500 ease-in-out hover:border-[rgba(8,8,8,0.4)] hover:bg-transparent hover:text-[rgba(8,8,8,1)] group"
                >
                  Submit
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
                      ></path>
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </button>

                <p className="form-message mt-3"></p>
              </div>
              {/* Social & Divider */}
              <div className="col-span-12">
                <div className="justify-start sm:items-center gap-[23px] inline-flex mt-14 flex-col sm:flex-row">
                  <svg
                    width="110"
                    height="2"
                    viewBox="0 0 110 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1H110" stroke="#080808" strokeOpacity="0.1" />
                  </svg>
                  <div className="flex flex-wrap gap-[23px]">
                    <h4 className="text-black-800 text-xl font-bold font-Syne leading-7">
                      Follow me
                    </h4>
                    <ul className="flex flex-wrap gap-x-4 items-center">
                      {socialLinks.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="text-black-800 transition-all duration-300 hover:text-orange"
                            aria-label={item.label}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.icon}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* End form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
