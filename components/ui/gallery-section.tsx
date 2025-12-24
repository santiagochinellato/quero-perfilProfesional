"use client";

import { motion } from "framer-motion";
import siteContent from "@/data/site-content.json";
import Image from "next/image";
import { useRef } from "react";

// Static imports for Gallery
import gallery1 from "@/public/images/gallery-1.jpg";
import gallery2 from "@/public/images/gallery-2.jpg";
import gallery3 from "@/public/images/gallery-3.jpg";
import gallery4 from "@/public/images/gallery-4.jpg";
import gallery5 from "@/public/images/gallery-5.jpg";
import gallery6 from "@/public/images/gallery-6.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

export default function GallerySection() {
  const { gallery } = siteContent;
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 px-6 bg-[#F9F8F6] dark:bg-[#152031] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-terracota font-handwritten text-2xl rotate-[-2deg] block mb-4">
            {gallery.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-navy-deep dark:text-warm-white mb-6">
            {gallery.title}
          </h2>
          <p className="text-lg text-stone-gray dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {gallery.description}
          </p>
        </motion.div>

        {/* Desktop Grid / Mobile Carousel */}
        <div
          ref={carouselRef}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
        >
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[85vw] md:min-w-0 snap-center relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
