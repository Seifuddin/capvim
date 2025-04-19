"use client";
import { useState } from "react";
import Link from "next/link"; // Import Next.js Link
import { motion } from "framer-motion"; // For smooth animations
import { X } from 'lucide-react'; // Add this import for the close icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-500 fixed w-full top-0 left-0 z-50 shadow-lg border-b-2 border-b-orange-500">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex text-white font-bold text-xl tracking-wide">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              Capvim
            </motion.div>
          </div>
          
          <div className="lg:hidden">
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-white font-semibold hover:text-gray-300 transition-all duration-300">
              Home
            </Link>
            <Link href="/about" className="text-white font-semibold hover:text-gray-300 transition-all duration-300">
              About Us
            </Link>
            <Link href="/services" className="text-white font-semibold hover:text-gray-300 transition-all duration-300">
              Services
            </Link>
            <Link href="/contacts" className="text-white font-semibold hover:text-gray-300 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="lg:hidden bg-gray-800 text-white space-y-4 px-4 py-4 absolute top-0 right-0 w-3/4 h-full z-50"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <X />
          </button>
          <Link href="/" className="block font-semibold py-2" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className="block font-semibold py-2" onClick={handleLinkClick}>
            About Us
          </Link>
          <Link href="/services" className="block font-semibold py-2" onClick={handleLinkClick}>
            Services
          </Link>
          <Link href="/contacts" className="block font-semibold py-2" onClick={handleLinkClick}>
            Contact Us
          </Link>
        </motion.div>
      )}
    </nav>
  );
}