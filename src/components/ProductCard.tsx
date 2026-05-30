"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type Product } from "@/data/products";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/collection/${product.slug}`} className="group block">
        <div className="relative aspect-[3/4] bg-gris-beton/30 border border-gris-beton/50 overflow-hidden">
          {/* Placeholder image with slogan */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <p className="font-bebas text-xl sm:text-2xl text-center text-blanc-papier/20 leading-relaxed tracking-[0.05em] select-none">
              {product.slogan}
            </p>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-rouge-alarme/0 group-hover:bg-rouge-alarme/10 transition-all duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="font-barlow text-xs uppercase tracking-[0.15em] text-rouge-alarme border border-rouge-alarme px-4 py-2">
                Voir le produit
              </span>
            </div>
          </div>

          {/* Category badge */}
          <span className="absolute top-3 left-3 font-space text-[10px] uppercase tracking-[0.12em] text-blanc-papier/40 bg-noir-censure/80 px-2 py-1">
            {product.category}
          </span>

          {/* Price */}
          <span className="absolute bottom-3 right-3 font-bebas text-xl text-or-fane">
            {product.price} €
          </span>
        </div>

        <div className="mt-3 space-y-1">
          <h3 className="font-barlow text-sm uppercase tracking-[0.1em] text-blanc-papier group-hover:text-rouge-alarme transition-colors">
            {product.name}
          </h3>
          <p className="font-space text-[11px] text-blanc-papier/40 line-clamp-1">
            {product.slogan}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
