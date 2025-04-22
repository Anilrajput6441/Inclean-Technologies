import React from "react";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-7xl text-[#233D63] maven-pro-600 mt-30 text-center">
        Our Copmany
      </h1>
      <p className="text-xl md:text-3xl pl-5  pr-2 md:pl-20 md:pr-20 mt-5  md:mt-10 text-start md:text-center">
        Specializing in hassle-free HVAC solutions that keep your home cozy,
        efficient, and worry-free all year round.
      </p>
      <div className="mt-5 md:p-10">
        <Image
          src="/aboutusmain.png"
          alt="about-us"
          width={2000}
          height={1000}
          className="w-full md:h-[80vh] md:rounded-2xl"
        />
      </div>
      <p className="text-md md:text-xl pl-5 pr-5 text-start md:pl-20 md:pr-20 mt-10 ">
        We are here to warm your heart with our great service and expertise.
        Inclean is one of the trusted HVAC companies offering HVAC solutions to
        various industrial, residential, and commercial bodies. Operating around
        40+ countries around the world, Inclean is known for its excellent
        customer service and extensive knowledge of air cooling and heating.{" "}
      </p>
      <p className="text-md md:text-xl pl-5 pr-5 md:pl-20 md:pr-20  mt-10 text-start">
        Inclean was founded due to the rise in the need for a high-quality
        indoor environment in various segments. We aim to provide our clients
        with the best air cooling, heating, and ventilation services.
      </p>
      <div className="flex flex-col md:flex-row md:p-15  bg-gray-200 mt-10 ">
        <div className=" text-4xl md:text-6xl  font-bold w-[100%] md:w-[50%] p-10">
          <p>
            {" "}
            How We work with our{" "}
            <span className="text-[#304f7e]">Clients.</span>
          </p>

          <button className="bg-[#9CCC3C] text-xs font-light rounded-full  pl-5 pr-5 md:text-lg p-1 border-1 hover:text-white">
            contact us
          </button>
        </div>
        <div className="text-md md:text-xl w-[100%] md:w-[50%] p-10">
          <p>
            We provide you comfort at a price that you can afford! Inclean has
            been serving customers around the world for years now and we are
            known for air-quality innovation. Our values hold us together and
            the qualities that define who we are –{" "}
          </p>
          <ul className="list-disc md:pl-10 mt-5">
            <li>Attentive to our clients </li>
            <li>Experts in air engineering </li>
            <li>Trusted professionals </li>
            <li>Pioneering air innovation </li>
          </ul>
        </div>
      </div>
      <h1 className="text-6xl font-bold mt-5 md:mt-10 text-center">
        Our Core Values
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-15 gap-8 p-8">
        <div className="relative border-t-2 border-gray-300 p-6 pt-12 rounded-md shadow-md bg-white">
          {/* Icon */}
          <div className="absolute left-1/2 -top-5 transform -translate-x-1/2 bg-white px-2">
            <Image
              src="/collaboration.png"
              alt="Icon"
              width={300}
              height={300}
              className="w-15 h-15"
            />
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold text-center mb-2">
            Collaboration
          </h3>
          <p className="text-md md:pl-10 md:pr-10 text-gray-600 text-center">
            Collaboration is at the heart of how we grow and succeed. By sharing
            ideas, supporting each other, and working with purpose, we build
            stronger relationships and deliver better results—together.
          </p>
        </div>
        <div className="relative border-t-2 border-gray-300 p-6 pt-12 rounded-md shadow-md bg-white">
          {/* Icon */}
          <div className="absolute left-1/2 -top-5 transform -translate-x-1/2 bg-white px-2">
            <Image
              src="/opacity.png"
              alt="Icon"
              width={300}
              height={300}
              className="w-15 h-15"
            />
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold text-center mb-2">
            Transparency
          </h3>
          <p className="text-md md:pl-10 md:pr-10 text-gray-600 text-center">
            Transparency is the foundation of trust and accountability. By being
            open, honest, and clear in our communication, we foster stronger
            relationships and ensure that everyone is aligned and informed,
            driving success together.
          </p>
        </div>
        <div className="relative border-t-2 border-gray-300 p-6 pt-12 rounded-md shadow-md bg-white">
          {/* Icon */}
          <div className="absolute left-1/2 -top-5 transform -translate-x-1/2 bg-white px-2">
            <Image
              src="/trust.png"
              alt="Icon"
              width={300}
              height={300}
              className="w-15 h-15"
            />
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold text-center mb-2">Trust</h3>
          <p className="text-md md:pl-10 md:pr-10 text-gray-600 text-center">
            Trust is the cornerstone of every relationship we build. By being
            reliable, keeping our promises, and maintaining open communication,
            we create a foundation of confidence that fosters collaboration and
            drives long-term success.
          </p>
        </div>
        <div className="relative border-t-2 border-gray-300 p-6 pt-12 rounded-md shadow-md bg-white">
          {/* Icon */}
          <div className="absolute left-1/2 -top-5 transform -translate-x-1/2 bg-white px-2">
            <Image
              src="/integration.png"
              alt="Icon"
              width={300}
              height={300}
              className="w-15 h-15"
            />
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold text-center mb-2">Integrity</h3>
          <p className="text-md md:pl-10 md:pr-10 text-gray-600 text-center">
            Integrity guides our actions and decisions every day. By doing the
            right thing, even when no one is watching, we earn respect, uphold
            ethical standards, and create an environment of honesty and
            accountability.
          </p>
        </div>
      </div>

      {/* Our services cards ----------------->>>>>>>>>>><<<<<<<<<<<<*/}
      <h1 className="text-6xl font-bold mt-5 md:mt-10 text-center">
        We are the Hvac Experts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-y-15  md:mt-15 gap-8 p-8">
        {/* Service Card */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          {/* Icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
            <Image
              src="/customer-service.png"
              alt="Service Icon"
              width={300}
              height={300}
              className="w-15 h-15"
            />
          </div>
          <h3 className="text-2xl maven-pro-600 font-semibold mt-5 text-center mb-3">
            Our Services
          </h3>
          <ul className="text-sm text-gray-600 text-start md:pl-20 list-inside list-disc">
            <li>Equipment Replacement</li>
            <li>Duct Cleaning</li>
            <li>Repairs, Upgrades, and Retrofits</li>
            <li>Controls & Energy</li>
            <li>Annual Maintenance Contract</li>
            <li>Remote Monitoring – Connect</li>
          </ul>
        </div>

        {/* Commitment Card */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          {/* Icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
            <Image
              src="/deal.png"
              alt="Service Icon"
              width={300}
              height={300}
              className="w-15 h-15"
            />
          </div>
          <h3 className="text-2xl maven-pro-600 font-semibold mt-5 text-center mb-3">
            Our Commitments
          </h3>
          <p className="text-sm text-gray-600 md:pl-10 md:pr-10 text-center">
            At Inclean, we are committed to fulfilling your expectations with
            timely deliveries, staying up-to-date with technology, and offering
            24/7 assistance to all our clients.
          </p>
        </div>

        {/* Maintenance Card */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          {/* Icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
            <Image
              src="/optimizing.png"
              alt="Service Icon"
              width={300}
              height={300}
              className="w-15 h-15"
            />
          </div>
          <h3 className="text-2xl maven-pro-600 font-semibold mt-5 text-center mb-3">
            Monthly Maintenance
          </h3>
          <p className="text-sm text-gray-600 text-center md:pl-10 md:pr-10 ">
            We offer attentive monthly maintenance for all your HVAC products.
            Your satisfaction is our priority, and booking an appointment is
            just a call away.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default page;
