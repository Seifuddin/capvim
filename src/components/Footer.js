"use client";

import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Sparkles,
  ArrowRight,
  Send,
  Heart,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/CapvimSchoolMagazinePrinters?mibextid=rS40aB7S9Ucbxw6v", label: "Facebook" },
    { icon: Twitter, href: "https://www.twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
  ];

  const services = [
    { label: "Editing & Proofreading", href: "/services" },
    { label: "Layout & Design", href: "/services" },
    { label: "Book & Magazine Printing", href: "/services" },
    { label: "Distribution", href: "/services" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contacts" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-10">
        {/* Main Footer Grid - More Compact */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          
          {/* Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/Capvim IP.png"
                  alt="Capvim Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-base font-bold text-white leading-tight">
                  Capvim
                </h2>
                <p className="text-[9px] text-gray-400 tracking-wider uppercase">
                  Publishers
                </p>
              </div>
            </div>
            
            <p className="text-[11px] leading-relaxed text-gray-400">
              Crafting impactful stories that educate, inspire, and transform minds through print and digital media.
            </p>

            {/* Trust Badge */}
            <div className="mt-2.5 flex items-center gap-1.5 text-[9px] text-emerald-400">
              <Heart className="w-3 h-3" />
              <span>Trusted since 2012</span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm mb-2.5">Services</h4>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-[11px] text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm mb-2.5">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm mb-2.5">Contact</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-indigo-400 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-3.5 h-3.5 mt-0.5 text-indigo-400 flex-shrink-0" />
                <span>+254 728 240 931</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-3.5 h-3.5 mt-0.5 text-indigo-400 flex-shrink-0" />
                <span className="break-all">capvimpublishers@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <h4 className="text-white font-semibold text-sm mb-2.5">Stay Connected</h4>
            
            {/* Social Icons */}
            <div className="flex gap-2 mb-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={`Follow us on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-indigo-400/30 transition-all duration-300"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter - Compact */}
            <form className="flex flex-col gap-1.5">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  id="footer-email"
                  placeholder="Your email"
                  className="flex-1 px-2.5 py-1.5 rounded-lg text-[10px] bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1 flex-shrink-0"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              <p className="text-[8px] text-gray-500">
                Tips, success stories & exclusive offers
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar - Ultra Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span>© {currentYear} Capvim International Publishers</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-600">All rights reserved</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <span className="text-gray-700">•</span>
            <div className="flex items-center gap-1 text-gray-600">
              <Globe className="w-3 h-3" />
              <span>Kenya</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}