"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 pt-16 pb-10 px-6 overflow-x-hidden" role="contentinfo">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10"
      >
        {/* Logo & Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">Capvim International Publishers</h2>
          <p className="text-sm text-gray-400">
            Crafting impactful stories that educate, inspire, and transform minds through print and digital media.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
        >
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="hover:text-white transition">Editing & Proofreading</a></li>
            <li><a href="/services" className="hover:text-white transition">Layout & Design</a></li>
            <li><a href="/services" className="hover:text-white transition">Book & Magazine Printing</a></li>
            <li><a href="/services" className="hover:text-white transition">Distribution</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
        >
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-indigo-400" />
              <span>Nairobi, Kenya</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-indigo-400" />
              <span>+254 728 240 931</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-indigo-400" />
              <span>capvimpublishers@gmail.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        >
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/CapvimSchoolMagazinePrinters?mibextid=rS40aB7S9Ucbxw6v"
              aria-label="Follow us on Facebook"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.twitter.com"
              aria-label="Follow us on Twitter"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Follow us on Instagram"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              aria-label="Follow us on LinkedIn"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
        >
          <h4 className="text-white font-semibold mb-4">Subscribe</h4>
          <p className="text-sm text-gray-400 mb-4">
            Get publishing tips, success stories, and exclusive offers straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <label htmlFor="email" className="sr-only">Your email address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-sm bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-describedby="emailHelp"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        className="mt-10 pt-6 border-t border-slate-700 text-center text-sm text-slate-400"
      >
        &copy; {new Date().getFullYear()} Capvim International Publishers. All rights reserved.
      </motion.div>
    </footer>
  );
}