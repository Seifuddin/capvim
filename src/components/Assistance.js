"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    href: "tel:+254728240931",
    className:
      "border-white/20 bg-white text-blue-800 hover:bg-blue-50",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/+254728240931",
    className:
      "border-green-500 bg-green-600 text-white hover:bg-green-700",
  },
  {
    icon: Mail,
    label: "Email Us",
    href: "mailto:info@lapsafamilyhospital.com",
    className:
      "border-blue-300 bg-blue-500 text-white hover:bg-blue-400",
  },
];

export default function Assistance() {
  return (
    <section className="relative overflow-hidden bg-blue-950 px-5 py-12 sm:px-6 lg:py-14">

      {/* =====================================================
          BACKGROUND
          No gradients — subtle geometric elements instead.
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Large outline circles */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-white/[0.04]" />

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-green-400/[0.06]" />

        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full border border-white/[0.04]" />

        {/* Small geometric squares */}
        <div className="absolute right-[12%] top-10 h-24 w-24 rotate-12 rounded-2xl border border-green-400/[0.05]" />

        <div className="absolute bottom-10 left-[8%] h-16 w-16 -rotate-12 rounded-xl border border-blue-300/[0.05]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,1) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* CTA CARD */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-blue-900/60 shadow-2xl">

          {/* Top accent */}
          <div className="h-1 w-full bg-green-500" />

          <div className="p-5 sm:p-6 lg:p-7">

            {/* =================================================
                MAIN CTA ROW
            ================================================== */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* LEFT CONTENT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="min-w-0 flex-1"
              >

                {/* Label + response */}
                <div className="mb-3 flex flex-wrap items-center gap-3">

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                    Let's Talk
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-blue-100/60">
                    <Clock className="h-3.5 w-3.5 text-green-400" />

                    Response within 24hrs
                  </span>
                </div>

                {/* Heading */}
                <h2 className="max-w-xl text-3xl md:text-4xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                  Not sure which package fits{" "}
                  <span className="text-green-300">
                    your publishing goals?
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-2 max-w-xl text-base leading-6 text-blue-100/60">
                  Request a custom consultation directly from our office.
                </p>
              </motion.div>

              {/* =================================================
                  CONTACT BUTTONS
              ================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="shrink-0"
              >
                <div className="flex w-full flex-nowrap items-center gap-2 sm:gap-3 lg:w-auto">

                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;

                    return (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        target={
                          method.label === "WhatsApp"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          method.label === "WhatsApp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.25 + index * 0.08,
                        }}
                        viewport={{
                          once: true,
                        }}
                        whileHover={{
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className={`
                          inline-flex
                          min-w-0
                          flex-1
                          items-center
                          justify-center
                          gap-1.5
                          whitespace-nowrap
                          rounded-xl
                          border
                          px-3
                          py-2.5
                          text-[11px]
                          font-semibold
                          transition-all
                          duration-300
                          sm:gap-2
                          sm:px-4
                          sm:text-xs
                          lg:flex-none
                          lg:text-sm
                          ${method.className}
                        `}
                      >
                        <Icon className="h-4 w-4 shrink-0" />

                        <span>{method.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* =================================================
                TRUST INFORMATION
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.35,
              }}
              viewport={{
                once: true,
              }}
              className="mt-6 border-t border-white/10 pt-5"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7">

                {/* Confidential */}
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-green-400" />

                  <span className="text-[10px] font-medium text-blue-100/60">
                    100% Confidential
                  </span>
                </div>

                <span className="hidden h-4 w-px bg-white/10 sm:block" />

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-medium text-blue-100/60">
                    ⭐ 4.9/5 Rating
                  </span>
                </div>

                <span className="hidden h-4 w-px bg-white/10 sm:block" />

                {/* Consultation */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-medium text-blue-100/60">
                    Free Consultation
                  </span>
                </div>

                <span className="hidden h-4 w-px bg-white/10 sm:block" />

                {/* Books */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-medium text-blue-100/60">
                    📚 500+ Books
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Small bottom detail */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="mt-4 flex items-center justify-center gap-2 text-[10px] text-blue-100/30"
        >
          <span>Ready to bring your book to life?</span>

          <ArrowRight className="h-3 w-3 text-green-500" />
        </motion.div>
      </div>
    </section>
  );
}
