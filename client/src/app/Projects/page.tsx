"use client";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    path: "/Projects/Projectone/",
    image: "/image3.jpg",
    title: "Modern HVAC System",
    description: "Installed a high-efficiency HVAC unit for residential use.",
  },
  {
    path: "/Projects/Projecttwo/",
    image: "/image1.jpg",
    title: "Commercial Ventilation",
    description: "Complete ventilation setup for a large office space.",
  },
  {
    path: "/Projects/Projectthree/",
    image: "/image5.jpg",
    title: "Cooling Tower Upgrade",
    description:
      "Upgraded industrial cooling tower system for better performance.",
  },
  {
    path: "/Projects/Projectfour/",
    image: "/image6.jpg",
    title: "Ductwork Installation",
    description: "Custom ductwork designed and installed for optimal airflow.",
  },
  {
    path: "/Projects/Projectfive/",
    image: "/image7.jpg",
    title: "Smart Thermostat Integration",
    description: "Integrated smart thermostats for automated climate control.",
  },
];

const page = () => {
  return (
    <>
      <h1 className="mt-30 p-5 maven-pro-600 text-5xl text-center text-[#233C63]">
        Cool Installs. Warm Results.
        <p className="text-xl">All Projects({images.length})</p>
      </h1>
      <div className="mt-  grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => (
          <Link key={index} href={img.path}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
              <Image
                src={img.image}
                alt={img.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{img.title}</h3>
                <p className="text-sm text-gray-600">{img.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
