"use client";

import { Linkedin } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FooterSocials() {
  const { footer } = siteContent;

  return (
    <div className="flex gap-4">
      <a
        href={footer.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/10 hover:bg-terracota text-warm-white transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
}
