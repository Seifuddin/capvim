"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, PenTool, Printer } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function DidYouKnow() {
  const facts = [
    {
      icon: <BookOpen className="w-5 h-5 text-white" />,
      title: "Over 2,000 Manuscripts Reviewed",
      description:
        "Capvim International Publishers has evaluated and guided thousands of authors to success.",
      image: "/images/67192215f50047d93f2c6d14_priscilla-du-preez-XkKCui44iM0-unsplash.webp",
    },
    {
      icon: <PenTool className="w-5 h-5 text-white" />,
      title: "Professional Editing",
      description:
        "Every manuscript goes through professional editing and proofreading to ensure high-quality publications.",
      image: "/images/review.avif",
    },
    {
      icon: <Printer className="w-5 h-5 text-white" />,
      title: "Global Distribution",
      description:
        "Books published with us reach readers worldwide through trusted distribution channels.",
      image: "/images/Distribution.jpg",
    },
    {
      icon: <Globe className="w-5 h-5 text-white" />,
      title: "Digital & Print",
      description:
        "We make sure your book is available in both print and digital formats to maximize reach.",
      image: "/images/stack.webp",
    },
  ];

  return (
    <section className="bg-blue-900 py-16px-4">
      <div className="hidden max-w-7xl mx-auto text-center mb-12">
        <span className="inline-block bg-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Interesting Facts
        </span>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Did You Know?
        </h2>

        <div className="w-24 h-1 bg-green-200 mx-auto rounded-full mt-3"></div>

        <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">
          Here are some interesting facts about Capvim International Publishers
          and how we help authors succeed.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {facts.map((fact, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-blue-950 rounded border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden group">
                  <img
                    src={fact.image}
                    alt={fact.title}
                    className="w-full h-full border-b object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Icon + Title */}
                </div>

                {/* Description */}
                <div className="p-4">
                  {/* Icon + Title */}
                  <div className="absolutebottom-16left-4right-4 flex items-center gap-3 mb-2">
                    <div className="bg-gradient-to-r from-green-600 to-green-900 p-2 rounded">
                      {fact.icon}
                    </div>
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {fact.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
