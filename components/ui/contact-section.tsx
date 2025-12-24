"use client";

import { motion } from "framer-motion";
import siteContent from "@/data/site-content.json";
import { useState } from "react";

export default function ContactSection() {
  const { contact } = siteContent;
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate submission
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-[#F9F8F6] dark:bg-[#152031]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-terracota font-handwritten text-2xl rotate-[-2deg] block mb-4">
            Empecemos a conversar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-navy-deep dark:text-warm-white mb-6">
            {contact.title}
          </h2>
          <p className="text-lg text-stone-gray dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-navy-deep dark:text-warm-white mb-2">
                {contact.formFields.name}
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-stone-gray/20 dark:border-white/10 focus:border-terracota focus:ring-1 focus:ring-terracota text-navy-deep dark:text-white transition-all outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-navy-deep dark:text-warm-white mb-2">
                  {contact.formFields.email}
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-stone-gray/20 dark:border-white/10 focus:border-terracota focus:ring-1 focus:ring-terracota text-navy-deep dark:text-white transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-deep dark:text-warm-white mb-2">
                  {contact.formFields.phone}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-stone-gray/20 dark:border-white/10 focus:border-terracota focus:ring-1 focus:ring-terracota text-navy-deep dark:text-white transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-deep dark:text-warm-white mb-2">
                {contact.formFields.type}
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-stone-gray/20 dark:border-white/10 focus:border-terracota focus:ring-1 focus:ring-terracota text-navy-deep dark:text-white transition-all appearance-none cursor-pointer outline-none">
                  <option value="" disabled selected>
                    Seleccionar...
                  </option>
                  {contact.formFields.typeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-stone-gray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-deep dark:text-warm-white mb-2">
                {contact.formFields.message}
              </label>
              <textarea
                required
                rows={5}
                placeholder={contact.formFields.message}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-stone-gray/20 dark:border-white/10 focus:border-terracota focus:ring-1 focus:ring-terracota text-navy-deep dark:text-white transition-all outline-none resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={formStatus !== "idle"}
                className="w-full py-4 bg-terracota dark:bg-white text-white dark:text-navy-deep font-bold text-lg rounded-lg hover:bg-navy-deep/90 dark:hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {formStatus === "idle"
                  ? contact.cta
                  : formStatus === "submitting"
                  ? "Enviando..."
                  : "¡Mensaje Enviado!"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
