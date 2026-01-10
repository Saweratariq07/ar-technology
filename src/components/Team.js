"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  { name: "Ahmad Rafique", role: "Founder & CEO", image: "/ahmed.jpeg" },
  { name: "Hannan Mohammad Arshad", role: "HR manager, Ecommerce managment", image: "/hannan.jpeg" },
  { name: "Muhammad Ali Shahbaz", role: "Sales Officer", image: "/ali.jpeg" },
  { name: "Shahzaib Sajjad", role: "Expert Shopify Developer", image: "/shezad.png" },
  { name: "Sawera Tariq", role: "Business Developer", image: "/sawera.jpg" },
  { name: "Eman Naeem", role: "Expert Digital Marketer", image: "/eman.jpeg" },
];

export default function Team() {
  const [showMore, setShowMore] = useState(false);

  const visibleMembers = useMemo(() => {
    return showMore ? teamMembers : teamMembers.slice(0, 4);
  }, [showMore]);

  return (
    <section id="team" className="relative overflow-hidden bg-[#0B0D12] py-20 md:py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#6A7CF5]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-140px] h-[560px] w-[560px] rounded-full bg-[#7C3AED]/16 blur-[140px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(60% 50% at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 50% at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-[#6A7CF5] shadow-[0_0_18px_rgba(106,124,245,0.75)]" />
            Cross-functional team delivering AR for Shopify
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.06 }}
            className="mt-5 text-3xl md:text-4xl font-semibold text-white"
          >
            Our <span className="text-[#6A7CF5]">Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
            className="mt-4 text-sm md:text-base leading-relaxed text-white/70"
          >
            A focused group spanning product, engineering, automation, and support—aligned around performance, quality,
            and scalable delivery for Shopify storefronts.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={showMore ? "expanded" : "compact"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {visibleMembers.map((member, idx) => (
                <TeamCard key={`${member.name}-${idx}`} member={member} idx={idx} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Toggle */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowMore((v) => !v)}
              className="
                group inline-flex items-center gap-2 rounded-full
                border border-white/10 bg-white/5 px-6 py-3
                text-sm font-medium text-white/85 backdrop-blur
                transition hover:bg-white/10 hover:text-white
                focus:outline-none focus:ring-2 focus:ring-[#6A7CF5]/50
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#6A7CF5] shadow-[0_0_18px_rgba(106,124,245,0.75)]" />
              {showMore ? "View Less" : "View More"}
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamCard({ member, idx }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(600px_circle_at_25%_10%,rgba(106,124,245,0.18),transparent_55%)]" />

      {/* Top line */}
      <div className="relative flex items-start justify-between">
        <div className="h-10 w-10 rounded-2xl border border-white/10 bg-black/30 shadow-[0_0_20px_rgba(106,124,245,0.18)]" />
        <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6A7CF5]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
        </div>
      </div>

      {/* Avatar */}
      <div className="relative mt-6 flex justify-center">
        <div className="relative h-[116px] w-[116px] rounded-full p-[2px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6A7CF5]/70 via-[#7C3AED]/50 to-white/10 blur-[10px] opacity-70" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-black/40">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="116px"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-6 text-center">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="mt-1 text-sm text-white/65">{member.role}</p>

        {/* Divider */}
        <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Socials */}
        <div className="mt-5 flex justify-center gap-4 text-white/60">
          <SocialIcon Icon={FaFacebookF} />
          <SocialIcon Icon={FaTwitter} />
          <SocialIcon Icon={FaInstagram} />
          <SocialIcon Icon={FaLinkedinIn} />
        </div>
      </div>

      {/* Bottom sheen */}
      <div className="pointer-events-none absolute -bottom-10 left-6 right-6 h-24 rounded-2xl bg-gradient-to-t from-white/10 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a
      href="#"
      aria-label="Social link"
      className="
        inline-flex h-10 w-10 items-center justify-center rounded-2xl
        border border-white/10 bg-black/30
        transition hover:border-white/20 hover:bg-white/5 hover:text-white
      "
    >
      <Icon className="text-[16px]" />
    </a>
  );
}
