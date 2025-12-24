"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function ProblemSection() {
  const { problem } = siteContent;

  return (
    <section className="py-24 px-6 bg-warm-white dark:bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <div className="text-center mb-6">
          <span className="text-terracota font-handwritten text-xl lg:text-2xl rotate-[-2deg] inline-block">
            {problem.label || "¿Te suena familiar?"}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-navy-deep dark:text-warm-white font-bold leading-[1.15] mb-6">
            {problem.title}
          </h2>
          <div className="w-24 h-[1px] bg-terracota/30 mx-auto my-6"></div>
        </motion.div>

        <div className="space-y-4 mb-14">
          {problem.questions.map((question, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-white/5 shadow-sm border border-stone-gray/10 dark:border-white/10"
            >
              <div className="bg-terracota/10 p-1.5 rounded-full mt-0.5">
                <Check className="w-5 h-5 text-terracota" />
              </div>
              <p className="text-xl md:text-xl font-inter text-stone-gray dark:text-gray-200 leading-snug">
                {question}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-3xl font-serif  text-navy-deep dark:text-warm-white/90"
        >
          {problem.closing}
        </motion.p>
      </div>
    </section>
  );
}
