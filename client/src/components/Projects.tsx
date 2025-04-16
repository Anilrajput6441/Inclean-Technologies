"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    description: "Complete ventilation setup for a large office space. ",
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

const Projects = () => {
  const [current, setCurrent] = useState(2); // Start from the middle image

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getPositionClass = (index: number) => {
    if (index === current) return "z-20 scale-290";
    if (index === (current - 1 + images.length) % images.length)
      return "z-10 -translate-x-[120%] scale-120 pr-35 mb-71";
    if (index === (current + 1) % images.length)
      return "z-10 translate-x-[120%] scale-120 pl-35 mb-34 ";
    return "hidden";
  };

  const handleNext = (index: number) => {
    // if (index === current) return "z-20 scale-290";
    if (index === (current - 1 + images.length) % images.length)
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    if (index === (current + 1) % images.length)
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    return "hidden";
  };

  return (
    <>
      <div className="hidden md:block ">
        <div className="relative w-full flex flex-col items-center">
          {/* Carousel container */}
          <div className="absolute text-6xl maven-pro-600 z-10 text-[#233D63] p-10">
            Cool Installs. Warm Results.
          </div>
          {/* Chevrons container */}

          <div className="flex justify-between  w-full mt-30 pl-20 pr-20 maven-pro-600">
            <div>featured / Projects / {current + 1}</div>
            <div>
              {" "}
              <button onClick={prevSlide}>
                <ChevronLeft className="w-8 h-8 text-gray-700 hover:text-black transition" />
              </button>
              <button onClick={nextSlide}>
                <ChevronRight className="w-8 h-8 text-gray-700 hover:text-black transition" />
              </button>
            </div>
          </div>
          <div className="relative flex pt-40  justify-center h-150  w-full overflow-hidden">
            {images.map((img, index) => (
              <Link
                key={index}
                href={img.path}
                className={`absolute  transition-all duration-500 ease-in-out   transform ${getPositionClass(
                  index
                )}`}
                onClick={() => handleNext(index)}
              >
                {/* white descriptuons divss */}
                {index === current && (
                  <div className=" textbox absolute w-40 h-17 mt-[34.5%] ml-[41.8%] rounded-xs z-11  p-2  bg-[#fefefee3]">
                    <h1 className="text-[2vmin] maven-pro-600 lg:text-[1.4vmin] text-center">
                      {img.title}
                    </h1>
                    <p className="text-[1vmin] h-10  lg:text-[1vmin] text-red text-center overflow-hidden">
                      {img.description}
                    </p>
                  </div>
                )}
                {index === current + 1 && (
                  <div
                    className="textbox absolute w-40 p-2 h-17 mt-[23.2%] ml-[0.5%] bg-[#fefefee3]  rounded-xs z-11  "
                    onClick={nextSlide}
                  >
                    <h1 className="text-[2vmin] lg:text-[1vmin] maven-pro-600">
                      {img.title}
                    </h1>
                    <p className="text-[1vmin] lg:text-[0.5vmin]]">
                      {img.description}
                    </p>
                  </div>
                )}
                {index === current - 1 && (
                  <div
                    className="textbox absolute w-40 bg-[#fefefee3] p-2 h-17 mt-[23.2%] ml-[28%] rounded-xs z-11  "
                    onClick={prevSlide}
                  >
                    <h1 className="text-[2vmin] lg:text-[1vmin] maven-pro-600">
                      {img.title}
                    </h1>
                    <p className="text-[1vmin] lg:text-[0.5vmin]]">
                      {img.description}
                    </p>
                  </div>
                )}

                <Image
                  src={img.image}
                  alt={`Slide ${index}`}
                  width={700}
                  height={700}
                  className="w-70 h-42 rounded-xs object-cover shadow-xl"
                />
              </Link>
            ))}
          </div>
          <a href="/Projects" className="pb-10">
            {" "}
            <div className=" z-30 border-1 p-2 w-30 bg-[#9CCC3C] hover:bg-[#9ccc3cd4] text-center rounded-full">
              All Projects
            </div>
          </a>
        </div>
      </div>

      {/* mobile section  */}
      <div className="block sm:hidden w-full p-5 px-4">
        <h1 className="maven-pro-600 text-2xl text-[#233D63] text-center mb-4">
          Our Projects
        </h1>

        <div className="flex flex-col gap-6">
          {images.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={img.image}
                alt={img.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="bg-[#233D63] text-white p-4 space-y-1">
                <h3 className="text-lg font-semibold">{img.title}</h3>
                <p className="text-sm">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
