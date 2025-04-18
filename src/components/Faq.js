"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Filter } from "lucide-react";

const faqs = [
    { category: "Services", question: "What types of publishing services do you offer?", answer: "We offer book publishing, magazine publishing, academic publishing, and digital publishing services." },
    { category: "Manuscript", question: "How do I submit my manuscript?", answer: "You can submit your manuscript via our online submission form or email it to submissions@ourpublishing.com." },
    { category: "Editing", question: "Do you provide editing and proofreading?", answer: "Yes, we have a team of professional editors who review and enhance your manuscript before publishing." },
    { category: "Timeline", question: "How long does the publishing process take?", answer: "It depends on the complexity of the project, but typical timelines range from 6 to 12 weeks." },
    { category: "Distribution", question: "Where will my book be available?", answer: "We distribute through major platforms like Amazon, bookstores, and libraries both locally and internationally." },
    { category: "Royalties", question: "Do I earn royalties from my published book?", answer: "Yes, authors receive royalties based on book sales. We provide transparent royalty reports every quarter." },
    { category: "Design", question: "Can you help with book cover design?", answer: "Absolutely! Our design team works closely with authors to create compelling and professional book covers." },
    { category: "Marketing", question: "Do you provide book marketing services?", answer: "Yes, we offer promotional packages including social media marketing, book trailers, and press releases." },
    { category: "Self-Publishing", question: "Do you support self-publishing authors?", answer: "Yes, we provide flexible self-publishing options with guidance throughout the entire process." },
  ];

const uniqueCategories = [...new Set(faqs.map((faq) => faq.category))];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      {/* Search bar */}
      <div className="relative max-w-xl mx-auto mb-6">
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-700" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Mobile toggle button for filters */}
      {isMobile && (
        <div className="sm:hidden flex justify-center mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-blue-600 border px-4 py-2 rounded-full hover:bg-blue-50 transition"
          >
            <Filter className="w-4 h-4" />
            Filter Categories
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${showFilters ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}

      {/* Category filters */}
      <AnimatePresence initial={false}>
        {(!isMobile || showFilters) && (
          <motion.div
            key="filters"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-8"
          >
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === "All" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                } hover:bg-blue-100 transition`}
              >
                All
              </button>
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCategory === cat ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                  } hover:bg-blue-100 transition`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ list */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={`${faq.question}-${index}`}
              className="bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-5 pb-5 text-gray-600"
                  >
                    <div className="mt-2">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No FAQs match your search.</p>
        )}
      </div>
    </section>
  );
}