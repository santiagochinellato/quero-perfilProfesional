"use client";

import { motion, AnimatePresence } from "framer-motion";
import siteContent from "@/data/site-content.json";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function NavbarMobileMenu({
  isOpen,
  setIsOpen,
}: NavbarMobileMenuProps) {
  const { navbar } = siteContent;
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden bg-white/95 dark:bg-navy-deep/95 backdrop-blur-md border-b border-stone-gray/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {navbar.menu.map((item) => {
              const isHash = item.href.startsWith("#");
              const href =
                isHash && pathname !== "/" ? `/${item.href}` : item.href;

              return (
                <Link
                  key={item.href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-navy-deep dark:text-warm-white hover:text-terracota transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href={navbar.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-3 bg-terracota text-white text-center font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Agendá tu sesión
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
