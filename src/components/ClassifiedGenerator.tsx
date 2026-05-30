"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sloganCategories } from "@/data/slogans";
import { Shuffle, Download, Copy, Check } from "lucide-react";

type StampType = "classified" | "confidentiel" | "secret" | "top-secret";
type Theme = "noir" | "rouge" | "blanc";

const stamps: Record<StampType, { label: string; color: string }> = {
  classified: { label: "CLASSIFIÉ", color: "#D4001A" },
  confidentiel: { label: "CONFIDENTIEL", color: "#C8B400" },
  secret: { label: "SECRET", color: "#0A0A0A" },
  "top-secret": { label: "TOP SECRET", color: "#D4001A" },
};

export default function ClassifiedGenerator() {
  const allSlogans = sloganCategories.flatMap((c) => c.slogans);
  const [slogan, setSlogan] = useState(allSlogans[0]);
  const [stamp, setStamp] = useState<StampType>("classified");
  const [reference, setReference] = useState(
    `ONM-${String(Math.floor(Math.random() * 9999)).padStart(4, "0")}`
  );
  const [copied, setCopied] = useState(false);

  const randomize = useCallback(() => {
    const randomSlogan = allSlogans[Math.floor(Math.random() * allSlogans.length)];
    const randomStamp = Object.keys(stamps)[
      Math.floor(Math.random() * Object.keys(stamps).length)
    ] as StampType;
    setSlogan(randomSlogan);
    setStamp(randomStamp);
    setReference(`ONM-${String(Math.floor(Math.random() * 9999)).padStart(4, "0")}`);
  }, []);

  const copyImage = useCallback(async () => {
    const el = document.getElementById("classified-preview");
    if (!el) return;
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const rect = el.getBoundingClientRect();
      canvas.width = rect.width * 2;
      canvas.height = rect.height * 2;
      ctx.scale(2, 2);

      // Background
      ctx.fillStyle = "#F0EDE6";
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Border
      ctx.strokeStyle = "#0A0A0A";
      ctx.lineWidth = 3;
      ctx.strokeRect(10, 10, rect.width - 20, rect.height - 20);
      ctx.lineWidth = 1;
      ctx.strokeRect(15, 15, rect.width - 30, rect.height - 30);

      // Reference
      ctx.fillStyle = "#0A0A0A";
      ctx.font = "12px 'Space Mono', monospace";
      ctx.fillText(`RÉF: ${reference}`, 25, 40);

      // Date
      const d = new Date().toLocaleDateString("fr-FR");
      ctx.fillText(`DATE: ${d}`, 25, 58);

      // Divider
      ctx.strokeStyle = "#0A0A0A";
      ctx.beginPath();
      ctx.moveTo(25, 70);
      ctx.lineTo(rect.width - 25, 70);
      ctx.stroke();

      // Slogan
      ctx.font = "bold 24px 'Bebas Neue', sans-serif";
      ctx.fillStyle = "#0A0A0A";
      ctx.textAlign = "center";
      wrapText(ctx, slogan, rect.width / 2, 130, rect.width - 80, 32);

      // Stamp
      const stampInfo = stamps[stamp];
      ctx.save();
      ctx.translate(rect.width - 70, rect.height - 70);
      ctx.rotate(-0.3);
      ctx.strokeStyle = stampInfo.color;
      ctx.lineWidth = 3;
      ctx.strokeRect(-50, -20, 100, 40);
      ctx.fillStyle = stampInfo.color + "20";
      ctx.fillRect(-50, -20, 100, 40);
      ctx.font = "bold 14px 'Bebas Neue', sans-serif";
      ctx.fillStyle = stampInfo.color;
      ctx.textAlign = "center";
      ctx.fillText(stampInfo.label, 0, 5);
      ctx.restore();

      // Footer
      ctx.fillStyle = "#0A0A0A80";
      ctx.font = "10px 'Space Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(
        "DOCUMENT CLASSIFIÉ — DIFFUSION INTERDITE",
        rect.width / 2,
        rect.height - 25
      );

      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((b) => resolve(b!), "image/png")
      );
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }, [slogan, stamp, reference]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Generator controls */}
      <div>
        <div className="space-y-6">
          {/* Slogan */}
          <div>
            <label className="block font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-2">
              Slogan
            </label>
            <select
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
              className="w-full bg-noir-censure border border-gris-beton px-4 py-3 font-barlow text-sm text-blanc-papier focus:outline-none focus:border-rouge-alarme transition-colors"
            >
              {allSlogans.map((s) => (
                <option key={s} value={s} className="bg-noir-censure">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Stamp type */}
          <div>
            <label className="block font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-2">
              Type de tampon
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(stamps).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setStamp(key as StampType)}
                  className={cn(
                    "font-barlow text-xs uppercase tracking-[0.1em] px-3 py-2 border transition-all",
                    stamp === key
                      ? "border-rouge-alarme text-rouge-alarme bg-rouge-alarme/10"
                      : "border-gris-beton text-blanc-papier/50 hover:border-blanc-papier/30"
                  )}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reference */}
          <div>
            <label className="block font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-2">
              Référence
            </label>
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="w-full bg-transparent border border-gris-beton px-4 py-3 font-space text-sm text-blanc-papier focus:outline-none focus:border-rouge-alarme transition-colors"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={randomize}
              className="flex items-center gap-2 px-5 py-3 border border-gris-beton text-blanc-papier/70 hover:text-blanc-papier hover:border-blanc-papier/30 font-barlow text-sm uppercase tracking-[0.12em] transition-all"
            >
              <Shuffle className="w-4 h-4" />
              Aléatoire
            </button>
            <button
              onClick={copyImage}
              className="flex items-center gap-2 px-5 py-3 bg-rouge-alarme hover:bg-rouge-alarme/90 text-blanc-papier font-barlow text-sm uppercase tracking-[0.12em] transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copié !
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copier l&apos;image
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div>
        <p className="font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-4">
          Aperçu
        </p>
        <motion.div
          key={slogan + stamp}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          id="classified-preview"
          className="relative bg-blanc-papier p-8 sm:p-10 min-h-[350px] flex flex-col"
        >
          {/* Double border */}
          <div className="absolute inset-2 border-2 border-noir-censure" />
          <div className="absolute inset-4 border border-noir-censure" />

          {/* Header */}
          <div className="relative z-10 flex justify-between items-start">
            <div className="font-space text-[10px] sm:text-xs text-noir-censure/60 leading-relaxed">
              <p>RÉF: {reference}</p>
              <p>DATE: {new Date().toLocaleDateString("fr-FR")}</p>
            </div>
            <div className="font-bebas text-xs tracking-[0.2em] text-noir-censure/30">
              ONM
            </div>
          </div>

          <div className="relative z-10 flex-1 flex items-center justify-center">
            <p className="font-bebas text-2xl sm:text-3xl text-noir-censure text-center leading-relaxed max-w-xs sm:max-w-sm">
              {slogan}
            </p>
          </div>

          {/* Stamp */}
          <div className="relative z-10 self-end">
            <div
              className="border-2 -rotate-[15deg] px-4 py-1.5 font-bebas text-base tracking-[0.08em] text-center"
              style={{ borderColor: stamps[stamp].color, color: stamps[stamp].color }}
            >
              {stamps[stamp].label}
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 mt-4 text-center">
            <p className="font-space text-[8px] sm:text-[10px] text-noir-censure/40 tracking-[0.15em]">
              DOCUMENT CLASSIFIÉ — DIFFUSION INTERDITE
            </p>
          </div>
        </motion.div>

        <p className="mt-2 text-center font-space text-[10px] text-blanc-papier/20">
          Prévisualisation — Copie l&apos;image pour la partager
        </p>
      </div>
    </div>
  );
}

// Helper to wrap text on canvas
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;

  for (const word of words) {
    const testLine = line + word + " ";
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word + " ";
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
}
