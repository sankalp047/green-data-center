"use client";

import { motion } from "framer-motion";
import { Zap, GitBranch, Building2, Clock } from "lucide-react";

const bigStats = [
  { value: "300%", label: "AI Power Demand Growth", sub: "Projected next 36 months", icon: Zap },
  { value: "70%", label: "Markets with Queue Delays", sub: "3+ year interconnection backlog", icon: Clock },
  { value: "40%", label: "Premium for Immediate Power", sub: "vs. queue-dependent sites", icon: Building2 },
];

const moats = [
  { icon: Zap, title: "Power-First, Hybrid Model", body: "700+ MW U.S. pipeline, 1 GW India path. Competitors cannot replicate without years in grid queues." },
  { icon: GitBranch, title: "20–30% Lower LCOE", body: "99.999% uptime — unmatched value proposition for hyperscale and enterprise tenants." },
  { icon: Building2, title: "Site Discipline", body: "Every site hyperscale-ready by design, not retrofit. Natural gas proximity, transmission access, 10+ acres." },
  { icon: Clock, title: "18–24 Month Lead", body: "Earlier revenue, premium lease rates. First-mover timing that cannot be bought back by competitors." },
];

export default function WhyInvest() {
  return (
    <section id="why" className="py-28 lg:py-36 relative bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">The Power Scarcity Imperative</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2rem,4vw,4.5rem)] font-bold leading-tight text-[#111811] mb-4 max-w-3xl"
        >
          Why Invest <span className="text-gradient">Now</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15 }}
          className="text-xl text-[#4A6B52] italic mb-16 max-w-2xl"
        >
          &ldquo;The cost of waiting is not zero — it is queue position and lost market share.&rdquo;
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {bigStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-2xl bg-[#F8FAF8] border border-[rgba(22,163,74,0.12)] hover:border-[rgba(22,163,74,0.3)] hover:bg-white hover:shadow-card-hover transition-all duration-500"
              >
                <Icon className="w-6 h-6 text-[#16A34A] mb-6 opacity-70" strokeWidth={1.5} />
                <div className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none text-[#111811] mb-3">{s.value}</div>
                <div className="text-base font-semibold text-[#111811] mb-1">{s.label}</div>
                <div className="text-xs text-[#4A6B52]">{s.sub}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {moats.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8FAF8] border border-[rgba(22,163,74,0.1)] hover:border-[rgba(22,163,74,0.25)] hover:bg-white transition-all duration-400"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[rgba(22,163,74,0.1)] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#16A34A]" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-bold text-[#111811] mb-1.5 text-sm">{m.title}</h4>
                  <p className="text-xs text-[#4A6B52] leading-relaxed">{m.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
