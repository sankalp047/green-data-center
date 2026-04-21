"use client";

import { motion } from "framer-motion";
import { Zap, Square, Wifi, Droplets, MapPin } from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Power Infrastructure",
    items: [
      "Initial: Minimum 20 MW, scalable to 1 GW",
      "Substation adjacent or within 5–10 km",
      "Voltage: 138 kV / 400 kV preferred",
      "Dual power feeds (N+1 / 2N redundancy)",
      "High reliability, competitive industrial tariff",
      "Gas pipeline access for backup/hybrid (optional)",
    ],
  },
  {
    icon: Square,
    title: "Land Requirements",
    items: [
      "Planning ratio: ~1 acre per 3 MW",
      "Minimum parcel: 25–50 acres; Ideal: 100+ acres",
      "Single contiguous parcel",
      "Industrial / IT zoning (or convertible)",
      "Clear title, litigation-free",
      "Low flood & seismic risk",
    ],
  },
  {
    icon: Wifi,
    title: "Connectivity",
    items: [
      "100 Gbps+ dedicated dark fiber (scalable to Tbps)",
      "Multiple providers (Airtel, Jio, Tata for India)",
      "Redundant routes, ring topology preferred",
      "Proximity to backbone fiber / IXPs",
    ],
  },
  {
    icon: Droplets,
    title: "Water & Location",
    items: [
      "Reliable industrial water source for cooling",
      "Sustainable long-term supply",
      "Within 50–80 km of a major city",
      "Good road connectivity for heavy equipment",
      "Access to skilled workforce",
    ],
  },
];

export default function Requirements() {
  return (
    <section id="requirements" className="py-28 lg:py-36 relative bg-[#040D07]">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#22C55E]" />
          <span className="text-xs tracking-[0.25em] text-[#22C55E] uppercase font-semibold">Site Qualification</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-[#F0F4F0]"
          >
            Power &<br />
            Land<br />
            <span className="text-gradient">Standards</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            <p className="text-[#6B8F76] text-lg leading-relaxed">
              Every site in our portfolio meets the same rigorous power-first qualification criteria. These aren&apos;t preferences — they&apos;re non-negotiables that protect tenant uptime and long-term economics.
            </p>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#22C55E]" />
              <span className="text-sm text-[#6B8F76]">Target States (India): Maharashtra · Andhra Pradesh · Madhya Pradesh</span>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="p-7 rounded-2xl bg-[rgba(8,21,16,0.7)] border border-[rgba(34,197,94,0.1)] hover:border-[rgba(34,197,94,0.25)] transition-all duration-400"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(34,197,94,0.1)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#22C55E]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-[#F0F4F0]">{cat.title}</h3>
                </div>
                <div className="space-y-2.5">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-[#22C55E] opacity-60" />
                      <span className="text-sm text-[#6B8F76] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
