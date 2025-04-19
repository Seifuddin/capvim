"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Info } from "lucide-react";
import { Dialog } from "@headlessui/react";

const teamMembers = [
  {
    name: "Clifford Matara",
    title: "Chief Editor",
    image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    bio: "Cliff oversees all editorial content and maintains Capvim's publishing standards.",
    department: "Editorial"
  },
  {
    name: "Vincent Obwogi",
    title: "Creative Director",
    image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    bio: "Vin leads our visual storytelling and creative publishing projects.",
    department: "Creative"
  },
  {
    name: "Ishmail Atuto",
    title: "Publishing Manager",
    image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    bio: "Ishmael ensures timely publication and manages author relations.",
    department: "Publishing"
  },
  {
    name: "Brian Odhiambo",
    title: "Head of Design",
    image: "/images/young-elite-kenya-special-forces-sniper-becomes-world-s-second-deadliest-sniper-after-Symo-Hayha.jpg",
    bio: "Brayo directs design strategies and book cover aesthetics.",
    department: "Design"
  }
];

export default function TheTeam() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedDept, setSelectedDept] = useState("All");

  const openModal = (member) => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const departments = ["All", ...new Set(teamMembers.map((m) => m.department))];
  const filteredMembers = selectedDept === "All" ? teamMembers : teamMembers.filter(m => m.department === selectedDept);

  return (
    <section className="bg-gray-200 py-20 px-6 md:px-20" id="team">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600">Meet Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          A dynamic group of passionate professionals committed to bringing your ideas to life through publishing excellence.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${selectedDept === dept ? "bg-green-600 text-white border-green-600" : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"}`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#f8fafc] rounded-2xl shadow-md overflow-hidden text-center cursor-pointer hover:shadow-xl"
            onClick={() => openModal(member)}
          >
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#002147]">{member.name}</h3>
              <p className="text-green-600 mt-1">{member.title}</p>
              <p className="text-sm text-gray-500 mt-1">{member.department}</p>
              <div className="flex justify-center gap-4 mt-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-[#002147] hover:text-green-600 animate-pulse"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-[#002147] hover:text-green-600 animate-pulse"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-[#002147] hover:text-green-600 animate-pulse"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(member)}
                className="mt-4 flex items-center justify-center gap-2 px-4 py-2 border border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white rounded-full transition-all animate-bounce"
              >
                <Info className="w-4 h-4 animate-ping" /> <span>More Info</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
            {/* Overlay backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />

            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg z-50 max-w-md mx-auto p-6 relative"
            >
            <Dialog.Title className="text-xl font-bold text-[#002147] mb-2">
                {selectedMember?.name}
            </Dialog.Title>
            <p className="text-green-600 mb-4">{selectedMember?.title}</p>
            <p className="text-sm text-gray-500 mb-1">Department: {selectedMember?.department}</p>
            <p className="text-gray-700 mt-2">{selectedMember?.bio}</p>
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-4 text-gray-500 hover:text-[#002147] text-lg"
            >
                &times;
            </button>
            </motion.div>
        </div>
      </Dialog>
    </section>
  );
}