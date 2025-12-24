"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function ServicesSection() {
  const { services } = siteContent;

  return (
    <section
      id="servicios"
      className="py-24 px-6 md:px-12 bg-white dark:bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-terracota font-handwritten text-2xl rotate-[-2deg] block mb-4">
            ¿Cómo trabajo?
          </span>
          <h2 className="text-4xl font-bold md:text-5xl font-serif text-navy-deep dark:text-warm-white">
            {services.title}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {services.items.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-12 rounded-2xl bg-white dark:bg-white/5 border border-stone-gray/10 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10">
                {/* Left Column: Number + Content */}
                <div className="lg:w-2/3">
                  <div className="flex items-start gap-6">
                    <span className="text-6xl md:text-7xl font-serif font-bold text-terracota/10 leading-none select-none">
                      0{idx + 1}
                    </span>
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold font-serif dark:text-warm-white leading-tight">
                        {service.title}
                      </h3>
                      <div className="space-y-1">
                        {service.questions.map((q, i) => (
                          <p
                            key={i}
                            className=" dark:text-stone-gray/80  font-serif text-lg"
                          >
                            {q}
                          </p>
                        ))}
                      </div>

                      <div className="space-y-3 pt-4">
                        {service.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-4 h-[2px] bg-terracota/40"></div>
                            <span className="text-navy-deep dark:text-gray-300 font-medium">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Result + CTA */}
                <div className="lg:w-1/3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-gray/10 lg:pl-10 pt-8 lg:pt-0">
                  <div className="mb-8">
                    <span className="font-handwritten text-terracota text-xl rotate-[-2deg] block mb-3">
                      Resultado:
                    </span>
                    <p className="text-lg font-serif text-navy-deep dark:text-warm-white leading-relaxed">
                      {service.result}
                    </p>
                  </div>

                  <button className="group w-full px-6 py-3 bg-transparent border border-navy-deep text-navy-deep dark:border-white dark:text-white font-semibold rounded-lg hover:bg-navy-deep hover:text-white dark:hover:bg-white dark:hover:text-navy-deep transition-all flex items-center justify-between">
                    <span>
                      {service.cta.replace("Consultar por", "").trim() ||
                        service.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
