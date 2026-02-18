"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Globe, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-green-50 py-20 px-6 lg:px-20">
         {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <span className="inline-block bg-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                      Empowerment
                    </span>
                  <h2 className="text-2xl md:text-4xl font-bold mb-5 text-gray-900">
                    Empowering Authors.
                      <span className="text-green-700"> Inspiring Generations. </span>
        
                  </h2>
                <div className="w-24 h-1 bg-green-200 mx-auto rounded-full mb-6"></div>
                </motion.div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[450px] xl:h-[400px] rounded overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/67192215f50047d93f2c6d14_priscilla-du-preez-XkKCui44iM0-unsplash.webp" // replace with your image
            alt="Capvim International Publishers"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8">
            At <span className="font-semibold text-gray-900">Capvim International Publishers</span>, 
            we are committed to transforming powerful ideas into professionally published works. 
            We partner with authors, educators, and visionaries to produce high-quality books 
            that inform, inspire, and impact lives globally.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="flex items-start gap-4 p-2 rounded border-b border-green-300">
              <BookOpen className="bg-gradient-to-r from-green-600 to-green-900 rounded text-white p-2 mt-1" size={32} />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Professional Publishing
                </h4>
                <p className="text-gray-700 text-sm">
                  High editorial standards and quality production.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2 rounded border-b border-green-300">
              <Globe className="bg-gradient-to-r from-green-600 to-green-900 rounded text-white p-2 mt-1" size={32} />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Global Distribution
                </h4>
                <p className="text-gray-700 text-sm">
                  Reaching readers across borders and cultures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2 rounded border-b border-green-300">
              <ShieldCheck className="bg-gradient-to-r from-green-600 to-green-900 rounded text-white p-2 mt-1" size={32} />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Integrity & Excellence
                </h4>
                <p className="text-gray-700 text-sm">
                  Built on trust, professionalism, and transparency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2 rounded border-b border-green-300">
              <Sparkles className="bg-gradient-to-r from-green-600 to-green-900 rounded text-white p-2 mt-1" size={32} />
              <div>
                <h4 className="font-semibold text-blue-900">
                  Creative Innovation
                </h4>
                <p className="text-gray-700 text-sm">
                  Modern design and impactful storytelling.
                </p>
              </div>
            </div>

            <div className="hidden mt-8 flex flex-wrap justifycenter gap-4">
            <Link
              href="/services"
              className="px-10 py-2 bg-gradient-to-r from-green-600 to-green-900 text-white rounded-md shadow-md fontsemibold hover:bg-yellow-500 transition"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-2 border border-green-900 text-green-900 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Portfolio
            </Link>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
