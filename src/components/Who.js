"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Who() {
  return (
    <section className="relative bg-white text-gray-800 py-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-green-600">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600">
            At <span className="font-semibold text-indigo-600">Capvim International Publishers</span>, we believe that every story deserves to be heard. Our mission is to empower authors, thinkers, and creators to share their voices with the world.
          </p>
          <p className="text-gray-600">
            From editing and design to printing and digital distribution, we offer comprehensive publishing solutions tailored to your needs. With a passion for storytelling and a commitment to quality, we turn your ideas into impactful books.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#services"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]"
        >
          <Image
            src="/images/developing a website.o.avif"
            alt="Publishing Team"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Background Text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute text-9xl md:text-[200px] font-black uppercase text-indigo-200 top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none select-none"
      >
        Capvim 
      </motion.h1>
    </section>
  );
}