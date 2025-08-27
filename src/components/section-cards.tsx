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
function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 1s
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
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
      className=" px-6 py-5 rounded-lg inline-flex  items-center gap-5"
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

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 px-4 lg:px-6">
      <StatCard icon={PiUsersDuotone} label="Total Users" value={320} />
      <StatCard
        icon={PiShieldCheck}
        label="Verified Users"
        value={120}
        subValue="/320"
        bg="#e9fdf1"
        iconBg="#c9f5db"
        iconColor="#1fa84f"
      />
      <StatCard
        icon={PiMoney}
        label="Subscribed Users"
        value={85}
        subValue="/320"
        bg="#f8f2ff"
        iconBg="#e4d7fa"
        iconColor="#8b5cf6"
      />
      <StatCard
        icon={PiShoppingCartDuotone}
        label="Total Recall Searched"
        value={497}
        bg="#fff5f2"
        iconBg="#ffe1d9"
        iconColor="#f97316"
      />
      <StatCard
        icon={PiMagnifyingGlassDuotone}
        label="Total Product Searched"
        value={284}
        bg="#f2faff"
        iconBg="#d9f2ff"
        iconColor="#3b82f6"
      />
      <StatCard
        icon={RiGlobalLine}
        label="Total Alert Posted"
        value={162}
        bg="#fff2f5"
        iconBg="#ffd9e2"
        iconColor="#ef4444"
      />
    </div>
  );
}
