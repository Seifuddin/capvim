"use client";

import { motion } from "framer-motion";
import { Lightbulb, Globe, BookOpen, Rocket } from "lucide-react";

export default function OurJourney() {
  const milestones = [
    {
      year: "2018",
      title: "Founded",
      description: "Capvim began with a bold publishing vision.",
      icon: <Lightbulb size={26} />,
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Entered educational and institutional publishing.",
      icon: <BookOpen size={26} />,
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Books distributed across international markets.",
      icon: <Globe size={26} />,
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Adopted modern digital publishing systems.",
      icon: <Rocket size={26} />,
    },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden
      bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">

      {/* Deep Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.15),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-400 font-semibold uppercase tracking-widest mb-3">
            Our Journey
          </p>
          <h2 className="text-2xl md:text-4xl font-bold">
            The Evolution of Capvim
          </h2>
        </motion.div>

        {/* Journey Strip */}
        <div className="relative">

          {/* Strong glowing line */}
          <div className="absolute top-9 left-0 w-full h-[3px] 
            bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 
            shadow-[0_0_20px_rgba(16,185,129,0.7)] rounded-full"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative">

            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="mx-auto mb-6 w-18 h-18 flex items-center justify-center
                  rounded-full bg-white/10 backdrop-blur-lg 
                  border border-white/20 
                  shadow-[0_0_25px_rgba(59,130,246,0.4)]
                  group-hover:scale-110 transition duration-300">

                  <div className="text-green-400">
                    {item.icon}
                  </div>
                </div>

                {/* Year */}
                <span className="block text-3xl font-extrabold text-green-400 mb-2 tracking-wide">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="font-semibold mb-2 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
