"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function TestimonialsSection() {
  const { testimonials } = siteContent;

  return (
    <section id="testimonios" className="py-24 px-6 bg-white dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-terracota font-handwritten text-2xl rotate-[-2deg] block mb-4">
            Voces reales →
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-navy-deep dark:text-warm-white">
            {testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Giant Quote Icon */}
              <Quote className="w-16 h-16 text-terracota/10 mb-6 rotate-180" />

              <p className="text-xl font-serif italic text-stone-gray dark:text-gray-300 mb-8 leading-loose">
                "{item.quote}"
              </p>

              <div className="mt-auto">
                <div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-white/10 mx-auto mb-4 flex items-center justify-center font-bold text-2xl text-navy-deep dark:text-white font-serif">
                  {item.author[0]}
                </div>
                <p className="font-bold text-navy-deep dark:text-warm-white text-lg font-serif">
                  {item.author}
                </p>
                <p className="text-sm text-terracota font-medium tracking-wide uppercase mt-1">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
