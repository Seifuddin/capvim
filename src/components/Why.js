"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, ShieldCheck, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Why() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const swiperRef = useRef(null);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Expert Editors",
      desc: "Our seasoned editors ensure every publication is polished and professional.",
      modal:
        "From manuscripts to magazines, our editors bring decades of experience to deliver quality and consistency in every page.",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Collaborative Approach",
      desc: "We work closely with authors and clients throughout the publishing journey.",
      modal:
        "We believe great publishing comes from partnership. You’re involved in every step, from concept to final print.",
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Award-Winning Designs",
      desc: "Our layouts and covers have earned recognition across the industry.",
      modal:
        "We fuse storytelling with design excellence to craft books and publications that captivate readers at first glance.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      title: "Reliable & Timely Delivery",
      desc: "We deliver high-quality publications on time, every time.",
      modal:
        "Our streamlined workflows and dedicated team ensure that your publishing deadlines are always met.",
    },
  ];

  const testimonials = [
    {
      quote: "Their attention to detail and collaborative process turned my manuscript into a masterpiece.",
      author: "Jane Doe, Author",
      image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    },
    {
      quote: "Outstanding experience! The quality of design and timeliness exceeded expectations.",
      author: "John Smith, Publisher",
      image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    },
    {
      quote: "Professional, creative, and always on point. Highly recommended!",
      author: "Sarah Johnson, Editor-in-Chief",
      image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    },
    {
      quote: "I felt supported every step of the way. Their team is simply the best.",
      author: "David Wilson, Novelist",
      image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    },
    {
      quote: "My project wouldn't have been the same without them.",
      author: "Emily Roberts, Poet",
      image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    },
  ];

  return (
    <>
      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-slate-200 to-gray-300 text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-green-700">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes us a trusted partner in publishing exceptional content that informs, inspires, and endures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <img src="/images/download (2).jpg" alt="Why Choose Us" className="rounded-2xl w-full shadow-lg" />
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-8">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-4 cursor-pointer hover:bg-indigo-50 p-2 rounded-lg shadow-sm transition-transform duration-300"
                  onClick={() => setSelectedFeature(item)}
                >
                  <div className="bg-indigo-100 p-3 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedFeature} onClose={() => setSelectedFeature(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
              <Dialog.Title className="text-2xl font-bold mb-2 text-indigo-700">{selectedFeature?.title}</Dialog.Title>
              <Dialog.Description className="text-gray-700">{selectedFeature?.modal}</Dialog.Description>
              <div className="mt-6 text-right">
                <button onClick={() => setSelectedFeature(null)} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-green-700">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from the authors and organizations we've had the pleasure of working with.
            </p>
          </div>

          {/* Custom Arrows */}
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => swiperRef.current?.slidePrev()} className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 transition">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            effect="slide" // change to "fade" for fade effect
            autoplay={{ delay: 5000 }}
            loop={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-indigo-50 p-6 rounded-xl shadow-lg text-center h-full">
                  <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 mx-auto rounded-full mb-4 object-cover shadow-md" />
                  <Quote className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                  <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-indigo-700">{testimonial.author}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}