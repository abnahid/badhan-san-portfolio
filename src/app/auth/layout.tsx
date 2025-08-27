import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="hidden md:flex w-[35%] h-full">
        <Image
          src="/assets/Image/auth-login.png"
          alt="Authentication background"
          width={500}
          height={900}
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col w-full md:w-[65%] h-full bg-white  pb-10">
        <div className="flex flex-1 items-center justify-center p-8">
          {children}
        </div>

        {/* Footer */}
        <footer className=" text-center text-[12px] text-Subtitle">
          © {new Date().getFullYear()} Badhan San, All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
