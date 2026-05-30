import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono, Barlow_Condensed } from "next/font/google";
import { CensureProvider } from "@/components/CensureMode";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "ON NOUS MENT — Streetwear Engagé",
  description:
    "Des vêtements qui portent un message. Chaque pièce est une question. Chaque question est un acte.",
  openGraph: {
    title: "ON NOUS MENT — Streetwear Engagé",
    description:
      "Des vêtements qui portent un message. Chaque pièce est une question. Chaque question est un acte.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${spaceMono.variable} ${barlowCondensed.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <CensureProvider>
          <Header />
          <main className="flex-1 pt-16 sm:pt-20">{children}</main>
          <Footer />
        </CensureProvider>
      </body>
    </html>
  );
}
