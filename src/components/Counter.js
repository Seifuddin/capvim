"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BookOpen, PenTool, Globe, Printer } from "lucide-react";

// Counter hook
const AnimatedCounter = ({ from = 0, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      const unsubscribe = count.on("change", (latest) => setValue(Math.floor(latest)));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, to, count]);

  return (
    <span ref={ref} className="mt-2 md:text-xl fontserif font-bold text-green-400">
      {value.toLocaleString()}+
    </span>
  );
};

const stats = [
  { icon: BookOpen, label: "Books Published", value: 1200, color: "text-white" },
  { icon: PenTool, label: "Manuscripts Edited", value: 85, color: "text-white" },
  { icon: Printer, label: "Prints Completed", value: 4500, color: "text-white" },
  { icon: Globe, label: "Countries Reached", value: 3, color: "text-white" },
];

export default function PublishingCounters() {
  return (
    <section className="relative bg-[#0a2540] text-white px-6 pt-20 pb-10 overflow-hidden">
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>

      <div className="relative max-w-7xl mx-auto px4 sm:px6 lg:px12 text-center z-10">
        {/* Heading */}
        <span className="inline-block bg-green-400 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Impact
            </span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-extrabold text-white mb-3"
        >
          Our Achievements 
              <span className="text-green-400"> in Numbers </span>

        </motion.h2>

        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-200 text-base max-w-2xl mx-auto mb-10">
          At <span className="font-semibold text-green-400">Capvim International Publishers</span>, we are proud of the milestones we've achieved in
          helping authors bring their manuscripts to life.
        </p>

        {/* Stats Grid */}
        <div className="grid gap-4 xs:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md border border-white/20 p-4 xs:p-5 sm:p-6 rounded flex flex-col items-center"
              >
                {/* Icon */}
                <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-900 p-2 rounded -full shadow-md border border-white/10">
                  <Icon className={`${stat.color} w-8 h-8`} />
                </div>

                {/* Counter */}
                <AnimatedCounter to={stat.value} />

                {/* Label */}
                <p className="text-white/90 mt-1 font-medium text-xs xs:text-sm md:text-base">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
