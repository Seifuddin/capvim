"use client";

import { PhoneCall, Clock, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function CustomerCare() {
  return (
    <section className="relative bg-black py-14 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/images/how-to-start-a-publishing-company-5.png')] bg-cover bg-center"
        style={{ opacity: 0.4 }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6">
          
          {/* Left Side - Text */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 mb-1 justify-center sm:justify-start">
              <span className="bg-green-400 text-black px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Still have <span className="text-green-400">Questions?</span>
              </h2>
            </div>
            <p className="text-gray-300 text-base">
              Talk to our customer care team one-on-one
            </p>
          </div>

          {/* Right Side - Call Button */}
          <div className="flex items-center gap-4">
            {/* Availability Badge */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 border-r border-white/10 pr-4">
              <Clock className="w-3.5 h-3.5 text-green-400" />
              <span>24/7</span>
            </div>

            {/* Phone Number & Button */}
            <a
              href="tel:+254728240931"
              className="flex items-center gap-3 group"
            >
              <span className="hidden md:inline text-white font-medium text-sm group-hover:text-green-400 transition-colors">
                +254 728 240 931
              </span>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-all">
                  <PhoneCall className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            </a>
          </div>
        </div>

        {/* Optional: Quick response text */}
        <p className="text-center text-gray-500 text-[11px] mt-3 flex items-center justify-center gap-1.5">
          <Headphones className="w-3 h-3" />
          <span>Average response time: <span className="text-green-400 font-medium">&lt; 2 minutes</span></span>
        </p>
      </div>
    </section>
  );
}