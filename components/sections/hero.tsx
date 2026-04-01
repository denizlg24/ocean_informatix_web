"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function OceanAnimation() {
  const dots = [
    { cx: 112, cy: 190, r: 4, delay: 0 },
    { cx: 448, cy: 152, r: 6, delay: 1.4 },
    { cx: 372, cy: 448, r: 3, delay: 2.8 },
    { cx: 176, cy: 460, r: 5, delay: 1.9 },
    { cx: 504, cy: 344, r: 4, delay: 0.7 },
    { cx: 244, cy: 132, r: 3, delay: 2.3 },
    { cx: 540, cy: 220, r: 4, delay: 3.1 },
    { cx: 80, cy: 380, r: 3, delay: 0.4 },
  ];

  return (
    <svg viewBox="0 0 620 620" fill="none" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="310" cy="310" r="260" fill="url(#center-glow)" />

      {/* Concentric rings */}
      {[240, 175, 108].map((r, i) => (
        <motion.circle
          key={r}
          cx="310"
          cy="310"
          r={r}
          stroke="#0ea5e9"
          strokeWidth="1"
          strokeOpacity={0.1 + i * 0.06}
          fill="none"
          animate={{ r: [r, r + 10, r] }}
          transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        />
      ))}

      {/* Wave 1 */}
      <motion.path
        d="M 40 360 C 120 280, 210 430, 310 330 C 410 230, 500 390, 580 310"
        stroke="#0ea5e9"
        strokeWidth="2"
        strokeOpacity="0.4"
        fill="none"
        strokeLinecap="round"
        animate={{
          d: [
            "M 40 360 C 120 280, 210 430, 310 330 C 410 230, 500 390, 580 310",
            "M 40 330 C 120 410, 210 270, 310 370 C 410 470, 500 300, 580 360",
            "M 40 360 C 120 280, 210 430, 310 330 C 410 230, 500 390, 580 310",
          ],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Wave 2 */}
      <motion.path
        d="M 40 410 C 130 330, 220 470, 320 390 C 420 310, 510 440, 580 370"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeOpacity="0.28"
        fill="none"
        strokeLinecap="round"
        animate={{
          d: [
            "M 40 410 C 130 330, 220 470, 320 390 C 420 310, 510 440, 580 370",
            "M 40 390 C 130 470, 220 330, 320 430 C 420 530, 510 380, 580 430",
            "M 40 410 C 130 330, 220 470, 320 390 C 420 310, 510 440, 580 370",
          ],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      />

      {/* Wave 3 — subtle */}
      <motion.path
        d="M 40 290 C 140 230, 240 340, 310 280 C 390 220, 470 310, 580 260"
        stroke="#0369a1"
        strokeWidth="1"
        strokeOpacity="0.18"
        fill="none"
        strokeLinecap="round"
        animate={{
          d: [
            "M 40 290 C 140 230, 240 340, 310 280 C 390 220, 470 310, 580 260",
            "M 40 310 C 140 370, 240 260, 310 320 C 390 380, 470 270, 580 310",
            "M 40 290 C 140 230, 240 340, 310 280 C 390 220, 470 310, 580 260",
          ],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* Diamond accent */}
      <motion.path
        d="M 310 255 L 355 310 L 310 365 L 265 310 Z"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        strokeOpacity="0.35"
        fill="none"
        animate={{
          strokeOpacity: [0.35, 0.65, 0.35],
          d: [
            "M 310 255 L 355 310 L 310 365 L 265 310 Z",
            "M 310 248 L 362 310 L 310 372 L 258 310 Z",
            "M 310 255 L 355 310 L 310 365 L 265 310 Z",
          ],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center dot */}
      <motion.circle
        cx="310"
        cy="310"
        r="5"
        fill="#0ea5e9"
        fillOpacity="0.6"
        animate={{ r: [5, 7, 5], fillOpacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Accent lines */}
      <motion.line
        x1="430" y1="100" x2="555" y2="225"
        stroke="#0369a1" strokeWidth="1" strokeOpacity="0.18" strokeLinecap="round"
        animate={{ strokeOpacity: [0.18, 0.45, 0.18] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="65" y1="130" x2="170" y2="235"
        stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.14" strokeLinecap="round"
        animate={{ strokeOpacity: [0.14, 0.35, 0.14] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating dots */}
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="#0ea5e9"
          fillOpacity="0.35"
          animate={{
            cy: [dot.cy, dot.cy - 14, dot.cy],
            fillOpacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 4 + dot.delay * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </svg>
  );
}

const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: cubicEase },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-ocean-100/50 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-ocean pointer-events-none opacity-60" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">
          {/* Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.1}>
              <span className="inline-flex items-center justify-center lg:justify-start gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-ocean-600">
                <span className="block w-8 h-px bg-ocean-400" />
                Porto · Portugal
              </span>
            </motion.div>

            <div className="space-y-1">
              <motion.h1
                className="font-serif text-5xl sm:text-6xl xl:text-[4.5rem] leading-[1.04] text-foreground"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.22}
              >
                We craft digital
              </motion.h1>
              <motion.h1
                className="font-serif italic text-5xl sm:text-6xl xl:text-[4.5rem] leading-[1.04] text-gradient-ocean"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.36}
              >
                infrastructure.
              </motion.h1>
            </div>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed mx-auto lg:mx-0"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
            >
              From concept to production — we build web applications and platforms
              that scale with your ambitions.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.64}
            >
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 bg-clip-border shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                )}
              >
                Start a project
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                href="#services"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "rounded-full px-8 text-foreground hover:bg-ocean-50"
                )}
              >
                Explore services
                <ArrowDown className="ml-2 size-4 text-ocean-400" />
              </Link>
            </motion.div>
          </div>

          {/* Animated illustration — hidden on mobile */}
          <motion.div
            className="relative hidden lg:block h-[540px]"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <OceanAnimation />
            {/* Large faded monogram */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-serif text-[18rem] font-normal text-ocean-100/60 leading-none">
                OI
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 pb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1 text-muted-foreground/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
