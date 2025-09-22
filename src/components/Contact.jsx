import React, { useState } from "react";
import { motion } from "framer-motion";

// Hotel's WhatsApp number in international format (without "+")
const HOTEL_PHONE = "94714304378";

export default function Contact() {
  // Form states
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [errors, setErrors] = useState({}); // To store validation errors

  // Handle WhatsApp booking
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();

    // Collect errors if fields are empty
    let newErrors = {};
    if (!name) newErrors.name = "Please enter your name";
    if (!checkIn) newErrors.checkIn = "Please select check-in date";
    if (!checkOut) newErrors.checkOut = "Please select check-out date";
    if (!roomType) newErrors.roomType = "Please select a room type";

    setErrors(newErrors);

    // If no errors, open WhatsApp with pre-filled booking message
    if (Object.keys(newErrors).length === 0) {
      const message = `Hello! I would like to book a room.%0AName: ${encodeURIComponent(
        name
      )}%0ACheck-in: ${encodeURIComponent(
        checkIn
      )}%0ACheck-out: ${encodeURIComponent(
        checkOut
      )}%0ARoom: ${encodeURIComponent(roomType)}%0AThank you!`;
      const url = `https://wa.me/${HOTEL_PHONE}?text=${message}`;
      window.open(url, "_blank");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* ================= LEFT SIDE: Contact Info ================= */}
        <div>
          <h3 className="text-2xl font-bold">Contact & Booking</h3>
          <p className="mt-2 text-sm text-gray-600">
            Reach out to us or reserve directly through WhatsApp.
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-medium">Address:</span> 369 Puttalam, Sri Lanka
            </p>
            <p>
              <span className="font-medium">Phone:</span> +94 71 430 4378
            </p>
            <p>
              <span className="font-medium">Email:</span> aadhildev2025@gmail.com
            </p>

            {/* Google Map Embed */}
            <div className="mt-3">
              <iframe
                title="map"
                className="w-full h-48 rounded-md border"
                src="https://www.google.com/maps?q=Puttalam&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: Booking Form ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <h4 className="font-semibold">Book via WhatsApp</h4>
          <p className="text-sm text-gray-500 mt-1">
            Fill details below and we'll open WhatsApp with a pre-filled message.
          </p>

          {/* Booking Form */}
          <form className="mt-4 space-y-3" onSubmit={handleWhatsAppBooking}>
            
            {/* Name Input */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Check-in & Check-out Dates */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-medium">Check-in</label>
                <input
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  type="date"
                  className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                    errors.checkIn ? "border-red-500" : ""
                  }`}
                />
                {errors.checkIn && (
                  <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Check-out</label>
                <input
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  type="date"
                  className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                    errors.checkOut ? "border-red-500" : ""
                  }`}
                />
                {errors.checkOut && (
                  <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>
                )}
              </div>
            </div>

            {/* Room Type Dropdown */}
            <div>
              <label className="text-sm font-medium">Room Type</label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                  errors.roomType ? "border-red-500" : ""
                }`}
              >
                <option>Deluxe Room</option>
                <option>Executive Suite</option>
                <option>Family Suite</option>
              </select>
              {errors.roomType && (
                <p className="text-red-500 text-xs mt-1">{errors.roomType}</p>
              )}
            </div>

            {/* Submit & Reset Buttons */}
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-amber-500 text-white px-4 py-2 rounded-md font-medium hover:opacity-95"
              >
                Open WhatsApp
              </button>
              <button
                type="button"
                onClick={() => {
                  setName("");
                  setCheckIn("");
                  setCheckOut("");
                  setRoomType("Deluxe Room");
                  setErrors({});
                }}
                className="px-4 py-2 border rounded-md"
              >
                Reset
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400">
              We will receive your booking request on WhatsApp and confirm availability.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
