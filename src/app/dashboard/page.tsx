import { HighlightCard } from "@/components/dashboard/HighlightCard";
import { HighlightsDashboard } from "@/components/dashboard/HighlightsDashboard";
import { SectionCards } from "@/components/section-cards";

export default function DashboardPage() {
  return (
    <>
      <SectionCards />
      <HighlightsDashboard />
      <HighlightCard />
    </>
  );
}
