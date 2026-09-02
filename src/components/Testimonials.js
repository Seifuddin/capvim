"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, HeartHandshake, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function StoriesAndTestimonials() {
  const testimonials = [
    {
      name: "Clifford Matara",
      role: "Director, Capvim International Publishers",
      quote: "Their attention to detail and collaborative process turned my manuscript into a masterpiece.",
      image: "/images/WhatsApp Image 2025-04-27 at 04.32.48 (1).webp",
      rating: 5,
    },
    {
      name: "Vincent Obwogi",
      role: "Director, Inklab Graphics",
      quote: "Outstanding experience! The quality of design and timeliness exceeded expectations.",
      image: "/images/WhatsApp Image 2025-04-27 at 04.32.48 (1).webp",
      rating: 5,
    },
    {
      name: "Ishmail Atudo",
      role: "Director, NIMA East Africa",
      quote: "Professional, creative, and always on point. Highly recommended!",
      image: "/images/WhatsApp Image 2025-04-27 at 04.32.48 (1).webp",
      rating: 5,
    },
    {
      name: "Brian Odhiambo",
      role: "Publisher",
      quote: "I felt supported every step of the way. Their team is simply the best.",
      image: "/images/WhatsApp Image 2025-04-27 at 04.32.48 (1).webp",
      rating: 5,
    },
    {
      name: "Murithi Nguru",
      role: "Director, Lapsa Web & Graphics",
      quote: "My project wouldn't have been the same without them.",
      image: "/images/edited-photo.png",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full text-sm text-blue-600 font-medium mb-4">
            <HeartHandshake className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our{" "}
            <span className="text-blue-600">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="mt-4 text-gray-500 text-lg">
            Real stories from authors and partners we've worked with
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-blue-400 !opacity-50',
              bulletActiveClass: '!bg-blue-600 !opacity-100 !w-8',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-blue-200 mb-2" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hidden md:flex">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hidden md:flex">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="hidden mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-gray-50 px-8 py-4 rounded-2xl border border-gray-100">
            <span className="text-gray-600 text-sm">Join our community of happy authors</span>
            <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
              Share Your Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #93C5FD !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-bullet-active {
          background: #2563EB !important;
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 8px !important;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
      `}</style>
    </section>
  );
}