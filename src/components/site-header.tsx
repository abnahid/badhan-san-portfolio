"use client";

import { House, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavItem {
  title: string;
  url: string;
  icon: IconType;
}

const navMain: NavItem[] = [
  { title: "Dashboard", url: "/dashboard", icon: House },
  { title: "User Management", url: "/dashboard/user-management", icon: Users },
  // Add more nav items here
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
    "/dashboard/add-project": "Add Project",
    "/dashboard/user-alerts": "All alerts",
    "/dashboard/my-profile": "My Profile",
  };

  const subTitle = breadcrumbMap[pathname] || activeSection.title;
  const ActiveIcon = activeSection.icon;

  return (
    <header className="flex shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear px-7 py-5">
      <div className="flex w-full items-center gap-1 lg:gap-2">
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-[22px] font-bold leading-loose">
            {activeSection.title}
          </h1>

          {/* Breadcrumbs */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <ActiveIcon size={16} className="opacity-70" />
            {activeSection.title} <span className="px-1.5">&gt;</span>{" "}
            {subTitle}
          </p>
        </div>
      </div>
    </header>
  );
}
