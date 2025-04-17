import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ServiceModal({ selected, onClose }) {
  if (!selected) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 p-6 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            {selected.title}
          </h3>
          <p className="text-gray-700 mb-4">{selected.modal.details}</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            {selected.modal.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}