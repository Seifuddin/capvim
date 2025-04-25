// components/ImageSlider.jsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImgSlider = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} loop={true} className="w-full h-64 rounded-xl">
      <SwiperSlide>
        <img src="/images/J.R.R.Tolkien-The-Hobbit.png" alt="Slide 1" className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" alt="Slide 2" className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/Sin-Eater-by-Megan-Campisi.jpg" alt="Slide 3" className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImgSlider;