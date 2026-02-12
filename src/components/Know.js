"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, PenTool, Printer } from "lucide-react";

export default function DidYouKnow() {
  const facts = [
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Over 2,000 Manuscripts Reviewed",
      description:
        "Capvim International Publishers has evaluated and guided thousands of authors to success.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Professional Editing",
      description:
        "Every manuscript goes through professional editing and proofreading to ensure high-quality publications.",
    },
    {
      icon: <Printer className="w-6 h-6 text-white" />,
      title: "Global Distribution",
      description:
        "Books published with us reach readers worldwide through trusted distribution channels.",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Digital & Print",
      description:
        "We make sure your book is available in both print and digital formats to maximize reach.",
    },
  ];

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Did You Know?
        </h2>
        <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">
          Here are some interesting facts about Capvim International Publishers and how we help authors succeed.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded border border-gray-300 shadow-md flex flex-col items-start gap-3 hover:shadow-xl transition duration-300"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-900 p-2 rounded">
              {fact.icon}
            </div>
            <h3 className="md:text-lg font-semibold text-blue-900">
              {fact.title}
            </h3>
            <p className="text-gray-600 text-sm">{fact.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
