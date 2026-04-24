"use client";

import { motion } from "framer-motion";
import { Building2, Zap, DollarSign, Cpu } from "lucide-react";

const expertise = [
  {
    icon: Building2,
    label: "Real Estate & Development",
    points: [
      "15–20+ years in technology and real estate development",
      "Leading over $1 billion in real estate development",
      "Scaled enterprises from early stage to 500+ employees worldwide",
    ],
  },
  {
    icon: Zap,
    label: "Energy Infrastructure",
    points: [
      "Former Managing Director–level energy sector leadership",
      "Large-scale energy project deployment",
      "Global power and energy expertise",
    ],
  },
  {
    icon: Cpu,
    label: "Technology & AI",
    points: [
      "Former AI leadership at Fortune 500 financial institutions",
      "Large-scale systems and AI deployment",
      "Led $8B global technology enterprises with 300,000+ employees",
    ],
  },
  {
    icon: DollarSign,
    label: "Finance & Business Development",
    points: [
      "Expertise in institutional financing and capital markets",
      "Fortune 500 technology strategy and enterprise transformation",
      "Global digital transformation at scale",
    ],
  },
];

const partners = [
  {
    name: "Green Tech Data Center",
    role: "Global Technology Partner",
    desc: "International data center platform providing proprietary green technology, global operations expertise, and institutional capital access.",
  },
  {
    name: "JLL (Jones Lang LaSalle)",
    role: "Hyperscaler Tenant Platform",
    desc: "World's leading real estate & DC leasing advisory. Direct relationships with Microsoft, Google, AWS, Meta and all Tier-1 hyperscalers.",
  },
  {
    name: "Global Equity Partners",
    role: "Institutional Capital Network",
    desc: "Sovereign wealth funds, infrastructure PE, and pension capital. Long-tenor patient capital aligned with national infrastructure timelines.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 lg:py-36 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">Global Collaboration</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-[#111811]"
          >
            Leadership &<br />
            <span className="text-gradient">Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="text-[#4A6B52] text-lg leading-relaxed lg:pt-3"
          >
            World-class partners and proven technology leadership driving the next generation of sustainable digital infrastructure.
          </motion.p>
        </div>

        {/* Leadership summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
          className="text-xs font-semibold tracking-[0.2em] text-[#8AAA90] uppercase mb-5"
        >
          Leadership Team
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 rounded-2xl bg-white border border-[rgba(22,163,74,0.12)] mb-14"
        >
          <p className="text-[#4A6B52] text-sm leading-relaxed mb-8 max-w-2xl">
            Our leadership brings decades of combined experience across real estate development, energy infrastructure, AI technology, and institutional finance — with a track record of building and scaling global enterprises.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {expertise.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[rgba(22,163,74,0.1)] flex items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 text-[#16A34A]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#16A34A] uppercase tracking-[0.15em] mb-2">{area.label}</div>
                    <div className="space-y-1.5">
                      {area.points.map((pt, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#16A34A] opacity-60" />
                          <span className="text-xs text-[#4A6B52] leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Strategic Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3 }}
          className="text-xs font-semibold tracking-[0.2em] text-[#8AAA90] uppercase mb-5"
        >
          Strategic Partners
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.35 + i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-[rgba(22,163,74,0.12)] hover:border-[rgba(22,163,74,0.3)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-400"
            >
              <div className="w-10 h-1 bg-[#16A34A] rounded-full mb-4" />
              <h4 className="font-bold text-[#111811] mb-1">{p.name}</h4>
              <p className="text-xs text-[#16A34A] font-semibold mb-3">{p.role}</p>
              <p className="text-xs text-[#4A6B52] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
