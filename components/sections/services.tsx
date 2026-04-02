"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useIntlayer } from "react-intlayer";

export default function Services() {
  const content = useIntlayer("services");

  return (
    <section id="services" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16 flex items-end justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-ocean-500 block mb-4">
              {content.sectionLabel}
            </span>
            <h2 className="font-serif text-4xl lg:text-[3.25rem] text-foreground leading-tight">
              {content.heading}
            </h2>
          </div>
          <div className="hidden lg:block flex-1 h-px bg-border ml-12 mb-3" />
        </motion.div>

        <div className="divide-y divide-border">
          {content.items.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid grid-cols-[56px_1fr_32px] sm:grid-cols-[80px_1fr_40px] lg:grid-cols-[100px_1fr_40px] gap-4 lg:gap-8 items-start py-9 lg:py-11 -mx-6 px-6 hover:bg-ocean-50/60 transition-colors duration-200 cursor-default"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-border group-hover:text-ocean-200 transition-colors duration-300 leading-none pt-1 select-none">
                {service.num}
              </span>

              <div className="space-y-3">
                <h3 className="font-semibold text-xl lg:text-2xl text-foreground group-hover:text-ocean-700 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-2xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-ocean-100 text-ocean-700 font-medium group-hover:bg-ocean-200/70 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-ocean-200 group-hover:text-ocean-500 transition-all duration-200 group-hover:translate-x-1 mt-1">
                <ArrowRight className="size-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
