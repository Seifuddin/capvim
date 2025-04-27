"use client";
import PortfolioHero from "@/components/HeroPortfolio";
import { motion } from "framer-motion";
import Image from "next/image";

const books = [
  {
    title: "Becoming You",
    author: "Jane Collins",
    genre: "Self-Help",
    src: "/images/Sin-Eater-by-Megan-Campisi.jpg",
    date: "March 12, 2024",
    rating: "★★★★☆",
  },
  {
    title: "Legacy of Hope",
    author: "Marcus Leen",
    genre: "Historical Fiction",
    src: "/images/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
    date: "June 5, 2023",
    rating: "★★★★★",
  },
  {
    title: "Voices Unheard",
    author: "Tariq Mendez",
    genre: "Memoir",
    src: "/images/J.R.R.Tolkien-The-Hobbit.png",
    date: "January 20, 2025",
    rating: "★★★☆☆",
  },
  {
    title: "Becoming You",
    author: "Jane Collins",
    genre: "Self-Help",
    src: "/images/Sin-Eater-by-Megan-Campisi.jpg",
    date: "March 12, 2024",
    rating: "★★★★☆",
  },
  {
    title: "Legacy of Hope",
    author: "Marcus Leen",
    genre: "Historical Fiction",
    src: "/images/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
    date: "June 5, 2023",
    rating: "★★★★★",
  },
  {
    title: "Voices Unheard",
    author: "Tariq Mendez",
    genre: "Memoir",
    src: "/images/J.R.R.Tolkien-The-Hobbit.png",
    date: "January 20, 2025",
    rating: "★★★☆☆",
  },
  {
    title: "Becoming You",
    author: "Jane Collins",
    genre: "Self-Help",
    src: "/images/Sin-Eater-by-Megan-Campisi.jpg",
    date: "March 12, 2024",
    rating: "★★★★☆",
  },
  {
    title: "Legacy of Hope",
    author: "Marcus Leen",
    genre: "Historical Fiction",
    src: "/images/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
    date: "June 5, 2023",
    rating: "★★★★★",
  },
  {
    title: "Voices Unheard",
    author: "Tariq Mendez",
    genre: "Memoir",
    src: "/images/J.R.R.Tolkien-The-Hobbit.png",
    date: "January 20, 2025",
    rating: "★★★☆☆",
  },
  {
    title: "Becoming You",
    author: "Jane Collins",
    genre: "Self-Help",
    src: "/images/Sin-Eater-by-Megan-Campisi.jpg",
    date: "March 12, 2024",
    rating: "★★★★☆",
  },
  {
    title: "Legacy of Hope",
    author: "Marcus Leen",
    genre: "Historical Fiction",
    src: "/images/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
    date: "June 5, 2023",
    rating: "★★★★★",
  },
  {
    title: "Voices Unheard",
    author: "Tariq Mendez",
    genre: "Memoir",
    src: "/images/J.R.R.Tolkien-The-Hobbit.png",
    date: "January 20, 2025",
    rating: "★★★☆☆",
  },
  // ...more books
];

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-gray-100">
      <PortfolioHero />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto py-20 px-6 md:px-20">
        {books.map((book, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Book Image */}
            <div className="w-full h-[260px] relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={book.src}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Book Details */}
            <div className="w-full bg-gradient-to-tr from-green-300 via-white to-green-200 mt-3 p-3 rounded-lg shadow-sm text-center">
              <h3 className="text-indigo-700 font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-600 text-sm mt-1">by {book.author}</p>
              <p className="text-gray-400 text-xs mt-2">📅 {book.date}</p>
              <p className="text-yellow-500 text-lg mt-1">{book.rating}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}