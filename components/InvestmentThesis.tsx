"use client";

import { motion } from "framer-motion";
import { Zap, Layers, DollarSign, GitMerge } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Power Availability",
    body: "Grid + gas secured; others wait in queues. We build where power already exists — and manufacture the rest.",
    accent: "Power-First",
  },
  {
    icon: Layers,
    title: "Integrated Control",
    body: "Land, power, and fuel — vertically controlled. Every MW backed by signed agreements, not queue positions.",
    accent: "Vertically Owned",
  },
  {
    icon: DollarSign,
    title: "Revenue Flexibility",
    body: "Enterprise colocation + hyperscale optionality. Multiple deal structures from powered shell to JV campus.",
    accent: "Multi-Tenant",
  },
  {
    icon: GitMerge,
    title: "Hybrid Strategy",
    body: "Lower LCOE, faster delivery, baseload reliability. Dual inventory sources compress development timelines.",
    accent: "Grid + Gas",
  },
];

export default function InvestmentThesis() {
  return (
    <section id="about" className="py-28 lg:py-36 relative bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">Investment Thesis</span>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-[#111811]"
          >
            Why We Win
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#4A6B52] text-lg leading-relaxed lg:mt-2 italic"
          >
            &ldquo;We are building where power already exists — and manufacturing the rest.&rdquo;
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" as const }}
                className="group relative p-7 rounded-2xl bg-[#F8FAF8] border border-[rgba(22,163,74,0.12)] hover:border-[rgba(22,163,74,0.3)] transition-all duration-500 hover:bg-white hover:shadow-card-hover cursor-default"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(22,163,74,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(22,163,74,0.16)] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#16A34A]" strokeWidth={1.75} />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#16A34A] uppercase mb-2">{p.accent}</div>
                  <h3 className="text-lg font-bold text-[#111811] mb-3">{p.title}</h3>
                  <p className="text-sm text-[#4A6B52] leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
