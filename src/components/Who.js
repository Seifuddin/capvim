"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Quote } from "lucide-react";

export default function Who() {
  return (
    <section className="bg-green-50 py-20 px-6 lg:px-20">
         {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <span className="inline-block bg-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                      About Us
                    </span>
                  <h2 className="text-2xl md:text-4xl font-bold mb-5 text-gray-900">
                    Who We
                      <span className="text-green-700"> Are. </span>
        
                  </h2>
                <div className="w-24 h-1 bg-green-200 mx-auto rounded-full mb-6"></div>
                </motion.div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] lg:h-[500px] rounded overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/istockphoto-855660812-612x612.jpg" // replace with your image
            alt="Capvim International Publishers"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-2">
            At <span className="font-semibold text-gray-900">Capvim International Publishers</span>, we believe that every story deserves to be heard. Our mission is to empower authors, thinkers, and creators to share their voices with the world.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            From editing and design to printing and digital distribution, we offer comprehensive publishing solutions tailored to your needs. With a passion for storytelling and a commitment to quality, we turn your ideas into impactful books.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="flexitems-start gap-4 p-2 rounded border-b border-green-300">
              <Target className="bg-gradient-to-r from-green-600 to-green-900 rounded text-white p-2 mt-1" size={35} />
              <div>
                <h4 className="font-semibold text-blue-900 my-2">
                  Our Mission
                </h4>
                <p className="text-gray-700 text-sm">
                  To empower authors and thought leaders by providing exceptional publishing services that transform ideas into impactful, high-quality books that educate, inspire, and shape society.
                </p>
              </div>
            </div>

            <div className="flexitems-start gap-4 p-2 rounded border-b border-green-300">
              <Eye className="bg-gradient-to-r from-green-600 to-green-900 rounded text-white p-2 mt-1" size={35} />
              <div>
                <h4 className="font-semibold text-blue-900 my-2">
                  Our Vission
                </h4>
                <p className="text-gray-700 text-sm">
                  To become a globally recognized publishing house known for excellence, integrity, innovation, and the promotion of transformative knowledge across generations.
                </p>
              </div>
            </div>

            <div className="flexitems-start md:hidden gap-4 p-2 rounded border-b border-green-300">
              <Quote className="bg-gradient-to-r from-green-600 to-green-900 rounded text-white p-2 mt-1" size={35} />
              <div>
                <h4 className="font-semibold text-blue-900 my-2">
                  Our Motto
                </h4>
                <p className="text-gray-700 text-sm">
                  Publishing Excellence. Inspiring Minds. Transforming Lives.
                </p>
              </div>
            </div>

            <div className="hidden mt-8 flex flex-wrap justifycenter gap-4">
            <Link
              href="/services"
              className="px-10 py-2 bg-gradient-to-r from-green-600 to-green-900 text-white rounded-md shadow-md fontsemibold hover:bg-yellow-500 transition"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-2 border border-green-900 text-green-900 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Portfolio
            </Link>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
