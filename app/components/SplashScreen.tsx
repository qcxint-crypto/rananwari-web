"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  const paths = [
    "M0.5 62.7466L58.5 167.747V300.747H0.5V62.7466Z",
    "M0 27.5464L65.9998 27.5468L210.5 301.247L145.5 301.247L0 27.5464Z",
    "M199 97.7466L234 165.247L197 243.247L162 177.747L199 97.7466Z",
    "M181 28.7466H249L316.5 171.747L381 28.7466H442L319.5 297.747L318 300.747L181 28.7466Z",
    "M338 300H399L466.5 157L531 300H592L469.5 31L468 28L338 300Z",
    "M468.75 197H484.75L509.75 252.5H444L468.75 197Z",
  ];

  // durasi animasi path
  const pathDuration = 1.1;
  const pathDelay = 0.35;
  const totalPathTime = pathDuration + (paths.length - 1) * pathDelay;
  const fillDuration = 0.8;
  const textDuration = 0.8;
  const extraDelay = 1; // delay setelah semua selesai

  useEffect(() => {
    const totalSplash = totalPathTime + pathDuration + fillDuration + textDuration + extraDelay;
    const t = setTimeout(() => setShow(false), totalSplash * 1000);
    return () => clearTimeout(t);
  }, []);

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: pathDuration,
        ease: [0.42, 0, 0.58, 1],
        delay: i * pathDelay,
      },
    }),
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo SVG */}
          <motion.svg viewBox="0 0 592 329" className="w-56 h-32 mb-6">
            {paths.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="#fff"
                strokeWidth={6}
                fill="white"
                initial={{ pathLength: 0, opacity: 0, fillOpacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  fillOpacity: 1, // 🎯 target akhir: fill putih kelihatan
                }}
                transition={{
                  pathLength: {
                    duration: pathDuration,
                    ease: [0.42, 0, 0.58, 1],
                    delay: i * pathDelay,
                  },
                  opacity: {
                    duration: pathDuration,
                    delay: i * pathDelay,
                  },
                  fillOpacity: {
                    delay: totalPathTime + 0.2,
                    duration: fillDuration,
                  },
                }}
              />
            ))}
          </motion.svg>

          {/* Teks */}
          {/* Teks (staggered per huruf) */}
        <motion.div
          className="flex space-x-0.5 text-white text-xl font-semibold"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05, // jeda antar huruf
                delayChildren: totalPathTime + fillDuration + 0.4, // mulai setelah logo selesai
              },
            },
          }}
        >
          {"HIDUP JOKOWII".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
