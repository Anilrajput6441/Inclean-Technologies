import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
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
      description:
        "Custom ductwork designed and installed for optimal airflow.",
    },
    {
      path: "/Projects/Projectfive/",
      image: "/image7.jpg",
      title: "Smart Thermostat Integration",
      description:
        "Integrated smart thermostats for automated climate control.",
    },
  ];
  return (
    <div>
      {/* Tint Hero Section of each Project */}
      <div className="relative">
        {" "}
        <div className="absolute w-full h-[60vh] lg:h-[90vh] bg-black opacity-75 "></div>
        <h1 className="absolute w-full h-full lg:h-[90vh] maven-pro-600 text-2xl md:text-5xl text-white flex flex-col justify-center items-center">
          Parking Ventilation System
          <p className="text-sm lg:text-xl mt-10  font-normal">
            Home / Projects / Parking Ventilation System
          </p>
        </h1>
        <Image
          src="/image1.jpg"
          alt="Parking Ventilation System"
          width={900}
          height={600}
          className="w-full h-[60vh] lg:h-[90vh]"
        />
      </div>
      {/* Below Tint Section  */}

      <div className="w-full flex flex-wrap-reverse lg:flex-nowrap pl-5 ">
        <div className="w-full lg:w-[30%]  p-3 lg:p-9">
          {/* ----------Lets Talk div  */}
          <div className=" border-[0.09rem] border-[#9CCC3C]  w-[90%] p-10 rounded-2xl bg-transparent backdrop-blur-3xl">
            <Image
              src="/lets-talk.png"
              alt="lets talk"
              width={400}
              height={400}
              className="h-full w-full"
            />
            <p className="text-md mt-10 font-bold">
              Connect with our professional:
            </p>
            <a
              href="tel:+919876543210"
              aria-label="Call Branding Works"
              title="Call Branding Works"
            >
              <p className="border-1 mt-5  text-center p-2 rounded-full mb-5 hover:bg-[#9ccc3c]">
                {" "}
                +91 9876543210
              </p>
            </a>
            <div className="text-center">
              <a href="mailto:info@inclean.in" className="hover:text-[#9ccc3c]">
                Mail Us : info@inclean.in
              </a>
            </div>
          </div>
          {/* brochure or protfolio ppt downlaod div  */}
          <section
            className="w-full p-6   bg-white"
            aria-label="Download Company Brochure"
          >
            <div className="w-full flex justify-center items-center">
              <Image
                src="/portfolio-folder.png"
                alt="portfolio-folder"
                width={200}
                height={200}
                className=""
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Company Brochure
            </h2>
            <p className="text-gray-600 mb-4">
              Download our latest portfolio presentation (PPT) to learn more
              about what we do.
            </p>
            <a
              href="https://inclean.in/wp-content/uploads/2023/03/Inclean-Technologies-Company-Profile-1.pdf"
              // download
              target="_blank"
              className="inline-block px-4 py-2 border-1 border-black rounded-full  hover:bg-[#9ccc3c] transition"
              rel="noopener noreferrer"
              aria-label="Download our portfolio presentation"
            >
              <p className="pr-5 pl-5">Download</p>
            </a>
          </section>
          {/* show all projects div  */}
          <section className="flex flex-col justify-center ">
            <h1 className="maven-pro-600 text-xl mb-5">More Projects:</h1>
            {images.map((item, index) => (
              <Link key={index} href={item.path} className="text-start  ml-6">
                <li className="list-none hover:text-[#9ccc3c] mt-2">
                  {item.title}
                </li>
              </Link>
            ))}
          </section>
        </div>
        <div className="w-[100%] lg:w-[70%]  ">
          <div className="p-10 space-y-6">
            <h2 className="text-4xl font-bold text-[#405678] maven-pro-600 mb-4">
              Complete Guide to HVAC Parking Ventilation Systems
            </h2>

            <p>
              As cities grow and more vehicles take to the roads, underground
              and enclosed parking facilities have become a necessity. However,
              these areas pose significant ventilation challenges. Without
              proper airflow, toxic vehicle emissions and heat can accumulate,
              making the environment dangerous for both people and property.
              That’s where an HVAC Parking Ventilation System steps in —
              designed to manage air quality, maintain safety, and comply with
              legal codes.
            </p>

            <h3 className="text-3xl text-[#405678]  font-semibold maven-pro-600 mt-6">
              Why is Parking Ventilation Necessary?
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                To remove harmful gases like CO and NO₂ emitted from vehicles
              </li>
              <li>To ensure thermal comfort and maintain air circulation</li>
              <li>To aid in smoke extraction during fire emergencies</li>
              <li>To comply with local fire, health, and safety regulations</li>
            </ul>

            <h3 className="text-3xl text-[#405678] font-semibold maven-pro-600 mt-6">
              Key Components of a Parking Ventilation System
            </h3>
            <ul className="list-none space-y-4">
              <li>
                <strong className="maven-pro-600 text-xl text-[#405678] mt-5">
                  Jet Fans:
                </strong>{" "}
                Compact, ceiling-mounted fans that help distribute air
                efficiently across large parking areas without the need for
                extensive ductwork.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl text-[#405678] mt-5">
                  Exhaust & Supply Fans:
                </strong>{" "}
                These large-scale fans are used to extract polluted air and
                bring in fresh air from outside the structure.
              </li>

              <li>
                <strong className="maven-pro-600 text-[#405678] text-xl mt-5">
                  CO/NO₂ Gas Detectors:
                </strong>{" "}
                Sensors that monitor air quality and trigger ventilation systems
                when pollutant levels rise beyond a safe threshold.
              </li>

              <li>
                <strong className="maven-pro-600 text-[#405678] text-xl mt-5">
                  Control Panel & Automation:
                </strong>{" "}
                A centralized system that manages fan speed, sensor input, and
                power consumption to ensure efficient operation.
              </li>

              <li>
                <strong className="maven-pro-600 text-[#405678] text-xl mt-5">
                  Smoke Extraction Louvers:
                </strong>{" "}
                These open during fire events to release smoke and heat,
                improving visibility and aiding evacuation.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#405678] maven-pro-600 mt-6">
              Types of Ventilation Systems Used in Parking
            </h3>
            <ul className="list-none space-y-4">
              <li>
                <strong className="maven-pro-600 text-[#405678] text-xl mt-5">
                  Natural Ventilation:
                </strong>{" "}
                Used in open parking lots with large air openings; not feasible
                for enclosed or underground areas.
              </li>

              <li>
                <strong className="maven-pro-600 text-[#405678] text-xl mt-5">
                  Mechanical Ventilation:
                </strong>{" "}
                Uses exhaust/supply fans and ducts to push and pull air through
                the parking space. Often includes CO sensors and automation.
              </li>

              <li>
                <strong className="maven-pro-600 text-[#405678] text-xl mt-5">
                  Jet Fan Ventilation:
                </strong>{" "}
                A ductless system with strategically placed jet fans that direct
                air toward exhaust fans — highly efficient and space-saving.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#405678] maven-pro-600 mt-6">
              Fire Safety Integration
            </h3>
            <p>
              HVAC parking systems often integrate with fire alarm systems. In
              case of fire, the system switches to emergency mode, where fans
              increase speed, smoke extraction systems activate, and fire
              dampers operate to isolate the affected zones. This functionality
              is critical in large parking structures.
            </p>

            <h3 className="text-2xl font-semibold text-[#405678] maven-pro-600 mt-6">
              Energy Efficiency and Smart Controls
            </h3>
            <p>
              Modern systems are equipped with variable frequency drives (VFDs),
              timers, and real-time pollutant monitoring to reduce energy
              consumption. Fans only operate when necessary, and smart
              controllers optimize performance automatically.
            </p>

            <h3 className="text-2xl font-semibold text-[#405678] maven-pro-600 mt-6">
              Compliance and Industry Standards
            </h3>
            <ul className="list-disc list-inside  space-y-2">
              <li>
                <strong>NFPA (National Fire Protection Association):</strong>{" "}
                Guidelines for smoke control
              </li>
              <li>
                <strong>ASHRAE:</strong> Ventilation for acceptable indoor air
                quality
              </li>
              <li>
                <strong>Local NBC & fire department codes:</strong> Mandatory
                for building approval
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#405678] maven-pro-600 mt-6">
              Conclusion
            </h3>
            <p>
              A well-designed HVAC Parking Ventilation System is more than just
              a requirement — it&apos;s a lifesaver. It improves air quality,
              reduces health risks, supports fire safety, and enhances overall
              parking experience. Whether it&apos;s a commercial plaza, mall, or
              residential complex, investing in a proper system ensures
              long-term benefits for both people and infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
