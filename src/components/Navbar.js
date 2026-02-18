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
    <nav className="bg-white fixed w-full px-6 top-0 left-0 z-50 shadow-lg border-b-2border-b-green-700/30">
      <div className="max-w-screen-xl mx-auto py-3.5">
        <div className="flex justify-between items-center">
          <div className="flex text-white font-bold text-xl tracking-wide">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <img
          src="/images/Capvim IP.png"
          alt="Publishing Team"
          className="w-20 md:w-24"
        />
            </motion.div>
          </div>
          
          <div className="lg:hidden">
            <button
              className="text-blue-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            <Link href="/" className="text-gray-700 font-semibold hover:text-gray-600 transition-all duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 font-semibold hover:text-gray-600 transition-all duration-300">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 font-semibold hover:text-gray-600 transition-all duration-300">
              Services
            </Link>
            <Link href="/contacts" className="text-gray-700 font-semibold hover:text-gray-600 transition-all duration-300">
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
          className="lg:hidden relative bg-gray-800 text-white space-y-4 px4 py-4  top-0 right-0 w-full h-full"
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