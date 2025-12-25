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

        <div className="space-y-12 mb-16">
          {authority.categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-left bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm border border-stone-gray/10 dark:border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-terracota/10 rounded-lg">
                  {/* Icon mapping would be ideal here, but using fallback for now or need imports */}
                  <Award className="w-6 h-6 text-terracota" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-deep dark:text-warm-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracota mt-2 shrink-0"></div>
                    <span className="text-stone-gray dark:text-gray-300 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
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
