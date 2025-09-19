import React from "react";
import { motion } from "framer-motion";

const HOTEL_PHONE = "94714304378"; // WhatsApp number

export default function RoomCard({ title, price, img, desc }) {
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const message = `Hello! I would like to book a room.%0ARoom: ${encodeURIComponent(title)}%0APrice: ${encodeURIComponent(price)}%0ADetails: ${encodeURIComponent(desc)}`;
    const url = `https://wa.me/${HOTEL_PHONE}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div whileHover={{ translateY: -6 }} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{title}</h4>
          <div className="text-amber-600 font-semibold">{price}</div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
        <div className="mt-4 flex gap-2">
          <a
            onClick={handleWhatsAppBooking}
            href="#"
            className="ml-auto text-sm px-3 py-2 rounded-md bg-amber-500 text-white"
          >
            Book
          </a>
        </div>
      </div>
    </motion.div>
  );
}
