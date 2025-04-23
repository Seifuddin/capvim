// components/ImageSlider.jsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImgSlider = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} loop={true} className="w-full h-64 rounded-xl">
      <SwiperSlide>
        <img src="/images/book-cover-2023-03.avif" alt="Slide 1" className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/book-cover-2023-03.avif" alt="Slide 2" className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/book-cover-2023-03.avif" alt="Slide 3" className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImgSlider;