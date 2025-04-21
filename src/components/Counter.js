"use client";
import { motion } from "framer-motion";

export default function Counter() {
  const counters = [
    { label: "Books Published", value: 320 },
    { label: "Authors Supported", value: 95 },
    { label: "Years in Publishing", value: 12 },
    { label: "Awards Received", value: 18 },
  ];

  return (
    <section className="w-full bg-indigo-50 mb-0 text-gray-800 overflow-x-hidden">
      {/* Animated Counters */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold"
            >
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: counter.value }}
                transition={{ duration: 2 }}
              >
                {Math.floor(counter.value)}
              </motion.span>
              <p className="text-sm mt-2 font-medium">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}