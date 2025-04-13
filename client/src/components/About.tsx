import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative w-[100%]  overflow-x-hidden lg:pt-30 lg:pl-30 lg:pr-30 lg:pb-">
      <div className="absolute hidden lg:block  w-[100%] maven-pro-600 text-9xl text-center lg:pr-33">
        <span className="text-white">Ab</span>out Us
      </div>
      <h1 className="block lg:hidden text-[#233D63]  maven-pro-600 text-5xl text-center">
        Who We Are
      </h1>
      <div className="flex ">
        <Image
          src={"/aboutus.png"}
          alt="About Us"
          width={1000}
          height={500}
          className="w-[45%] hidden lg:block  h-[80vh] object-cover"
        />
        <div className="p-5 lg:p-30 lg:pt-40 ">
          <h2 className="maven-pro-600 text-2xl">
            Too hot? Too cold? We’ve got you covered.
          </h2>
          <p className="mt-10 font-serif">
            At <span className="font-bold">Inclean</span>, we believe comfort
            should never be a compromise. Whether it&apos;s the peak of summer
            or the dead of winter, our mission is simple — to create perfectly
            balanced indoor climates that feel just right, every time. With
            years of expertise in HVAC design, installation, and maintenance, we
            specialize in tailored solutions that prioritize energy efficiency,
            reliability, and long-term comfort. Our team of certified
            professionals brings both technical know-how and a commitment to
            service that goes beyond expectations. From cozy homes to large
            commercial spaces, we&apos;re here to ensure your environment stays
            comfortable — no matter what the weather’s doing outside.
          </p>
          <button className="mt-5 bg-[#9CCC3C]  border-1  hover:bg-[#9ccc3ce0] pt-2 pb-2 pl-3 pr-3 rounded-full">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
