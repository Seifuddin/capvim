"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Globe, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-green-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] lg:h-[500px] rounded overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/Who-We-Are-Polaris-Market-Research.webp" // replace with your image
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
          <p className="text-green-700 font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Empowering Authors.  
            <span className="text-green-600"> Inspiring Generations.</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At <span className="font-semibold text-gray-800">Capvim International Publishers</span>, 
            we are committed to transforming powerful ideas into professionally published works. 
            We partner with authors, educators, and visionaries to produce high-quality books 
            that inform, inspire, and impact lives globally.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="flex items-start gap-4">
              <BookOpen className="text-green-600 mt-1" size={28} />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Professional Publishing
                </h4>
                <p className="text-gray-600 text-sm">
                  High editorial standards and quality production.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="text-green-600 mt-1" size={28} />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Global Distribution
                </h4>
                <p className="text-gray-600 text-sm">
                  Reaching readers across borders and cultures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="text-green-600 mt-1" size={28} />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Integrity & Excellence
                </h4>
                <p className="text-gray-600 text-sm">
                  Built on trust, professionalism, and transparency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="text-green-600 mt-1" size={28} />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Creative Innovation
                </h4>
                <p className="text-gray-600 text-sm">
                  Modern design and impactful storytelling.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
