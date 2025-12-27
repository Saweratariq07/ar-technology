"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { FiLayers, FiSmartphone, FiZap } from "react-icons/fi";

export default function ContactSection() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS env vars");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      formRef.current?.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0B0D12] py-20 md:py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#6A7CF5]/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-140px] h-[560px] w-[560px] rounded-full bg-[#7C3AED]/18 blur-[140px]" />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-[#6A7CF5]" />
            Get in touch with AR Technology
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 text-3xl md:text-4xl font-semibold text-white"
          >
            Let’s Build <span className="text-[#6A7CF5]">Your Digital Presence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-4 text-sm md:text-base text-white/70"
          >
            Share your requirements and let AR Technology help you grow with
            scalable web, ecommerce, and digital solutions.
          </motion.p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6A7CF5]/30 via-transparent to-[#7C3AED]/30 blur-xl" />

            <div className="relative aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                alt="AR Technology team workspace"
                fill
                className="object-cover opacity-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-[#6A7CF5]/20" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              <StatCard icon={<FiLayers />} text="Web Solutions" />
              <StatCard icon={<FiSmartphone />} text="Ecommerce Platforms" />
              <StatCard icon={<FiZap />} text="Growth Focused" />
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Send a message</h3>
                <p className="mt-1 text-sm text-white/65">
                  Tell us about your project or idea.
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-white/50">Email</p>
                <p className="text-sm text-white/80">
                  contact@artechnologydigital.com
                </p>
              </div>
            </div>

            <form ref={formRef} onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" name="user_name" placeholder="Your name" required />
                <Field
                  label="Phone"
                  name="user_phone"
                  placeholder="Contact number"
                  inputMode="tel"
                />
              </div>

              <Field
                label="Email"
                name="user_email"
                type="email"
                placeholder="Your email address"
                required
              />

              <Field
                label="Message"
                name="message"
                placeholder="Briefly describe your project requirements…"
                textarea
                required
              />

              {status === "success" && (
                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  Message sent successfully. We’ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-2xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  Unable to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={[
                  "mt-2 w-full rounded-2xl px-5 py-3 text-sm font-semibold",
                  "border border-white/10 bg-black/30 text-white/85",
                  "transition hover:bg-white/10 hover:text-white",
                  "focus:outline-none focus:ring-2 focus:ring-[#6A7CF5]/50",
                  loading ? "opacity-70 cursor-not-allowed" : "",
                ].join(" ")}
              >
                {loading ? "Sending…" : "Send Message"}
              </button>

              <p className="pt-1 text-xs text-white/45">
                By submitting this form, you agree to be contacted regarding your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  textarea = false,
  inputMode,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-white/60">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/85 placeholder:text-white/35 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-[#6A7CF5]/35"
        />
      ) : (
        <input
          name={name}
          required={required}
          type={type}
          inputMode={inputMode}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/85 placeholder:text-white/35 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-[#6A7CF5]/35"
        />
      )}
    </label>
  );
}

function StatCard({ icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white/70 backdrop-blur">
      <span className="text-[#6A7CF5]">{icon}</span>
      {text}
    </div>
  );
}
