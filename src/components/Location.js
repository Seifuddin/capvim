"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="bg-gradient-to-tr from-green-300 via-white to-green-200 py-20 px-6 md:px-16 lg:px-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Visit Capvim International Publishers
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We are located at <strong>Globe View Plaza, Nairobi</strong> – a hub for publishing excellence. Whether you're looking to consult, collaborate, or create, our doors are open to you.
          </p>

          {/* Animated Button with Icon and Pulse */}
          <div className="relative inline-block">
            {/* Pulsing Background */}
            <motion.span
              className="absolute inset-0 rounded-full bg-green-600 opacity-30"
              animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            {/* Get Directions Button */}
            <motion.a
  href="https://maps.app.goo.gl/8rZ9a6jx9MUV4rjJ7"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05, backgroundColor: "#047857" }}
  whileTap={{ scale: 0.95 }}
  className="relative z-10 flex items-center gap-2 bg-[#0a1d37] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
>
  <MapPin size={20} className="text-white" />
  Get Directions
</motion.a>
          </div>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-80 md:h-full shadow-lg rounded-lg overflow-hidden"
        >
          <iframe
            title="Capvim Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9487.075528360676!2d36.8191619147623!3d-1.2792480364845629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f9964aed32f%3A0x2a81c5e4ac4dd3c0!2sInklab%20Digital%20Printers!5e0!3m2!1sen!2ske!4v1745533752904!5m2!1sen!2ske"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};