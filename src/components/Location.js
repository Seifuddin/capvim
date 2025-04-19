"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <section className="bg-gradient-to-tr from-white via-green-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d37]">
            Visit Capvim International Publishers
          </h2>
          <p className="text-[#333] text-lg">
            We welcome all creatives, authors, and partners to connect with us at our office.
            Let’s turn your ideas into beautifully crafted publications!
          </p>
          <div className="space-y-4 text-[#0a1d37] text-base">
            <div className="flex items-start gap-3">
              <MapPin className="text-green-600" />
              <span>
                Capvim International Publishers, <br />
                2nd Floor, Creative Plaza, Nairobi, Kenya
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-600" />
              <span>+254 700 123 456</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-600" />
              <span>info@capvim.com</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg w-full h-[300px] md:h-[400px]"
        >
          <iframe
            title="Capvim Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.6259642091142!2d36.81724451110437!3d-1.2920655357132795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e3e423e09d%3A0xf08581c71f0ae2f0!2sCreative%20Plaza%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1713511812339!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}