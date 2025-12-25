"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation
    // Text finishes around 1.6s + 0.8s = 2.4s.
    // + wait time -> 4000ms total
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const text = "Martín Quero";
  const letters = text.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // Faster stagger
        delayChildren: 0.2, // Start sooner
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.0, ease: "easeInOut" }, // Smoother exit
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 15, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 18, // Less bouncy
        stiffness: 120, // Softer
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-white print:hidden"
        >
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-signature text-navy-deep tracking-wide flex justify-center mb-2">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={letter === " " ? "mr-1" : ""}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.4, // Matches end of letters approx
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="text-terracota inline-block ml-1"
              >
                .
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
              className="text-lg md:text-2xl font-serif italic text-terracota text-center tracking-wider"
            >
              Desarrollo personal aplicado
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
