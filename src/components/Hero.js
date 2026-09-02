"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

export default function Hero() {
  const [hydrated, setHydrated] = useState(false);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stats = [
    { value: "500+", label: "Books", icon: BookOpen },
    { value: "98%", label: "Satisfaction", icon: Star },
    { value: "50+", label: "Awards", icon: Award },
    { value: "200+", label: "Authors", icon: Users },
  ];

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hydrated]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[600px] lg:min-h-[650px] overflow-hidden bg-black"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/10 to-blue-900/20" />
        
        {/* Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            }}
          />
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-pink-500/20 blur-3xl"
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-[600px] lg:min-h-[650px] flex items-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-6 lg:gap-8 items-center py-8 lg:py-10">

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex mt-10 items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/80 text-[11px] font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>#1 Publishing Partner 2024</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">Publish Your</span>
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
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-gray-300 max-w-lg font-light leading-relaxed"
            >
              From manuscript to bestseller — end-to-end publishing services 
              that turn your vision into a lasting legacy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-2.5"
            >
              <motion.a
                href="/get-started"
                className="group relative px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm overflow-hidden shadow-lg shadow-pink-500/25"
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
                className="group px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/90 font-medium text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <PenTool className="w-4 h-4" />
                  View Work
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-4 gap-2 pt-4 border-t border-white/5"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-3.5 h-3.5 text-pink-400 mx-auto mb-0.5" />
                  <div className="text-base font-bold text-white">{stat.value}</div>
                  <div className="text-[9px] text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - PNG Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl scale-110" />
              
              {/* Image Container with 3D effect */}
              <div
                className="relative w-full h-full"
                
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden borderborder-white/10shadow-2xl">
                  <Image
                    src="/images/image-removebg-preview.png" // Replace with your PNG path
                    alt="Featured Book"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Gradient overlay for better blending */}
                  <div className="absoluteinset-0bg-gradient-to-tfrom-black/30via-transparentto-transparent" />
                  
                  {/* Decorative border glow */}
                  <div className="hidden absolute-inset-0.5 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 rounded-2xl blur-sm -z-10" />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-pink-500/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20 hover:text-white/40 transition-colors cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-[8px] tracking-[0.2em] uppercase font-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="group-hover:text-white/60 transition-colors"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}