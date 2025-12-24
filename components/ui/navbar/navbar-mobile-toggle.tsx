"use client";

import { Menu, X } from "lucide-react";

interface NavbarMobileToggleProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function NavbarMobileToggle({
  isOpen,
  setIsOpen,
}: NavbarMobileToggleProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 text-navy-deep dark:text-warm-white"
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}
