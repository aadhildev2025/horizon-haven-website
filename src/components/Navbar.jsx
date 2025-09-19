import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-white font-bold">H</div>
          <div>
            <h1 className="font-semibold text-lg">Horizon Haven</h1>
            <p className="text-xs text-gray-500">Comfort • Convenience • Care</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#home" className="hover:text-amber-600">Home</a>
          <a href="#about" className="hover:text-amber-600">About</a>
          <a href="#rooms" className="hover:text-amber-600">Rooms</a>
          <a href="#facilities" className="hover:text-amber-600">Facilities</a>
          <a href="#gallery" className="hover:text-amber-600">Gallery</a>
          <a href="#contact" className="bg-amber-500 text-white px-3 py-2 rounded-md">Book</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md border">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">About</a>
            <a href="#rooms" className="block">Rooms</a>
            <a href="#facilities" className="block">Facilities</a>
            <a href="#gallery" className="block">Gallery</a>
            <a href="#contact" className="block text-amber-600">Book</a>
          </div>
        </div>
      )}
    </header>
  );
}
