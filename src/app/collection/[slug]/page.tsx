import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ShoppingBag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — ON NOUS MENT`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div className="aspect-[3/4] bg-gris-beton/30 border border-gris-beton/50 flex items-center justify-center p-8 sm:p-12">
          <p className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-center text-blanc-papier/15 leading-relaxed tracking-[0.05em] select-none">
            {product.slogan}
          </p>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <span className="font-space text-xs uppercase tracking-[0.15em] text-rouge-alarme">
              {product.category}
            </span>
          </div>

          <h1 className="font-bebas text-4xl sm:text-6xl text-blanc-papier leading-none">
            {product.name}
          </h1>

          <p className="mt-6 font-barlow text-lg text-or-fane">{product.price} €</p>

          <p className="mt-4 font-space text-sm text-blanc-papier/50 leading-relaxed">
            {product.description}
          </p>

          {/* Sizes */}
          <div className="mt-8">
            <p className="font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-3">
              Tailles disponibles
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gris-beton font-space text-sm text-blanc-papier/70 hover:border-rouge-alarme hover:text-rouge-alarme transition-all"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button
              disabled
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-rouge-alarme hover:bg-rouge-alarme/90 text-blanc-papier px-8 py-4 font-barlow text-base uppercase tracking-[0.12em] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-5 h-5" />
              Bientôt disponible
            </button>
            <p className="mt-2 font-space text-xs text-blanc-papier/25">
              Précommande disponible au lancement
            </p>
          </div>

          {/* Slogan */}
          <div className="mt-10 pt-6 border-t border-gris-beton/30">
            <p className="font-space text-[10px] uppercase tracking-[0.15em] text-blanc-papier/30 mb-2">
              Slogan
            </p>
            <p className="font-barlow text-lg text-blanc-papier/60 italic">
              &ldquo;{product.slogan}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
