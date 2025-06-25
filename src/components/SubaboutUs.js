"use client";
import { motion } from "framer-motion";
import { FiBookOpen, FiUser, FiCalendar, FiAward } from "react-icons/fi";
import CountUp from "react-countup";
import Who from "./Who";

export default function SubAboutUs() {
  const counters = [
    { label: "Books Published", value: 320 },
    { label: "Authors Supported", value: 95 },
    { label: "Years in Publishing", value: 12 },
    { label: "Awards Received", value: 18 },
  ];

  const icons = [FiBookOpen, FiUser, FiCalendar, FiAward];

  return (
    <section className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Intro */}
      <Who />

      {/* Mission and Values */}
      <div className="bg-gradient-to-tr from-green-300 via-white to-green-200 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-600">Our Mission</h3>
            <p className="text-gray-700">
              To amplify voices and stories that inspire, educate, and entertain
              readers worldwide through quality publishing and unwavering support
              for authors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-600">Our Core Values</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Editorial excellence</li>
              <li>Author-first approach</li>
              <li>Inclusive storytelling</li>
              <li>Commitment to innovation</li>
              <li>Integrity and transparency</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-green-600">Our Journey</h3>
        </motion.div>
        <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
          {[
            {
              year: "2011 - Company Founded",
              desc: "Established with the mission to support emerging authors and diverse narratives.",
            },
            {
              year: "2014 - First Bestseller",
              desc: "Achieved national recognition with our first best-selling novel.",
            },
            {
              year: "2017 - Global Distribution",
              desc: "Expanded to international markets, enabling worldwide access to our titles.",
            },
            {
              year: "2023 - Digital Publishing Launch",
              desc: "Introduced eBook and audiobook formats to reach more readers globally.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white p-5 shadow-lg rounded-md"
            >
              <h4 className="text-blue-600 text-lg font-semibold">{item.year}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Counters with Icons and Progress Bars */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-8">
          {counters.map((counter, index) => {
            const Icon = icons[index];
            const percentage = Math.min((counter.value / 400) * 100, 100); // Adjust denominator for normalization

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-4xl mb-2 text-white" />
                <h4 className="text-3xl font-bold">
                  <CountUp end={counter.value} duration={2} />
                </h4>
                <p className="text-sm mt-2 font-medium">{counter.label}</p>
                <div className="w-full mt-2 bg-white/30 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-white h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}