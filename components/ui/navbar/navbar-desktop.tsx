"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import siteContent from "@/data/site-content.json";

export default function NavbarDesktop() {
  const { navbar } = siteContent;
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8">
      {navbar.menu.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium text-navy-deep/80 dark:text-warm-white/80 hover:text-terracota dark:hover:text-terracota transition-colors"
          )}
        >
          {item.name}
        </a>
      ))}
      <a
        href={navbar.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 bg-terracota hover:bg-terracota/90 text-white text-sm font-medium rounded-lg transition-all"
      >
        Agendá tu sesión
      </a>
    </div>
  );
}
