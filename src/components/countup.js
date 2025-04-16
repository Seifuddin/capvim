"use client";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaSmile, FaAward, FaTasks } from 'react-icons/fa';

export default function Countup() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <FaLaptopCode size={40} className="text-blue-600 mb-2" />,
      end: 100,
      label: 'Websites Made',
      duration: 2,
    },
    {
      icon: <FaSmile size={40} className="text-green-600 mb-2" />,
      end: 200,
      label: 'Happy Clients',
      duration: 2.5,
    },
    {
      icon: <FaAward size={40} className="text-yellow-500 mb-2" />,
      end: 20,
      label: 'Years of Experience',
      duration: 3,
    },
    {
      icon: <FaTasks size={40} className="text-purple-600 mb-2" />,
      end: 50,
      label: 'Projects Ongoing',
      duration: 2,
    },
  ];

  return (
    <section className="relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 text-gray-700 text-xl">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {item.icon}
              <h2 className="text-3xl font-bold">
                {inView && <CountUp end={item.end} duration={item.duration} />}+
              </h2>
              <p className="text-sm mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}