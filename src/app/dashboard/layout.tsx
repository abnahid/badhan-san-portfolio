import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserProvider } from "@/context/UserContext"; // make sure this exists
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        {/* Sidebar */}
        <AppSidebar variant="inset" />

        {/* Main Content */}
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col bg-white">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                {children}
              </div>
            </div>
          </div>
          <script
            src="https://6000-firebase-studio-1758053129760.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/widget.js"
            data-api-key="539695ab470f3d6121c40c11bae83495"
            defer
          ></script>
        </SidebarInset>
      </SidebarProvider>
    </UserProvider>
  );
}
