"use client";

import { motion } from "motion/react";
import { useIntlayer } from "react-intlayer";

export default function Process() {
  const content = useIntlayer("process");

  return (
    <section id="process" className="py-24 lg:py-36 bg-ocean-50/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-ocean-500 block mb-4">
            {content.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl lg:text-[3.25rem] text-foreground leading-tight">
            {content.heading}
          </h2>
        </motion.div>

        <div className="hidden lg:block relative mb-12">
          <motion.div
            className="h-px bg-linear-to-r from-ocean-200 via-ocean-300 to-ocean-200"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {content.steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-ocean-200 bg-white flex items-center justify-center text-ocean-600 font-mono text-sm font-bold shrink-0 group-hover:border-ocean-400 group-hover:bg-ocean-50 transition-all duration-300 shadow-sm">
                  {step.num}
                </div>
                <div className="flex-1 h-px bg-ocean-100 lg:hidden" />
              </div>

              <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-ocean-700 transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
