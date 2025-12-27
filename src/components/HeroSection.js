"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function HeroSection() {
  const title = useRef(null);
  const subtitle = useRef(null);
  const buttons = useRef(null);

  useEffect(() => {
    gsap.from([title.current, subtitle.current, buttons.current], {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.25,
      ease: "power3.out",
    });
  }, []);

  const floatAnim = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-[#030809] overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        {...floatAnim}
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        {...floatAnim}
        transition={{ ...floatAnim.transition, duration: 8 }}
        className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-blue-600/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl mt-12 px-6 md:px-16 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <motion.h1
            ref={title}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Building Powerful Digital Experiences
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              That Grow Modern Brands
            </span>
          </motion.h1>

          <motion.p
            ref={subtitle}
            className="mt-6 text-gray-300 text-base md:text-xl leading-relaxed max-w-xl"
          >
            At AR Technology, we create modern, scalable, and reliable digital
            solutions designed to help brands establish a strong online
            presence and grow with confidence in a fast-evolving digital world.
          </motion.p>

        
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/left.png"
            alt="AR Technology Digital Illustration"
            className="w-full max-w-md md:max-w-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
