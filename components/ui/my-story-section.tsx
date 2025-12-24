"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import siteContent from "@/data/site-content.json";
import { getAssetPath } from "@/lib/utils";

export default function MyStorySection() {
  const { myStory } = siteContent;

  return (
    <section
      id="sobre-mi"
      className="py-24 px-6 bg-[#F9F8F6] dark:bg-[#152031] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
        {/* Image Column (Left) */}
        <motion.div
          className="w-full lg:w-5/12 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={getAssetPath("/images/queroBlackandWhite.webp")}
              alt="Martín Quero - De la Ciencia al Coaching"
              fill
              className="object-cover grayscale transition-all duration-700"
            />
          </div>
          {/* Handwritten Caption */}
          <div className="mt-6 text-center">
            <span className="font-handwritten text-stone-gray/80 text-lg md:text-1xl -rotate-1 block">
              {myStory.imageCaption}
            </span>
          </div>
        </motion.div>

        {/* Content Column (Right) */}
        <div className="w-full lg:w-7/12 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <span className="text-terracota font-handwritten text-2xl lg:text-2xl block mb-2">
              {myStory.label}
            </span>

            {/* Title */}
            <h2 className="text-5xl md:text-5xl font-serif font-bold text-navy-deep dark:text-warm-white leading-[1.1] mb-8">
              {myStory.title}
            </h2>
          </motion.div>

          <div className="prose prose-lg prose-stone dark:prose-invert max-w-none font-serif text-stone-gray dark:text-gray-300 leading-relaxed text-lg">
            {/* Paragraph 1 with Drop Cap */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="first-letter:text-8xl first-letter:font-bold first-letter:text-terracota first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] font-serif"
            >
              {myStory.paragraphs[0]}
            </motion.p>

            {/* Paragraph 2 with Bold highlight */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {
                siteContent.myStory.paragraphs[1].split(
                  "Vi colegas brillantes"
                )[0]
              }
              <strong className="text-navy-deep dark:text-white font-bold">
                Vi colegas brillantes{" "}
                {
                  siteContent.myStory.paragraphs[1].split(
                    "Vi colegas brillantes"
                  )[1]
                }
              </strong>
            </motion.p>
            <div className="w-24 h-[2px] bg-terracota/70  my-6" />
            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {myStory.paragraphs[2]}
            </motion.p>
          </div>

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border-l-4 border-terracota pl-6 py-2 mt-8"
          >
            <p className="text-2xl md:text-3xl font-serif italic text-navy-deep dark:text-warm-white leading-tight">
              {myStory.quote}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
