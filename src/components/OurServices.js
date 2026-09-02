"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import {
  BookOpen,
  PenTool,
  ImagePlus,
  FileText,
  Printer,
  HelpCircle,
} from "lucide-react";

/* =========================
   SERVICE DATA
========================= */

const services = [
  {
    title: "Book Publishing",
    description:
      "We transform your manuscript into a professionally published book including ISBN registration, interior formatting, cover production, printing coordination, and distribution strategy.",
    icon: <BookOpen className="w-8 h-8 rounded text-white p-2 bg-gradient-to-r from-green-600 to-green-900" />,
    image: "/images/bookpublishing.jpg.webp",
    pricing:
      "Pricing depends on manuscript length, formatting complexity, printing volume, and distribution scope. Contact us for a tailored quote.",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Our experienced editors refine your manuscript for clarity, grammar accuracy, structure, tone consistency, and professional publishing standards.",
    icon: <PenTool className="w-8 h-8 rounded text-white p-2 bg-gradient-to-r from-green-600 to-green-900" />,
    image: "/images/review.avif",
    pricing:
      "Costs vary depending on word count and editing depth (developmental, line editing, proofreading). Contact us for assessment.",
  },
  {
    title: "Cover Design & Layout",
    description:
      "We design compelling book covers and professionally formatted interiors that reflect your genre, audience, and publishing goals.",
    icon: <ImagePlus className="w-8 h-8 rounded text-white p-2 bg-gradient-to-r from-green-600 to-green-900" />,
    image:
      "/images/orange-color-scheme-city-background-business-book-cover-design-template-brochure-flyer-layout-annual-report-magazine-108070657.webp",
    pricing:
      "Pricing depends on design complexity, revisions required, and layout specifications. Reach out for detailed pricing.",
  },
  {
    title: "e-Book Creation",
    description:
      "We convert your manuscript into optimized eBook formats (EPUB, MOBI, PDF) compatible with major global digital platforms.",
    icon: <FileText className="w-8 h-8 rounded text-white p-2 bg-gradient-to-r from-green-600 to-green-900" />,
    image:
      "/images/open-pages-book-e-book-online-learning-graphic-concept_53876-127665.avif",
    pricing:
      "Pricing varies based on formatting complexity and number of platforms targeted.",
  },
  {
    title: "Printing & Distribution",
    description:
      "High-quality printing solutions with strategic distribution channels to ensure your book reaches local and international readers.",
    icon: <Printer className="w-8 h-8 rounded text-white p-2 bg-gradient-to-r from-green-600 to-green-900" />,
    image: "/images/Woman-scanning-paper-files-1024x683.webp",
    pricing:
      "Printing cost depends on page count, paper type, binding style, and quantity.",
  },
  {
    title: "Publishing Consultation",
    description:
      "Strategic publishing guidance covering market positioning, publishing models, timelines, and author branding.",
    icon: <HelpCircle className="w-8 h-8 rounded text-white p-2 bg-gradient-to-r from-green-600 to-green-900" />,
    image: "/images/classe_5SqEkiJ.original.format-webp-lossless.webp",
    pricing:
      "Consultation fees depend on session duration and scope of advisory support required.",
  },
];

/* =========================
   PRICING MODAL
========================= */

const PricingModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white p-8 rounded max-w-lg w-full shadow-2xl">
        <Dialog.Title className="text-2xl font-bold text-green-700">
          {service?.title} Pricing
        </Dialog.Title>
        <p className="text-gray-600 mt-4">{service?.pricing}</p>
        <button
          className="mt-6 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          onClick={onClose}
        >
          Close
        </button>
      </Dialog.Panel>
    </div>
  </Dialog>
);

/* =========================
   REQUEST MODAL
========================= */

const RequestModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-2xl">
        <Dialog.Title className="text-2xl font-bold text-green-700">
          Request: {service?.title}
        </Dialog.Title>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            placeholder="Describe your request..."
            className="w-full border rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 bg-gradient-to-r from-red-600 to-red-900 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-600 to-green-900 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </div>
  </Dialog>
);

/* =========================
   MAIN COMPONENT
========================= */

export default function MainServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [isPricingOpen, setPricingOpen] = useState(false);
  const [isRequestOpen, setRequestOpen] = useState(false);

  const openPricingModal = (service) => {
    setSelectedService(service);
    setPricingOpen(true);
  };

  const openRequestModal = (service) => {
    setSelectedService(service);
    setRequestOpen(true);
  };

  return (
    <>
      <Head>
        <title>Publishing Services | Capvim International Publishers</title>
        <meta
          name="description"
          content="Professional publishing services including book publishing, editing, cover design, eBook creation, printing, and consultation by Capvim International Publishers."
        />
      </Head>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <span className="inline-block bg-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Professional Services
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Comprehensive 
            <span className="text-green-700"> Publishing Solutions </span>

              <br className="hidden md-block" />
               
            </h2>
            <div className="w-24 h-1 bg-green-200 mx-auto rounded-full mt-3"></div>

            <p className="mt-4 text-gray-600 text-base">
              At Capvim, we provide end-to-end
              publishing solutions designed to transform your manuscript into
              a professionally published and globally distributed book.
            </p>
          </div>

          {/* SERVICES GRID */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group bg-white rounded shadowmdhover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-green-300"
              >
                <div className="relative w-full h-44 md:h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-3 py-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    {service.icon}
                    <h3 className="md:text-xl font-semibold text-blue-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  <ul className="text-xs text-gray-500 space-y-1 mb-6">
                    <li>✔ Professional industry standards</li>
                    <li>✔ Experienced publishing team</li>
                    <li>✔ Transparent communication</li>
                  </ul>

                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => openRequestModal(service)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-900 text-white px-2 py-2 rounded text-sm font-medium hover:bg-green-700 transition"
                    >
                      Request Service
                    </button>

                    <button
                      onClick={() => openPricingModal(service)}
                      className="flex-1 border border-green-600 text-green-700 px-4 py-2 rounded text-sm font-medium hover:bg-green-50 transition"
                    >
                      View Pricing
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <PricingModal
          service={selectedService}
          isOpen={isPricingOpen}
          onClose={() => setPricingOpen(false)}
        />

        <RequestModal
          service={selectedService}
          isOpen={isRequestOpen}
          onClose={() => setRequestOpen(false)}
        />
      </section>
    </>
  );
}
