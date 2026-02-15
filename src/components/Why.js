"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  PenTool,
  Globe,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function Why() {
  const features = [
    {
      icon: <BookOpen className="w-7 h-7 text-white" />,
      title: "Expert Publishing Guidance",
      description:
        "From manuscript submission to final publication, our experienced team walks with you every step of the way.",
    },
    {
      icon: <PenTool className="w-7 h-7 text-white" />,
      title: "Professional Editing & Design",
      description:
        "We refine your manuscript with professional editing, proofreading, and world-class cover & interior design.",
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: "Global Reach",
      description:
        "Your book is distributed worldwide in both print and digital formats to maximize visibility and impact.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-white" />,
      title: "Quality & Integrity",
      description:
        "We uphold the highest publishing standards while maintaining transparency and trust with our authors.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-white" />,
      title: "Author-Focused Approach",
      description:
        "Every author is unique. We tailor our services to bring your vision to life with excellence and care.",
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: "Strong Publishing Network",
      description:
        "We collaborate with trusted partners to ensure smooth printing, marketing, and distribution channels.",
    },
  ];

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">

        <span className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
              Why Choose Capvim
            </span>

            <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
              Why Authors Trust
              <span className="text-green-700"> Capvim Publishers</span>
            </h2>
            <div className="w-24 h-1 bg-green-200 mx-auto rounded-full mt-3"></div>

            <p className="my-4 text-gray-600 text-base">
              We transform manuscripts into professionally published books
              that inspire and reach readers across the globe.
            </p>

            </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded overflow-hidden shadow-xl">
              <img
                src="/images/1657974996_whyus.jpg"
                alt="Capvim Publishing"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-900/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Compact Features */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  className="group bgwhite p-5 rounded shadowsm border-b border-green-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 p-2 flex items-center justify-center rounded bg-gradient-to-r from-green-600 to-green-900 group-hover:bg-green-700 transition-all duration-300">
                      <div className="group-hover:text-white transition duration-300">
                        {feature.icon}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-blue-900 text-sm mb-1 group-hover:text-green-700 transition duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
