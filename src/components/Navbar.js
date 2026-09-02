"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, BookOpen } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contacts", label: "Contact" },
  ];

  return (
    <nav
      className={`
        fixed w-full top-0 left-0 z-50
        transition-all duration-300
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-white border-b border-slate-100'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                src="/images/Capvim IP.png"
                alt="Capvim International Publishers"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </motion.div>
            
            {/* Brand Name - Hidden on mobile */}
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-slate-800 tracking-tight">
                Capvim
              </span>
              <span className="text-[10px] font-medium text-emerald-600 block -mt-0.5 tracking-wider">
                Publishers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.a
              href="/contacts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-9 h-9 rounded-lg hover:bg-slate-100 transition-colors duration-300 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide In */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-slate-100"
          >
            <div className="px-4 py-3 space-y-1 bg-white">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-2"
              >
                <Link
                  href="/contacts"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  Get Started
                </Link>
              </motion.div>

              {/* Mobile Footer */}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 text-center">
                  © {new Date().getFullYear()} Capvim Publishers
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}