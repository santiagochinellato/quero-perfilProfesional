"use client";

import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function AuthoritySection() {
  const { authority } = siteContent;

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0F172A] border-y border-stone-gray/10">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-terracota font-handwritten text-2xl rotate-[-2deg] block mb-4">
          Credenciales
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12 text-navy-deep dark:text-warm-white">
          {authority.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {authority.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-ice-gray dark:bg-white/5"
            >
              <Award className="w-6 h-6 text-terracota shrink-0" />
              <span className="text-left font-medium text-navy-deep dark:text-gray-200">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 border border-navy-deep dark:border-warm-white text-navy-deep dark:text-warm-white font-medium rounded-lg hover:bg-navy-deep hover:text-white dark:hover:bg-warm-white dark:hover:text-navy-deep transition-all"
        >
          <FileText className="w-5 h-5" />
          {authority.ctaCV}
        </a>
      </div>
    </section>
  );
}
