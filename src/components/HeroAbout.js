"use client";
import { motion } from "framer-motion";
import { useTypingText } from "@/hooks/useTypingText"; // Import the custom hook
import { BookOpen, Pencil, Paperclip } from "lucide-react";
import Image from "next/image";

export default function ServicesHero() {
  const words = [
    "We Are Capvim — Dedicated to Bringing Your Words to the World",
    "Your Story Matters — We're Here to Help You Tell It Right.",
    "Driven by a Passion for Publishing and Empowering Authors Worldwide"
  ];

  const { displayText, cursor } = useTypingText(words);

  return (
    <section className="relative pt-24 pb-10 bg-gradient-to-br from-indigo-100 via-white to-gray-100 overflow-hidden overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/images/two-people-sitting-floor-library-one-them-is-reading-book_861143-205.webp')] bg-cover bg-center"></div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-10 text-indigo-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <BookOpen size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 text-indigo-200"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Pencil size={35} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-10 text-indigo-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Paperclip size={30} />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {displayText}
          <span className="blinking-cursor">{cursor}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-100 max-w-2xl font-semibold"
        >
          We are a leading publishing company dedicated to bringing powerful stories and meaningful content to life. Our passion is empowering authors and shaping the future of publishing.
        </motion.p>
      </div>

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