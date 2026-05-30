"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sloganCategories, type SloganCategory } from "@/data/slogans";
import { Search, Shuffle, Copy, Check } from "lucide-react";

export default function SloganWall() {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");
  const [search, setSearch] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredSlogans = useMemo(() => {
    let list = activeCategory === "all"
      ? sloganCategories.flatMap((c) => c.slogans.map((s) => ({ text: s, category: c.name, catId: c.id })))
      : sloganCategories.find((c) => c.id === activeCategory)?.slogans.map((s) => ({
          text: s,
          category: sloganCategories.find((c) => c.id === activeCategory)!.name,
          catId: activeCategory,
        })) || [];

    if (search) {
      const q = search.toLowerCase();
      list = list.filter((s) => s.text.toLowerCase().includes(q));
    }
    return list;
  }, [activeCategory, search]);

  const copySlogan = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {}
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "font-space text-xs uppercase tracking-[0.1em] px-3 py-1.5 border transition-all",
            activeCategory === "all"
              ? "border-rouge-alarme text-rouge-alarme bg-rouge-alarme/10"
              : "border-gris-beton text-blanc-papier/50 hover:border-blanc-papier/30"
          )}
        >
          Tout ({sloganCategories.reduce((a, c) => a + c.slogans.length, 0)})
        </button>
        {sloganCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "font-space text-xs uppercase tracking-[0.1em] px-3 py-1.5 border transition-all",
              activeCategory === cat.id
                ? "border-rouge-alarme text-rouge-alarme bg-rouge-alarme/10"
                : "border-gris-beton text-blanc-papier/50 hover:border-blanc-papier/30"
            )}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blanc-papier/30" />
        <input
          type="text"
          placeholder="Chercher un slogan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent border border-gris-beton pl-10 pr-4 py-3 font-space text-sm text-blanc-papier placeholder:text-blanc-papier/25 focus:outline-none focus:border-rouge-alarme transition-colors"
        />
      </div>

      {/* Slogan grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredSlogans.map((slogan, idx) => (
          <motion.div
            key={`${slogan.catId}-${idx}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: (idx % 20) * 0.03 }}
            layout
            className={cn(
              "group relative border border-gris-beton/50 p-4 cursor-pointer transition-all duration-300 hover:border-rouge-alarme/50 hover:bg-rouge-alarme/[0.02]",
              copiedIndex === idx && "border-or-fane"
            )}
            onClick={() => copySlogan(slogan.text, idx)}
          >
            <p className="font-barlow text-base sm:text-lg text-blanc-papier/80 leading-relaxed pr-6">
              {slogan.text}
            </p>
            <span className="font-space text-[9px] uppercase tracking-[0.15em] text-blanc-papier/20 mt-2 block">
              {slogan.category}
            </span>

            {/* Copy button */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {copiedIndex === idx ? (
                <Check className="w-4 h-4 text-or-fane" />
              ) : (
                <Copy className="w-4 h-4 text-blanc-papier/30 hover:text-blanc-papier" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredSlogans.length === 0 && (
        <p className="text-center font-space text-sm text-blanc-papier/30 py-12">
          Aucun slogan trouvé. Change tes filtres.
        </p>
      )}

      {/* Stats */}
      <p className="mt-8 text-center font-space text-xs text-blanc-papier/20">
        {filteredSlogans.length} slogan{filteredSlogans.length > 1 ? "s" : ""} — Clique pour copier
      </p>
    </div>
  );
}
