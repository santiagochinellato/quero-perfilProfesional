"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function ServicesSection() {
  const { services } = siteContent;

  return (
    <section
      id="servicios"
      className="py-16 md:py-24 px-4 md:px-12 bg-white dark:bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-terracota font-handwritten text-xl md:text-2xl rotate-[-2deg] block mb-2 md:mb-4">
            ¿Cómo trabajo?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-navy-deep dark:text-warm-white leading-tight">
            {services.title}
          </h2>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {services.items.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 md:p-12 rounded-2xl bg-white dark:bg-white/5 border border-stone-gray/10 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 relative z-10">
                {/* Left Column: Number + Content */}
                <div className="lg:w-2/3">
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                    <div className="flex items-center gap-3 md:block">
                      <span className="text-5xl md:text-7xl font-serif font-bold text-terracota/10 leading-none select-none shrink-0">
                        0{idx + 1}
                      </span>
                      {/* Mobile Title (visible only on small screens next to number for compactness) */}
                      <h3 className="md:hidden text-xl font-bold font-serif dark:text-warm-white leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      {/* Desktop Title */}
                      <h3 className="hidden md:block text-3xl font-bold font-serif dark:text-warm-white leading-tight">
                        {service.title}
                      </h3>

                      <div className="space-y-1.5">
                        {service.questions.map((q, i) => (
                          <p
                            key={i}
                            className="dark:text-stone-gray/80 font-serif text-base md:text-lg leading-snug"
                          >
                            {q}
                          </p>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-3 md:pt-4">
                        {service.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-3 h-[2px] bg-terracota/40 shrink-0 mt-2"></div>
                            <span className="text-navy-deep dark:text-gray-300 font-medium text-sm leading-tight">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Result + CTA */}
                <div className="lg:w-1/3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-gray/10 lg:pl-10 pt-5 md:pt-8 lg:pt-0">
                  <div className="mb-5 md:mb-8">
                    <span className="font-handwritten text-terracota text-lg md:text-xl rotate-[-2deg] block mb-2">
                      Resultado:
                    </span>
                    <p className="text-base md:text-lg font-serif text-navy-deep dark:text-warm-white leading-relaxed">
                      {service.result}
                    </p>
                  </div>

                  <a
                    href="https://wa.me/5492615581683"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full px-4 py-2.5 md:px-6 md:py-3 bg-transparent border border-navy-deep text-navy-deep dark:border-white dark:text-white font-semibold rounded-lg hover:bg-navy-deep hover:text-white dark:hover:bg-white dark:hover:text-navy-deep transition-all flex items-center justify-between text-sm md:text-base"
                  >
                    <span>
                      {service.cta.replace("Consultar por", "").trim() ||
                        service.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
