"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { BookOpen, Pencil, Paperclip } from "lucide-react";
import Image from "next/image";

// Memoize the words array as it does not change
const words = [
  "We Are Capvim — Dedicated to Bringing Your Words to the World",
  "Your Story Matters — We're Here to Help You Tell It Right.",
  "Driven by a Passion for Publishing and Empowering Authors Worldwide"
];

export default function AboutHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const typeSpeed = 60;
    const deleteSpeed = 30;
    const pauseAfterTyping = 1500;

    let timeout;

    if (typing) {
      if (displayText.length < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(words[currentWordIndex].slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pauseAfterTyping);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setTyping(true);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, currentWordIndex]);

  return (
    <section
      className="w-full overflow-x-hidden relative pt-24 pb-10 bg-gradient-to-br from-indigo-100 via-white to-gray-100"
      aria-label="About Capvim Hero Section"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/two-people-sitting-floor-library-one-them-is-reading-book_861143-205.avif"
          alt="Two people reading books in a library"
          fill
          priority
          quality={60}
          className="object-cover object-center opacity-70"
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 left-10 text-indigo-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <BookOpen size={40} aria-label="Open book icon" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 text-indigo-200"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Pencil size={35} aria-label="Pencil icon" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-10 text-indigo-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Paperclip size={30} aria-label="Paperclip icon" />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {displayText}
          <span className="blinking-cursor">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-100 max-w-2xl font-semibold"
        >
          We are a leading publishing company dedicated to bringing powerful stories and meaningful content to life. Our passion is empowering authors and shaping the future of publishing.
        </motion.p>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-10 text-indigo-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm">Scroll Down</span>
          <div className="w-1 h-6 bg-indigo-500 mx-auto mt-1 rounded-full"></div>
        </motion.div>
      </div>

      {/* Blinking Cursor Style */}
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