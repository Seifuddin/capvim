"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BookOpen, Pencil, Paperclip } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const words = [
    "Publish with Purpose.",
    "Inspire with Every Page.",
    "Transform Ideas into Books."
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayText.length < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(words[currentWordIndex].slice(0, displayText.length + 1));
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
  }, [displayText, typing]);

  return (
    <section className="relative h-screen bg-gradient-to-br from-indigo-100 via-white to-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/istockphoto-470889570-612x612.jpg')] bg-cover bg-center opacity-50"></div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-10 text-indigo-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <BookOpen size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 text-indigo-200"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Pencil size={35} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-10 text-indigo-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Paperclip size={30} />
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center h-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Left: Text Content */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-gray-800"
          >
            {displayText}
            <span className="blinking-cursor">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-600 max-w-xl"
          >
            We help authors, thinkers, and creators publish meaningful content that makes an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="#services"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white text-lg font-semibold rounded-full shadow transition transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right: Static Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/1000_F_248500652_ODdXTJo565M5YO8wO7nvawB1li0uLtOZ.jpg"
              alt="Book Illustration"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll down prompt */}
      <motion.div
        className="absolute bottom-10 text-indigo-500 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm">Scroll Down</span>
        <div className="w-1 h-6 bg-indigo-500 mx-auto mt-1 rounded-full"></div>
      </motion.div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: #4f46e5;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}