import React from "react";
import { motion } from "framer-motion";

export default function Facilities() {
  const features = [
    { name: "Pool", icon: "🏊" },
    { name: "Spa", icon: "💆" },
    { name: "Gym", icon: "🏋️" },
    { name: "Restaurant", icon: "🍽️" },
    { name: "Wi-Fi", icon: "📶" },
    { name: "Parking", icon: "🚗" },
  ];

  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay each card
      },
    },
  };

  // Child card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="facilities" className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-2xl font-bold"
      >
        Facilities & Services
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-2 text-sm text-gray-600"
      >
        Everything designed for your comfort and convenience.
      </motion.p>

      {/* Animated container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // 👈 triggers every time on scroll
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
      >
        {features.map((f) => (
          <motion.div
            key={f.name}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm"
          >
            <div className="text-3xl">{f.icon}</div>
            <div className="mt-2 text-sm font-medium">{f.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
