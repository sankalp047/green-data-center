"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    initial: "P",
    name: "Poorvesh Thakkar",
    title: "CEO, Thakkar Developers",
    bullets: [
      "Technology and Real Estate Developer — 15 years",
      "Leading over $1 billion real estate development",
      "10 years of Technology Expertise",
    ],
  },
  {
    initial: "B",
    name: "Bharat Kumar",
    title: "Former Managing Director, Energy Sector",
    bullets: [
      "Energy infrastructure leadership",
      "Large-scale Energy Project Deployment",
      "Global Power and Energy",
    ],
  },
  {
    initial: "S",
    name: "Saumil Thakkar",
    title: "Group CEO, FunAsia & Thakkar Group",
    bullets: [
      "Technology and Real Estate Developer — 20 years",
      "Expertise in Financing and Business Development",
      "Transformed Enterprise from 10 to 500 employees Worldwide",
    ],
  },
  {
    initial: "S",
    name: "Shekar Katuri",
    title: "Former AI Lead, Bank of America",
    bullets: [
      "AI technology leadership",
      "Large-scale systems & AI deployment",
      "Fortune 500 technology strategy",
    ],
  },
];

const techLeaders = [
  {
    initial: "A",
    name: "Abidali Neemuchwala",
    title: "Former CEO, Wipro Ltd.",
    bullets: [
      "Led $8B global technology enterprise",
      "300,000+ employee organization",
      "Scaled global digital transformation",
    ],
  },
  {
    initial: "G",
    name: "Gurshaman Baweja",
    title: "Former CIO, Texas Instruments",
    bullets: [
      "Global technology infrastructure leadership",
      "Large-scale systems & Chip Manufacturing",
      "Fortune 500 technology strategy",
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

function LeaderCard({ person, delay }: { person: typeof leaders[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group p-6 rounded-2xl bg-white border border-[rgba(22,163,74,0.12)] hover:border-[rgba(22,163,74,0.3)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-400"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-[rgba(22,163,74,0.12)] border-2 border-[rgba(22,163,74,0.25)] flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-bold text-[#16A34A]">{person.initial}</span>
        </div>
        <div>
          <h4 className="font-bold text-[#111811] leading-tight">{person.name}</h4>
          <p className="text-xs text-[#16A34A] font-semibold mt-0.5">{person.title}</p>
        </div>
      </div>
      <div className="space-y-2">
        {person.bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#16A34A]" />
            <span className="text-xs text-[#4A6B52] leading-relaxed">{b}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

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

        {/* Leadership team */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
          className="text-xs font-semibold tracking-[0.2em] text-[#8AAA90] uppercase mb-5"
        >
          Leadership Team
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {leaders.map((p, i) => (
            <LeaderCard key={p.name} person={p} delay={0.1 + i * 0.08} />
          ))}
        </div>

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
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
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

        {/* Technology Leadership */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.4 }}
          className="text-xs font-semibold tracking-[0.2em] text-[#8AAA90] uppercase mb-5"
        >
          Technology Leadership
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {techLeaders.map((p, i) => (
            <LeaderCard key={p.name} person={p} delay={0.45 + i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}
