"use client";

import siteContent from "@/data/site-content.json";
import Link from "next/link";
import Image from "next/image";
import FooterLinks from "./footer-links";
import FooterSocials from "./footer-socials";
import Logo from "../logo";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-navy-deep text-warm-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/5 pb-10">
        {/* Brand Column - Wider to push center right */}
        <div className="md:col-span-5 space-y-4 flex flex-col items-center">
          <Link href="/" className="inline-block">
            <Logo isFooter />
          </Link>
          <div className="flex justify-center w-full md:w-auto">
            <FooterSocials />
          </div>
        </div>

        {/* Links Column */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <FooterLinks />
        </div>

        {/* Contact Column */}
        <div className="md:col-span-3 space-y-4 text-center md:text-left">
          <h3 className="text-terracota font-bold mb-4 font-serif">
            {footer.contact.title}
          </h3>
          <div className="space-y-3 text-sm text-gray-300 font-sans">
            <p>{footer.contact.location}</p>
            <a
              href={`mailto:${footer.contact.email}`}
              className="block hover:text-white transition-colors"
            >
              {footer.contact.email}
            </a>
            <a
              href={footer.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition-colors"
            >
              {footer.contact.phone.replace(
                "+54 (261) 155581683",
                "+54 (261) 155581683"
              )}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-gray dark:text-gray-400">
        <span>{footer.legal.copyright}</span>
        <span className="font-medium text-terracota hover:text-white transition-colors">
          {footer.legal.developedBy}
        </span>
      </div>
    </footer>
  );
}
