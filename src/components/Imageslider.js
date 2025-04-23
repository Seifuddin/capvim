'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/images/nonfiction12.webp',
    title: 'Transforming Ideas into Print',
    description: 'Professional publishing services tailored to your vision.',
    buttonText: 'Get Started',
    buttonLink: '/contacts',
  },
  {
    image: '/images/nonfiction12.webp',
    title: 'Quality You Can Trust',
    description: 'Delivering excellence in every page we publish.',
    buttonText: 'Explore Services',
    buttonLink: '/services',
  },
  {
    image: '/images/nonfiction12.webp',
    title: 'Your Story, Beautifully Told',
    description: 'Empowering authors and creators to shine.',
    buttonText: 'Let’s Talk',
    buttonLink: '/contacts',
  },
];

export default function ImageSlider() {
  return (
    <div className="w-full h-[90vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute rounded-lg inset-0 bg-black/50 flex flex-col justify-center items-start p-10 md:p-20 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-xl mb-6 drop-shadow-lg">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition duration-300 shadow-md"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}