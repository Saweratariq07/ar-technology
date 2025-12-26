"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  const socials = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub];

  return (
    <footer className="relative overflow-hidden bg-[#0B0D12] text-white/75">
      {/* Ambient glows */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#6A7CF5]/20 blur-[130px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-56 right-[-160px] h-[620px] w-[620px] rounded-full bg-[#7C3AED]/16 blur-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-[92%] max-w-6xl pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-white tracking-wide">
                AR <span className="text-[#6A7CF5]">TECHNOLOGY</span>
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/65">
              AR TECHNOLOGY is a software company delivering enterprise-grade
              Augmented Reality solutions for Shopify eCommerce—built for
              performance, scalability, and immersive digital experiences.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#6A7CF5]" />
              WebAR • 3D • Shopify-Ready
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {["Home", "Solutions", "Technology", "Industries", "Company"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="inline-flex items-center gap-2 px-2 py-1 rounded-lg transition hover:bg-white/5 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex gap-3">
                <span className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#6A7CF5]">
                  <MdLocationOn />
                </span>
                Lahore, Pakistan
              </li>

              <li className="flex gap-3">
                <span className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#6A7CF5]">
                  <MdEmail />
                </span>
                contact@artechnology.com
              </li>

              <li className="flex gap-3">
                <span className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#6A7CF5]">
                  <MdPhone />
                </span>
                +92 319 1628653
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white">Updates</h3>
            <p className="mt-4 text-sm text-white/65">
              Product improvements and AR platform updates.
            </p>

            <form className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/85 outline-none focus:ring-2 focus:ring-[#6A7CF5]/40"
              />
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 py-8">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} AR TECHNOLOGY. All rights reserved.
          </p>

          <div className="flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 hover:bg-white/5"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
