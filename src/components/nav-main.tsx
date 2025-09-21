"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: React.ComponentType<any>;
    active?: boolean;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className="relative">
              <Link href={item.url} className="block w-full">
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`gap-2 rounded-md relative pl-3 pr-2 py-2
                    ${
                      item.active
                        ? "bg-[#e8efff] text-[#425bd8] font-semibold border border-[#425bd8] hover:bg-[#e8efff] hover:text-[#425bd8]"
                        : "hover:bg-[#e8efff] hover:text-[#425bd8]"
                    }`}
                >
                  {/* Left indicator bar */}
                  {item.active && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-Primary rounded-r-[1px]" />
                  )}
                  <div className="text-[18px]">
                    {item.icon && <item.icon />}
                  </div>

                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
