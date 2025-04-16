// ProductCarousel.jsx
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  { id: 1, name: 'Laptop X1', img: '/images/pngwing.com (4).png' },
  { id: 2, name: 'Laptop Z3', img: '/images/pngwing.com (4).png' },
  { id: 3, name: 'Laptop Pro', img: '/images/pngwing.com (4).png' },
  { id: 4, name: 'Laptop Pro', img: '/images/pngwing.com (4).png' },
  { id: 5, name: 'Laptop Pro', img: '/images/pngwing.com (4).png' },
  { id: 6, name: 'Laptop Pro', img: '/images/pngwing.com (4).png' },
];

export default function ProductCarousel() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-3 rounded" />
              <h3 className="font-semibold">{product.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}