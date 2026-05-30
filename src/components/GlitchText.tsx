"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  className?: string;
  animate?: boolean;
}

export default function GlitchText({ text, as: Tag = "h1", className, animate = true }: GlitchTextProps) {
  return (
    <Tag
      data-text={text}
      className={cn(
        animate && "glitch-text",
        "relative inline-block",
        className
      )}
    >
      {text}
    </Tag>
  );
}
