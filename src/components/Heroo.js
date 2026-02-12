"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-950 px-6 pt14 via-indigo-800 to-blue-600 text-white overflow-hidden"
    >
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px4 md:px- lg:px14 py-16 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-xl md:text-4xl text-green-400 font-bold leading-tight mb-4">
            Transform Ideas {" "}
            <span className="text-white">into Books...</span>
          </h1>
        <div className="w-24 h-1 bg-white mx-auto md:mx-0 rounded-full mb-6"></div>


          <p className="mt-6 text-base md:text-xl text-gray-200">
            We help authors, thinkers, and creators publish meaningful content that makes an impact. A Trusted Partner in Publishing — From Vision to Volume.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link
              href="/services"
              className="px-10 py-2 fontserif bg-green-400 text-indigo-900 rounded-md shadow-md fontsemibold hover:bg-yellow-500 transition"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-2 fontserif border border-white text-gray-100 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Portfolio
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="/images/portrait-beautiful-young-woman-holding-books-showing-thumb-up_114579-70563.avif"
            alt="Hospital illustration"
            className="w-full rounded max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
