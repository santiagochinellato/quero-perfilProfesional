"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Logo from "../logo";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobileToggle from "./navbar-mobile-toggle";
import NavbarMobileMenu from "./navbar-mobile-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 print:hidden ${
        isScrolled || isMobileMenuOpen
          ? "bg-warm-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md shadow-sm border-b border-stone-gray/10 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-2 h-20 flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavbarDesktop />
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 md:hidden">
          {/* <ThemeToggle /> */}
          <NavbarMobileToggle
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <NavbarMobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
    </motion.nav>
  );
}
