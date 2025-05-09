"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, PenTool, ImagePlus, FileText, Printer, HelpCircle } from "lucide-react";

const services = [
  {
    title: "Book Publishing",
    description:
      "We guide you from manuscript to market with complete book publishing services including ISBN registration, layout design, and printing.",
    icon: BookOpen,
    image: "/images/bookpublishing.jpg.webp",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Ensure your content is error-free and polished with our professional editing and proofreading services by experienced editors.",
    icon: PenTool,
    image: "/images/editing-service-editor.webp",
  },
  {
    title: "Cover Design & Layout",
    description:
      "Our creative designers craft eye-catching book covers and interior layouts that align with your genre and audience.",
    icon: ImagePlus,
    image: "/images/orange-color-scheme-city-background-business-book-cover-design-template-brochure-flyer-layout-annual-report-magazine-108070657.webp",
  },
  {
    title: "e-Book Creation",
    description:
      "We convert your manuscript into accessible e-book formats compatible with all major digital platforms.",
    icon: FileText,
    image: "/images/open-pages-book-e-book-online-learning-graphic-concept_53876-127665.avif",
  },
  {
    title: "Printing & Distribution",
    description:
      "We offer high-quality printing and global distribution to ensure your book reaches readers everywhere.",
    icon: Printer,
    image: "/images/Woman-scanning-paper-files-1024x683.webp",
  },
  {
    title: "Publishing Consultation",
    description:
      "Get expert advice on publishing strategy, market positioning, and navigating the publishing industry.",
    icon: HelpCircle,
    image: "/images/classe_5SqEkiJ.original.format-webp-lossless.webp",
  },
];

export default function Subservices() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-gradient-to-tr from-green-300 via-white to-green-200 py-16 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <h2 className="text-4xl font-bold mb-10 text-green-700">Our Services</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ title, description, icon: Icon, image }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition duration-300"
              onClick={() => setSelected({ title, description, icon: Icon, image })}
            >
              <img src={image} alt={title} className="w-full h-44 object-cover" />
              <div className="p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-6 h-6 text-green-700" />
                  <h3 className="text-xl font-semibold text-green-700">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white max-w-md w-full rounded-2xl p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div className="flex items-center gap-2 mb-3">
              <selected.icon className="w-6 h-6 text-green-700" />
              <h3 className="text-2xl font-bold text-green-700">{selected.title}</h3>
            </div>
            <p className="text-gray-600">{selected.description}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}