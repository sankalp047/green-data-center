"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Strategy", href: "#strategy" },
  { label: "Partner", href: "#leadership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[rgba(22,163,74,0.12)] shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className={`flex items-center group rounded-xl transition-all duration-300 ${!scrolled ? "bg-white/30 backdrop-blur-md px-2 py-1" : ""}`}>
            <Image
              src="/logo.png"
              alt="Green Data Center"
              width={160}
              height={64}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 tracking-wide font-medium ${scrolled ? "text-[#4A6B52] hover:text-[#111811]" : "text-white/75 hover:text-white"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${scrolled ? "bg-[#16A34A] text-white hover:bg-[#15803D] hover:shadow-[0_4px_16px_rgba(22,163,74,0.3)]" : "bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm"}`}
            >
              Partner With Us
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden w-9 h-9 flex items-center justify-center transition-colors ${scrolled ? "text-[#4A6B52] hover:text-[#111811]" : "text-white/80 hover:text-white"}`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-medium text-[#111811] border-b border-[rgba(22,163,74,0.1)] pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 px-6 py-3 text-center font-semibold bg-[#16A34A] text-white rounded-xl text-lg"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
