"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BookOpen, Pencil, Paperclip } from "lucide-react";
import Image from "next/image";

export default function ContactsHero() {
  const words = [
    "Contact Us.",
    "Get In Touch With Us",
    "We'd love to hear from you! Whether you have a question, feedback, or just want to chat, feel free to reach out.",
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
    <section className="relative pt-24 pb-10 bg-gradient-to-br from-indigo-100 via-white to-gray-100 overflow-hidden overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/images/two-people-sitting-floor-library-one-them-is-reading-book_861143-205.avif')] bg-cover bg-center"></div>

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

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
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
          className="text-lg md:text-xl text-gray-100 max-w-2xl"
        >
          Have a question about our services or want to learn more about Capvim International Publishers? We’d love to hear from you
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          
        </motion.div>

        {/* Image without 3D effects 
        <div className="mt-12">
          <Image
            src="/images/1000_F_248500652_ODdXTJo565M5YO8wO7nvawB1li0uLtOZ.jpg"
            alt="Book Illustration"
            width={320}
            height={320}
            className="mx-auto"
          />
        </div>
          */}
        {/* Scroll down prompt */}
        <motion.div
          className="absolute bottom-10 text-indigo-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm">Scroll Down</span>
          <div className="w-1 h-6 bg-indigo-500 mx-auto mt-1 rounded-full"></div>
        </motion.div>
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