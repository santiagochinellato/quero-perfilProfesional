"use client";

import siteContent from "@/data/site-content.json";

export default function FooterLinks() {
  const { navbar } = siteContent;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-terracota font-bold mb-2">Secciones</h3>
      <ul className="space-y-2">
        {navbar.menu.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-stone-gray dark:text-stone-gray/60 hover:text-white transition-colors text-sm"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
