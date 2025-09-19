import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* Background with zoom effect */}
      <motion.div
        className="h-[70vh] md:h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80')`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Dark overlay */}
        <div className="backdrop-brightness-75 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            {/* Text Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.3 },
                },
              }}
            >
              <motion.h2
                className="text-3xl md:text-6xl font-extrabold drop-shadow-lg"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8 }}
              >
                Welcome to Horizon Haven
              </motion.h2>

              <motion.p
                className="mt-4 max-w-xl text-sm md:text-lg text-gray-100/90 leading-relaxed"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.9 }}
              >
                A modern retreat with breathtaking views, thoughtful amenities,
                and warm hospitality — your comfortable stay starts here.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-8 flex gap-4"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 1 }}
              >
                <a
                  href="#rooms"
                  className="inline-block bg-white text-amber-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition"
                >
                  Explore Rooms
                </a>
                <a
                  href="#contact"
                  className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 hover:scale-105 transform transition"
                >
                  Book via WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
