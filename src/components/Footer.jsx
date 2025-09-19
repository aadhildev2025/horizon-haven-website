import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {/* Brand */}
        <div>
          <h5 className="font-semibold">Horizon Haven</h5>
          <p className="text-sm text-gray-400 mt-2">
            Modern comfort, local charm. Follow us for updates and offers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="font-medium">Quick Links</h6>
          <ul className="mt-2 text-sm text-gray-400 space-y-1">
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#facilities">Facilities</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="font-medium">Contact</h6>
          <p className="text-sm text-gray-400 mt-2">+94 71 430 4378</p>
          <p className="text-sm text-gray-400">
            aadhildev2025@gmail.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Horizon Haven. All rights reserved.
      </div>
    </footer>
  );
}
