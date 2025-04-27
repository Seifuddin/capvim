'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioItems = [
  {
    title: 'Book Title 1',
    image: '/images/J.R.R.Tolkien-The-Hobbit.png',
    description: 'A thrilling story about innovation and creativity in publishing.',
    author: 'Jane Smith',
  },
  {
    title: 'Book Title 2',
    image: '/images/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg',
    description: 'A brief overview of Book Title 2 with its highlights and key messages.',
    author: 'John Doe',
  },
  {
    title: 'Book Title 3',
    image: '/images/Sin-Eater-by-Megan-Campisi.jpg',
    description: 'Explore the depth of modern literature with Book Title 3.',
    author: 'Emily Johnson',
  },
];

const OurWorks = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 items-center max-w-7xl mx-auto px-6 lg:px-16 h-full py-10">
        {/* Title & Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center md:items-start space-y-6"
        >
          <h3 className="text-xl font-semibold text-white mb-2">Our Portfolio:</h3>

          {/* Custom Arrows */}
          <div className="flex justify-between w-full mb-4">
            <button
              ref={prevRef}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              ← Prev
            </button>
            <button
              ref={nextRef}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Next →
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md mb-2"
                  />
                  <p className="text-center text-sm font-medium">{item.title}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Portfolio Button */}
          <motion.a
            href="/portfolio"
            className="mt-6 px-5 py-2 text-sm md:text-base bg-blue-700 hover:bg-indigo-600 text-white rounded-full shadow-md transition transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            See Portfolio
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
                onClick={() => setSelectedItem(null)}
              >
                ×
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-2">{selectedItem.title}</h4>
              <p className="text-sm text-gray-600 mb-2">by {selectedItem.author}</p>
              <p className="text-gray-700">{selectedItem.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurWorks;