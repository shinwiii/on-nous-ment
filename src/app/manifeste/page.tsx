import type { Metadata } from "next";
import CensoredText from "@/components/CensoredText";

export const metadata: Metadata = {
  title: "Manifeste — ON NOUS MENT",
  description: "Le manifeste de ON NOUS MENT. Pourquoi on fait ça, ce qu'on défend.",
};

export default function ManifestePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-rouge-alarme">
            [ Manifeste ]
          </span>
          <div className="h-px flex-1 bg-gris-beton/50" />
        </div>
        <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-blanc-papier leading-none tracking-[0.02em]">
          Le <CensoredText color="rouge">manifeste</CensoredText>
        </h1>
      </div>

      <div className="space-y-8 font-space text-sm sm:text-base text-blanc-papier/60 leading-relaxed">
        <p className="text-lg sm:text-xl text-blanc-papier/80 font-barlow">
          On nous ment. Depuis toujours.
        </p>

        <p>
          Les médias nous vendent une réalité qui n&apos;existe pas. La politique nous berne avec
          des promesses qui s&apos;éteignent au lendemain des urnes. La publicité nous chuchote
          qu&apos;on n&apos;est pas assez bien, et qu&apos;un produit nous complétera. La société nous
          demande de consommer, d&apos;obéir, d&apos;oublier.
        </p>

        <p>
          ON NOUS MENT est né de ce constat. Pas pour pleurer — pour agir. Pas pour
          philosopher — pour affirmer. Pas pour vendre — pour éveiller.
        </p>

        <p>
          Chaque vêtement que nous créons porte un message. Pas un logo tape-à-l&apos;oeil. Pas une
          signature de designer. Un <span className="text-rouge-alarme">message</span>. Une phrase qui
          gratte là où ça fait du bien. Un rappel qu&apos;on peut encore penser par soi-même.
        </p>

        <p>
          Nous ne sommes pas une marque de plus dans le paysage du streetwear. Nous sommes un
          <span className="text-blanc-papier/80"> support de contre-information</span>. Une
          contre-publicité ambulante. Un murmure qui grandit.
        </p>

        <div className="my-12 py-8 border-y border-gris-beton/50">
          <p className="font-bebas text-3xl sm:text-4xl text-rouge-alarme text-center tracking-[0.05em]">
            &ldquo;La vérité n&apos;est plus un droit, c&apos;est une contrebande.&rdquo;
          </p>
        </div>

        <p>
          Ce que nous défendons :
        </p>

        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-rouge-alarme mt-1">✦</span>
            <span><strong className="text-blanc-papier/70">L&apos;esprit critique</strong> — douter est un devoir civique.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rouge-alarme mt-1">✦</span>
            <span><strong className="text-blanc-papier/70">La liberté d&apos;expression</strong> — tout ce qui n&apos;est pas dit est perdu.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rouge-alarme mt-1">✦</span>
            <span><strong className="text-blanc-papier/70">La transparence</strong> — nous disons ce que nous faisons, nous faisons ce que nous disons.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-rouge-alarme mt-1">✦</span>
            <span><strong className="text-blanc-papier/70">L&apos;indépendance</strong> — pas de financement douteux, pas de compromis éditoriaux.</span>
          </li>
        </ul>

        <p className="mt-8">
          Nos vêtements sont imprimés à la demande via Printful, en partenariat avec Shopify. Pas de
          stock, pas de gaspillage, pas de surproduction. Chaque pièce est fabriquée quand quelqu&apos;un
          décide de porter le message.
        </p>

        <p>
          On ne va pas changer le monde avec un t-shirt. Mais on peut planter une graine.
          Et si des milliers de personnes portent la même graine, elle devient une forêt.
        </p>

        <div className="mt-12 pt-8 border-t border-gris-beton/30">
          <p className="font-barlow text-lg text-rouge-alarme">
            ON NOUS MENT — Depuis toujours.
          </p>
        </div>
      </div>
    </div>
  );
}
