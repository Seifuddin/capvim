// TestimonialSlider.jsx
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { name: 'Alice', text: 'They built my website and I loved the result!' },
  { name: 'Brian', text: 'Amazing design and top-notch support.' },
  { name: 'Chloe', text: 'Reliable team, great experience!' },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="bg-gray-100 p-6 rounded-xl shadow text-center">
            <p className="text-lg italic mb-4">“{t.text}”</p>
            <h4 className="font-bold">{t.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}