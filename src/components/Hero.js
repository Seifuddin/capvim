"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const words = [
    "Your Publishing Journey Starts Here.",
    "Transform Ideas Into Books.",
    "Where Creativity Meets Precision.",
    "A Trusted Partner in Publishing.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    let timeout;
    if (displayText.length < words[currentWordIndex].length) {
      timeout = setTimeout(() => {
        setDisplayText(words[currentWordIndex].slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [displayText, hydrated, currentWordIndex]);

  return (
    <section className="relative bg-black/90 pt-10 overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-35">
        <Image
          src="/images/1000_F_248500652_ODdXTJo565M5YO8wO7nvawB1li0uLtOZ.jpg"
          alt="Background image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6 py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-bold text-white"
        >
          {hydrated ? (
            <>
              {displayText}
              <span className="blinking-cursor">|</span>
            </>
          ) : (
            "Where Creativity Meets Precision — Your Publishing Journey Starts Here"
          )}
        </motion.h1>

        <p className="text-base md:text-xl text-gray-200 font-medium animate-fade-in">
          We help authors, thinkers, and creators publish meaningful content that makes an impact.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Buttons */}
        <div className="mt-7 flex flex-colsm: flex-row gap-3 justify-center">

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
      </div>
    </section>
  );
}