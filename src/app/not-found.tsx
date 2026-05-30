import Link from "next/link";
import CensoredText from "@/components/CensoredText";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-bebas text-9xl sm:text-[10rem] text-rouge-alarme leading-none">
          404
        </div>
        <p className="font-barlow text-xl sm:text-2xl text-blanc-papier/60 mt-4">
          <CensoredText color="rouge">Page classifiée</CensoredText>
        </p>
        <p className="font-space text-sm text-blanc-papier/40 mt-2 max-w-md mx-auto">
          Cette page n&apos;existe pas — ou alors elle a été censurée par le Ministère de la Vérité.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-gris-beton text-blanc-papier/70 hover:text-rouge-alarme hover:border-rouge-alarme font-barlow text-sm uppercase tracking-[0.12em] transition-all"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
