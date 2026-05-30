"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCensure } from "@/components/CensureMode";
import { Shield, ShieldX, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/slogans", label: "Slogans" },
  { href: "/generateur", label: "Générateur" },
  { href: "/manifeste", label: "Manifeste" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { active, toggle } = useCensure();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-gris-beton/50 backdrop-blur-xl bg-noir-censure/80 transition-all duration-300",
        active && "bg-rouge-alarme/10 border-rouge-alarme/30"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={cn(
                "font-bebas text-2xl sm:text-3xl tracking-[0.15em] transition-colors",
                active ? "text-rouge-alarme" : "text-blanc-papier group-hover:text-rouge-alarme"
              )}
            >
              ON NOUS MENT
            </span>
            <span className="font-space text-[10px] uppercase tracking-[0.2em] text-gris-beton hidden sm:block">
              [classifié]
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-barlow text-sm uppercase tracking-[0.12em] transition-all duration-200 relative group",
                  pathname === link.href
                    ? "text-rouge-alarme"
                    : "text-blanc-papier/70 hover:text-blanc-papier"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[1px] bg-rouge-alarme transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Censure toggle */}
            <button
              onClick={toggle}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-space uppercase tracking-[0.12em] border transition-all duration-300",
                active
                  ? "bg-rouge-alarme/20 border-rouge-alarme text-rouge-alarme"
                  : "border-gris-beton text-blanc-papier/60 hover:border-rouge-alarme hover:text-rouge-alarme"
              )}
              title="Activer le Mode Censure"
            >
              {active ? (
                <>
                  <ShieldX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Censure ON</span>
                </>
              ) : (
                <>
                  <Shield className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Censure OFF</span>
                </>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-blanc-papier"
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-gris-beton/50 bg-noir-censure/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block font-barlow text-base uppercase tracking-[0.12em] py-2 transition-colors",
                  pathname === link.href
                    ? "text-rouge-alarme"
                    : "text-blanc-papier/60 hover:text-blanc-papier"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
