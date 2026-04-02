"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { OceanLogo } from "@/components/logo";
import { cn } from "@/lib/utils";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./[locale]/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <html
      lang={"en"}
      className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="relative min-h-screen flex flex-col overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-ocean-100/50 pointer-events-none" />
          <div className="absolute inset-0 bg-grid-ocean pointer-events-none opacity-60" />

          <header className="relative z-10 py-6 px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <OceanLogo className="w-8 h-8 shrink-0 text-primary group-hover:text-primary/75 transition-colors duration-200" />
              <span className="font-semibold text-foreground tracking-tight hidden sm:block">
                Ocean Informatix
              </span>
            </Link>
          </header>

          <div className="relative z-10 flex-1 flex items-center justify-center px-6">
            <div className="text-center max-w-xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="flex justify-center mb-8"
              >
                <svg
                  viewBox="0 0 240 44"
                  fill="none"
                  className="w-52 text-ocean-300"
                  aria-hidden
                >
                  <motion.path
                    d="M 0 22 C 30 6, 60 38, 90 22 C 120 6, 150 38, 180 22 C 210 6, 228 38, 240 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                      d: [
                        "M 0 22 C 30 6, 60 38, 90 22 C 120 6, 150 38, 180 22 C 210 6, 228 38, 240 22",
                        "M 0 22 C 30 38, 60 6, 90 22 C 120 38, 150 6, 180 22 C 210 38, 228 6, 240 22",
                        "M 0 22 C 30 6, 60 38, 90 22 C 120 6, 150 38, 180 22 C 210 6, 228 38, 240 22",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M 0 30 C 30 14, 60 46, 90 30 C 120 14, 150 46, 180 30 C 210 14, 228 46, 240 30"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeOpacity="0.4"
                    fill="none"
                    animate={{
                      d: [
                        "M 0 30 C 30 14, 60 46, 90 30 C 120 14, 150 46, 180 30 C 210 14, 228 46, 240 30",
                        "M 0 30 C 30 46, 60 14, 90 30 C 120 46, 150 14, 180 30 C 210 46, 228 14, 240 30",
                        "M 0 30 C 30 14, 60 46, 90 30 C 120 14, 150 46, 180 30 C 210 14, 228 46, 240 30",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  />
                </svg>
              </motion.div>

              <motion.h1
                className="font-serif italic text-[9rem] sm:text-[12rem] leading-none text-gradient-ocean select-none"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
              >
                404
              </motion.h1>

              <motion.div
                className="mt-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
                  Lost at sea.
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  The page you&apos;re looking for has drifted off course.
                  Let&apos;s navigate you back to familiar waters.
                </p>
              </motion.div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32, ease }}
              >
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-8 bg-clip-border shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow",
                  )}
                >
                  <ArrowLeft className="mr-2 size-4" />
                  Back to shore
                </Link>
              </motion.div>
            </div>
          </div>

          <footer className="relative z-10 py-6 text-center">
            <p className="text-xs text-muted-foreground/50 tracking-wide">
              Ocean Informatix · Porto, Portugal
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
