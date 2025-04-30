"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = [
    "Where Creativity Meets Precision — Your Publishing Journey Starts Here",
    "A Trusted Partner in Publishing — From Vision to Volume",
    "Transform Ideas into Books.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayText.length < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            words[currentWordIndex].slice(0, displayText.length + 1)
          );
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setTyping(true);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }, 50);
    }
    return () => clearTimeout(timeout);
  }, [displayText, typing, currentWordIndex, words]);

  return (
    <section className="relative min-h-screen bg-black/80 overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50 bg-[url('/images/http___com.ft.imagepublish.upp-prod-eu.s3.amazonaws.avif')] bg-cover bg-center"></div>

      {/* Content */}
      <div className="relative z-10 space-y-6 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          {displayText}
          <span className="blinking-cursor">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-white font-medium"
        >
          We help authors, thinkers, and creators publish meaningful content that makes an impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/services"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-3xl shadow-lg transition transform hover:scale-105"
          >
            Our Services
          </a>
          <a
            href="/portfolio"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-3xl shadow-lg transition transform hover:scale-105"
          >
            Our Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 text-indigo-500 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm">Scroll Down</span>
        <div className="w-1 h-6 bg-indigo-500 mx-auto mt-1 rounded-full"></div>
      </motion.div>

      {/* Cursor Blinking Style */}
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: #4f46e5;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}