"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  PenTool,
  ImagePlus,
  FileText,
  Printer,
  HelpCircle,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";

/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    title: "Book Publishing",
    description:
      "We transform your manuscript into a professionally published book including ISBN registration, interior formatting, cover production, printing coordination, and distribution strategy.",
    icon: BookOpen,
    image: "/images/bookpublishing.jpg.webp",
    pricing:
      "Pricing depends on manuscript length, formatting complexity, printing volume, and distribution scope. Contact us for a tailored quote.",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Our experienced editors refine your manuscript for clarity, grammar accuracy, structure, tone consistency, and professional publishing standards.",
    icon: PenTool,
    image: "/images/review.avif",
    pricing:
      "Costs vary depending on word count and editing depth (developmental, line editing, proofreading). Contact us for assessment.",
  },
  {
    title: "Cover Design & Layout",
    description:
      "We design compelling book covers and professionally formatted interiors that reflect your genre, audience, and publishing goals.",
    icon: ImagePlus,
    image:
      "/images/orange-color-scheme-city-background-business-book-cover-design-template-brochure-flyer-layout-annual-report-magazine-108070657.webp",
    pricing:
      "Pricing depends on design complexity, revisions required, and layout specifications. Reach out for detailed pricing.",
  },
  {
    title: "e-Book Creation",
    description:
      "We convert your manuscript into optimized eBook formats (EPUB, MOBI, PDF) compatible with major global digital platforms.",
    icon: FileText,
    image:
      "/images/open-pages-book-e-book-online-learning-graphic-concept_53876-127665.avif",
    pricing:
      "Pricing varies based on formatting complexity and number of platforms targeted.",
  },
  {
    title: "Printing & Distribution",
    description:
      "High-quality printing solutions with strategic distribution channels to ensure your book reaches local and international readers.",
    icon: Printer,
    image: "/images/Woman-scanning-paper-files-1024x683.webp",
    pricing:
      "Printing cost depends on page count, paper type, binding style, and quantity.",
  },
  {
    title: "Publishing Consultation",
    description:
      "Strategic publishing guidance covering market positioning, publishing models, timelines, and author branding.",
    icon: HelpCircle,
    image: "/images/classe_5SqEkiJ.original.format-webp-lossless.webp",
    pricing:
      "Consultation fees depend on session duration and scope of advisory support required.",
  },
];

/* =========================================================
   PRICING MODAL
========================================================= */

function PricingModal({ service, isOpen, onClose }) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

          {/* Top accent */}
          <div className="h-1 bg-blue-700" />

          <div className="p-6 sm:p-7">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">
                  Pricing Information
                </span>

                <Dialog.Title className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                  {service.title}
                </Dialog.Title>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close pricing modal"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Pricing */}
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
              <p className="text-sm leading-6 text-slate-600">
                {service.pricing}
              </p>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="mt-5 w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

/* =========================================================
   REQUEST MODAL
========================================================= */

function RequestModal({ service, isOpen, onClose }) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
        <Dialog.Panel className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

          {/* Top accent */}
          <div className="h-1 bg-green-600" />

          <div className="p-6 sm:p-7">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
                  Service Request
                </span>

                <Dialog.Title className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                  {service.title}
                </Dialog.Title>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close request modal"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              {/* Request */}
              <div>
                <label
                  htmlFor="request"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Describe Your Request
                </label>

                <textarea
                  id="request"
                  placeholder="Tell us about your publishing needs..."
                  className="h-28 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Submit Request
                </button>

              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

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

  const closePricingModal = () => {
    setPricingOpen(false);
  };

  const closeRequestModal = () => {
    setRequestOpen(false);
  };

  return (
    <>
      {/* =====================================================
          SECTION
      ====================================================== */}

      <section className="bg-white px-5 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">

          {/* =================================================
              HEADER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto mb-12 max-w-3xl text-center lg:mb-14"
          >
            {/* Label */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-7 bg-green-500" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Our Professional Services
              </span>

              <span className="h-px w-7 bg-green-500" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Comprehensive{" "}
              <span className="text-blue-700">
                Publishing Solutions
              </span>
            </h2>

            {/* Accent */}
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-green-500" />

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              At Capvim, we provide end-to-end publishing solutions designed
              to transform your manuscript into a professionally published
              and globally distributed book.
            </p>
          </motion.div>

          {/* =================================================
              SERVICES GRID
          ================================================== */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
                >

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden sm:h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image overlay label */}
                    <div className="absolute bottom-3 left-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white shadow-lg">
                        <Icon className="h-5 w-5 text-blue-700" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">

                    {/* Title */}
                    <h3 className="text-lg font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h3>

                    {/* Small accent */}
                    <div className="mt-2 h-0.5 w-8 rounded-full bg-green-500 transition-all duration-300 group-hover:w-12" />

                    {/* Description */}
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>

                    {/* Service standards */}
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                        Professional industry standards
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                        Experienced publishing team
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                        Transparent communication
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 grid grid-cols-2 gap-2">

                      {/* Request */}
                      <button
                        type="button"
                        onClick={() => openRequestModal(service)}
                        className="group/button inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-700 px-3 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-800 sm:text-sm"
                      >
                        Request Service

                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </button>

                      {/* Pricing */}
                      <button
                        type="button"
                        onClick={() => openPricingModal(service)}
                        className="rounded-xl border border-green-200 bg-green-50 px-3 py-2.5 text-xs font-semibold text-green-700 transition-all duration-300 hover:border-green-300 hover:bg-green-100 sm:text-sm"
                      >
                        View Pricing
                      </button>

                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MODALS
        ====================================================== */}

        <PricingModal
          service={selectedService}
          isOpen={isPricingOpen}
          onClose={closePricingModal}
        />

        <RequestModal
          service={selectedService}
          isOpen={isRequestOpen}
          onClose={closeRequestModal}
        />
      </section>
    </>
  );
}
