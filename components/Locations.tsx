"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "indiana",
    name: "Indiana",
    city: "Active Campus",
    tag: "Revenue Generating",
    status: "Live",
    nearTerm: "5 MW",
    nearTermLabel: "Active",
    longTerm: "20 MW by 2028",
    special: "Fortune 500 Demand",
    highlights: [
      "5 MW live → +2 MW year-end → +13 MW by 2028",
      "4+ acres secured for expansion",
      "Fast utility execution, no spec risk",
      "AI inference, enterprise colocation, mid-market hyperscalers",
    ],
  },
  {
    id: "louisiana",
    name: "Louisiana",
    city: "Bastrop, LA",
    tag: "Power-Dense Flagship",
    status: "Active",
    nearTerm: "55 MW",
    longTerm: "450+ MW",
    special: "Hyperscale AI-Ready",
    highlights: [
      "5 MW from Entergy (6 mo) + 5 MW within 12 mo",
      "Two 12\" pipelines on-site; 40 MW gas plant (18-mo)",
      "350 MW grid commitment within 48 months",
      "400+ MW AI training campus capable",
    ],
  },
  {
    id: "texas",
    name: "Texas",
    city: "ERCOT Market",
    tag: "Expansion Pipeline",
    status: "Pipeline",
    nearTerm: "+150 MW",
    longTerm: "AI Campus",
    special: "Deregulated Market",
    highlights: [
      "ERCOT deregulated market with abundant natural gas",
      "Competitive land costs",
      "Target: AI campus and wholesale colocation",
      "JV structure opportunities",
    ],
  },
  {
    id: "chicago",
    name: "Chicago",
    city: "Midwest Hub",
    tag: "Enterprise Growth",
    status: "Pipeline",
    nearTerm: "+50 MW",
    longTerm: "Tier 1 Alternative",
    special: "Fintech & Enterprise",
    highlights: [
      "Midwest enterprise and fintech demand",
      "Low-latency connectivity",
      "Tier 1 alternative to coastal markets",
      "Strong fiber backbone infrastructure",
    ],
  },
];

export default function Locations() {
  const [active, setActive] = useState("indiana");
  const activeLocation = locations.find((l) => l.id === active)!;

  return (
    <section id="locations" className="py-28 lg:py-36 relative bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">Active Sites</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,4rem)] font-bold leading-tight text-[#111811]"
          >
            Our<br />
            <span className="text-gradient">Markets</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="text-[#4A6B52] text-lg leading-relaxed lg:mt-2 lg:pt-4"
          >
            Every site qualified by the same power-first criteria: natural gas proximity, transmission access, and 10+ acre parcels.
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {locations.map((loc, i) => (
            <motion.button
              key={loc.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 + i * 0.07 }}
              onClick={() => setActive(loc.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === loc.id
                  ? "bg-[#16A34A] text-white shadow-[0_4px_12px_rgba(22,163,74,0.3)]"
                  : "bg-[#F8FAF8] border border-[rgba(22,163,74,0.2)] text-[#4A6B52] hover:border-[#16A34A] hover:text-[#111811]"
              }`}
            >
              {loc.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-[1fr_1.5fr] gap-6"
        >
          <div className="p-8 rounded-2xl bg-[#F8FAF8] border border-[rgba(22,163,74,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-semibold tracking-[0.2em] text-[#16A34A] uppercase mb-1">{activeLocation.tag}</div>
                  <h3 className="text-3xl font-bold text-[#111811]">{activeLocation.name}</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-sm text-[#4A6B52]">
                    <MapPin className="w-3.5 h-3.5" />
                    {activeLocation.city}
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  activeLocation.status === "Live"
                    ? "bg-[rgba(22,163,74,0.12)] text-[#16A34A]"
                    : activeLocation.status === "Active"
                    ? "bg-[rgba(22,163,74,0.08)] text-[#16A34A]"
                    : "bg-[rgba(22,163,74,0.05)] text-[#8AAA90]"
                }`}>
                  {activeLocation.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-[rgba(22,163,74,0.15)]">
                  <div className="text-xs text-[#4A6B52] mb-1">{(activeLocation as typeof activeLocation & { nearTermLabel?: string }).nearTermLabel ?? "Near-Term"}</div>
                  <div className="text-2xl font-bold text-[#16A34A]">{activeLocation.nearTerm}</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[rgba(22,163,74,0.1)]">
                  <div className="text-xs text-[#4A6B52] mb-1">Long-Term</div>
                  <div className="text-xl font-bold text-[#111811]">{activeLocation.longTerm}</div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 rounded-xl bg-[rgba(22,163,74,0.08)] border border-[rgba(22,163,74,0.2)]">
              <div className="text-xs font-semibold text-[#16A34A] tracking-wide">{activeLocation.special}</div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[rgba(22,163,74,0.1)] shadow-card">
            <div className="text-xs font-semibold tracking-[0.2em] text-[#8AAA90] uppercase mb-6">Site Highlights</div>
            <div className="space-y-4">
              {activeLocation.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  <p className="text-[#111811] text-sm leading-relaxed">{h}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(22,163,74,0.1)]">
              <a
                href="#partner"
                className="inline-flex items-center gap-2 text-sm text-[#16A34A] font-semibold hover:gap-3 transition-all duration-200"
              >
                Inquire about this site
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
