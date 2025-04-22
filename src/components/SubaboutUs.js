"use client";
import { motion } from "framer-motion";
import Who from "./Who";

export default function SubAboutUs() {
  const counters = [
    { label: "Books Published", value: 320 },
    { label: "Authors Supported", value: 95 },
    { label: "Years in Publishing", value: 12 },
    { label: "Awards Received", value: 18 },
  ];

  return (
    <section className="bg-white text-gray-800 overflow-x-hidden">
      {/* Intro */}
      <Who />


      {/* Mission and Values */}
      <div className="bg-gradient-to-tr from-green-300 via-white to-green-200 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Our Mission</h3>
            <p className="text-gray-700">
              To amplify voices and stories that inspire, educate, and entertain readers worldwide through quality publishing and unwavering support for authors.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Our Core Values</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Editorial excellence</li>
              <li>Author-first approach</li>
              <li>Inclusive storytelling</li>
              <li>Commitment to innovation</li>
              <li>Integrity and transparency</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10 text-green-600">Our Journey</h3>
        <div className="relative border-l-4 border-orange-600 pl-6 space-y-10">
          <div>
            <h4 className="text-lg font-semibold">2011 - Company Founded</h4>
            <p className="text-gray-600">Established with the mission to support emerging authors and diverse narratives.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">2014 - First Bestseller</h4>
            <p className="text-gray-600">Achieved national recognition with our first best-selling novel.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">2017 - Global Distribution</h4>
            <p className="text-gray-600">Expanded to international markets, enabling worldwide access to our titles.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">2023 - Digital Publishing Launch</h4>
            <p className="text-gray-600">Introduced eBook and audiobook formats to reach more readers globally.</p>
          </div>
        </div>
      </div>

      {/* Animated Counters */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold"
            >
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: counter.value }}
                transition={{ duration: 2 }}
              >
                {Math.floor(counter.value)}
              </motion.span>
              <p className="text-sm mt-2 font-medium">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}