// app/components/HeroSection.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center text-white"
      style={{ backgroundImage: "url('/images/1000_F_248500652_ODdXTJo565M5YO8wO7nvawB1li0uLtOZ.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center h-full">
        {/* Left column: text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left bg-black/30 shadow-lg rounded-md"
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4">
            Transform Ideas into Books...
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 mb-6 max-w-xl font-mono">
            We help authors, thinkers, and creators publish meaningful content that makes an impact. A Trusted Partner in Publishing — From Vision to Volume.
          </p>
          <div className="flex flex-row gap-4">
            <Link
              href="/services"
              className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Portfolio
            </Link>
          </div>
        </motion.div>

        {/* Right column: optional empty div or future media */}
        <div className="hidden md:block">
          {/* You can add an image, logo, or a scripture quote here if needed */}
        </div>
      </div>
    </section>
  );
}
