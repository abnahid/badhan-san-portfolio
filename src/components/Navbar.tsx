"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Project details", href: "/project-details" },
    { title: "Contact", href: "/contact" },
  ];

  // Social links (replace with real hrefs)
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

  return (
    <>
      <header
        id="sticky-header"
        className="xl:pl-12 absolute left-0 top-0 w-full z-10"
      >
        <div className="flex pl-4 xl:pl-0 max-w-[1480] mx-auto">
          {/* Main bar */}
          <div className="flex-1 flex items-center justify-between border-b border-black-800/40 bg-transparent">
            <Link href="/">
              <span className="text-[20px] font-bold font-Syne text-active">
                Badhan Sen
              </span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange md:hover:text-white group"
            >
              Let’s Talk
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
          {/* Hamburger Button */}
          <div
            className="flex-none bg-active flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer"
            onClick={() => setOffcanvasOpen(true)}
          >
            <button type="button" aria-label="Open menu">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="8" width="18" height="2" fill="white" />
                <rect x="3" y="14" width="18" height="2" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Offcanvas Menu */}
      <div
        id="offcanvas"
        className={`offcanvas fixed top-0 right-0 bottom-0 z-50 transition-all duration-300 ease-in-out bg-black pl-8 flex flex-col justify-between ${
          offcanvasOpen ? "translate-x-0" : "translate-x-full"
        } w-[350px] md:w-[460px] h-full`}
        style={{ pointerEvents: offcanvasOpen ? "auto" : "none" }}
      >
        {/* Top: Logo & Close */}
        <div>
          <div className="flex flex-wrap justify-between items-center border-b border-border-white mb-[80px]">
            <Link href="/" className="py-4">
              <span className="text-[20px] font-bold text-white">
                Badhan Sen
              </span>
            </Link>
            <button
              id="offcanvas-close"
              className="offcanvas-close bg-primary py-7 px-[38px]"
              aria-label="Close menu"
              onClick={() => setOffcanvasOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          {/* Navigation */}
          <nav className="offcanvas-menu mr-[40px] flex flex-col">
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.title}
                  className="border-b border-border-white py-4 group"
                >
                  <Link
                    href={link.href}
                    className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                    onClick={() => setOffcanvasOpen(false)}
                  >
                    {link.title}
                    <span className="inline-block group-hover:animate-move-up">
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
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Bottom: Social icons */}
        <nav className="pb-10">
          <ul className="flex flex-wrap gap-x-4 items-center">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-white transition-all duration-300 hover:text-orange"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Overlay */}
      {offcanvasOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOffcanvasOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
    </>
  );
};

export default Navbar;
