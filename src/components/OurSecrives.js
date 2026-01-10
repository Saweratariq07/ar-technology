"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiLayers, FiSmartphone, FiZap, FiShield } from "react-icons/fi";

export default function CompanyOverview() {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="company" className="relative py-20 md:py-24 bg-[#0B0D12] overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6A7CF5]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-[#7C3AED]/18 blur-[130px]" />

      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-[#6A7CF5] shadow-[0_0_18px_rgba(106,124,245,0.75)]" />
              Digital solutions for modern businesses
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.06 }}
              className="mt-5 text-3xl md:text-4xl font-semibold leading-tight text-white"
            >
              Who we are — <span className="text-[#6A7CF5]">AR Technology</span> builds scalable digital systems
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
              className="mt-5 text-base md:text-lg leading-relaxed text-white/70"
            >
              AR Technology is a results-driven digital company focused on building
              reliable, high-performance web platforms and ecommerce solutions.
              We help brands grow their online presence through clean development,
              strategic design, and data-backed digital execution.
            </motion.p>

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {[
                {
                  icon: <FiLayers />,
                  title: "Ecommerce platforms",
                  desc: "Shopify, Amazon, Etsy, TikTok Shop, eBay, Walmart integrations.",
                },
                {
                  icon: <FiSmartphone />,
                  title: "Responsive web development",
                  desc: "Mobile-first websites built for speed, usability, and scale.",
                },
                {
                  icon: <FiZap />,
                  title: "Growth-focused execution",
                  desc: "Conversion optimization, performance tuning, and analytics.",
                },
                {
                  icon: <FiShield />,
                  title: "Reliable & secure delivery",
                  desc: "Clean code, structured workflows, and production-ready builds.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(600px_circle_at_20%_10%,rgba(106,124,245,0.14),transparent_55%)]" />
                  <div className="relative flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#6A7CF5] shadow-[0_0_24px_rgba(106,124,245,0.20)]">
                      <span className="text-[18px]">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Gradient frame */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#6A7CF5]/55 via-[#7C3AED]/40 to-[#6A7CF5]/25 blur-[10px]" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="relative aspect-[16/11] w-full">
                  <img
                    src="/download.png"
                    alt="AR Technology team collaboration"
                    className="h-full w-full object-cover opacity-[0.92]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/35 to-[#6A7CF5]/20" />
                  <div
                    className="absolute inset-0 opacity-35"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2 border-t border-white/10 px-5 py-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-white/70">
                    Designed for scalable ecommerce and digital growth.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                    <span className="text-xs tracking-wide text-white/60">
                      Professional • Reliable • Growth-driven
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating tags */}
              <div className="pointer-events-none absolute -bottom-6 left-6 hidden gap-3 md:flex">
                {["Ecommerce", "Web Platforms", "Digital Growth"].map((t, idx) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-white/70 backdrop-blur"
                    style={{ transform: `translateY(${idx * 6}px)` }}
                  >
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#6A7CF5]" />
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
