"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  Users,
  Network,
  Lightbulb,
  HeartPulse,
  MessageCircle,
} from "lucide-react";
import siteContent from "@/data/site-content.json";

const icons = {
  Microscope: Microscope,
  Users: Users,
  Network: Network,
  Lightbulb: Lightbulb,
  HeartPulse: HeartPulse,
  MessageCircle: MessageCircle,
};

export default function DifferentialsSection() {
  const { differentials } = siteContent;

  return (
    <section className="py-16 md:py-24 px-5 md:px-6 bg-warm-white dark:bg-[#152031] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-terracota font-handwritten text-xl md:text-2xl rotate-[-1deg] block mb-2 md:mb-4">
            {differentials.label || "→ Lo que me diferencia"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy-deep dark:text-warm-white mb-4 md:mb-8 font-bold">
            No soy un coach externo
          </h2>
          <p className="text-xl md:text-2xl font-inter text-stone-gray dark:text-warm-white mb-6 md:mb-8">
            Soy uno de ustedes
          </p>
          {/* Decorative little separator */}
          <div className="flex justify-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-terracota/40"></div>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-terracota/60"></div>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-terracota/40"></div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {differentials.items.map((item, idx) => {
            const Icon = icons[item.icon as keyof typeof icons] || Users;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center group p-10 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-stone-gray/10 dark:border-white/10 hover:shadow-xl hover:shadow-terracota/5 transition-all duration-500 relative w-full w-[calc(100%-1rem)] lg:w-[calc(50%-1rem)] flex flex-col h-full min-h-[480px] items-center"
              >
                {/* Floating Icon Base */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#F9F8F6] dark:bg-white/5 mb-6 group-hover:bg-terracota/10 transition-colors duration-500 shadow-inner flex-shrink-0">
                  <Icon className="w-9 h-9 text-navy-deep dark:text-warm-white group-hover:text-terracota transition-colors duration-500" />
                </div>

                <div className="mb-4 flex-shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-xs font-bold tracking-wider text-navy-deep dark:text-warm-white uppercase mb-3 text-stone-gray">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-serif text-navy-deep dark:text-warm-white font-bold">
                    {item.title}
                  </h3>
                </div>

                {/* Small separator inside card */}
                <div className="w-10 h-[2px] bg-terracota/60 mx-auto mb-5 group-hover:w-20 group-hover:bg-terracota/80 transition-all duration-500 flex-shrink-0"></div>

                <p className="text-stone-gray dark:text-gray-400 leading-relaxed font-sans text-lg mb-6 flex-grow">
                  {item.description}
                </p>

                <p className="text-terracota font-serif text-lg flex-shrink-0">
                  &quot;{item.impact}&quot;
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24 max-w-4xl mx-auto"
        >
          <span className="font-serif text-xl md:text-3xl inline-block leading-relaxed italic block mb-6">
            &quot;{differentials.closing}&quot;
          </span>
          <span className="block text-lg text-stone-gray dark:text-stone-gray/80 font-inter">
            {differentials.integration}
          </span>
        </motion.p>
      </div>
    </section>
  );
}
