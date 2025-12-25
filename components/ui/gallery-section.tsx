"use client";

import { motion } from "framer-motion";
import siteContent from "@/data/site-content.json";
import Image from "next/image";

export default function GallerySection() {
  const { gallery } = siteContent;

  return (
    <section
      id="galeria"
      className="py-16 md:py-24 px-4 md:px-6 bg-[#F9F8F6] dark:bg-[#0F172A] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-terracota font-handwritten text-xl md:text-2xl rotate-[-1deg] block mb-2 md:mb-4">
            {gallery.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy-deep dark:text-warm-white mb-4 md:mb-6 font-bold">
            {gallery.title}
          </h2>
          <p className="text-lg md:text-xl text-stone-gray dark:text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed">
            {gallery.description}
          </p>
        </motion.div>

        {/* Mobile Carousel / Desktop Grid */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 md:pb-8 snap-x snap-mandatory gap-4 md:gap-6 lg:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible scrollbar-hide">
            {gallery.images.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-[85vw] md:w-auto snap-center relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3]"
              >
                <div className="absolute inset-0 bg-navy-deep/20 group-hover:bg-navy-deep/0 transition-colors duration-500 z-10" />

                {/* Image */}
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.15] group-hover:sepia-0"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                  {/* <p className="text-white font-serif text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption}
                  </p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white dark:bg-white/5 py-3 px-6 rounded-full border border-stone-gray/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm font-medium text-stone-gray dark:text-gray-400">
              {gallery.note}
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
