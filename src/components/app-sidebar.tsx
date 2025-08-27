/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IconHomeFilled } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import * as React from "react";
import { RiGlobalLine } from "react-icons/ri";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const { user } = useUser();
  const data = {
    user,
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconHomeFilled as React.ComponentType<any>, // ✅ cast
        active: pathname === "/dashboard",
      },

      {
        title: "User Alerts",
        url: "/dashboard/user-alerts",
        icon: RiGlobalLine as React.ComponentType<any>,
        active: pathname.startsWith("/dashboard/user-alerts"),
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <span className="text-[20px] font-bold text-active">
                Badhan San
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
