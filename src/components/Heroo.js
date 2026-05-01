"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import DidYouKnow from "./Know";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-950 px-6 pt14 via-indigo-800 to-blue-600 text-white overflow-hidden"
    >
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px4 md:px- lg:px14 py-16 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-centermd: text-left md:w-1/2"
        >
          <span className="inline-block bg-green-400 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              What We Do
            </span>
          <h1 className="text-2xl md:text-4xl text-white font-bold leading-tight mb-4">
            Transform Ideas {" "}
            <span className="text-green-400">into Books...</span>
          </h1>
        <div className="w-24 h-1 bg-green-400 mx-automd:mx-0 rounded-full mb-6"></div>


          <p className="mt-6 text-base md:text-xl text-gray-200">
            We help authors, thinkers, and creators publish meaningful content that makes an impact. A Trusted Partner in Publishing — From Vision to Volume.
          </p>

          {/* Buttons */}
        <div className="mt-7 flex flex-colsm: flex-row gap-3 justify-start">

          <a
            href="/portfolio"
            className="
              px-7 py-2.5 rounded-full
              bg-white text-black text-sm font-medium
              hover:bg-pink-500 hover:text-white
              transition
            "
          >
            Our Portfolio
          </a>

          <a
            href="/services"
            className="
              px-7 py-2.5 rounded-full
              border border-white/40 text-white/90 text-sm
              hover:border-white hover:text-white
              transition
            "
          >
            Our Services
          </a>
        </div>
        </motion.div>

        {/* Right Side Image */}
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full rounded max-w-md md:max-w-lg lg:max-w-xl"
        >
          <DidYouKnow />
          <img
            src="/images/portrait-beautiful-young-woman-holding-books-showing-thumb-up_114579-70563.avif"
            alt="Hospital illustration"
            className="hidden w-full rounded max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
