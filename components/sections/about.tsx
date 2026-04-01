"use client";

import { motion } from "motion/react";
import { OceanLogo } from "@/components/logo";

const pillars = [
  { value: "End-to-end", label: "From architecture to deployment" },
  { value: "Modern", label: "Latest tools & best practices" },
  { value: "Porto", label: "EU-based, global reach" },
  { value: "Craft", label: "Quality over speed, always" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-ocean-500 block mb-4">
                Who we are
              </span>
              <h2 className="font-serif text-4xl lg:text-[3.25rem] text-foreground leading-tight">
                Built from the
                <br />
                <span className="italic text-gradient-ocean">shores of Porto.</span>
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
              <p>
                We&apos;re a young, passionate team of engineers based in Porto, driven by a
                genuine love for building things that work. What we lack in grey hair, we make
                up for in curiosity, craft, and a relentless focus on quality.
              </p>
              <p>
                We specialise in end-to-end delivery — taking products from a blank page all the
                way to production. No hand-offs, no silos. We own the whole system and stand
                behind every line of it.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <OceanLogo className="w-8 h-8 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Ocean Informatix</p>
                <p className="text-xs text-muted-foreground">Porto, Portugal</p>
              </div>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden shadow-sm">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                  className="bg-white p-8 lg:p-10 group hover:bg-ocean-50/70 transition-colors duration-200"
                >
                  <p className="font-serif text-2xl lg:text-3xl leading-snug text-ocean-500 mb-2 group-hover:text-ocean-600 transition-colors">
                    {pillar.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{pillar.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pl-5 border-l-2 border-ocean-300"
            >
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;Strategy before code. Architecture before features. Quality over
                quantity — always.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
