import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Facilities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
