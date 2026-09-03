"use client";

import { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  PenTool,
  ImagePlus,
  FileText,
  Printer,
  HelpCircle,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Book Publishing",
    description:
      "Complete publishing solutions from manuscript to market-ready book including ISBN, formatting, and distribution.",
    icon: BookOpen,
    image: "/images/bookpublishing.jpg.webp",
    color: "from-blue-500 to-cyan-600",
    badge: "Most Popular",
    pricing:
      "Pricing depends on manuscript length, formatting complexity, printing volume, and distribution scope.",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Expert refinement for clarity, grammar, structure, and professional publishing standards.",
    icon: PenTool,
    image: "/images/review.avif",
    color: "from-purple-500 to-pink-600",
    badge: "Essential",
    pricing:
      "Costs vary based on word count and editing depth (developmental, line editing, proofreading).",
  },
  {
    title: "Cover Design & Layout",
    description:
      "Compelling covers and professionally formatted interiors that reflect your genre and audience.",
    icon: ImagePlus,
    image: "/images/orange-color-scheme-city-background-business-book-cover-design-template-brochure-flyer-layout-annual-report-magazine-108070657.webp",
    color: "from-amber-500 to-orange-600",
    badge: "Creative",
    pricing:
      "Pricing depends on design complexity, revisions required, and layout specifications.",
  },
  {
    title: "e-Book Creation",
    description:
      "Convert your manuscript into optimized eBook formats (EPUB, MOBI, PDF) for global digital platforms.",
    icon: FileText,
    image: "/images/open-pages-book-e-book-online-learning-graphic-concept_53876-127665.avif",
    color: "from-emerald-500 to-teal-600",
    badge: "Digital",
    pricing:
      "Pricing varies based on formatting complexity and number of platforms targeted.",
  },
  {
    title: "Printing & Distribution",
    description:
      "High-quality printing with strategic distribution to reach local and international readers.",
    icon: Printer,
    image: "/images/Woman-scanning-paper-files-1024x683.webp",
    color: "from-rose-500 to-red-600",
    badge: "Global",
    pricing:
      "Printing cost depends on page count, paper type, binding style, and quantity.",
  },
  {
    title: "Publishing Consultation",
    description:
      "Strategic guidance covering market positioning, publishing models, timelines, and author branding.",
    icon: HelpCircle,
    image: "/images/classe_5SqEkiJ.original.format-webp-lossless.webp",
    color: "from-indigo-500 to-purple-600",
    badge: "Expert",
    pricing:
      "Consultation fees depend on session duration and scope of advisory support required.",
  },
];

const PricingModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-4">
          <Dialog.Title className="text-xl font-bold text-white">
            {service?.title} — Pricing
          </Dialog.Title>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 text-lg">💰</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service?.pricing}
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 mb-4">
            <p className="text-xs text-blue-700 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Ready to get started? Contact us for a personalized quote.</span>
            </p>
          </div>
          <button
            className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>
);

const RequestModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-4">
          <Dialog.Title className="text-xl font-bold text-white">
            Request: {service?.title}
          </Dialog.Title>
          <p className="text-green-100 text-sm mt-0.5">We'll get back to you within 24 hours</p>
        </div>

        <form className="p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Message</label>
            <textarea
              placeholder="Tell us about your project..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Submit Request
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </div>
  </Dialog>
);

export default function MainServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [isPricingOpen, setPricingOpen] = useState(false);
  const [isRequestOpen, setRequestOpen] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const openPricingModal = (service) => {
    setSelectedService(service);
    setPricingOpen(true);
  };

  const openRequestModal = (service) => {
    setSelectedService(service);
    setRequestOpen(true);
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative py-20 px-4 overflow-hidden bg-slate-50 via-white to-blue-50/30"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-green-200/20 to-emerald-200/20 blur-3xl"
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-200/20 to-purple-200/20 blur-3xl"
            animate={{
              x: [0, -40, 20, 0],
              y: [0, 30, -20, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* SECTION HEADER - More Compact */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200/50 shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5 text-green-600" />
              <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
                Our Services
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Comprehensive{" "}
              <span className="bg-green-600 to-emerald-600 bg-clip-text text-transparent">
                Publishing Solutions
              </span>
            </h2>

            <p className="mt-1.5 text-base text-slate-600 max-w-2xl mx-auto">
              End-to-end publishing solutions to transform your manuscript into
              a professionally published and globally distributed book.
            </p>
          </motion.div>

          {/* SERVICES GRID - More Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="relative bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-green-200">
                    {/* Image - Smaller */}
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Badge */}
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[8px] font-bold text-slate-700 border border-white/20 shadow-sm">
                        {service.badge}
                      </div>
                    </div>

                    <div className="p-3.5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`
                          w-7 h-7 rounded-lg
                          bg-gradient-to-br ${service.color}
                          flex items-center justify-center
                          flex-shrink-0
                        `}>
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <h3 className="textsm font-bold text-slate-800 leading-tight">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-[14px] text-slate-500 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>

                      <div className="mt-2.5 flex gap-1.5">
                        <button
                          onClick={() => openRequestModal(service)}
                          className="flex-1 px-2.5 py-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-[12px] font-semibold rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-1"
                        >
                          Request
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => openPricingModal(service)}
                          className="px-3 py-2 border border-slate-200 text-slate-600 text-[12px] font-medium rounded-lg hover:border-green-300 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
                        >
                          Pricing
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Trust Bar - Ultra Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden mt-6 pt-4 border-t border-slate-200/50 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span className="font-medium text-slate-700">100% Satisfaction</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-medium text-slate-700">30-Day Turnaround</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-medium text-slate-700">98% Author Retention</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 hidden sm:flex">
              <span className="text-yellow-400 text-xs">★★★★★</span>
              <span className="font-medium text-slate-700">4.9/5 Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      <PricingModal
        service={selectedService}
        isOpen={isPricingOpen}
        onClose={() => setPricingOpen(false)}
      />

      <RequestModal
        service={selectedService}
        isOpen={isRequestOpen}
        onClose={() => setRequestOpen(false)}
      />
    </>
  );
}