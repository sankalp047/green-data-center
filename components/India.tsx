"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const states = [
  { name: "Maharashtra", detail: "Mumbai proximity, strong fiber backbone infrastructure", highlight: "Primary Hub" },
  { name: "Andhra Pradesh", detail: "State incentives, access to renewable power sources", highlight: "Renewable Focus" },
  { name: "Madhya Pradesh", detail: "Large land availability, competitive power tariffs", highlight: "Land Scale" },
];

const drivers = [
  "Fastest-growing AI market globally",
  "Microsoft, Google, Amazon, Reliance announcing multi-billion-dollar programs",
  "Acute shortage of power-ready hyperscale sites",
  "Proven power-first model applied to greenfield India sites",
];

export default function India() {
  return (
    <section id="india" className="py-28 lg:py-36 relative bg-[#F8FAF8]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">Global Expansion</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(22,163,74,0.08)] border border-[rgba(22,163,74,0.2)] mb-6">
                <Leaf className="w-3.5 h-3.5 text-[#16A34A]" />
                <span className="text-xs font-semibold text-[#16A34A] tracking-wider">The Next Hyperscale Frontier</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15 }}
              className="text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-[#111811] mb-4"
            >
              India<br />
              <span className="text-gradient">20 MW → 1 GW</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2 }}
              className="text-[#4A6B52] text-lg leading-relaxed mb-8"
            >
              The same power-first model proven across U.S. markets, now applied to India&apos;s fastest-growing digital infrastructure landscape.
            </motion.p>

            <div className="space-y-3 mb-10">
              {drivers.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  <p className="text-[#111811] text-sm leading-relaxed">{d}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-white border border-[rgba(22,163,74,0.15)] shadow-card"
            >
              <div className="text-xs font-semibold tracking-[0.2em] text-[#16A34A] uppercase mb-3">Partner Model</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-[#111811] mb-1">We Operate</div>
                  <div className="text-[#4A6B52]">Capital, technical expertise, power infrastructure, end customers</div>
                </div>
                <div>
                  <div className="font-semibold text-[#111811] mb-1">Partners Provide</div>
                  <div className="text-[#4A6B52]">Land, approvals, and local utility connections</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2 }}
              className="text-xs font-semibold tracking-[0.2em] text-[#8AAA90] uppercase mb-4"
            >
              Target States
            </motion.div>
            {states.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-2xl bg-white border border-[rgba(22,163,74,0.1)] hover:border-[rgba(22,163,74,0.3)] hover:shadow-card transition-all duration-400"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#111811]">{s.name}</h3>
                  <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#16A34A] bg-[rgba(22,163,74,0.08)] rounded-full border border-[rgba(22,163,74,0.2)]">
                    {s.highlight}
                  </span>
                </div>
                <p className="text-sm text-[#4A6B52]">{s.detail}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-[#16A34A] flex items-center justify-between"
            >
              <div>
                <div className="text-4xl font-bold text-white">1 GW</div>
                <div className="text-sm text-white/70 mt-0.5">India Scale Target</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/70">Partner model:</div>
                <div className="text-white font-semibold">We operate,<br />you provide land</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
