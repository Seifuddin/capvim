"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Star,
  Clock3,
  ArrowRight,
  Sparkles,
  Rocket,
  Shield,
  TrendingUp,
} from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "$499",
    period: "one-time",
    timeline: "4–6 Weeks",
    description: "Perfect for first-time authors ready to publish professionally.",
    features: [
      "Manuscript assessment",
      "Basic proofreading",
      "Interior formatting",
      "ISBN registration",
      "Basic cover design",
      "Print-ready PDF",
    ],
    color: "from-blue-500 to-cyan-600",
    badge: "Starter",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$999",
    period: "one-time",
    timeline: "6–8 Weeks",
    description: "Ideal for serious authors who want high-quality publishing.",
    features: [
      "Full editorial review",
      "Line editing & proofreading",
      "Premium custom cover",
      "Interior formatting + eBook",
      "ISBN registration",
      "eBook conversion",
      "Global distribution",
      "Author consultation",
    ],
    color: "from-emerald-500 to-teal-600",
    badge: "Most Popular",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "Custom",
    period: "quote",
    timeline: "8–12 Weeks",
    description: "Full-service publishing, branding, and launch strategy.",
    features: [
      "Developmental editing",
      "Full line editing",
      "Premium multi-cover design",
      "Advanced layout design",
      "ISBN + barcode",
      "Print coordination",
      "Global distribution",
      "Book launch strategy",
      "Marketing consultation",
      "Priority support",
    ],
    color: "from-purple-500 to-pink-600",
    badge: "Premium",
    highlighted: false,
  },
];

export default function PricingPackages() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative py-12 px-4 overflow-hidden bg-slate-50 via-white to-blue-50/30"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/20 blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-200/20 to-teal-200/20 blur-3xl"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-200/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER - Ultra Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 shadow-sm mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
              Pricing Plans
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Flexible Plans{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              For Every Author
            </span>
          </h2>

          <p className="mt-1 text-sm text-slate-600 max-w-2xl mx-auto">
            Choose the perfect package to bring your manuscript to life
          </p>
        </motion.div>

        {/* PRICING CARDS - More Compact */}
        <div className="grid lg:grid-cols-3 gap-3 items-stretch">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              whileHover={{ y: -3 }}
              className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white/90 backdrop-blur-sm transition-all duration-300 ${
                pkg.highlighted
                  ? "border-emerald-500 shadow-lg shadow-emerald-100/50 ring-2 ring-emerald-500/20"
                  : "border-slate-200 hover:border-blue-200"
              }`}
            >
              {/* Top Gradient Bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${pkg.color}`} />

              {/* Popular Badge - More Compact */}
              {pkg.highlighted && (
                <div className="absolute right-3 top-3">
                  <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-2.5 py-0.5 text-[8px] font-bold text-white shadow-md">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    Popular
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className={`text-2xl font-black ${pkg.highlighted ? 'text-emerald-600' : 'text-slate-800'}`}>
                        {pkg.price}
                      </span>
                      <span className="text-[9px] text-slate-400 font-medium">
                        {pkg.period}
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${pkg.color} text-white`}>
                    {pkg.badge}
                  </span>
                </div>

                {/* Timeline */}
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 w-fit mb-2.5">
                  <Clock3 className="w-3 h-3 text-slate-500" />
                  <span className="text-[9px] font-semibold text-slate-600">
                    {pkg.timeline}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-500 leading-relaxed mb-2.5">
                  {pkg.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-slate-100 mb-2.5" />

                {/* Features - Compact */}
                <ul className="flex-grow space-y-1.5">
                  {pkg.features.slice(0, 6).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[10px] text-slate-600"
                    >
                      <CheckCircle2 className={`w-3 h-3 mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-emerald-500' : 'text-blue-500'}`} />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 6 && (
                    <li className="text-[9px] text-slate-400 font-medium pl-5">
                      +{pkg.features.length - 6} more features
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[10px] font-bold transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200 hover:shadow-lg"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  Choose Plan
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust & CTA Bar - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden mt-5 flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-200/50"
        >
          {/* Trust Indicators */}
          <div className="flex items-center gap-3 text-[9px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-emerald-500" />
              <span className="font-medium text-slate-700">100% Satisfaction</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-blue-500" />
              <span className="font-medium text-slate-700">98% Retention</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <Rocket className="w-3 h-3 text-purple-500" />
              <span className="font-medium text-slate-700">30-Day Turnaround</span>
            </div>
          </div>

          {/* CTA Link */}
          <button
            type="button"
            className="hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-semibold hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Custom Consultation
            <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}