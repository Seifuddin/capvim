"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Edit3,
  Palette,
  Hash,
  Printer,
  Megaphone,
} from "lucide-react";

export default function PublishingProcess() {
  const steps = [
    {
      title: "Manuscript Submission",
      description:
        "Authors submit their manuscript for initial review and evaluation of publishing potential.",
      icon: <FileText className="w-5 h-5" />,
      bg: "/images/pexels-photo-4861335.webp",
    },
    {
      title: "Editorial Review & Editing",
      description:
        "Our editors refine structure, clarity, grammar, and formatting to meet professional publishing standards.",
      icon: <Edit3 className="w-5 h-5" />,
      bg: "/images/review.avif",
    },
    {
      title: "Design & Formatting",
      description:
        "We create compelling book covers and professionally format the interior layout for print and digital platforms.",
      icon: <Palette className="w-5 h-5" />,
      bg: "/images/orange-color-scheme-city-background-business-book-cover-design-template-brochure-flyer-layout-annual-report-magazine-108070657.webp",
    },
    {
      title: "ISBN & Production",
      description:
        "ISBN registration, final proofreading, print preparation, and digital conversion are completed.",
      icon: <Hash className="w-5 h-5" />,
      bg: "/images/images.jpg",
    },
    {
      title: "Printing & Distribution",
      description:
        "Your book is printed and distributed through carefully selected local and international channels.",
      icon: <Printer className="w-5 h-5" />,
      bg: "/images/Woman-scanning-paper-files-1024x683.webp",
    },
    {
      title: "Launch & Promotion",
      description:
        "We guide you through launch strategy, visibility positioning, and author brand growth.",
      icon: <Megaphone className="w-5 h-5" />,
      bg: "/images/unnamed.jpg",
    },
  ];

  return (
    <section className="bg-green-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
          <span className="inline-block bg-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Publishing Process
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Your Journey From 
            <span className="text-green-700"> Idea to Published Book </span>

          </h2>
          <div className="w-24 h-1 bg-green-200 mx-auto rounded-full mt-3"></div>

          <p className="mt-4 text-gray-600 text-base">
            At Capvim, we follow a structured,
            transparent, and professional process to transform your manuscript
            into a market-ready publication.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-green-200" />

          {steps.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-16 md:w-1/2 ${
                  isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Icon Circle */}
                <div className="absolute left-0 md:left-auto md:right-[-20px] top-2 w-10 h-10 bg-gradient-to-r from-green-600 to-green-900 text-white flex items-center justify-center rounded shadow-lg z-20">
                  {item.icon}
                </div>

                {/* Card with Background Image */}
                <div
                  className="relative ml-16 md:ml-0 rounded overflow-hidden shadow-lg group hover:shadow-2xl transition duration-500"
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 p-4 mt-20 text-white backdropblur-sm">
                    <h3 className="md:text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-200">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Zoom Effect */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-600 to-green-900 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition duration-300 shadow-md">
            Start Your Publishing Journey
          </button>
        </div>
      </div>
    </section>
  );
}
