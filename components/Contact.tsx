"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, Send, CheckCircle2, AlertCircle } from "lucide-react";

const people = [
  {
    initial: "P",
    name: "Poorvesh Thakkar",
    title: "CEO, Thakkar Developers",
    bullets: [
      "Technology & Real Estate Developer — 15 years",
      "Leading over $1B real estate development",
      "10 years of Technology Expertise",
    ],
  },
  {
    initial: "S",
    name: "Saumil Thakkar",
    title: "Group CEO, FunAsia & Thakkar Group",
    bullets: [
      "Technology & Real Estate Developer — 20 years",
      "Expertise in Financing and Business Development",
      "Transformed Enterprise from 10 to 500 employees Worldwide",
    ],
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", address: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#040D07]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-[#22C55E]" />
            <span className="text-xs tracking-[0.25em] text-[#22C55E] uppercase font-semibold">Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] text-[#F0F4F0]"
          >
            Let&apos;s Build the<br />
            <span className="text-gradient">Future Together</span>
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — team cards */}
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15 }}
              className="text-[#6B8F76] text-lg leading-relaxed mb-8"
            >
              Reach out anytime for potential site discussions, introductions, or partnership conversations.
            </motion.p>

            {people.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl bg-[rgba(8,21,16,0.7)] border border-[rgba(34,197,94,0.15)] hover:border-[rgba(34,197,94,0.3)] transition-all duration-400"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(34,197,94,0.12)] border-2 border-[rgba(34,197,94,0.25)] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-[#22C55E]">{person.initial}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F0F4F0] leading-tight">{person.name}</h4>
                    <p className="text-xs text-[#22C55E] font-semibold mt-0.5">{person.title}</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {person.bullets.map((b, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#22C55E] opacity-70" />
                      <span className="text-xs text-[#6B8F76] leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 rounded-2xl bg-[rgba(8,21,16,0.8)] border border-[rgba(34,197,94,0.18)]"
          >
            <h3 className="text-xl font-bold text-[#F0F4F0] mb-1">Send a Message</h3>
            <p className="text-sm text-[#6B8F76] mb-7">We&apos;ll get back to you within 24 hours.</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle2 className="w-14 h-14 text-[#22C55E]" strokeWidth={1.5} />
                <div>
                  <div className="text-lg font-bold text-[#F0F4F0]">Message Sent</div>
                  <div className="text-sm text-[#6B8F76] mt-1">Thank you — we&apos;ll be in touch shortly.</div>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-[#22C55E] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#6B8F76] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#22C55E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(34,197,94,0.2)] rounded-xl text-[#F0F4F0] text-sm placeholder-[#3D5C47] focus:outline-none focus:border-[#22C55E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6B8F76] uppercase tracking-wider mb-1.5">
                      Email <span className="text-[#22C55E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(34,197,94,0.2)] rounded-xl text-[#F0F4F0] text-sm placeholder-[#3D5C47] focus:outline-none focus:border-[#22C55E] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#6B8F76] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(34,197,94,0.2)] rounded-xl text-[#F0F4F0] text-sm placeholder-[#3D5C47] focus:outline-none focus:border-[#22C55E] transition-colors"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-semibold text-[#6B8F76] uppercase tracking-wider mb-1.5">
                    Address / Location
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="City, State, Country"
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(34,197,94,0.2)] rounded-xl text-[#F0F4F0] text-sm placeholder-[#3D5C47] focus:outline-none focus:border-[#22C55E] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#6B8F76] uppercase tracking-wider mb-1.5">
                    Message <span className="text-[#22C55E]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project, site, or partnership opportunity..."
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(34,197,94,0.2)] rounded-xl text-[#F0F4F0] text-sm placeholder-[#3D5C47] focus:outline-none focus:border-[#22C55E] transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#22C55E] text-[#040D07] font-semibold rounded-xl hover:bg-[#16A34A] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(34,197,94,0.35)] text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#040D07]/40 border-t-[#040D07] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[rgba(34,197,94,0.08)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[rgba(34,197,94,0.12)] border border-[rgba(34,197,94,0.2)] flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-[#22C55E]" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-bold text-[#F0F4F0]">The Green Data Center</span>
          </div>
          <p className="text-xs text-[#3D5C47] tracking-widest uppercase text-center">
            COPYRIGHT &copy; 2024 GREEN DATA CENTER &mdash; ALL RIGHTS RESERVED.
          </p>
          <div className="text-xs text-[#3D5C47]">IN · LA · TX · CHI · INDIA</div>
        </div>
      </div>
    </section>
  );
}
