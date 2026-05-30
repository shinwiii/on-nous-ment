"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetDate?: Date;
  className?: string;
}

export default function Countdown({ targetDate, className }: CountdownProps) {
  const target = targetDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const diff = target.getTime() - new Date().getTime();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const interval = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!mounted) return null;

  const items = [
    { label: "JOURS", value: timeLeft.days },
    { label: "HEURES", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDES", value: timeLeft.seconds },
  ];

  return (
    <div className={cn("flex gap-3 sm:gap-6", className)}>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="relative">
            <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center border border-gris-beton bg-noir-censure/80">
              <span className="font-bebas text-3xl sm:text-4xl text-rouge-alarme tabular-nums leading-none flicker">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
          </div>
          <span className="font-space text-[10px] sm:text-xs tracking-[0.15em] text-blanc-papier/40 mt-1.5">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
