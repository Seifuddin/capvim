"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of publishing services do you offer?",
    answer:
      "We offer book publishing, magazine publishing, academic publishing, and digital publishing services.",
  },
  {
    question: "How do I submit my manuscript?",
    answer:
      "You can submit your manuscript via our online submission form or email it to capvimpublishers@gmail.com",
  },
  {
    question: "Do you provide editing and proofreading?",
    answer:
      "Yes, we have a team of professional editors who review and enhance your manuscript before publishing.",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "It depends on the complexity of the project, but typical timelines range from 6 to 12 weeks.",
  },
  {
    question: "Where will my book be available?",
    answer:
      "We distribute through major platforms like Amazon, bookstores, and libraries both locally and internationally.",
  },
  {
    question: "Can you help with book cover design?",
    answer:
      "Absolutely! Our design team works closely with authors to create compelling and professional book covers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
         <span className="inline-block bg-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Questions And Answers
          </span>
          <h2 className="text-2xl md:text-4xl fontserif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
           <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "5rem" }}
                      transition={{ duration: 0.5 }}
                      className="h-1 bg-green-200 rounded-full mx-auto my-3"
                    ></motion.div>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-medium text-center md:text-lg mb-6">
            Have questions? We’ve got answers. Learn more about how we work and how you can get involved.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 rounded-lg shadowsm bgwhite overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-3 py-4 text-left hover:bg-amber-100 transition"
              >
                <span className="text-gray-900 fontserif fontmedium font-semibold text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-800 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 pb-4 text-gray-600 text-base md:font-medium leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
