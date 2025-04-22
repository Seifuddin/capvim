"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  const counters = [
    { label: "Books Published", value: 320 },
    { label: "Authors Supported", value: 95 },
    { label: "Years in Publishing", value: 12 },
    { label: "Awards Received", value: 18 },
  ];

  return (
    <section className="bg-white text-gray-800 overflow-x-hidden">
      {/* Intro */}
      <div className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-green-600">About Us</h2>
        <p className="text-lg text-gray-600">
          We are a leading publishing company dedicated to bringing powerful stories and meaningful content to life. Our passion is empowering authors and shaping the future of publishing.
        </p>
      </div>

      {/* Image + Text Split */}
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-4 py-12 gap-10">
      <img
          src="/images/Capvim IP.png"
          alt="Publishing Team"
          className="w-full rounded-md p-5 shadow-md"
        />
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Who We Are</h3>
          <p className="text-gray-700 mb-4">
            Founded by book lovers and industry veterans, our publishing house blends tradition with innovation. We work closely with authors to craft compelling narratives and provide editorial excellence every step of the way.
          </p>
          <a
              href="/about"
              className="absolute mt-5 px-3 py-2 border-2 border-blue bg-blue-800 text-white hover:bg-indigo-600 hover:text-white text-md font-semibold rounded-md shadow transition transform hover:scale-105"
            >
              Learn More...
            </a>
        </div>
        
      </div>

      {/* Mission and Values */}
      <div className="bg-gray-200 py-16 px-4 mt-5">
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

      {/* Timeline 
      <div className="py-16 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-10">Our Journey</h3>
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
      */}

      {/* Animated Counters */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-16">
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
