"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface EmailCaptureProps {
  className?: string;
}

export default function EmailCapture({ className }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [count] = useState(2847); // Simulated counter

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  };

  return (
    <div className={cn("max-w-md", className)}>
      <p className="font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/40 mb-1">
        Rejoins la liste d&apos;attente
      </p>
      {status === "success" ? (
        <div className="flex items-center gap-3 text-or-fane font-barlow text-lg">
          <Check className="w-5 h-5" />
          <span>Inscrit·e. On te tient au courant.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="ton@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border border-gris-beton px-4 py-3 font-space text-sm text-blanc-papier placeholder:text-blanc-papier/25 focus:outline-none focus:border-rouge-alarme transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-rouge-alarme hover:bg-rouge-alarme/90 text-blanc-papier px-5 py-3 font-barlow text-sm uppercase tracking-[0.12em] transition-all flex items-center gap-2 disabled:opacity-60"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </form>
      )}
      <p className="mt-2 font-space text-xs text-blanc-papier/30">
        <span className="font-bold text-or-fane">{count.toLocaleString()}</span> déjà inscrit·es
      </p>
    </div>
  );
}
