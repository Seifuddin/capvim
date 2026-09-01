"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock, ShieldCheck } from "lucide-react";

export default function Assistance() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:+254728240931",
      color: "bg-white text-blue-600 hover:bg-blue-50",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/+254728240931",
      color: "bg-green-600 text-white hover:bg-green-700",
    },
    {
      icon: Mail,
      label: "Email Us",
      href: "mailto:info@lapsafamilyhospital.com",
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
  ];

  return (
    <section className="relative py-14 px-6 bg-blue-700">
      {/* Simple background - just solid blue */}
      <div className="absolute inset-0 bg-blue-700" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-300 uppercase tracking-wider border border-green-400/30 px-3 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Let's Talk
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/70">
                <Clock className="w-3 h-3" />
                Response within 24hrs
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Not sure which package fits{" "}
              <span className="text-green-300">your publishing goals?</span>
            </h2>
            
            <p className="text-sm text-white/70 mt-1">
              Request a custom consultation directly from our office.
            </p>
          </motion.div>

          {/* Right: Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === "WhatsApp" ? "_blank" : undefined}
                rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-lg
                  text-sm font-medium shadow-lg
                  transition-all duration-300
                  ${method.color}
                `}
              >
                <method.icon className="w-4 h-4" />
                <span>{method.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-6 pt-5 border-t border-white/10"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
            <span className="text-[10px] text-white/60">100% Confidential</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-white/60">⭐ 4.9/5 Rating</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-white/60">Free Consultation</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-white/60">📚 500+ Books</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}