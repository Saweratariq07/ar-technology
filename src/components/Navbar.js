"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "home", href: "/" },
    { name: "about", href: "#about" },
    { name: "services", href: "#services" },
    { name: "portfolio", href: "#portfolio" },
    { name: "team", href: "#team" },
    { name: "career", href: "/career" },
    { name: "contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        open
          ? "bg-black text-white shadow-md"        // mobile menu open = black
          : isScrolled
          ? "bg-white text-blue-600 shadow-md"     // scrolled
          : "bg-white text-blue-600"               // default
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-[75px]">
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={30}
            className="w-[90px] h-auto"
          />
        </Link>

        <nav className="hidden md:flex gap-8 h-full items-center">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="relative inline-block capitalize font-medium text-lg text-blue-600"
            >
              {link.name}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-blue-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </nav>

        <button
          className={`md:hidden z-50 relative ${
            open ? "text-white" : "text-blue-600"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-full bg-black text-white shadow-lg flex flex-col p-6 space-y-6 md:hidden z-40"
          >
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="relative capitalize text-lg font-medium text-white"
              >
                {link.name}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
