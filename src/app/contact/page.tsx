import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — ON NOUS MENT",
  description: "Contacte ON NOUS MENT. Presse, collaborations, questions.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-rouge-alarme">
            [ Contact ]
          </span>
          <div className="h-px flex-1 bg-gris-beton/50" />
        </div>
        <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-blanc-papier leading-none tracking-[0.02em]">
          Écris-nous. <span className="text-rouge-alarme">Ou tais-toi.</span>
        </h1>
        <p className="mt-4 font-space text-sm sm:text-base text-blanc-papier/40 max-w-xl">
          Presse, collaborations, questions existentielles ou simple envie de nous dire qu&apos;on
          t&apos;a ouvert les yeux. On lit tout. On répond quand on peut.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
