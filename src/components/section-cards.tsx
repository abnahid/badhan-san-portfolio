"use client";

import { useEffect, useState } from "react";
import {
  PiMagnifyingGlassDuotone,
  PiMoney,
  PiShieldCheck,
  PiShoppingCartDuotone,
  PiUsersDuotone,
} from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";

// Reuse your existing StatCard component
function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / end)) || 1;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
}

function StatCard({
  icon: Icon,
  label,
  value,
  subValue,
  bg = "#f2f6ff",
  iconBg = "#dce7ff",
  iconColor = "#425bd8",
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  subValue?: string;
  bg?: string;
  iconBg?: string;
  iconColor?: string;
}) {
  return (
    <div
      className="px-6 py-5 rounded-lg inline-flex items-center gap-5"
      style={{ backgroundColor: bg }}
    >
      <div
        className="p-3 rounded-lg flex justify-center items-center"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="w-8 h-8" style={{ color: iconColor }} />
      </div>
      <div className="flex flex-col items-start gap-1">
        <div className="text-Subtitle text-sm font-semibold leading-snug tracking-tight">
          {label}
        </div>
        <div className="text-BlackBg text-[22px] font-bold leading-loose">
          <CountUp end={value} /> {subValue && <span>{subValue}</span>}
        </div>
      </div>
    </div>
  );
}

// Map category names to icons
const categoryIcons: Record<string, React.ElementType> = {
  "Shorts & Reels": PiUsersDuotone,
  Documentary: PiShieldCheck,
  "YouTube Video": PiMoney,
  "Wedding Video": RiGlobalLine,
  "Podcast & Interview": PiMagnifyingGlassDuotone,
  "Commercial Video": PiShoppingCartDuotone,
};

interface PortfolioItem {
  categoryName: string;
  title: string;
  videoUrl: string;
}

export function SectionCards() {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await fetch("/api/portfolio");
        const data: PortfolioItem[] = await res.json();
        setPortfolios(data);
      } catch (err) {
        console.error("Failed to fetch portfolios:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Get unique categories from portfolios
  const categories = Array.from(new Set(portfolios.map((p) => p.categoryName)));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 px-4 lg:px-6">
      {categories.map((cat) => {
        const count = portfolios.filter((p) => p.categoryName === cat).length;
        const Icon = categoryIcons[cat] || PiUsersDuotone;

        return (
          <StatCard
            key={cat}
            icon={Icon}
            label={cat}
            value={count}
            subValue={`/${portfolios.length}`}
          />
        );
      })}
    </div>
  );
}
