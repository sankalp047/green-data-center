"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building2, Users2 } from "lucide-react";

const weProvide = [
  "Full capital investment",
  "Technical expertise & AI-ready architecture",
  "Power infrastructure planning & integration",
  "Network & connectivity setup",
  "End-user sourcing (hyperscalers / enterprise)",
  "Long-term operations & management",
];

const partnerProvides = [
  "Land (owned or controlled)",
  "Base building / powered shell (preferred)",
  "Support in local approvals & utilities",
];

const dealStructures = [
  { name: "Powered Shell", desc: "Turn-key, fastest occupancy" },
  { name: "Build-to-Suit", desc: "Custom specs, long-term lease" },
  { name: "JV Campus", desc: "Shared economics, co-investment" },
  { name: "Master Lease", desc: "10–15+ year tenancy" },
];

export default function Partnership() {
  return (
    <section id="partner" className="py-28 lg:py-36 relative bg-[#F0F5F1]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">Partnership Structure</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-[#111811]"
          >
            We Bring Capital,<br />
            <span className="text-gradient">You Bring Land</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="text-[#4A6B52] text-lg leading-relaxed lg:pt-6"
          >
            Not a checklist — a competitive moat built through disciplined site qualification. Every MW backed by signed agreements, not queue positions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-[#16A34A]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-white text-lg">We Provide</h3>
            </div>
            <div className="space-y-3">
              {weProvide.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-white/80 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.35 }}
            className="p-8 rounded-2xl bg-white border border-[rgba(22,163,74,0.15)] shadow-card flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[rgba(22,163,74,0.1)] flex items-center justify-center">
                <Users2 className="w-4 h-4 text-[#16A34A]" strokeWidth={1.75} />
              </div>
              <h3 className="font-bold text-[#111811] text-lg">Partner Provides</h3>
            </div>
            <div className="space-y-3 mb-8">
              {partnerProvides.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-4 h-4 rounded-full border-2 border-[#16A34A] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  </div>
                  <span className="text-sm text-[#111811]">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto p-5 rounded-xl bg-[#F8FAF8] border border-[rgba(22,163,74,0.15)]">
              <div className="text-xs font-semibold tracking-[0.2em] text-[#16A34A] uppercase mb-3">Commercial Model</div>
              <div className="space-y-1.5 text-sm text-[#4A6B52]">
                <div>Long-term lease structure</div>
                <div>We lease the site directly</div>
                <div>We onboard end customers</div>
                <div className="font-semibold text-[#111811]">Stable tenancy: 10–15+ years</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.6 }}
            className="text-xs font-semibold tracking-[0.25em] text-[#8AAA90] uppercase mb-4"
          >
            Deal Structures Available
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {dealStructures.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.65 + i * 0.08 }}
                className="p-4 rounded-xl bg-white border border-[rgba(22,163,74,0.12)] hover:border-[rgba(22,163,74,0.3)] hover:shadow-card transition-all duration-300"
              >
                <div className="font-semibold text-[#111811] text-sm mb-1">{d.name}</div>
                <div className="text-xs text-[#4A6B52]">{d.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
