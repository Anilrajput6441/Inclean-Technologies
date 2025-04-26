/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { use } from "react";
import productdata from "@/app/Productdata";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProductDetail({ params }: Props) {
  const { id } = use(params); // ⬅️ THIS unwraps the params promise!

  const product = productdata.find((p: any) => p.id === parseInt(id));

  if (!product) return notFound();

  return (
    <div className="max-w-full mx-auto">
      <div className="relative">
        <div className="absolute w-full h-[60vh] lg:h-[90vh] bg-black opacity-75" />
        <h1 className="absolute w-full h-full lg:h-[90vh] maven-pro-600 text-2xl md:text-5xl text-white flex flex-col justify-center items-center">
          {product.name}
          <p className="text-sm lg:text-xl mt-10 font-normal">
            Home / Projects / {product.name}
          </p>
        </h1>
        <Image
          src={product.image}
          alt="Industrial Ventilation System"
          width={900}
          height={600}
          className="w-full h-[60vh] lg:h-[90vh]"
        />
      </div>

      <div className="flex   flex-col md:flex-row">
        <div className="p-5 md:p-10 w-full md:w-[50%]">
          <h1 className="text-4xl maven-pro-600 text-[#233C63]">
            {product.div1.title}
          </h1>
          <p className="mt-10">{product.description}</p>
        </div>
        <div className="p-2 md:p-10 w-full md:w-[50%]">
          <Image
            src={product.div1.image}
            alt={product.name}
            width={900}
            height={600}
            className="w-full h-[30vh]  lg:h-[60vh]"
          />
        </div>
      </div>

      <div className="bg-gray-100 w-full mt-10 p-5 md:p-15">
        <h1 className="text-3xl font-bold">{product.name} :</h1>
        {product.description}
      </div>

      <div className="w-full  flex flex-wrap justify-center items-center gap-y-5 pt-10 pb-10 md:p-15 gap-x-5">
        {product.imageGallery.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            alt={`${product.name} Image ${index + 1}`}
            width={300}
            height={300}
            className="w-100 h-full"
          />
        ))}
      </div>
    </div>
  );
}
