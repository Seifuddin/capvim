"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, Clock } from "lucide-react";

export default function PricingPackages() {
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

  return (
    <section className="bg-green-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Publishing Packages
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Flexible Publishing Plans For Every Author
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Whether you're publishing your first book or launching your next
            bestseller, Capvim International Publishers offers tailored
            packages designed to match your publishing goals.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid gap-8 md:grid-cols-3">

          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded p-6 border transition-all duration-500 flex flex-col
                ${
                  pkg.highlighted
                    ? "bg-white shadow-2xl border-blue-800 scale-105"
                    : "bg-white shadow-md border-gray-200 hover:shadow-xl"
                }`}
            >

              {/* Most Popular Badge */}
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-900 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900">
                {pkg.name}
              </h3>

              {/* Price */}
              <p className="mt-4 text-3xl font-extrabold text-blue-900">
                {pkg.price}
              </p>

              {/* Timeline Badge */}
              <div className="mt-3 inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium w-fit">
                <Clock className="w-4 h-4" />
                Estimated Timeline: {pkg.timeline}
              </div>

              <p className="mt-4 text-gray-600 text-sm">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-800 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 py-2 rounded font-medium transition duration-300
                  ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white hover:bg-green-700 shadow-md"
                      : "border border-blue-600 text-blue-700 hover:bg-blue-50"
                  }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-600">
            Not sure which package fits your publishing goals?
          </p>
          <button className="mt-4 bg-gradient-to-r from-green-600 to-green-900 text-white px-8 py-2 rounded font-medium hover:bg-green-700 transition shadow-md">
            Request Custom Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
