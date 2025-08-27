"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Cookies from "@types/js-cookie";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    role: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      Cookies.remove("token");
      Cookies.remove("__next_hmr_refresh_hash__");

      router.push("/auth/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="px-3 py-1.5 gap-2.5 bg-white rounded-[10px] shadow-[0px_1px_3px_rgba(0,0,0,0.20)] 
                         hover:bg-primary/5 focus:bg-primary/10 transition-colors"
            >
              <Avatar className="h-8 w-8 rounded-lg ">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {user.role}
                </span>
              </div>
              <User className="ml-auto size-4 text-[#8D94AB]" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[260px] rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.15)] border border-[#e3e5ec] bg-white p-2"
            side={isMobile ? "bottom" : "bottom"}
            align="end"
            sideOffset={6}
          >
            {/* User Info */}
            <DropdownMenuLabel className="p-0 font-normal mb-2">
              <div className="flex items-center gap-3 px-2.5 py-1.5 bg-[#f2f3f8] rounded-md">
                <Avatar className="h-[34px] w-[34px] rounded-full">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-sm leading-tight">
                  <span className="text-[#595e70] text-[13px] font-semibold truncate">
                    {user.name}
                  </span>
                  <span className="text-[#8c94ab] text-xs truncate">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <Link href="/dashboard/my-profile">
              <DropdownMenuGroup>
                <DropdownMenuItem className="flex items-center gap-2 px-2.5 py-1.5 text-[#8c94ab] text-[13px] font-semibold rounded-md cursor-pointer hover:bg-[#f5f6fa] focus:bg-[#f5f6fa]">
                  <User className="w-[18px] h-[18px] text-[#8c94ab]" />
                  My Profile
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </Link>

            {/* Divider */}
            <div className="my-2 h-px bg-[#d8deec]" />

            {/* Logout */}
            <DropdownMenuItem
              onClick={handleLogout}
              className="flex items-center gap-2 px-2.5 py-1.5 text-[#ef5858] text-[13px] font-semibold rounded-md cursor-pointer hover:bg-[#fff3f3] focus:bg-[#fff3f3]"
            >
              <LogOut className="w-[18px] h-[18px] text-[#ef5858]" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
