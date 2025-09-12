"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAdminRoute =
    pathname.startsWith("/dashboard") || pathname.startsWith("/auth/login");

  const containerClass =
    !isAdminRoute && !isHome ? "pt-20 overflow-x-hidden" : "";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    AOS.refresh(); // Refresh animations when route changes
  }, [pathname]);

  return (
    <>
      <header>{!isAdminRoute && <Navbar />}</header>
      <div className={containerClass}>{children}</div>
      {!isAdminRoute && <Footer />}
    </>
  );
}
