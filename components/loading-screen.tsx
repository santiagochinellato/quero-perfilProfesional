"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation (approx 2.5s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const text = "Martín Quero";
  const letters = text.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 10, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
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
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 2.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  mass: 0.8,
                }}
                className="text-terracota inline-block ml-1"
              >
                .
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.8 }}
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
