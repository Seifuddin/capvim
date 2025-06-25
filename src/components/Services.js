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

// Service data
const services = [
  {
    title: "Book Publishing",
    description:
      "We guide you from manuscript to market with complete book publishing services including ISBN registration, layout design, and printing.",
    icon: <BookOpen className="w-6 h-6 text-green-700" />,
    image: "/images/bookpublishing.jpg.webp",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Ensure your content is error-free and polished with our professional editing and proofreading services by experienced editors.",
    icon: <PenTool className="w-6 h-6 text-green-700" />,
    image: "/images/editing-service-editor.webp",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Cover Design & Layout",
    description:
      "Our creative designers craft eye-catching book covers and interior layouts that align with your genre and audience.",
    icon: <ImagePlus className="w-6 h-6 text-green-700" />,
    image: "/images/orange-color-scheme-city-background-business-book-cover-design-template-brochure-flyer-layout-annual-report-magazine-108070657.webp",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "e-Book Creation",
    description:
      "We convert your manuscript into accessible e-book formats compatible with all major digital platforms.",
    icon: <FileText className="w-6 h-6 text-green-700" />,
    image: "/images/open-pages-book-e-book-online-learning-graphic-concept_53876-127665.avif",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Printing & Distribution",
    description:
      "We offer high-quality printing and global distribution to ensure your book reaches readers everywhere.",
    icon: <Printer className="w-6 h-6 text-green-700" />,
    image: "/images/Woman-scanning-paper-files-1024x683.webp",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
  {
    title: "Publishing Consultation",
    description:
      "Get expert advice on publishing strategy, market positioning, and navigating the publishing industry.",
    icon: <HelpCircle className="w-6 h-6 text-green-700" />,
    image: "/images/classe_5SqEkiJ.original.format-webp-lossless.webp",
    pricing:
      "Please contact us for details on pricing as pricing varies depending on several factors.",
  },
];

// Pricing Modal Component
const PricingModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full">
        <Dialog.Title className="text-xl font-bold text-green-700">
          {service?.title} - Pricing
        </Dialog.Title>
        <p className="text-gray-700 mt-4">{service?.pricing}</p>
        <button
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={onClose}
        >
          Close
        </button>
      </Dialog.Panel>
    </div>
  </Dialog>
);

// Request Modal Component
const RequestModal = ({ service, isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white p-6 rounded-xl max-w-md w-full">
        <Dialog.Title className="text-xl font-bold text-emerald-600">
          Request: {service?.title}
        </Dialog.Title>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-3 py-2"
            required
          />
          <textarea
            placeholder="Describe your request..."
            className="w-full border rounded px-3 py-2 h-24"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
            >
              Submit
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </div>
  </Dialog>
);

export default function ServicesPage() {
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
        <title>Publishing Services | Capvim Publishers</title>
        <meta
          name="description"
          content="Explore professional publishing services including book publishing, editing, cover design, eBook creation, and more by Capvim International Publishers."
        />
      </Head>

      <section className="bg-gray-50 py-16 px-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-md shadow-lg overflow-hidden cursor-pointer transition duration-300 flex flex-col justify-between"
              >
                <div className="relative w-full h-44">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-green-700">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {service.description}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openPricingModal(service)}
                      className="w-full bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700"
                    >
                      See Pricing
                    </button>
                    <button
                      onClick={() => openRequestModal(service)}
                      className="w-full bg-emerald-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-emerald-600"
                    >
                      Request This Service
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