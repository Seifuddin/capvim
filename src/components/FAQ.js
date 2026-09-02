"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle,
  Sparkles,
  Search,
  Mail,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of publishing services do you offer?",
    answer:
      "We offer book publishing, magazine publishing, academic publishing, and digital publishing services tailored to your needs.",
    category: "Services",
  },
  {
    question: "How do I submit my manuscript?",
    answer:
      "You can submit your manuscript via our online submission form or email it to capvimpublishers@gmail.com for review.",
    category: "Submission",
  },
  {
    question: "Do you provide editing and proofreading?",
    answer:
      "Yes, we have a team of professional editors who review and enhance your manuscript before publishing.",
    category: "Editing",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "Timelines range from 6 to 12 weeks depending on project complexity and requirements.",
    category: "Timeline",
  },
  {
    question: "Where will my book be available?",
    answer:
      "We distribute through major platforms like Amazon, bookstores, and libraries both locally and internationally.",
    category: "Distribution",
  },
  {
    question: "Can you help with book cover design?",
    answer:
      "Absolutely! Our design team works closely with authors to create compelling and professional book covers.",
    category: "Design",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-12 px-4 overflow-hidden bg-slate-50 via-white to-blue-50/30">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-green-200/20 to-emerald-200/20 blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/20 to-purple-200/20 blur-3xl"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* HEADER - Ultra Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200/50 shadow-sm mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-green-600" />
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
              FAQ
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Frequently{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>

          <p className="mt-1 text-sm text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about publishing with Capvim
          </p>
        </motion.div>

        {/* Search Bar - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative mb-5"
        >
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-2">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-slate-500"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-sm">No questions found. Try a different search.</p>
            </motion.div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group"
              >
                <div className={`
                  rounded-xl border transition-all duration-300 overflow-hidden
                  ${openIndex === index 
                    ? 'border-green-200 bg-white shadow-md shadow-green-100/30' 
                    : 'border-slate-200 bg-white/80 backdrop-blur-sm hover:border-green-200 hover:shadow-sm'
                  }
                `}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      {/* Category Badge */}
                      <span className={`
                        flex-shrink-0 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full
                        ${openIndex === index 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                          : 'bg-slate-100 text-slate-500 group-hover:bg-green-100 group-hover:text-green-700'
                        }
                        transition-all duration-300
                      `}>
                        {faq.category}
                      </span>
                      
                      <span className={`
                        text-sm font-medium transition-colors duration-300
                        ${openIndex === index 
                          ? 'text-green-700' 
                          : 'text-slate-700 group-hover:text-slate-900'
                        }
                      `}>
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown className={`
                      w-4 h-4 flex-shrink-0 transition-all duration-300
                      ${openIndex === index 
                        ? 'rotate-180 text-green-600' 
                        : 'text-slate-400 group-hover:text-slate-600'
                      }
                    `} />
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-4 pb-4 pt-0.5">
                          <div className="h-px bg-gradient-to-r from-green-200 to-transparent mb-3" />
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden mt-5 pt-4 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Mail className="w-4 h-4 text-green-600" />
            <span>Still have questions?</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:capvimpublishers@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 text-white text-[11px] font-semibold hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Contact Support
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            
            <a
              href="/services"
              className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-[11px] font-medium hover:border-green-300 hover:bg-green-50 hover:text-green-700 transition-all duration-300"
            >
              All Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}