"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  const socials = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

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
            <h2 className="text-xl font-semibold text-white tracking-wide">
              AR <span className="text-[#6A7CF5]">TECHNOLOGY</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/65">
              AR Technology is a digital commerce and marketing company helping
              brands grow across Shopify, Amazon, Etsy, TikTok Shop, eBay,
              Walmart, and WordPress through scalable eCommerce solutions,
              performance marketing, and brand promotion.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#6A7CF5]" />
              eCommerce • Marketing • Growth
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {[
                "Home",
                "Services",
                "Platforms",
                "Case Studies",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="inline-flex items-center gap-2 px-2 py-1 rounded-lg transition hover:bg-white/5 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    {item}
                  </a>
                </li>
              ))}
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
                <a
                  href="https://maps.app.goo.gl/LU4GBDZx3DXhRXtw5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                 MD Plaza Rahimyar khan, Pakistan
                </a>
              </li>

              <li className="flex gap-3">
                <span className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#6A7CF5]">
                  <MdEmail />
                </span>
                <a
                  href="mailto:artechnology73@gmail.com"
                  className="hover:underline"
                >
                  artechnology73@gmail.com
                </a>
              </li>

              <li className="flex gap-3">
                <span className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#6A7CF5]">
                  <MdPhone />
                </span>
                <a
                  href="https://wa.me/923131173799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +92 313 1173799
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white">Updates</h3>
            <p className="mt-4 text-sm text-white/65">
              Insights on eCommerce growth, ads performance, and digital
              marketing strategies.
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
            © {new Date().getFullYear()} AR Technology. All rights reserved.
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
