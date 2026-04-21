"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

const markets = ["INDIANA", "LOUISIANA", "TEXAS", "CHICAGO", "INDIA"];

const stats = [
  { value: "700+", unit: "MW", label: "Total Pipeline" },
  { value: "10", unit: "MW", label: "Live & Imminent" },
  { value: "99.999", unit: "%", label: "Uptime SLA" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Video background — zoomed in and looping */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
        style={{ transformOrigin: "center center" }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
      {/* Subtle green tint at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#040D07]/60 to-transparent" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">
        {/* Market tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {markets.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#22C55E] bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
            >
              <MapPin className="w-2.5 h-2.5" />
              {m}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-20 items-end">
          <div className="min-w-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.95] tracking-tight"
            >
              <span className="text-white">Power.</span>
              <br />
              <span className="text-gradient">Secured.</span>
              <br />
              <span className="text-white">Execution-</span>
              <br />
              <span className="text-white">Ready.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed"
            >
              Grid + Natural Gas Hybrid infrastructure built for the next generation
              of AI and enterprise workloads. Land-controlled, power-secured, and
              ready to deploy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#partner"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#22C55E] text-[#040D07] font-semibold rounded-xl hover:bg-[#16A34A] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)] text-sm"
              >
                Explore Partnership
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#locations"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
              >
                View Sites
              </a>
            </motion.div>
          </div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-row lg:flex-col gap-3 lg:gap-4 lg:mb-2"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 lg:flex-none px-3 lg:px-5 py-3 lg:py-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md min-w-0"
              >
                <div className="text-2xl lg:text-3xl font-bold text-white leading-none">
                  {s.value}
                  <span className="text-[#22C55E] text-xl">{s.unit}</span>
                </div>
                <div className="mt-1.5 text-xs text-white/60 tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom tag line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden"
        >
          <p className="text-xs tracking-wide lg:tracking-[0.25em] text-white/40 uppercase font-medium">
            Multi-State · Grid + Natural Gas Hybrid · 700+ MW Pipeline
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse-glow" />
            <span className="text-xs text-white/60 tracking-wide">10 MW Deployed & Generating Revenue</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
