"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Globe, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function AboutUs() {
  const features = [
    { icon: BookOpen, title: "Professional Publishing", desc: "High editorial standards and quality production" },
    { icon: Globe, title: "Global Distribution", desc: "Reaching readers across borders and cultures" },
    { icon: ShieldCheck, title: "Integrity & Excellence", desc: "Built on trust, professionalism, and transparency" },
    { icon: Sparkles, title: "Creative Innovation", desc: "Modern design and impactful storytelling" },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-blue-200 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Empowering Authors.
            <span className="text-blue-600"> Inspiring Generations.</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We transform powerful ideas into professionally published works that inform, inspire, and impact lives globally.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/images/67192215f50047d93f2c6d14_priscilla-du-preez-XkKCui44iM0-unsplash.webp"
                alt="Capvim International Publishers"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Vision, Our Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              We partner with authors, educators, and visionaries to produce high-quality books 
              that inform, inspire, and impact lives globally.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all duration-300"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-blue-200 text-blue-600 font-medium text-sm hover:bg-blue-50 transition-all duration-300"
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