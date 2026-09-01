"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Star,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    name: "Essential Publishing",
    price: "From $499",
    timeline: "4 – 6 Weeks",
    description:
      "Perfect for first-time authors ready to professionally publish their manuscript.",
    features: [
      "Manuscript assessment",
      "Basic proofreading",
      "Interior formatting (print-ready)",
      "ISBN registration",
      "Basic cover design",
      "Print-ready PDF delivery",
    ],
    highlighted: false,
  },
  {
    name: "Professional Publishing",
    price: "From $999",
    timeline: "6 – 8 Weeks",
    description:
      "Ideal for serious authors who want high-quality publishing and distribution support.",
    features: [
      "Full editorial review",
      "Line editing & proofreading",
      "Premium custom cover design",
      "Interior formatting (print + eBook)",
      "ISBN registration",
      "eBook conversion (EPUB + MOBI)",
      "Global distribution guidance",
      "Author consultation session",
    ],
    highlighted: true,
  },
  {
    name: "Elite Publishing",
    price: "Custom Quote",
    timeline: "8 – 12 Weeks",
    description:
      "For authors who want full-service publishing, branding, and launch strategy.",
    features: [
      "Developmental editing",
      "Full line editing & proofreading",
      "Premium multi-concept cover design",
      "Advanced interior layout design",
      "ISBN + barcode registration",
      "Print coordination",
      "Global distribution setup",
      "Book launch strategy",
      "Marketing & branding consultation",
      "Priority publishing support",
    ],
    highlighted: false,
  },
];

export default function PricingPackages() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-6 lg:py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-green-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-green-600" />
            Publishing Packages
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Flexible Publishing Plans{" "}
            <span className="text-blue-700">For Every Author</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 72 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-blue-600 to-green-500"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            Whether you're publishing your first book or launching your next
            bestseller, Capvim offers tailored packages designed to match your
            publishing goals.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                pkg.highlighted
                  ? "border-blue-600 shadow-lg shadow-blue-100"
                  : "border-slate-200"
              }`}
            >
              {/* Top accent */}
              <div
                className={`h-1 w-full ${
                  pkg.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-green-500"
                    : "bg-slate-200"
                }`}
              />

              {/* Popular badge */}
              {pkg.highlighted && (
                <div className="absolute right-5 top-5">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-700 px-3 py-1.5 text-[11px] font-bold text-white shadow-md">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Package name */}
                <div className="mb-5">
                  <h3 className="pr-28 text-xl font-bold tracking-tight text-slate-900">
                    {pkg.name}
                  </h3>

                  <div className="mt-4 flex items-end gap-1">
                    <span
                      className={`text-3xl font-extrabold tracking-tight ${
                        pkg.highlighted
                          ? "text-blue-700"
                          : "text-slate-900"
                      }`}
                    >
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-lg border border-green-100 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
                  <Clock3 className="h-4 w-4" />
                  <span>
                    Estimated Timeline: {pkg.timeline}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-6 min-h-[56px] text-sm leading-6 text-slate-600">
                  {pkg.description}
                </p>

                {/* Divider */}
                <div className="mb-5 h-px bg-slate-100" />

                {/* Features */}
                <ul className="flex-grow space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${
                          pkg.highlighted
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      />

                      <span className="leading-5">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  className={`group/btn mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-blue-700 text-white shadow-lg shadow-blue-200 hover:bg-blue-800"
                      : "border border-slate-200 bg-white text-slate-800 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  Get Started

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-7"
        >
          <p className="text-sm text-slate-600 sm:text-base">
            Not sure which package fits your publishing goals?
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Request Custom Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}