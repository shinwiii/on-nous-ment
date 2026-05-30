"use client";

import { cn } from "@/lib/utils";

interface CensoredTextProps {
  text?: string;
  color?: "noir" | "rouge";
  className?: string;
  children?: React.ReactNode;
}

export default function CensoredText({
  text,
  color = "noir",
  className,
  children,
}: CensoredTextProps) {
  const displayText = text || children || "▌▌▌▌▌▌▌▌▌▌";
  return (
    <span
      className={cn(
        "censure-bar font-bebas tracking-[0.05em] select-none",
        color === "rouge" && "rouge",
        className
      )}
      aria-label="Contenu censuré"
    >
      {typeof displayText === "string" ? displayText : children}
    </span>
  );
}
