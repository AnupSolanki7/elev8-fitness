"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "https://thegsf.co/public/assets/website/assets/images/slide1.png",
  "https://thegsf.co/public/assets/website/assets/images/slide2.png",
  "https://thegsf.co/public/assets/website/assets/images/slide3.png",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[activeIndex]}
              alt="Fitness training"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[90vh] flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Elevate <br /> Your Performance
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Personal coaching & body transformation programs built for
            discipline, strength, and real results.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="
      relative inline-flex items-center justify-center
      px-10 py-4 rounded-xl font-semibold
      bg-[var(--color-accent)] text-white
      shadow-lg shadow-[var(--color-accent)]/30
      transition-all duration-300
      hover:shadow-[var(--color-accent)]/50
      hover:-translate-y-0.5
      active:translate-y-0
    "
            >
              Start Transformation
            </a>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
