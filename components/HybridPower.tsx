"use client";

import { motion } from "framer-motion";
import { Flame, Radio, TrendingUp, Shield, Clock } from "lucide-react";

const advantages = [
  {
    icon: TrendingUp,
    title: "Lower LCOE",
    desc: "Fuel optimization and generation efficiency gains — competitive power pricing improves tenant retention and lease rates.",
  },
  {
    icon: Clock,
    title: "Faster IRR",
    desc: "Dual inventory sources compress development timelines. 18–24 months ahead of grid-queue competitors.",
  },
  {
    icon: Shield,
    title: "Baseload Certainty",
    desc: "99.999% uptime via redundant grid + on-site generation. N+1 / 2N configurations with backup systems.",
  },
];

export default function HybridPower() {
  return (
    <section id="strategy" className="py-28 lg:py-36 relative bg-[#F0F5F1]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">Core Differentiator</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-[#111811] mb-6"
            >
              Hybrid Power<br />
              <span className="text-gradient">Strategy</span>
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2 }}
              className="text-[#4A6B52] text-xl leading-relaxed mb-10 pl-5 border-l-2 border-[#16A34A] italic"
            >
              &ldquo;We capture the best attributes of each source while mitigating their respective limitations.&rdquo;
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="flex-1 p-5 rounded-2xl bg-white border border-[rgba(22,163,74,0.2)] text-center shadow-card">
                <Radio className="w-7 h-7 text-[#16A34A] mx-auto mb-3" strokeWidth={1.5} />
                <div className="font-bold text-[#111811] text-lg">Grid Power</div>
                <div className="text-xs text-[#4A6B52] mt-1">Utility-backed baseload</div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="text-[#16A34A] text-2xl font-bold">+</div>
                <div className="text-[10px] text-[#8AAA90] tracking-widest uppercase">Hybrid</div>
              </div>

              <div className="flex-1 p-5 rounded-2xl bg-white border border-[rgba(22,163,74,0.2)] text-center shadow-card">
                <Flame className="w-7 h-7 text-[#16A34A] mx-auto mb-3" strokeWidth={1.5} />
                <div className="font-bold text-[#111811] text-lg">Natural Gas</div>
                <div className="text-xs text-[#4A6B52] mt-1">On-site generation</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-[rgba(22,163,74,0.1)] hover:border-[rgba(22,163,74,0.3)] hover:shadow-card transition-all duration-400"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[rgba(22,163,74,0.08)] flex items-center justify-center group-hover:bg-[rgba(22,163,74,0.15)] transition-colors">
                    <Icon className="w-5 h-5 text-[#16A34A]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111811] mb-1.5">{adv.title}</h4>
                    <p className="text-sm text-[#4A6B52] leading-relaxed">{adv.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-[#16A34A] flex items-center justify-between"
            >
              <div>
                <div className="text-3xl font-bold text-white">20–30%</div>
                <div className="text-sm text-white/70 mt-0.5">Lower LCOE vs. grid-only</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">99.999%</div>
                <div className="text-sm text-white/70 mt-0.5">Uptime SLA</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
