"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, Check } from "lucide-react";
import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="border border-or-fane/50 bg-or-fane/5 p-8 sm:p-12 text-center">
        <Check className="w-10 h-10 text-or-fane mx-auto mb-4" />
        <h2 className="font-bebas text-3xl text-or-fane mb-2">Message envoyé</h2>
        <p className="font-space text-sm text-blanc-papier/50">
          On a reçu ton message. Si t&apos;es pas un robot, on te répondra.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-2">
            Nom / Pseudo
          </label>
          <input
            type="text"
            placeholder="Anonyme"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border border-gris-beton px-4 py-3 font-space text-sm text-blanc-papier placeholder:text-blanc-papier/25 focus:outline-none focus:border-rouge-alarme transition-colors"
          />
        </div>

        <div>
          <label className="block font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            placeholder="ton@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border border-gris-beton px-4 py-3 font-space text-sm text-blanc-papier placeholder:text-blanc-papier/25 focus:outline-none focus:border-rouge-alarme transition-colors"
          />
        </div>

        <div>
          <label className="block font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-2">
            Message *
          </label>
          <textarea
            required
            rows={6}
            placeholder="Dis-nous tout. Ou presque."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border border-gris-beton px-4 py-3 font-space text-sm text-blanc-papier placeholder:text-blanc-papier/25 focus:outline-none focus:border-rouge-alarme transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center gap-3 bg-rouge-alarme hover:bg-rouge-alarme/90 text-blanc-papier px-6 py-3 font-barlow text-sm uppercase tracking-[0.12em] transition-all disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Envoi...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Envoyer le message
            </>
          )}
        </button>
      </form>

      {/* Side info */}
      <div className="space-y-8">
        <div>
          <h3 className="font-barlow text-lg text-blanc-papier/70 mb-3">
            Autres moyens de nous joindre
          </h3>
          <div className="space-y-3">
            <a
              href="mailto:hello@onnousment.com"
              className="flex items-center gap-3 font-space text-sm text-blanc-papier/40 hover:text-rouge-alarme transition-colors"
            >
              <span className="w-8 h-8 border border-gris-beton flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              hello@onnousment.com
            </a>

            <Link
              href="https://instagram.com/onnousment"
              target="_blank"
              className="flex items-center gap-3 font-space text-sm text-blanc-papier/40 hover:text-rouge-alarme transition-colors"
            >
              <span className="w-8 h-8 border border-gris-beton flex items-center justify-center">
                <InstagramIcon className="w-4 h-4" />
              </span>
              @onnousment
            </Link>

            <Link
              href="https://tiktok.com/@onnousment"
              target="_blank"
              className="flex items-center gap-3 font-space text-sm text-blanc-papier/40 hover:text-rouge-alarme transition-colors"
            >
              <span className="w-8 h-8 border border-gris-beton flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </span>
              @onnousment
            </Link>
          </div>
        </div>

        <div className="border border-gris-beton/50 p-6">
          <p className="font-barlow text-sm text-blanc-papier/60 italic">
            &ldquo;Toute vérité franchit trois étapes. D&apos;abord, elle est ridiculisée.
            Ensuite, elle reçoit une opposition violente. Enfin, elle est acceptée
            comme une évidence.&rdquo;
          </p>
          <p className="mt-3 font-space text-xs text-blanc-papier/25">
            — Schopenhauer (détourné)
          </p>
        </div>
      </div>
    </div>
  );
}
