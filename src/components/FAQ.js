"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services does AR Technology provide?",
    answer:
      "AR Technology offers ecommerce development, web platform solutions, digital marketing, brand promotion, and performance-driven advertising across multiple online marketplaces and websites.",
  },
  {
    question: "Which ecommerce platforms do you work with?",
    answer:
      "We work with Shopify, Amazon, Etsy, TikTok Shop, eBay, Walmart, and WordPress, providing customized solutions tailored to each platform’s requirements.",
  },
  {
    question: "Do you offer custom website development?",
    answer:
      "Yes. We design and develop custom, responsive websites focused on performance, usability, and scalability for growing businesses.",
  },
  {
    question: "Can you help with digital marketing and paid ads?",
    answer:
      "Absolutely. We manage digital marketing campaigns, paid ads, and brand promotion strategies designed to increase visibility, traffic, and conversions.",
  },
  {
    question: "Will my website be optimized for speed and SEO?",
    answer:
      "Yes. All our projects follow performance and SEO best practices, including optimized assets, clean code structure, and mobile-first implementation.",
  },
  {
    question: "Do you support long-term growth and maintenance?",
    answer:
      "We provide ongoing support, optimization, and scaling solutions to ensure your digital platforms continue to perform as your business grows.",
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
            AR Technology FAQ
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
            Answers to common questions about our services, platforms, and
            digital solutions.
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
