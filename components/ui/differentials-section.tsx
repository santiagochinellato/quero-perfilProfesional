"use client";

import { motion } from "framer-motion";
import { Microscope, Users, Network } from "lucide-react";
import siteContent from "@/data/site-content.json";

const icons = {
  Microscope: Microscope,
  Users: Users,
  Network: Network,
};

export default function DifferentialsSection() {
  const { differentials } = siteContent;

  return (
    <section className="py-24 px-6 bg-warm-white dark:bg-[#152031] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-terracota font-handwritten text-2xl rotate-[-1deg] block mb-4">
            {differentials.label || "→ Lo que me diferencia"}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy-deep dark:text-warm-white mb-8 font-bold">
            No soy un coach externo
          </h2>
          <p className="text-2xl md:text-2xl font-inter text-stone-gray dark:text-warm-white mb-8">
            Soy uno de ustedes
          </p>
          {/* Decorative little separator */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-terracota/40"></div>
            <div className="w-2 h-2 rounded-full bg-terracota/60"></div>
            <div className="w-2 h-2 rounded-full bg-terracota/40"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.items.map((item, idx) => {
            const Icon = icons[item.icon as keyof typeof icons] || Users;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center group p-10 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-stone-gray/10 dark:border-white/10 hover:shadow-xl hover:shadow-terracota/5 transition-all duration-500 relative"
              >
                {/* Floating Icon Base */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#F9F8F6] dark:bg-white/5 mb-8 group-hover:bg-terracota/10 transition-colors duration-500 shadow-inner">
                  <Icon className="w-9 h-9 text-navy-deep dark:text-warm-white group-hover:text-terracota transition-colors duration-500" />
                </div>

                <h3 className="text-2xl font-serif mb-4 text-navy-deep dark:text-warm-white font-bold">
                  {item.title}
                </h3>

                {/* Small separator inside card */}
                <div className="w-10 h-[2px] bg-terracota/60 mx-auto mb-5 group-hover:w-20 group-hover:bg-terracota/80 transition-all duration-500"></div>

                <p className="text-stone-gray dark:text-gray-400 leading-relaxed font-sans text-lg">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <span className="font-serif text-xl md:text-3xl inline-block max-w-2xl leading-relaxed  italic">
            "{differentials.closing}"
          </span>
        </motion.p>
      </div>
    </section>
  );
}
