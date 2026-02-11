"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BookOpen, PenTool, Globe, Printer } from "lucide-react";

// Animated Counter Hook
const AnimatedCounter = ({ from = 0, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      const unsubscribe = count.on("change", (latest) =>
        setValue(Math.floor(latest))
      );
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, to, count]);

  return (
    <span className="text-lg md:text-2xl font-serif font-bold text-green-600">
      {value.toLocaleString()}+
    </span>
  );
};

// Publishing Stats
const stats = [
  {
    icon: BookOpen,
    label: "Books Published",
    value: 1200,
    color: "text-green-600",
  },
  {
    icon: PenTool,
    label: "Manuscripts Edited",
    value: 3500,
    color: "text-green-600",
  },
  {
    icon: Globe,
    label: "Countries Reached",
    value: 25,
    color: "text-green-600",
  },
  {
    icon: Printer,
    label: "Prints Completed",
    value: 45000,
    color: "text-green-600",
  },
];

export default function PublishingCounters() {
  return (
    <section className="relative bg-green-50 px-6 pt-20 pb-10 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-green-50/90 to-green-100/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 bg-cover bg-center z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-extrabold text-gray-900 mb-6"
        >
          Our Achievements in Numbers
        </motion.h2>

        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto mb-10">
          At <span className="font-semibold text-green-700">Capvim International Publishers</span>, we are proud of the milestones we've achieved in
          helping authors bring their manuscripts to life.
        </p>

        {/* Stats Grid */}
        <div className="grid gap-6 xs:gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                className="bg-white/30 backdrop-blur-md border border-white/20 p-5 xs:p-6 sm:p-7 rounded-xl flex flex-col items-center"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-full shadow-md border border-white/10">
                  <Icon className={`${stat.color} w-6 h-6`} />
                </div>

                {/* Counter */}
                <AnimatedCounter to={stat.value} />

                {/* Label */}
                <p className="text-gray-900/90 mt-2 font-medium text-sm xs:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
