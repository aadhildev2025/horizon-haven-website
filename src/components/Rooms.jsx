import React from "react";
import RoomCard from "./RoomCard";

export default function Rooms() {
  const rooms = [
    {
      title: "Deluxe Room",
      price: "$65/night",
      img: "https://tse1.mm.bing.net/th/id/OIF.4fnQQAzP03E20RhdWIsSzg?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Cozy space with a queen bed, workspace, and city view. Ideal for solo or couple travelers."
    },
    {
      title: "Executive Suite",
      price: "$110/night",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      desc: "Larger suite with living area, king bed, and premium amenities. Great for business stays."
    },
    {
      title: "Family Suite",
      price: "$140/night",
      img: "https://tse1.mm.bing.net/th/id/OIP.YS9jc4n9e5yA1EWTKxq1tAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Two-bedroom layout with extra space for families and groups. Includes kitchenette."
    },
    {
      title: "Presidential Suite",
      price: "$220/night",
      img: "https://th.bing.com/th?id=OIF.%2bXVcNgW311OxeIcrSx4afQ&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Luxurious suite with private balcony, jacuzzi, and premium lounge access."
    },
    {
      title: "Standard Room",
      price: "$55/night",
      img: "https://th.bing.com/th/id/R.b347f24565050d4a44e104ad6803fda2?rik=Y8B7vZnFSJM92w&riu=http%3a%2f%2fhotelkutumba.com%2fimages%2fsubpackage%2fy3jHK-6rix9-standard-room.jpg&ehk=1wK54EWIWeaJnbIiCCGzuJ5Z80pgrR9qFmCijC2mQ6E%3d&risl=&pid=ImgRaw&r=0",
      desc: "Affordable comfort with essential amenities, perfect for short stays."
    },
    {
      title: "Ocean View Room",
      price: "$95/night",
      img: "https://tse3.mm.bing.net/th/id/OIP.lNvRywVz2se8wa8PUeLRrAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Enjoy stunning views of the ocean with a private balcony and modern comforts."
    }
  ];

  return (
    <section id="rooms" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Rooms & Suites</h3>
        <p className="mt-2 text-sm text-gray-600">
          Choose from comfortable room types to suit your needs.
        </p>

        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
          {rooms.map((r) => (
            <RoomCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
