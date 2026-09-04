"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  BookOpen,
  Globe,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Award,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Professional Publishing",
    desc: "High editorial standards and quality production",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    desc: "Reaching readers across borders and cultures",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Excellence",
    desc: "Built on trust, professionalism, and transparency",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
  },
  {
    icon: Sparkles,
    title: "Creative Innovation",
    desc: "Modern design and impactful storytelling",
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-600",
  },
];

export default function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 overflow-hidden bg-slate-50 via-white to-blue-50/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/20 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-200/20 to-cyan-200/20 blur-3xl"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* SECTION HEADER - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 shadow-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
              About Capvim
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Empowering Authors.{" "}
            <span className="bg-green-600 to-indigo-600 bg-clip-text text-transparent">
              Inspiring Generations.
            </span>
          </h2>

          <p className="mt-1.5 text-base text-slate-600 max-w-2xl mx-auto">
            We transform powerful ideas into professionally published works
            that inform, inspire, and impact lives globally.
          </p>
        </motion.div>

        {/* MAIN CONTENT - Compact Grid */}
        <div className="grid lg:grid-cols-5 gap-5 items-start">
          {/* LEFT - Image (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/50 bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/67192215f50047d93f2c6d14_priscilla-du-preez-XkKCui44iM0-unsplash.webp"
                  alt="Capvim International Publishers"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-semibold text-slate-700">
                    500+ Books Published
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-[10px]">★★★★★</span>
                  <span className="text-[8px] font-medium text-slate-700">4.9/5</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT - Content (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* Who We Are - Compact */}
            <div className="flex items-center gap-2 mb-2">
              <span className="h-4 w-0.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                Who We Are
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              Your Vision,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Expertise.
              </span>
            </h3>

            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed max-w-xl">
              We partner with authors, educators, and visionaries to produce
              high-quality books that inform, inspire, and impact lives globally.
            </p>

            {/* Features Grid - 2x2 Compact */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.06,
                    }}
                    className="group"
                  >
                    <div className={`
                      relative overflow-hidden rounded-lg p-2.5
                      ${feature.bg} border ${feature.border}
                      hover:shadow-md hover:scale-[1.02]
                      transition-all duration-300
                      cursor-default
                    `}>
                      {/* Hover Glow */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${feature.color}
                        opacity-0 group-hover:opacity-5
                        transition-opacity duration-300
                      `} />

                      <div className="relative flex items-start gap-2">
                        {/* Icon */}
                        <div className={`
                          flex-shrink-0 w-7 h-7 rounded-lg
                          bg-gradient-to-br ${feature.color}
                          flex items-center justify-center
                          shadow-sm
                        `}>
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className={`
                            text-base font-semibold text-slate-800
                            group-hover:${feature.text}
                            transition-colors duration-300
                            leading-tight
                          `}>
                            {feature.title}
                          </h4>
                          <p className="text-[13px] text-slate-500 leading-tight mt-0.5">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust Indicators & CTA - Compact Row */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              {/* Trust Badges */}
              <div className="flex items-center gap-3 text-[10px] text-slate-500">
                <div className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>Award-Winning</span>
                </div>
                <div className="w-px h-3 bg-slate-200" />
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-blue-500" />
                  <span>200+ Authors</span>
                </div>
                <div className="w-px h-3 bg-slate-200" />
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Since 2012</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-2">
                <motion.a
                  href="/services"
                  className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded -lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </motion.a>

                <motion.a
                  href="/portfolio"
                  className="px-3.5 py-2 rounded -lg border border-slate-200 bg-white text-slate-700 text-[11px] font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Portfolio
                </motion.a>
              </div>
            </div>

            {/* Trust Bar - Compact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-3 flex items-center justify-center gap-4 text-[9px] text-slate-400 border-t border-slate-100 pt-3"
            >
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>100% Satisfaction</span>
              </div>
              <span className="text-slate-200">|</span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-600">30-Day</span>
                <span>Turnaround</span>
              </div>
              <span className="text-slate-200">|</span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-600">98%</span>
                <span>Author Retention</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}