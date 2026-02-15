"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const words = [
    "Your Publishing Journey Starts Here.",
    "Transform Ideas into Books.",
    "Where Creativity Meets Precision ",
    "A Trusted Partner in Publishing",
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
          src="/images/two-people-sitting-floor-library-one-them-is-reading-book_861143-205.webp"
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
          <a
            href="/services"
            className="px-5 py-2 bg-green-400 hover:bg-indigo-700 text-black md:text-lg font-semibold rounded shadow-lg transition transform hover:scale-105"
          >
            Our Services
          </a>
          <a
            href="/portfolio"
            className="px-5 py-2 hover:bg-green-700 text-white md:text-lg border border-white font-semibold rounded shadow-lg transition transform hover:scale-105"
          >
            Our Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}