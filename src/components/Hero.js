"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BookOpen, Pencil, Paperclip } from "lucide-react";
import Image from "next/image";
import ImageSlider from "./Imageslider";
import OurWorks from "./OurWorks";

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
  }, [displayText, typing]);

  const books = [
    {
      title: "Becoming You",
      author: "Jane Collins",
      genre: "Self-Help",
      src: "/images/book-cover-2023-03.avif",
    },
    {
      title: "Legacy of Hope",
      author: "Marcus Leen",
      genre: "Historical Fiction",
      src: "/images/nonfiction12.webp",
    },
    {
      title: "Voices Unheard",
      author: "Tariq Mendez",
      genre: "Memoir",
      src: "/images/book-cover-2023-03.avif",
    },
  ];

  return (
    <section className="relative pt-20 pb-5 min-h-screen bg-black/80 overflow-hidden">
      <div className="absolute inset-0 opacity-70 bg-[url('/images/http___com.ft.imagepublish.upp-prod-eu.s3.amazonaws.avif')] bg-cover bg-center"></div>

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

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-center h-full max-w-7xl mx-auto px-6 lg:px-16">
        {/* Left Text */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            {displayText}
            <span className="blinking-cursor">|</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-white font-bold max-w-xl"
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
              href="/services"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-105"
            >
              Services
            </a>
            <a
              href="/contacts"
              className="px-6 py-3 text-white bg-green-600 hover:bg-indigo-600 hover:text-white text-lg font-semibold rounded-full shadow transition transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
        <div className="relative rounded-lg">
            <OurWorks />
        </div>
        {/* Right Book Cards
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center justify-center mt-12 md:mt-0"
        >
          
          <div className="grid grid-cols-3 gap-4">

            
            {books.map((book, index) => (
              <div key={index} className="w-[110px] md:w-[120px] lg:w-[130px] h-[180px] perspective">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                  
                  Front
                  <div className="absolute inset-0 backface-hidden rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src={book.src}
                      alt={book.title}
                      width={130}
                      height={180}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  Back 
                  <div className="absolute inset-0 bg-white text-indigo-700 rounded-xl p-2 text-sm backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                    <p className="font-bold">{book.title}</p>
                    <p className="mt-1">{book.author}</p>
                    <p className="text-xs text-indigo-500">{book.genre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


           Portfolio Button
          <motion.a
            href="/portfolio"
            className="mt-6 px-5 py-2 text-sm md:text-base bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-md transition transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            See Portfolio
          </motion.a>
        </motion.div>
        */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 text-indigo-500 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm">Scroll Down</span>
        <div className="w-1 h-6 bg-indigo-500 mx-auto mt-1 rounded-full"></div>
      </motion.div>

      {/* Cursor + Flip style */}
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

        .perspective {
          perspective: 1000px;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}