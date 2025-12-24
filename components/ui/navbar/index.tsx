"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobileToggle from "./navbar-mobile-toggle";
import NavbarMobileMenu from "./navbar-mobile-menu";
import ThemeToggle from "../theme-toggle";
import siteContent from "@/data/site-content.json";

import logo from "@/public/logos/signatureQuero.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { navbar } = siteContent;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-stone-gray/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold font-serif text-navy-deep dark:text-warm-white"
        >
          <Image
            src={logo}
            alt="Martín Quero Signature"
            width={250}
            height={50}
            className="lg:w-[250px] w-[150px] h-auto"
            priority
          />
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
