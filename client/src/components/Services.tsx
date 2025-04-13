"use client"; // Only if you're using this in an app directory (Next.js 13+ with app router)

import { useState } from "react";
import Image from "next/image"; // if you want to add icons or illustrations later

const services = [
  {
    title: "Residential",
    description:
      "There is surely something in the air! Beautify your home environment by improving its air quality with Inclean.",
    image: "/house.png",
    image1: "/home1.png",
  },
  {
    title: "Commercial",
    description:
      "Strengthen your healthy building environments. Make it cleaner, greener, and fresher.",
    image: "/building.png",
    image1: "/company.webp",
  },
  {
    title: "Industrial",
    description:
      "We are here to keep you cool when other industries cannot handle the heat! Get the best innovative air solutions for your industrial project.",
    image: "/industrial.png",
    image1: "/industry.webp",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <>
      <h1 className="maven-pro-600 text-[24px] lg:text-[48px] text-[#233D63] lg:pl-30 mt-20 lg:pr-30 text-center  mx-auto">
        Breathe easy! Inclean’s ventilation pros serve every sector with care.
      </h1>
      <section className="lg:flex hidden bg-[#F9FDFF] md:mt-10 md:flex-row w-full p-4  ">
        {/* Left Side */}
        <div className="md:w-[60%] w-full bg-white shadow-xs p-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#233D63]">
            {selectedService.title}
          </h2>{" "}
          <Image
            src={selectedService.image1}
            alt={selectedService.title}
            width={500}
            height={500}
            className="w-full lg:h-100 mb-4"
          />
          <p className="text-gray-700 text-base md:text-lg">
            {selectedService.description}
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-[40%] w-full  overflow-y-auto bg-gray-100  shadow-xs p-4 ">
          <h3 className="text-xl font-semibold mb-3">Our Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center border-b-1 transition-all duration-200 ${
                  selectedService.title === service.title
                    ? "bg-[#9CCC3C] border-green-600"
                    : "hover:bg-[#d6f1a1]"
                }`}
                onClick={() => setSelectedService(service)}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="p-3 "
                />
                <li className={`cursor-pointer p-3 rounded-lg  `}>
                  <h4 className="text-md font-medium">{service.title}</h4>
                  <p className="text-md font-medium">{service.description}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </section>
      {/* mobile view */}
      <section>
        <div className="w-full md:hidden block bg-white   mt-10   ">
          {services.map((service, index) => (
            <div
              key={index}
              className="md:w-[60%] w-full border-1 border-gray-200  p-6 "
            >
              <h2 className="text-2xl  md:text-3xl font-bold mb-4 text-green-700">
                {service.title}
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                {service.description}
              </p>
              <Image
                src={service.image1}
                alt={service.title}
                width={500}
                height={500}
                className="w-full mt-4  lg:h-100 mb-4"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
