import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", // Hotel room
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", // Pool ✅ fixed
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80", // Restaurant
    "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80", // Suite ✅ fixed
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", // Lobby
    "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1200&q=80", // Spa
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", // Gym
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"  // Balcony view
  ];

  return (
    <section id="gallery" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold">Gallery</h3>
        <p className="mt-2 text-gray-600">
          A few snapshots from around the property.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-44 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
