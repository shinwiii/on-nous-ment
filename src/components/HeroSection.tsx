"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import EmailCapture from "@/components/EmailCapture";
import Countdown from "@/components/Countdown";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #F0EDE6 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-space text-[10px] sm:text-xs uppercase tracking-[0.2em] text-rouge-alarme border border-rouge-alarme/30 px-3 py-1.5 inline-block">
            [ Streetwear Engagé ]
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlitchText
            text="ON NOUS MENT"
            as="h1"
            className="text-6xl sm:text-8xl lg:text-[10rem] font-bebas leading-none tracking-[0.05em] text-blanc-papier"
          />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 font-space text-sm sm:text-base text-blanc-papier/50 max-w-xl mx-auto leading-relaxed"
        >
          Des vêtements qui portent un message.
          <br />
          Chaque pièce est une question. Chaque question est un acte.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-14"
        >
          <p className="font-space text-xs uppercase tracking-[0.15em] text-blanc-papier/30 mb-4">
            Lancement dans
          </p>
          <Countdown className="justify-center" />
        </motion.div>

        {/* Email capture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-14 flex justify-center"
        >
          <EmailCapture />
        </motion.div>
      </div>
    </section>
  );
}
