"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function MeetOurTeam() {
  const team = [
    {
      name: "Dr. Clifford Matara",
      role: "Founder & Chief Editor",
      image: "/images/IMG-20250804-WA0003~2.jpg",
      featured: true,
    },
    {
      name: "Rhobey",
      role: "Chief Designer",
      image: "/images/book-reading-woman-standing-red-background-high-quality-photo_114579-62404.avif",
    },
    {
      name: "Trinah",
      role: "Manager Accounts",
      image: "/images/http___com.ft.imagepublish.upp-prod-eu.s3.amazonaws.webp",
    },
    {
      name: "Muriithi Nguru",
      role: "Web Developer",
      image: "/images/images (5).jpg",
    },
  ];

  const featuredMember = team.find((m) => m.featured);
  const otherMembers = team.filter((m) => !m.featured);

  return (
    <section className="bg-yellow-50 py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block bg-green-200 text-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Meet The 
            <span className="text-green-600"> Minds Behind Capvim. </span>
          </h2>
        <div className="w-24 h-1 bg-green-200 mx-automd:mx-0 rounded-full mb-6"></div>

          <p className="text-gray-600 text-base md:text-lg mt-3">
                  A passionate team dedicated to excellence in publishing,
          creativity, and global impact.
                </p>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* FEATURED MEMBER */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded overflow-hidden group h-[500px]"
          >
            <Image
              src={featuredMember.image}
              alt={featuredMember.name}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-3xl font-bold">
                {featuredMember.name}
              </h3>
              <p className="text-green-300 mb-4">
                {featuredMember.role}
              </p>

              <button className="flex items-center gap-2 text-sm uppercase tracking-wide hover:text-green-300 transition">
                View Profile <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* STACKED MEMBERS */}
          <div className="grid gap-6">
            {otherMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative rounded overflow-hidden group h-[150px]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

                <div className="absolute bottom-0 p-4 text-white">
                  <h4 className="text-xl font-semibold">
                    {member.name}
                  </h4>
                  <p className="text-green-300 text-sm">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
