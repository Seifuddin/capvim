"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { 
  Quote, 
  HeartHandshake, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Users,
  TrendingUp
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function StoriesAndTestimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const testimonials = [
    {
      name: "Clifford Matara",
      role: "Director, Capvim International",
      quote: "Their attention to detail turned my manuscript into a masterpiece.",
      image: "/images/WhatsApp Image 2025-04-27 at 04.32.48 (1).webp",
      rating: 5,
    },
    {
      name: "Vincent Obwogi",
      role: "Director, Inklab Graphics",
      quote: "Outstanding quality and timeliness exceeded expectations.",
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
      quote: "I felt supported every step of the way. Simply the best.",
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
    <section
      ref={containerRef}
      className="relative py-24 px-4 overflow-hidden bg-slate-50 via-white to-blue-50/30"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-200/20 blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-200/20 to-pink-200/20 blur-3xl"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER - Ultra Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 shadow-sm mb-2.5">
            <HeartHandshake className="w-3.5 h-3.5 text-green-600" />
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Our{" "}
            <span className="bg-green-600 to-indigo-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="mt-1 text-base text-slate-600 max-w-2xl mx-auto">
            Real stories from authors and partners we've worked with
          </p>
        </motion.div>

        {/* TESTIMONIALS SLIDER - More Compact */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-blue-400 !opacity-50',
              bulletActiveClass: '!bg-blue-600 !opacity-100 !w-6',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}
            className="pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full">
                    {/* Rating - Compact */}
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote - Compact */}
                    <div className="mb-2.5">
                      <Quote className="w-5 h-5 text-blue-200 mb-1" />
                      <p className="text-base text-slate-600 leading-relaxed line-clamp-3">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author - Compact */}
                    <div className="flex items-center gap-3 pt-2.5 border-t border-slate-100">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0 group-hover:border-blue-300 transition-colors duration-300">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 text-base truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-slate-400 text-[12px] truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Smaller */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hidden md:flex">
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hidden md:flex">
            <ChevronRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Bottom Stats Bar - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden mt-5 pt-4 border-t border-slate-200/50 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-500"
        >
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-medium text-slate-700">200+ Happy Authors</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="font-medium text-slate-700">4.9/5 Average Rating</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-medium text-slate-700">500+ Books Published</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 hidden sm:flex">
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span className="font-medium text-slate-700">98% Satisfaction</span>
          </div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #93C5FD !important;
          opacity: 0.5 !important;
          width: 6px !important;
          height: 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: #2563EB !important;
          opacity: 1 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
        .swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
        }
      `}</style>
    </section>
  );
}