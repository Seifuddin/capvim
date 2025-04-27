"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from "react-icons/fa"; // Icons for contact

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-tr from-green-300 via-white to-green-200 py-16 pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl font-extrabold text-blue-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        </motion.h1>
       
      </div>

      {/* Contact Form Section */}
      <div className="max-w-screen-xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Send Us a Message</h2>
          <form>
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject of Your Message"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  className="w-full text-gray-600 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 h-6 w-6" />
              <span className="text-lg text-gray-700">+254 728 240 949</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 h-6 w-6" />
              <span className="text-lg text-gray-700">capvimpublishers@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 h-6 w-6" />
              <span className="text-lg text-gray-700"> Kweria Road, Nairobi, Kenya</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-blue-500 h-6 w-6" />
              <span className="text-lg text-gray-700">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaTwitter className="text-blue-500 h-6 w-6" />
              <span className="text-lg text-gray-700">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Optional) */}
      <div className="max-w-screen-xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-6">Our Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          {/* You can embed Google Map here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9487.075528360676!2d36.8191619147623!3d-1.2792480364845629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f9964aed32f%3A0x2a81c5e4ac4dd3c0!2sInklab%20Digital%20Printers!5e0!3m2!1sen!2ske!4v1745533752904!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}