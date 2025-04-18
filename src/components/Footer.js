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
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 pt-16 pb-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10"
      >
        {/* Logo & Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
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
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#editing" className="hover:text-white transition">Editing & Proofreading</a></li>
            <li><a href="#layout" className="hover:text-white transition">Layout & Design</a></li>
            <li><a href="#printing" className="hover:text-white transition">Book & Magazine Printing</a></li>
            <li><a href="#distribution" className="hover:text-white transition">Distribution</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-indigo-400" />
              <span>Nairobi, Kenya</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-indigo-400" />
              <span>+254 111 608 331</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-indigo-400" />
              <span>capviminternationalpublishers@gmail.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="text-white font-semibold mb-4">Subscribe</h4>
          <p className="text-sm text-gray-400 mb-4">
            Get publishing tips, success stories, and exclusive offers straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-sm bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        transition={{ delay: 0.8 }}
        className="mt-10 pt-6 border-t border-slate-700 text-center text-sm text-slate-400"
      >
        &copy; {new Date().getFullYear()} Capvim International Publishers. All rights reserved.
      </motion.div>
    </footer>
  );
}