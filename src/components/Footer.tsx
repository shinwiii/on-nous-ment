"use client";

import { useCensure } from "@/components/CensureMode";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
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

export default function Footer() {
  const { active } = useCensure();

  return (
    <footer
      className={cn(
        "border-t border-gris-beton/50 py-12 sm:py-16 transition-all duration-300",
        active && "border-rouge-alarme/30"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-bebas text-2xl tracking-[0.15em] text-blanc-papier hover:text-rouge-alarme transition-colors">
              ON NOUS MENT
            </Link>
            <p className="mt-3 text-sm text-blanc-papier/40 font-space leading-relaxed max-w-xs">
              Streetwear engagé. Chaque pièce est un message. Chaque message est une question.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-barlow text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/collection", label: "Collection" },
                { href: "/slogans", label: "Slogans" },
                { href: "/generateur", label: "Générateur" },
                { href: "/manifeste", label: "Manifeste" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-blanc-papier/50 hover:text-rouge-alarme transition-colors font-space"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-barlow text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/contact", label: "Nous écrire" },
                { href: "mailto:hello@onnousment.com", label: "hello@onnousment.com" },
              ].map((l) => (
                <li key={l.href}>
                  {l.href.startsWith("mailto:") ? (
                    <a
                      href={l.href}
                      className="text-sm text-blanc-papier/50 hover:text-rouge-alarme transition-colors font-space"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm text-blanc-papier/50 hover:text-rouge-alarme transition-colors font-space"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com/onnousment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blanc-papier/40 hover:text-rouge-alarme transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com/@onnousment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blanc-papier/40 hover:text-rouge-alarme transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Censure Mode badge */}
          <div>
            <h4 className="font-barlow text-xs uppercase tracking-[0.15em] text-blanc-papier/50 mb-4">
              Mode
            </h4>
            <div
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-space border transition-all",
                active
                  ? "bg-rouge-alarme/20 border-rouge-alarme text-rouge-alarme"
                  : "border-gris-beton text-blanc-papier/40"
              )}
            >
              <Sparkles className="w-3 h-3" />
              Censure {active ? "ACTIVE" : "INACTIVE"}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gris-beton/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blanc-papier/30 font-space">
            &copy; {new Date().getFullYear()} ON NOUS MENT. Tous droits réservés.
          </p>
          <p className="text-xs text-blanc-papier/20 font-space">
            [ Ce message n&apos;a pas été approuvé par le Ministère de la Vérité ]
          </p>
        </div>
      </div>
    </footer>
  );
}
