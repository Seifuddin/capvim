"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  BookOpen,
  PenTool,
  Globe,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Why() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Expert Publishing Guidance",
      description:
        "Our experienced team walks with you from manuscript submission to final publication.",
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "Professional Editing & Design",
      description:
        "Refined with professional editing, proofreading, and world-class cover design.",
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Distribution",
      description:
        "Your book reaches readers worldwide in both print and digital formats.",
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality & Integrity",
      description:
        "Highest publishing standards with transparency and trust for our authors.",
      color: "from-rose-500 to-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-600",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-12 px-4 overflow-hidden bg-slate-50 via-white to-slate-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-200/20 to-rose-200/20 blur-3xl"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200/50 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
              Why Capvim
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Authors Trust{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Capvim Publishers
            </span>
          </h2>

          <p className="mt-1.5 text-sm text-slate-600 max-w-2xl mx-auto">
            Transforming manuscripts into professionally published books that inspire readers worldwide.
          </p>
        </motion.div>

        {/* Content - Horizontal Layout */}
        <div className="grid lg:grid-cols-5 gap-6 items-center">
          {/* Image - Takes 2/5 of space */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/50 bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/1657974996_whyus.jpg"
                  alt="Capvim Publishing"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-semibold text-slate-700">
                    500+ Books Published
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400 text-xs">★★★★★</span>
                  <span className="text-[9px] font-medium text-slate-700">4.9/5</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid - Takes 3/5 of space */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`
                    relative overflow-hidden rounded-xl p-3.5
                    ${feature.bg} border ${feature.border}
                    hover:shadow-lg hover:scale-[1.02]
                    transition-all duration-300
                    cursor-pointer
                  `}>
                    {/* Hover Glow Effect */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-r ${feature.color}
                      opacity-0 group-hover:opacity-5
                      transition-opacity duration-300
                    `} />

                    <div className="relative flex items-start gap-2.5">
                      {/* Icon with Gradient Background */}
                      <div className={`
                        flex-shrink-0 w-8 h-8 rounded-lg
                        bg-gradient-to-br ${feature.color}
                        flex items-center justify-center
                        shadow-sm group-hover:shadow-md
                        transition-all duration-300
                      `}>
                        <div className="text-white w-4 h-4">
                          {feature.icon}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`
                          text-sm font-semibold text-slate-800
                          group-hover:${feature.text}
                          transition-colors duration-300
                          leading-tight
                        `}>
                          {feature.title}
                        </h3>
                        <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className={`
                      absolute -bottom-4 -right-4 w-8 h-8 rounded-full
                      bg-gradient-to-br ${feature.color}
                      opacity-0 group-hover:opacity-10
                      transition-opacity duration-300
                    `} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge - Compact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="hidden mt-4 flex items-center justify-center gap-4 text-xs text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                <span>100% Satisfaction</span>
              </div>
              <div className="w-px h-4 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-500" />
                <span>200+ Authors</span>
              </div>
              <div className="w-px h-4 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                <span>Global Reach</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}