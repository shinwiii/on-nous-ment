import type { Metadata } from "next";
import ClassifiedGenerator from "@/components/ClassifiedGenerator";

export const metadata: Metadata = {
  title: "Générateur — ON NOUS MENT",
  description:
    "Génère des preuves classifiées avec les slogans ON NOUS MENT. Viral et prêt à partager.",
};

export default function GenerateurPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-rouge-alarme">
            [ Outil Viral ]
          </span>
          <div className="h-px flex-1 bg-gris-beton/50" />
        </div>
        <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-blanc-papier leading-none tracking-[0.02em]">
          Générateur de <span className="text-rouge-alarme">Preuve Classifiée</span>
        </h1>
        <p className="mt-4 font-space text-sm sm:text-base text-blanc-papier/40 max-w-xl">
          Génère un document classifié avec ton slogan préféré, copie l&apos;image et partage-la sur
          les réseaux. Aucune preuve, tout en preuve.
        </p>
      </div>

      <ClassifiedGenerator />
    </div>
  );
}
