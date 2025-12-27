"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

// Sample client testimonials
const testimonials = [
  {
    name: "Sarah Khan",
    role: "E-commerce Manager",
    company: "Fashion Nova",
    feedback:
      "AR Technology transformed our Shopify store with interactive 3D product views. The implementation was smooth and increased our conversions significantly.",
    avatar: "https://images.unsplash.com/photo-1603415526960-f4eaf3e5c2e0?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Ali Raza",
    role: "Founder",
    company: "TechGear",
    feedback:
      "The team delivered beyond expectations. Their AR solutions made our online products come alive, impressing our customers and boosting engagement.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Fatima Noor",
    role: "Digital Marketing Head",
    company: "Ecom World",
    feedback:
      "Working with AR Technology was seamless. They provided hands-on guidance and built scalable AR solutions for our e-commerce platforms.",
    avatar: "https://images.unsplash.com/photo-1618005198919-3d42d6b0d57a?auto=format&fit=crop&w=160&q=80",
  },
];

export default function Client() {
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
            AR Technology Feedback
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
            What <span className="text-[#6A7CF5]">Our Clients Say</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70">
            Real feedback from businesses who trusted AR Technology to bring their products to life.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute -top-4 -left-4 text-[#6A7CF5]/50 text-3xl">
                <FaQuoteLeft />
              </div>
              <p className="mt-4 text-sm text-white/70">{t.feedback}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/10">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-white/60">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
