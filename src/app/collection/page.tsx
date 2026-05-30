import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CensoredText from "@/components/CensoredText";

export const metadata: Metadata = {
  title: "Collection — ON NOUS MENT",
  description: "Découvre notre collection de streetwear engagé. T-shirts, hoodies, accessoires.",
};

export default function CollectionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-space text-xs uppercase tracking-[0.2em] text-rouge-alarme">
            [ Collection ]
          </span>
          <div className="h-px flex-1 bg-gris-beton/50" />
        </div>
        <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-blanc-papier leading-none tracking-[0.02em]">
          Porte le <CensoredText color="rouge">message</CensoredText>
        </h1>
        <p className="mt-4 font-space text-sm sm:text-base text-blanc-papier/40 max-w-xl">
          Chaque vêtement est une déclaration. Choisis celui qui te ressemble.
        </p>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} />
        ))}
      </div>
    </div>
  );
}
