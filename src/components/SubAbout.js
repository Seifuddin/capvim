"use client";
import { useEffect, useRef, useState } from "react";
import { FiBookOpen, FiUser, FiCalendar, FiAward } from "react-icons/fi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// Reusable animated counter
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let startTime = null;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span ref={ref}>{count}</span>;
};

export default function AboutUs() {
  const counters = [
      { label: "Books Published", value: 320 },
      { label: "Authors Supported", value: 95 },
      { label: "Years in Publishing", value: 12 },
      { label: "Awards Received", value: 18 },
    ];
  
    const icons = [FiBookOpen, FiUser, FiCalendar, FiAward];

  return (
    <section className="bg-gradient-to-tr from-green-300 via-white to-green-200 text-gray-800 overflow-x-hidden">
      {/* Intro */}
      <div className="text-center py-10 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-600">About Us</h2>
          <p className="text-lg text-gray-600">
            We are a leading publishing company dedicated to bringing powerful
            stories and meaningful content to life. Our passion is empowering
            authors and shaping the future of publishing.
          </p>
        </motion.div>
      </div>

      {/* Image + Text Split */}
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-4 py-4 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/Capvim IP.png"
            alt="Publishing Team"
            loading="lazy"
            className="w-full rounded-md p-5 shadow-md border bg-black/5 border-gray-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 pb-5"
        >
          <h3 className="text-2xl font-bold mb-4 text-green-600">Who We Are</h3>
          <p className="text-gray-700 mb-4">
            Founded by book lovers and industry veterans, our publishing house
            blends tradition with innovation. We work closely with authors to
            craft compelling narratives and provide editorial excellence every
            step of the way.
          </p>
          <a
            href="/about"
            className="inline-block mt-5 px-4 py-2 border-2 border-blue bg-blue-800 text-white hover:bg-indigo-600 rounded-md shadow transition-transform duration-300 hover:scale-105"
          >
            Learn More...
          </a>
        </motion.div>
      </div>

      {/* Mission and Values */}
      <div className="bg-white py-16 px-4 mt-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-600">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To amplify voices and stories that inspire, educate, and entertain
              readers worldwide through quality publishing and unwavering
              support for authors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-600">
              Our Core Values
            </h3>
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