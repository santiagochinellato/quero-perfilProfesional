"use client";

import siteContent from "@/data/site-content.json";
import Link from "next/link";
import Image from "next/image";
import FooterLinks from "./footer-links";
import FooterSocials from "./footer-socials";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-navy-deep text-warm-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/MartínQueroLogo.svg"
                alt={footer.brand.name}
                width={200}
                height={50}
                className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-terracota font-medium">{footer.brand.tagline}</p>
          </div>
          <p className="text-stone-gray dark:text-gray-400 max-w-sm">
            {footer.brand.description}
          </p>
          <FooterSocials />
        </div>

        {/* Links */}
        <div>
          <FooterLinks />
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-terracota font-bold mb-2">
            {footer.contact.title}
          </h3>
          <p className="text-sm text-gray-300">{footer.contact.location}</p>
          <p className="text-sm text-gray-300">{footer.contact.email}</p>
          <p className="text-sm text-gray-300">{footer.contact.phone}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-stone-gray dark:text-gray-500">
        {footer.legal.copyright}
      </div>
    </footer>
  );
}
