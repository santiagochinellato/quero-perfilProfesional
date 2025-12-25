"use client";

import { motion } from "framer-motion";
import { Award, FileText, GraduationCap, University } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function AuthoritySection() {
  const { authority } = siteContent;

  const iconMap: Record<string, React.ElementType> = {
    GraduationCap: GraduationCap,
    University: University,
    FileText: FileText,
    Award: Award,
  };

  return (
    <section
      id="trayectoria"
      className="py-24 px-6 bg-white dark:bg-[#0F172A] border-y border-stone-gray/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-terracota font-handwritten text-2xl rotate-[-2deg] block mb-4">
            Credenciales
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-navy-deep dark:text-warm-white">
            {authority.title}
          </h2>
          <p className="mt-4 text-stone-gray dark:text-gray-400 max-w-2xl mx-auto font-serif text-lg leading-relaxed">
            {authority.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {authority.categories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Award;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white dark:bg-white/5 p-8 rounded-xl border border-stone-gray/10 dark:border-white/10 hover:border-terracota/30 dark:hover:border-terracota/30 transition-all duration-300 hover:shadow-lg hover:shadow-stone-gray/5"
              >
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracota/0 via-terracota/40 to-terracota/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-gray/10 dark:border-white/5">
                  <div className="p-3 bg-terracota/10 rounded-lg group-hover:bg-terracota group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-terracota group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-deep dark:text-warm-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracota/60 shrink-0" />
                      <span className="text-stone-gray dark:text-gray-300 text-sm md:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="/cv"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-deep text-white rounded-full hover:bg-navy-deep/90 transition-all shadow-lg shadow-navy-deep/10 font-medium text-sm tracking-wide"
          >
            <FileText className="w-4 h-4" />
            {authority.ctaCV}
          </a>
        </div>
      </div>
    </section>
  );
}
