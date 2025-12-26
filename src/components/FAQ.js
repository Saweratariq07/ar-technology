"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How does AR integrate with Shopify stores?",
    answer:
      "Our AR solutions integrate directly with Shopify themes and product pages, enabling WebAR and 3D experiences without disrupting existing store performance or checkout flows.",
  },
  {
    question: "Do customers need to install an app to use AR?",
    answer:
      "No. Our technology is browser-based (WebAR), allowing customers to experience AR directly through mobile and desktop browsers supported by Shopify.",
  },
  {
    question: "What types of products work best with AR on Shopify?",
    answer:
      "AR is highly effective for furniture, fashion, accessories, beauty products, electronics, and custom items where visualization improves purchase confidence.",
  },
  {
    question: "Will AR impact website loading speed?",
    answer:
      "All AR assets are optimized for performance using compression, lazy loading, and device-aware rendering to ensure fast page loads and smooth interactions.",
  },
  {
    question: "Is AR compatible with existing Shopify themes?",
    answer:
      "Yes. Our solutions are designed to be theme-agnostic and work seamlessly with both custom and popular Shopify themes.",
  },
  {
    question: "Can AR experiences scale with high-traffic stores?",
    answer:
      "Absolutely. Our infrastructure supports scalable delivery, caching, and CDN-backed assets suitable for mid-size and enterprise-level Shopify businesses.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0B0D12] py-20 md:py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6A7CF5]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-[#7C3AED]/18 blur-[130px]" />

      <div className="relative mx-auto w-[92%] max-w-4xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-[#6A7CF5] shadow-[0_0_18px_rgba(106,124,245,0.75)]" />
            Shopify AR knowledge base
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.06 }}
            className="mt-5 text-3xl md:text-4xl font-semibold text-white"
          >
            Frequently Asked <span className="text-[#6A7CF5]">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
            className="mt-4 text-sm md:text-base text-white/70"
          >
            Clear answers to common questions about AR technology for Shopify-based
            eCommerce businesses.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="text-sm md:text-base font-medium text-white group-hover:text-white/90 transition">
                    {faq.question}
                  </h3>

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#6A7CF5] transition">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="px-6 pb-6 text-sm md:text-base leading-relaxed text-white/70"
                    >
                      <div className="border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
