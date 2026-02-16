"use client";

import { motion } from "framer-motion";
import { Target, Eye, Quote } from "lucide-react";

export default function MissionVisionMotto() {
  const items = [
    {
      icon: <Target size={36} />,
      title: "Our Mission",
      description:
        "To empower authors and thought leaders by providing exceptional publishing services that transform ideas into impactful, high-quality books that educate, inspire, and shape society.",
    },
    {
      icon: <Eye size={36} />,
      title: "Our Vision",
      description:
        "To become a globally recognized publishing house known for excellence, integrity, innovation, and the promotion of transformative knowledge across generations.",
    },
    {
      icon: <Quote size={36} />,
      title: "Our Motto",
      description:
        '"Publishing Excellence. Inspiring Minds. Transforming Lives."',
    },
  ];

  return (
    <section className="bg-green-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-gray-800"
        >
          Our Foundation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Guided by purpose, driven by excellence, and committed to shaping
          the future of publishing.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded p-8 shadowlg border border-green-200 hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
