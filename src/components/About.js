"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Globe,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Professional Publishing",
    desc: "High editorial standards and quality production",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    desc: "Reaching readers across borders and cultures",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Excellence",
    desc: "Built on trust, professionalism, and transparency",
  },
  {
    icon: Sparkles,
    title: "Creative Innovation",
    desc: "Modern design and impactful storytelling",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-14"
        >
          {/* Label */}
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-7 bg-green-500" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              About Us
            </span>

            <span className="h-px w-7 bg-green-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Empowering Authors.
            <span className="block text-blue-700">
              Inspiring Generations.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            We transform powerful ideas into professionally published works
            that inform, inspire, and impact lives globally.
          </p>
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =========================
              IMAGE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[340px] overflow-hidden rounded-2xl border border-slate-200 shadow-lg sm:h-[420px] lg:h-[500px]">
              <Image
                src="/images/67192215f50047d93f2c6d14_priscilla-du-preez-XkKCui44iM0-unsplash.webp"
                alt="Capvim International Publishers"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Small accent block */}
            <div className="absolute -bottom-3 -right-3 -z-0 h-20 w-20 rounded-xl border border-green-200 bg-green-50" />

            {/* Image label */}
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/70 bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                  <BookOpen className="h-4 w-4 text-blue-700" />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Publishing Excellence
                  </p>
                  <p className="text-[10px] text-slate-500">
                    From vision to publication
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================
              CONTENT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Small heading */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-green-500" />

              <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                Who We Are
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Your Vision,
              <span className="text-blue-700"> Our Expertise.</span>
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We partner with authors, educators, and visionaries to produce
              high-quality books that inform, inspire, and impact lives
              globally.
            </p>

            {/* =========================
                FEATURES
            ========================== */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="group rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                        <Icon className="h-5 w-5 text-blue-700" />
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {feature.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =========================
                CTA
            ========================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.35,
              }}
              className="hidden mt-8 flex flex-wrap items-center gap-3"
            >
              {/* Primary */}
              <a
                href="/services"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md"
              >
                Our Services

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary */}
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
