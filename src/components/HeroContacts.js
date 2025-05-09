"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BookOpen, Pencil, Paperclip } from "lucide-react";

// Custom hook for typewriter effect
function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, delay = 2000) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (typing) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), delay);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing]);

  return text;
}

export default function ContactsHero() {
  const displayText = useTypewriter([
    "Contact Us.",
    "Get In Touch With Us",
    "We'd love to hear from you! Whether you have a question, feedback, or just want to chat, feel free to reach out.",
  ]);

  return (
    <section className="relative pt-24 pb-10 bg-gradient-to-br from-indigo-100 via-white to-gray-100 overflow-hidden overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/images/two-people-sitting-floor-library-one-them-is-reading-book_861143-205.webp')] bg-cover bg-center"></div>

      {/* Floating icons */}
      {[
        { icon: <BookOpen size={40} />, className: "top-1/4 left-10", duration: 4 },
        { icon: <Pencil size={35} />, className: "bottom-20 right-16", duration: 5 },
        { icon: <Paperclip size={30} />, className: "top-1/2 right-10", duration: 6 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className={`absolute text-indigo-300 ${item.className}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: item.duration, repeat: Infinity }}
        >
          {item.icon}
        </motion.div>
      ))}

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
          className="text-lg md:text-xl text-gray-100 max-w-2xl font-semibold"
        >
          Have a question about our services or want to learn more about Capvim International Publishers? We’d love to hear from you.
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
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
