"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Facilities() {
  return (
    <section className="py-24 lg:py-32 bg-[#F0F5F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#16A34A]" />
          <span className="text-xs tracking-[0.25em] text-[#16A34A] uppercase font-semibold">Our Facilities</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-[#111811]"
          >
            Built for the<br />
            <span className="text-gradient">Next Generation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="text-[#4A6B52] text-lg leading-relaxed lg:pt-4"
          >
            Power-dense campuses engineered for hyperscale AI training, GPU cluster hosting,
            and enterprise colocation — with solar-integrated rooftops and on-site gas generation.
          </motion.p>
        </div>

        {/* Photo grid — asymmetric, no labels */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Large image spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 group relative overflow-hidden rounded-2xl aspect-[16/9]"
          >
            <Image
              src="/facility-1.jpg"
              alt="Louisiana flagship data center campus"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </motion.div>

          {/* Right column: 2 stacked images */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <Image
                src="/facility-2.jpg"
                alt="Indiana data center campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <Image
                src="/facility-3.jpg"
                alt="Solar-integrated data center facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
