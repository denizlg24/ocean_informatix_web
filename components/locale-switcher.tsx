"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale } from "next-intlayer";

const localeLabels: Record<string, { short: string; flag: string; full: string }> = {
  en: { short: "EN", flag: "🇬🇧", full: "English" },
  "pt": { short: "PT", flag: "🇵🇹", full: "Português" },
};

export function LocaleSwitcher() {
  const { locale, setLocale, availableLocales } = useLocale({ onChange: "push" });
  const [isOpen, setIsOpen] = useState(false);

  const current = localeLabels[locale] ?? localeLabels.en;
  const otherLocales = availableLocales.filter((l) => l !== locale);

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="group relative flex items-center gap-1.5 h-7 px-2 rounded-full border border-ocean-200/80 bg-white/80 backdrop-blur-sm hover:border-ocean-400 hover:bg-ocean-50/80 transition-colors duration-200 overflow-hidden"
        whileTap={{ scale: 0.96 }}
        aria-label={`Current language: ${current.full}. Click to change.`}
      >
        {/* Animated wave background on hover */}
        <svg
          viewBox="0 0 120 36"
          fill="none"
          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          aria-hidden
        >
          <motion.path
            d="M 0 28 C 15 20, 30 32, 45 24 C 60 16, 75 30, 90 22 C 105 14, 112 28, 120 22"
            stroke="oklch(0.820 0.106 221.5)"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            fill="none"
            animate={{
              d: [
                "M 0 28 C 15 20, 30 32, 45 24 C 60 16, 75 30, 90 22 C 105 14, 112 28, 120 22",
                "M 0 24 C 15 32, 30 18, 45 28 C 60 34, 75 20, 90 28 C 105 34, 112 22, 120 26",
                "M 0 28 C 15 20, 30 32, 45 24 C 60 16, 75 30, 90 22 C 105 14, 112 28, 120 22",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Compass dot */}
        <span className="relative flex items-center justify-center w-5 h-5">
          <motion.span
            className="absolute inset-0 rounded-full border border-ocean-300/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <span className="w-1.5 h-1.5 rounded-full bg-ocean-500" />
        </span>

        {/* Locale label with animated swap */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={locale}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-xs font-semibold tracking-wider text-ocean-700 select-none"
          >
            {current.short}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-full mt-2 z-50 min-w-40 rounded-xl border border-ocean-200 bg-white/95 backdrop-blur-md shadow-lg shadow-ocean-200/30 overflow-hidden"
            >
              {/* Current locale */}
              <div className="px-4 py-3 border-b border-ocean-100">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ocean-400">
                  {locale === "en" ? "Language" : "Idioma"}
                </p>
              </div>

              {/* Options */}
              <div className="p-1.5">
                {/* Active locale */}
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-ocean-50/80">
                  <span className="text-base leading-none">{current.flag}</span>
                  <span className="text-sm font-medium text-ocean-700">{current.full}</span>
                  <motion.div
                    className="ml-auto w-2 h-2 rounded-full bg-ocean-500"
                    layoutId="locale-indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                </div>

                {/* Other locales */}
                {otherLocales.map((l) => {
                  const info = localeLabels[l];
                  if (!info) return null;
                  return (
                    <button
                      key={l}
                      type="button"
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ocean-50/60 transition-colors duration-150 group"
                      onClick={() => {
                        setLocale(l);
                        setIsOpen(false);
                      }}
                    >
                      <span className="text-base leading-none grayscale group-hover:grayscale-0 transition-all duration-200">
                        {info.flag}
                      </span>
                      <span className="text-sm text-muted-foreground group-hover:text-ocean-700 transition-colors duration-150">
                        {info.full}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Decorative wave footer */}
              <div className="px-4 pb-2.5 pt-1">
                <svg viewBox="0 0 140 12" fill="none" className="w-full h-2.5 text-ocean-200" aria-hidden>
                  <motion.path
                    d="M 0 6 C 17 2, 35 10, 52 6 C 70 2, 87 10, 105 6 C 122 2, 130 10, 140 6"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                      d: [
                        "M 0 6 C 17 2, 35 10, 52 6 C 70 2, 87 10, 105 6 C 122 2, 130 10, 140 6",
                        "M 0 6 C 17 10, 35 2, 52 6 C 70 10, 87 2, 105 6 C 122 10, 130 2, 140 6",
                        "M 0 6 C 17 2, 35 10, 52 6 C 70 2, 87 10, 105 6 C 122 2, 130 10, 140 6",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
