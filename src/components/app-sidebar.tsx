/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
import { House } from "lucide-react";
import { usePathname } from "next/navigation";
import * as React from "react";
import { RiGlobalLine } from "react-icons/ri";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const { user } = useUser();
  const data = {
    user,
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: House as React.ComponentType<any>,
        active: pathname === "/dashboard",
      },

      {
        title: "Add Project",
        url: "/dashboard/add-project",
        icon: RiGlobalLine as React.ComponentType<any>,
        active: pathname.startsWith("/dashboard/add-project"),
      },

      {
        title: "All Categories",
        url: "/dashboard/categories",
        icon: RiGlobalLine as React.ComponentType<any>,
        active: pathname.startsWith("/dashboard/categories"),
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
                Badhan Sen
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
