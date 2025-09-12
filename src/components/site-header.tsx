"use client";

import { Button } from "@/components/ui/button";
import { House, Users } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: House,
  },
  {
    title: "User Management",
    url: "/dashboard/user-management",
    icon: Users,
  },
  // {
  //   title: "User Alerts",
  //   url: "/dashboard/user-alerts",
  //   icon: IconWorld,
  // },
  // {
  //   title: "My Profile",
  //   url: "/dashboard/my-profile",
  //   icon: PiUserFill,
  // },
];

export function SiteHeader() {
  const pathname = usePathname();

  const activeSection =
    navMain.find((item) =>
      item.url === "/dashboard"
        ? pathname === item.url
        : pathname.startsWith(item.url)
    ) || navMain[0];

  const breadcrumbMap: Record<string, string> = {
    "/dashboard": "Application overview",
    "/dashboard/user-management": "All users",
    "/dashboard/user-alerts": "All alerts",
    "/dashboard/my-profile": "My Profile",
  };

  const subTitle = breadcrumbMap[pathname] || activeSection.title;
  const ActiveIcon = activeSection.icon;
  const isUserManagement = pathname.startsWith("/dashboard/user-management");

  return (
    <>
      <header className="flex shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear px-7 py-5">
        <div className="flex w-full items-center gap-1 lg:gap-2">
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-[22px] font-bold leading-loose ">
              {activeSection.title}
            </h1>

            {/* Breadcrumbs */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <ActiveIcon size={16} className="opacity-70" />
              {activeSection.title} <span className="px-1.5">&gt;</span>{" "}
              {subTitle}
            </p>
          </div>

          <div className="ml-auto flex items-center gap-2">
            {isUserManagement && (
              <>
                <Button
                  size="sm"
                  className="hidden sm:flex gap-1.5"
                  onClick={() => setOpen(true)}
                >
                  <Image
                    src="/assets/Svg/UserPlus.svg"
                    alt="userplus"
                    width={18}
                    height={18}
                  />
                  <span>New User</span>
                </Button>

                {/* Add User Dialog */}
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
