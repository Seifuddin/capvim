"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const books = [
  {
    title: "English Paper 3",
    author: "Gideon Musau & Clementine Ndambuki",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000508.jpg",
    date: "March 12, 2024",
    rating: 4,
  },
  {
    title: "Mapenzi Ni Kisu",
    author: "Robert Mustaki",
    genre: "Set Book",
    src: "/covers/Screenshot_20250429-000511.jpg",
    date: "June 5, 2023",
    rating: 5,
  },
  {
    title: "Reloaded Comprehensive, Biology Paper 1 & 2",
    author: "S. B. Owaga, F. Maina, M. Matara",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000521.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "National Teachers Workshop",
    author: "Capvim Publishers",
    genre: "Self-Help",
    src: "/covers/Screenshot_20250429-000539.jpg",
    date: "March 12, 2024",
    rating: 4,
  },
  {
    title: "Reloaded Comprehensive, Geography Paper 1",
    author: "Kaara Lawrence & Mr. Limo",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000602.jpg",
    date: "June 5, 2023",
    rating: 5,
  },
  {
    title: "Reloaded Comprehensive, Geography Paper 2",
    author: "Kaara Lawrence & Mr. Limo",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000555.jpg",
    date: "June 5, 2023",
    rating: 5,
  },
  {
    title: "Reloaded Comprehensive, CRE Paper 1",
    author: "Clifford Matara, Gideon Mochere & Joan Nyaboke",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000610.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "Victus",
    author: "Terry Orlale",
    genre: "Self Help",
    src: "/covers/Screenshot_20250429-000613.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "Reloaded Comprehensive, CRE paper 2",
    author: "Clifford Matara, Gideon Mochere & Joan Nyaboke",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000642.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "Reloaded Comprehensive, Home Science Paper 1 & 2",
    author: "Felly Chebet, Beverly Moraa & Carol Ndambuki",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000645.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "Reloaded Comprehensive, Business Studies Paper 1 & 2",
    author: "A. O. Anan & J. Otiambo",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000648.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "Reloaded Comprehensive, Agriculture Paper 1 & 2",
    author: "Mangere Ismael & John Mulinge",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000651.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "Mche",
    author: "John Wekesa",
    genre: "Set Book",
    src: "/covers/Screenshot_20250429-000728.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "Demystified English Paper 3",
    author: "Nyamita Paul, Judith A. Onywany, Noah Otok & Tony Brian",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000739.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "The Eagle Series",
    author: "B. Maloba, L. Chisaka, S. Musiko, F. Sakwa, B. Wandera & G. Keya",
    genre: "Set Book",
    src: "/covers/Screenshot_20250429-000742.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "Oral Literature & Poetry, A Simplified Guide to KCSE English",
    author: "Julius Ochieng",
    genre: "Poetry",
    src: "/covers/Screenshot_20250429-000745.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
  {
    title: "One Touch English Paper 1",
    author: "Shijedi Derick & Barack Wandera",
    genre: "Revision Book",
    src: "/covers/Screenshot_20250429-000748.jpg",
    date: "January 20, 2025",
    rating: 3,
  },
];

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-green-50 px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto py-20">
        {books.map((book, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Book Image */}
            <article className="w-full h-[260px] relative rounded overflow-hidden">
              <Image
                src={book.src}
                alt={`Cover of the book titled ${book.title} by ${book.author}`}
                fill
                loading="lazy"
                className="object-cover"
              />
            </article>

            {/* Book Details */}
            <div className="w-full mt-3 p-3">
              <h3 className="text-blue-900 font-semibold text-base md:text-lg leading-tight break-words">
                {book.title}
              </h3>
              <p className="text-gray-800 text-sm mt-1">by {book.author}</p>
              <p className="text-gray-600 text-xs mt-2">📅 {book.date}</p>
              <p className="text-yellow-500 text-lg mt-1">{book.rating}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}