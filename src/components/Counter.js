"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BookOpen, PenTool, Globe, Printer, TrendingUp, Sparkles } from "lucide-react";

// Enhanced Counter hook with floating effect
const AnimatedCounter = ({ from = 0, to, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { 
        duration: 2.5, 
        ease: [0.25, 0.1, 0.25, 1] // Custom ease curve for more natural feel
      });
      const unsubscribe = count.on("change", (latest) => setValue(Math.floor(latest)));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, to, count]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
      {value.toLocaleString()}
      <span className="text-green-400">{suffix}</span>
    </span>
  );
};

const stats = [
  { 
    icon: BookOpen, 
    label: "Books Published", 
    value: 1200,
    gradient: "from-blue-500/30 to-cyan-500/30",
    border: "border-blue-400/20",
    hoverBorder: "hover:border-blue-400/50",
    iconBg: "bg-blue-500/20"
  },
  { 
    icon: PenTool, 
    label: "Manuscripts Edited", 
    value: 85,
    gradient: "from-purple-500/30 to-pink-500/30",
    border: "border-purple-400/20",
    hoverBorder: "hover:border-purple-400/50",
    iconBg: "bg-purple-500/20"
  },
  { 
    icon: Printer, 
    label: "Prints Completed", 
    value: 4500,
    gradient: "from-amber-500/30 to-orange-500/30",
    border: "border-amber-400/20",
    hoverBorder: "hover:border-amber-400/50",
    iconBg: "bg-amber-500/20"
  },
  { 
    icon: Globe, 
    label: "Countries Reached", 
    value: 3,
    gradient: "from-emerald-500/30 to-teal-500/30",
    border: "border-emerald-400/20",
    hoverBorder: "hover:border-emerald-400/50",
    iconBg: "bg-emerald-500/20"
  },
];

export default function PublishingCounters() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Premium Background with Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#0a1628]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-600/20 to-pink-600/20 blur-3xl"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header - Ultra Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-5"
        >
          <div className="flex items-center gap-2.5">
            {/* Animated Sparkle */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="w-4 h-4 text-green-400" />
            </motion.div>

            <span className="inline-block bg-gradient-to-r from-green-400/20 to-emerald-400/20 text-green-400 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-400/20 backdrop-blur-sm">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Achievements <span className="text-green-400">in Numbers</span>
            </h2>
          </div>

          <div className="flex items-center gap-1.5 text-base text-gray-400">
            <TrendingUp className="w-3.5 h-3.5 text-green-400" />
            <span className="text-gray-300">Helping authors</span>
            <span className="text-green-400 font-semibold">worldwide</span>
          </div>
        </motion.div>

        {/* Stats Grid - More Compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = [
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500", 
              "from-amber-500 to-orange-500",
              "from-emerald-500 to-teal-500"
            ];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.07,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <div className={`
                  absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${colors[index]}
                  opacity-0 group-hover:opacity-20 blur-xl
                  transition-opacity duration-500
                `} />

                <div className={`
                  relative bg-white/5 backdrop-blur-md 
                  border ${stat.border} 
                  rounded-xl p-3.5 
                  flex flex-col items-center
                  transition-all duration-300
                  group-hover:bg-white/10
                  ${stat.hoverBorder}
                `}>
                  {/* Icon with Animated Background */}
                  <div className={`
                    relative w-10 h-10 rounded-xl
                    bg-gradient-to-br ${stat.iconBg}
                    flex items-center justify-center
                    mb-1.5
                    transition-all duration-300
                    group-hover:scale-110
                  `}>
                    <Icon className="w-5 h-5 text-white" />
                    
                    {/* Animated Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-white/10"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Counter - Enhanced */}
                  <AnimatedCounter to={stat.value} />

                  {/* Label - More Refined */}
                  <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest mt-0.5 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Decorative Line */}
                  <div className={`
                    w-8 h-0.5 rounded-full bg-gradient-to-r ${colors[index]}
                    opacity-20 group-hover:opacity-40
                    transition-opacity duration-300
                    mt-1
                  `} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Bar - Ultra Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[9px] text-gray-500"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-400">100% Satisfaction Rate</span>
          </div>
          <span className="text-gray-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-green-400 font-bold">98%</span>
            <span className="text-gray-400">Author Retention</span>
          </div>
          <span className="text-gray-700">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-green-400 font-bold">30-Day</span>
            <span className="text-gray-400">Average Turnaround</span>
          </div>
          <span className="text-gray-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 hidden sm:flex">
            <span className="text-green-400 font-bold">4.9/5</span>
            <span className="text-gray-400">Author Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}