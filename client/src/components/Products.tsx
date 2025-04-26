"use client";

import React, { useState } from "react";
import Image from "next/image";
import products from "@/app/Productdata";
import Link from "next/link";

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
          <Link
            href={`/Products/${product.id}`}
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
          </Link>
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
