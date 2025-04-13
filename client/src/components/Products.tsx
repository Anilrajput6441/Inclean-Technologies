"use client";

import React, { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "AHU (Air Handling Unit)",
    description:
      "Efficiently circulates air throughout the HVAC system for optimal comfort.",
    image: "/image1.jpg",
  },
  {
    id: 2,
    name: "FCU (Fan Coil Unit)",
    description:
      "Provides cooling and heating by circulating air through coils with integrated fans.",
    image: "/image2.webp",
  },
  {
    id: 3,
    name: "Air Washer Unit",
    description:
      "Cleans and humidifies the air, maintaining air quality in industrial and commercial spaces.",
    image: "/image3.jpg",
  },
  {
    id: 4,
    name: "Exhaust Unit",
    description:
      "Removes unwanted air and fumes from enclosed spaces for better ventilation.",
    image: "/image4.jpg",
  },
  {
    id: 5,
    name: "Wet Scrubber Unit",
    description:
      "Uses water or other liquids to capture particulate matter from exhaust gases.",
    image: "/image5.jpg",
  },
  {
    id: 6,
    name: "Dry Scrubber Unit",
    description:
      "Efficiently removes harmful gases from industrial exhaust without the use of water.",
    image: "/image6.jpg",
  },
  {
    id: 7,
    name: "Industrial Cooler",
    description:
      "Cooler system designed for large-scale industrial applications with high cooling capacity.",
    image: "/image7.jpg",
  },
  {
    id: 8,
    name: "Axial Flow Fan",
    description:
      "High-performance fans that provide powerful air circulation in large spaces.",
    image: "/image8.webp",
  },
  {
    id: 9,
    name: "Centrifugal Blower",
    description:
      "Blowers designed to move air at higher pressure levels for industrial and commercial use.",
    image: "/image9.webp",
  },
  {
    id: 10,
    name: "Exhaust Hood",
    description:
      "Efficiently captures and expels airborne contaminants and heat in kitchens and industrial areas.",
    image: "/image10.webp",
  },
  {
    id: 11,
    name: "Industrial Mancooler",
    description:
      "Portable cooling systems for large industrial spaces and manufacturing areas.",
    image: "/image1.jpg",
  },
  {
    id: 12,
    name: "HVLS Fans",
    description:
      "High-volume, low-speed fans designed for efficient cooling of large indoor spaces.",
    image: "/image4.jpg",
  },
  {
    id: 13,
    name: "Greenhouse Fans",
    description:
      "Designed to improve air circulation and maintain optimal climate conditions in greenhouses.",
    image: "/image5.jpg",
  },
];

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6  py-10">
      <h1 className="maven-pro-600 text-[24px] lg:text-[48px] text-[#233D63] lg:pl-30  lg:pr-30 text-center  mx-auto">
        Discover Our Expertly Crafted HVAC Products!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-2xl lg:shadow-[0px] cursor-pointer  p-6 transform hover:-translate-y-2 hover:shadow-2xl transition duration-500 flex flex-col items-center text-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={160}
              height={160}
              className="w-full h-full object-contain mb-4 filter drop-shadow-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-500 text-sm">{product.description}</p>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 cursor-pointer bg-[#9ccc3c]  hover:shadow-3xl border-1 hover:shadow-gray-500 text-black  rounded-full shadow-md transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
