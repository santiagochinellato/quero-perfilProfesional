"use client";

import siteContent from "@/data/site-content.json";

export default function FooterLinks() {
  const { navbar } = siteContent;

  return (
    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left w-full md:pl-12">
      <h3 className="text-terracota font-bold mb-4 font-serif">Secciones</h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-left mx-auto md:mx-0">
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
