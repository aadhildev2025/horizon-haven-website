import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-16 scroll-smooth"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side - Text */}
        <div>
          <motion.h3
            className="text-3xl font-bold text-gray-800"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            About Horizon Haven
          </motion.h3>

          <motion.p
            className="mt-4 text-gray-600 leading-relaxed"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Nestled just minutes from the city center and the scenic coastline,
            <span className="font-medium text-amber-600"> Horizon Haven </span>
            is your sanctuary of comfort and elegance. Whether you’re traveling
            for business or leisure, our thoughtfully designed rooms and
            world-class amenities ensure a memorable stay. 
            Experience curated dining, a rejuvenating spa, rooftop infinity pool,
            and seamless high-speed Wi-Fi throughout the property.
          </motion.p>

          <motion.ul
            className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <li>✔ 24/7 Front Desk</li>
            <li>✔ Complimentary Breakfast</li>
            <li>✔ Free Secure Parking</li>
            <li>✔ Airport Transfers</li>
            <li>✔ Rooftop Pool & Spa</li>
            <li>✔ Business Lounge</li>
          </motion.ul>

          {/* Learn More Button */}
          <motion.a
            href="#rooms"
            className="mt-6 inline-block bg-amber-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-amber-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Rooms
          </motion.a>
        </div>

        {/* Right Side - Image */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=60"
            alt="Hotel Lobby"
            className="w-full h-80 object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
