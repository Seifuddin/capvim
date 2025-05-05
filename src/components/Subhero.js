"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  {
    id: 1,
    title: "Tom and Jerry",
    image: "/images/pngwing.com (4).png",
  },
  {
    id: 2,
    title: "Creative Duo",
    image: "/images/pngwing.com (4).png",
  },
  {
    id: 3,
    title: "Design Force",
    image: "/images/pngwing.com (4).png",
  },
  {
    id: 4,
    title: "Pixel Crafters",
    image: "/images/pngwing.com (4).png",
  },
];

export default function Subhero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative w-full px-4 md:px-8 py-16 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Our Work
      </h2>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mb-6 px-2">
        <button
          ref={prevRef}
          aria-label="Previous Slide"
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          ⬅ Prev
        </button>
        <button
          ref={nextRef}
          aria-label="Next Slide"
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          Next ➡
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="text-center text-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <button className="mt-3 px-6 py-2 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition-all duration-300">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}