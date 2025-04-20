import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const items = [
  {
    id: 1,
    title: 'Tom and Jerry',
    image: '/images/pngwing.com (4).png',
  },
  {
    id: 2,
    title: 'Creative Duo',
    image: '/images/pngwing.com (4).png',
  },
  {
    id: 3,
    title: 'Design Force',
    image: '/images/pngwing.com (4).png',
  },
  {
    id: 4,
    title: 'Pixel Crafters',
    image: '/images/pngwing.com (4).png',
  },
];

export default function Subhero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full px-4 md:px-8 py-10 overflow-x-hidden">
      <h1 className="text-4xl md:text-3xl font-bold mb-10 text-center">
        Our Work
      </h1>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-end gap-4 mb-4">
        <button
          ref={prevRef}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          ⬅ Prev
        </button>
        <button
          ref={nextRef}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          Next ➡
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="project-card border items-center justify-center bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl shadow-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105">
              <div className="image1 flex justify-center items-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-full object-cover transition duration-300 hover:scale-110"
                />
              </div>
              <div className="p-2 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-50">{item.title}</h3>
                <button className="mt-3 px-6 py-1 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition-all">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}