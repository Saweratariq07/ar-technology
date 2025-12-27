"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Portfolio items (replace images with real project screenshots later)
const portfolioItems = [
  {
    title: "Shopify AR Store",
    description: "Interactive 3D product experiences integrated with Shopify.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44327f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Etsy Custom Store",
    description: "Customized Etsy store design and automation for sellers.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161c243b0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Amazon Marketing Campaign",
    description: "Optimized Amazon product campaigns for higher ROI.",
    image: "https://images.unsplash.com/photo-1612831455546-7a0a524ffca3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Digital Marketing & Ads",
    description: "Brand promotion across social media and Google Ads.",
    image: "https://images.unsplash.com/photo-1581090700227-043e23e4b65f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "WordPress eCommerce Site",
    description: "Custom WordPress store design with responsive layouts.",
    image: "https://images.unsplash.com/photo-1612832021107-9a4e7e4d98d2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "TikTok Shop Integration",
    description: "Seamless TikTok Shop integration with automated feeds.",
    image: "https://images.unsplash.com/photo-1612831455546-8b5a32b5e2d1?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-[#0B0D12] py-20 md:py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6A7CF5]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-[#7C3AED]/18 blur-[130px]" />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#6A7CF5]" />
            AR Technology Portfolio
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
            Our <span className="text-[#6A7CF5]">Projects</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70">
            A showcase of our work across Shopify, Amazon, Etsy, TikTok Shop,
            eCommerce, WordPress, and Digital Marketing campaigns.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/65">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
