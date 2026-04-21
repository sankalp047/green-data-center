"use client";

import { motion } from "framer-motion";

const phases = [
  {
    phase: "Now",
    capacity: "10 MW",
    label: "Live & Imminent Deployment",
    detail: "Indiana campus operational — Fortune 500 demand",
  },
  {
    phase: "6–12 Mo",
    capacity: "+10 MW",
    label: "Additional Capacity Online",
    detail: "Louisiana grid power from Entergy",
  },
  {
    phase: "18 Mo",
    capacity: "+40 MW",
    label: "Gas Plant Construction Complete",
    detail: "Louisiana — 40 MW on-site generation",
  },
  {
    phase: "36 Mo",
    capacity: "+100 MW",
    label: "Transmission Natural Gas",
    detail: "Louisiana long-term gas build-out",
  },
  {
    phase: "48 Mo",
    capacity: "+350 MW",
    label: "Grid Commitment Executed",
    detail: "Louisiana — 400+ MW AI training campus capable",
  },
  {
    phase: "Pipeline",
    capacity: "+200 MW",
    label: "Texas & Chicago Expansion",
    detail: "ERCOT deregulated + Midwest enterprise demand",
  },
];

export default function CapacityTimeline() {
  return (
    <section id="capacity" className="py-28 lg:py-36 relative bg-[#F8FAF8]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">Capacity Timeline</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-[#111811]">
              700+ MW<br />
              <span className="text-gradient">Phased</span><br />
              Execution
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#4A6B52] text-lg leading-relaxed mb-4">
              Secured commitments, not speculation. Every phase is backed by signed agreements and executed utility contracts.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-[#16A34A] to-transparent" />
              <span className="text-xs text-[#8AAA90] tracking-widest uppercase">18 months ahead of competitors</span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group flex items-start gap-5 p-6 rounded-2xl bg-white border border-[rgba(22,163,74,0.1)] hover:border-[rgba(22,163,74,0.3)] hover:shadow-card transition-all duration-400"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center text-center bg-[rgba(22,163,74,0.08)] border border-[rgba(22,163,74,0.2)]">
                <span className="text-[9px] font-bold text-[#4A6B52] tracking-wider leading-none">{phase.phase}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl font-bold text-[#16A34A]">{phase.capacity}</span>
                </div>
                <div className="text-sm font-semibold text-[#111811] mb-1">{phase.label}</div>
                <div className="text-xs text-[#4A6B52]">{phase.detail}</div>
              </div>

              <div className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.2em] text-[#8AAA90]">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 p-8 rounded-2xl bg-white border border-[rgba(22,163,74,0.2)] shadow-card flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <div className="text-sm text-[#4A6B52] mb-1 tracking-wide">Total Pipeline Potential</div>
            <div className="text-5xl font-bold text-[#16A34A]">700+ MW</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-[#4A6B52] mb-1">Strategic Markets</div>
            <div className="text-lg font-semibold text-[#111811]">IN · LA · TX · CHI · INDIA</div>
            <div className="text-xs text-[#8AAA90] mt-1">Solar lead-time advantage · 18 months ahead</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
