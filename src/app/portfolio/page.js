"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const books = [
    {
      title: "Becoming You",
      author: "Jane Collins",
      genre: "Self-Help",
      src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
      date: "March 12, 2024",
      rating: "★★★★☆",
    },
    {
      title: "Legacy of Hope",
      author: "Marcus Leen",
      genre: "Historical Fiction",
      src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
      date: "June 5, 2023",
      rating: "★★★★★",
    },
    {
      title: "Voices Unheard",
      author: "Tariq Mendez",
      genre: "Memoir",
      src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
      date: "January 20, 2025",
      rating: "★★★☆☆",
    },

    {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },

      {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },

      {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },

      {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },

      {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },

      {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },

      {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },

      {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },

      {
        title: "Voices Unheard",
        author: "Tariq Mendez",
        genre: "Memoir",
        src: "/images/top-ten-tips-for-embracing-collaboration-in-the-workplace-65aa5d8a274bf.jpg",
        date: "January 20, 2025",
        rating: "★★★☆☆",
      },
    // Add more as needed
  ];
  
export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-indigo-600">Our Portfolio</h2>
        <p className="text-gray-600 font-semibold mt-4 max-w-xl mx-auto">
          Explore some of the amazing books we’ve published with our talented authors and storytellers.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {books.map((book, index) => (
          <motion.div
            key={index}
            className="perspective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative w-full h-[260px] transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-xl shadow-lg overflow-hidden">
                <Image
                  src={book.src}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-white text-indigo-700 rounded-xl p-4 backface-hidden rotate-y-180 flex flex-col items-center justify-center text-center">
                <p className="font-bold text-lg">{book.title}</p>
                <p className="mt-1 text-sm">{book.author}</p>
                <p className="text-xs text-indigo-500 mb-2">{book.genre}</p>
                <p className="text-xs text-gray-500">📅 {book.date}</p>
                <p className="text-yellow-500 text-lg">{book.rating}</p>
            </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Styling for flip cards */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}