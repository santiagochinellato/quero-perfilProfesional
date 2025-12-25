"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import siteContent from "@/data/site-content.json";
import martinQueroImg from "@/public/images/martinQuero.webp";

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-24 pb-12 md:py-28 px-5 md:px-6 overflow-hidden bg-warm-white dark:bg-[#0F172A]"
      id="hero"
    >
      {/* Background Texture/Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply dark:mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        {/* Left Column: Text */}
        <div className="space-y-4 md:space-y-6 relative z-10 order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block mb-2 md:mb-6">
              <span className="font-handwritten text-terracota text-xl md:text-2xl rotate-[-4deg] block md:ml-4">
                ↳ coaching para quienes lo dan todo
              </span>
              <svg
                className="absolute -bottom-3 right-0 w-24 h-8 text-terracota/40 hidden md:block"
                viewBox="0 0 100 50"
                fill="none"
              >
                <path
                  d="M10,15 Q50,45 90,5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text6xl font-serif font-medium leading-[1.05] text-navy-deep dark:text-warm-white tracking-tight">
              {hero.title}
              <br />
              <span className="text-terracota italic text-3xl md:text-6xl lg:text-7xl block mt-2">
                {hero.subtitle}
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <div className="w-16 md:w-24 h-[1px] bg-navy-deep/20 dark:bg-white/20 my-4 md:my-6 mx-auto lg:mx-0"></div>

          <motion.p
            className="text-lg md:text-[1rem] text-stone-gray dark:text-stone-gray/80 leading-relaxed max-w-xl font-serif mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start pt-2 md:pt-4 justify-center lg:justify-start"
          >
            <a
              href={hero.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto justify-center px-8 py-3.5 md:py-4 bg-terracota text-white font-bold text-[.9rem] md:text-[.75rem] rounded-full hover:bg-terracota/90 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-xl shadow-terracota/20"
            >
              {hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#trayectoria"
              className="group w-full sm:w-auto justify-center px-8 py-3.5 md:py-4 bg-transparent border-2 border-navy-deep text-navy-deep dark:border-white dark:text-white font-bold text-[.9rem] md:text-[.75rem] rounded-full hover:bg-navy-deep hover:text-white dark:hover:bg-white dark:hover:text-navy-deep transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image (Abstract/Soft) */}
        <motion.div
          className="relative h-[45vh] md:h-[60vh] lg:h-[83vh] w-full order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Abstract Shape Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-[#E3DACE] via-[#F1ECE4] to-transparent rounded-full blur-[100px] opacity-60 dark:opacity-10" />

          {/* Image Frame with Organic Mask and Sepia Filter */}
          <div className="relative w-full h-full max-w-[80vw] mx-auto md:max-w-none">
            <div className="absolute inset-0 bg-stone-200 dark:bg-white/5 rounded-t-[5rem] rounded-b-[1.5rem] md:rounded-t-[10rem] md:rounded-b-[2rem] overflow-hidden shadow-2xl sepia-[0.3] contrast-[0.95]  transition-all duration-700">
              {/* Placeholder for Image - Using a gradient for now matching the mood */}
              <div className="w-full h-full bg-gradient-to-b from-stone-300 to-stone-400 opacity-50 absolute inset-0 mix-blend-multiply"></div>
              <Image
                src={martinQueroImg}
                alt="Dr. Martín Quero"
                fill
                className="object-cover"
                priority
              />
              {/* Actual Placeholder Text if no image */}
            </div>

            {/* PhD + Coach Label */}
            <div className="absolute -bottom-1 -right-5 z-20 hidden md:block">
              <span className="font-handwritten text-terracota text-4xl md:text-2xl -rotate-6 block text-[shadow:0_0_10px_#E3DACE]">
                Veterinario + Coach + Ser Humano
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
