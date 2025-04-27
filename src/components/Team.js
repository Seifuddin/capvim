"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Clifford Matara",
    title: "Director, Academics and Field Liaison",
    image: "/images/WhatsApp Image 2025-04-24 at 17.22.28.jpeg",
    bio: "Cliff oversees all editorial content and maintains Capvim's publishing standards.",
    department: "Overall Management and CEO",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100086445833000",
      twitter: "https://x.com/Lapsa020?t=qD76KpTBcO3PW_5an73b7Q&s=09",
      linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=edwin-nguru-92ab23312"
    }
  },
  {
    name: "Trinah",
    title: "Manager, Accounts and Deputy Chief of Party",
    image: "/images/WhatsApp Image 2025-04-24 at 17.22.28.jpeg",
    bio: "Trinah leads our visual storytelling and creative publishing projects.",
    department: "Accounts",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100086445833000",
      twitter: "https://x.com/Lapsa020?t=qD76KpTBcO3PW_5an73b7Q&s=09",
      linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=edwin-nguru-92ab23312"
    }
  },
  {
    name: "Rhobey",
    title: "Chief Graphics Designer",
    image: "/images/WhatsApp Image 2025-04-24 at 17.22.28.jpeg",
    bio: "Rhobey ensures timely publication and manages author relations.",
    department: "Graphics Design",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100086445833000",
      twitter: "https://x.com/Lapsa020?t=qD76KpTBcO3PW_5an73b7Q&s=09",
      linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=edwin-nguru-92ab23312"
    }
  },
  {
    name: "Faith",
    title: "Sales and Marketing",
    image: "/images/WhatsApp Image 2025-04-24 at 17.22.28.jpeg",
    bio: "Faith directs design strategies and book cover aesthetics.",
    department: "Sales and Marketing",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100086445833000",
      twitter: "https://x.com/Lapsa020?t=qD76KpTBcO3PW_5an73b7Q&s=09",
      linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=edwin-nguru-92ab23312"
    }
  },
  {
    name: "Muriithi Nguru",
    title: "Manager, e-books and Online Content",
    image: "/images/WhatsApp Image 2025-04-24 at 17.22.28.jpeg",
    bio: "Manages and directs design strategies and book cover aesthetics.",
    department: "Online Content and Developer",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100086445833000",
      twitter: "https://x.com/Lapsa020?t=qD76KpTBcO3PW_5an73b7Q&s=09",
      linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=edwin-nguru-92ab23312"
    }
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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-20 px-6 md:px-20 relative overflow-x-hidden" id="team">
      <div className="text-center mb-12">
        <motion.div
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className="relative"
                                                  >
        <h2 className="text-4xl font-bold text-green-600">Meet Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          A dynamic group of passionate professionals committed to bringing your ideas to life through publishing excellence.
        </p>
        </motion.div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                selectedDept === dept
                  ? "bg-green-600 text-white border-green-600"
                  : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute top-[50%] -translate-y-1/2 left-4 z-10">
        <button ref={prevRef} className="p-2 bg-white rounded-full shadow hover:bg-green-100">
          <ChevronLeft className="w-6 h-6 text-[#002147]" />
        </button>
      </div>
      <div className="absolute top-[50%] -translate-y-1/2 right-4 z-10">
        <button ref={nextRef} className="p-2 bg-white rounded-full shadow hover:bg-green-100">
          <ChevronRight className="w-6 h-6 text-[#002147]" />
        </button>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {filteredMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-tr from-green-300 via-white to-green-200 pt-5 rounded-2xl shadow-md overflow-hidden text-center cursor-pointer hover:shadow-xl"
              onClick={() => openModal(member)}
            >
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#002147]">{member.name}</h3>
                <p className="text-green-600 mt-1">{member.title}</p>
                <p className="text-sm text-gray-500 mt-1">{member.department}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <motion.a 
                    href={member.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }} 
                    className="text-[#002147] hover:text-green-600 animate-pulse"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }} 
                    className="text-[#002147] hover:text-green-600 animate-pulse"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
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
          </SwiperSlide>
        ))}
      </Swiper>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-indigo-50 rounded-xl shadow-lg z-50 max-w-md mx-auto p-6 relative"
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