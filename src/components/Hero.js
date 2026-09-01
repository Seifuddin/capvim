"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  BookOpen,
  PenTool,
  Users,
  Award,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  const [hydrated, setHydrated] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeBook, setActiveBook] = useState(0);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stats = [
    { value: "500+", label: "Books Published", icon: BookOpen },
    { value: "98%", label: "Author Satisfaction", icon: Star },
    { value: "50+", label: "Award-Winning Titles", icon: Award },
    { value: "200+", label: "Authors Served", icon: Users },
  ];

  const testimonials = [
    {
      text: "They transformed my manuscript into a masterpiece.",
      author: "Sarah J.",
    },
    {
      text: "The most professional publishing experience I've ever had.",
      author: "Michael R.",
    },
    {
      text: "My book reached #1 bestseller thanks to their team.",
      author: "Emma W.",
    },
  ];

  // Featured books with placeholder images
  const featuredBooks = [
    {
      title: "Mapenzi Ni Kisu",
    author: "Robert Mustaki",
    genre: "Set Book",
      cover: "/covers/Screenshot_20250429-000511.jpg",
      color: "from-amber-500/30 to-orange-500/30",
      icon: "📖",
    },
    {
      title: "English Paper 3",
    author: "Gideon Musau & Clementine Ndambuki",
    genre: "Revision Book",
      cover: "/covers/1Screenshot_20240909-072242.jpg",
      color: "from-blue-500/30 to-cyan-500/30",
      icon: "💻",
    },
    {
      title: "Reloaded Comprehensive, Biology Paper 1 & 2",
    author: "S. B. Owaga, F. Maina, M. Matara",
    genre: "Revision Book",
      src: "/images/covers/1Screenshot_20240909-072242.jpg",
      color: "from-emerald-500/30 to-teal-500/30",
      icon: "✍️",
    },
  ];

  // Publishing achievements
  const achievements = [
    { label: "Bestseller Status", value: "12+", icon: TrendingUp },
    { label: "Fast Turnaround", value: "30 Days", icon: Clock },
    { label: "100% Satisfaction", value: "Guaranteed", icon: CheckCircle },
  ];

  useEffect(() => {
    setHydrated(true);

    const interval = setInterval(() => {
      setActiveTestimonial(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 4000);

    const bookInterval = setInterval(() => {
      setActiveBook((prev) => (prev + 1) % featuredBooks.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(bookInterval);
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        const x =
          ((e.clientX - rect.left) / rect.width - 0.5) * 20;

        const y =
          ((e.clientY - rect.top) / rect.height - 0.5) * 20;

        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [hydrated]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[720px] lg:min-h-[760px] overflow-hidden bg-black"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 bg-black">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/10 to-blue-900/20" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              transform: `translate(
                ${mousePosition.x * 0.05}px,
                ${mousePosition.y * 0.05}px
              )`,
            }}
          />
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-10 min-h-[720px] lg:min-h-[760px] flex items-center justify-center px-5 sm:px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 lg:py-14">

          {/* =================================================
              LEFT COLUMN (Unchanged)
          ================================================== */}
          <div className="space-y-5">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/80 text-xs font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>#1 Publishing Partner 2024</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                <span className="text-white">
                  Publish Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Masterpiece
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="text-base sm:text-lg text-gray-300 max-w-lg font-light leading-relaxed"
            >
              From manuscript to bestseller — we provide end-to-end
              publishing services that turn your vision into a lasting
              legacy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="/get-started"
                className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm overflow-hidden shadow-lg shadow-pink-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/portfolio"
                className="group px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/90 font-medium text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <PenTool className="w-4 h-4" />
                  View Our Work
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-white/5"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1 + index * 0.1,
                  }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-1">
                    <stat.icon className="w-4 h-4 text-pink-400" />
                  </div>
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-400 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* =================================================
              RIGHT COLUMN - NEW & IMPROVED
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="relative flex flex-col items-center justify-center gap-4"
          >
            {/* Featured Book Showcase */}
            <div className="relative w-full max-w-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBook}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative"
                  style={{
                    transform: `perspective(800px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
                  }}
                >
                  {/* Book Cover */}
                  <div className={`
                    relative aspect-[3/4] rounded-2xl overflow-hidden
                    bg-gradient-to-br ${featuredBooks[activeBook].color}
                    border border-white/20 shadow-2xl
                    backdrop-blur-xl
                  `}>
                    {/* Book content placeholder */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div>
                        {/* Book icon */}
                        <div className="text-4xl mb-4">
                          {featuredBooks[activeBook].icon}
                        </div>
                        
                        {/* Book title */}
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {featuredBooks[activeBook].title}
                        </h3>
                        
                        {/* Book author */}
                        <p className="text-sm text-white/70 mt-1">
                          by {featuredBooks[activeBook].author}
                        </p>
                      </div>

                      {/* Bottom section */}
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs border border-white/10">
                          {featuredBooks[activeBook].genre}
                        </div>
                        
                        {/* Decorative lines - like book pages */}
                        <div className="space-y-1.5 mt-3">
                          <div className="h-0.5 w-full bg-white/10 rounded" />
                          <div className="h-0.5 w-3/4 bg-white/10 rounded" />
                          <div className="h-0.5 w-1/2 bg-white/10 rounded" />
                        </div>
                      </div>
                    </div>

                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
                  </div>

                  {/* Book indicator dots */}
                  <div className="flex justify-center gap-1.5 mt-4">
                    {featuredBooks.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveBook(index)}
                        className={`
                          w-2 h-2 rounded-full transition-all duration-300
                          ${index === activeBook 
                            ? 'bg-pink-400 w-6' 
                            : 'bg-white/20 hover:bg-white/40'
                          }
                        `}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Achievements */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-[320px]">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-2.5 text-center border border-white/5"
                >
                  <item.icon className="w-3.5 h-3.5 text-pink-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">{item.value}</div>
                  <div className="text-[8px] text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial floating card - repositioned */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.4,
              }}
              className="hidden w-full max-w-[320px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  {/* Star ratings */}
                  <div className="flex gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-pink-400 text-pink-400" />
                    ))}
                  </div>
                  
                  <p className="text-xs text-gray-300 leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </p>

                  <p className="text-[10px] text-pink-400 mt-1.5 font-medium">
                    — {testimonials[activeTestimonial].author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.8,
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20 hover:text-white/40 transition-colors cursor-pointer group"
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
      >
        <span className="text-[9px] tracking-[0.2em] uppercase font-light">
          Scroll to explore
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="group-hover:text-white/60 transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}