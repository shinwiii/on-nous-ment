import type { Metadata } from "next";
import SloganWall from "@/components/SloganWall";
import CensoredText from "@/components/CensoredText";

export const metadata: Metadata = {
  title: "Slogans — ON NOUS MENT",
  description: "60 slogans engagés contre les narratifs dominants. Trouve ton message.",
};

export default function SlogansPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-rouge-alarme">
            [ Banque de slogans ]
          </span>
          <div className="h-px flex-1 bg-gris-beton/50" />
        </div>
        <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-blanc-papier leading-none tracking-[0.02em]">
          Le <CensoredText color="rouge">message</CensoredText> est le produit
        </h1>
        <p className="mt-4 font-space text-sm sm:text-base text-blanc-papier/40 max-w-xl">
          Explore, copie, partage. Chaque slogan est une munition contre le narratif dominant.
        </p>
      </div>

      <SloganWall />
    </div>
  );
}
