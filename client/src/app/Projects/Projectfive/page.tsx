import React from "react";
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
    <div>
      {/* Tint Hero Section of each Project */}
      <div className="relative">
        {" "}
        <div className="absolute w-full h-[60vh] lg:h-[90vh] bg-black opacity-75 "></div>
        <h1 className="absolute w-full h-full lg:h-[90vh] maven-pro-600 text-2xl md:text-5xl text-white flex flex-col justify-center items-center">
          Lift-well Pressurization
          <p className="text-sm lg:text-xl mt-10  font-normal">
            Home / Projects / Lift-well Pressurization
          </p>
        </h1>
        <Image
          src="https://5.imimg.com/data5/SELLER/Default/2020/8/LY/DL/RB/83216578/lift-well-pressurization-system-500x500.jpeg"
          alt="Industrial Ventilation System"
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
          {" "}
          <div className="p-10 space-y-6">
            <h2 className="text-4xl text-[#405678] font-bold maven-pro-600 mb-4">
              Lift Well Pressurization: A Critical Fire Safety Mechanism
            </h2>

            <p>
              Lift well pressurization is a vital safety feature used in
              high-rise buildings to ensure safe evacuation during fire
              emergencies. The core objective is to prevent smoke from entering
              the elevator shaft (or lift well) by maintaining a higher air
              pressure inside it compared to adjacent spaces like lobbies,
              corridors, or floors. This system is governed by strict fire codes
              and building regulations around the world.
            </p>

            <div className="my-6">
              <Image
                src="https://5.imimg.com/data5/SELLER/Default/2023/5/307901298/BX/DJ/YW/83216578/lift-well-pressurization-system-500x500.webp"
                alt="Lift Well Pressurization System"
                width={1000}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>

            <h3 className="text-3xl text-[#405678] font-semibold maven-pro-600 mt-6">
              Why Is Lift Well Pressurization Necessary?
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Smoke Prevention:</strong> During a fire, smoke can
                spread rapidly through vertical shafts. Positive pressure
                prevents smoke from entering the lift shaft.
              </li>
              <li>
                <strong>Safe Firefighter Access:</strong> Firefighters often use
                lifts to access upper floors in emergencies. A smoke-free lift
                well is critical for their safety and effectiveness.
              </li>
              <li>
                <strong>Evacuation Support:</strong> In some buildings,
                especially with disabled or elderly residents, elevators may be
                used for emergency evacuation under supervision.
              </li>
            </ul>

            <h3 className="text-3xl text-[#405678] font-semibold maven-pro-600 mt-6">
              Components of a Lift Pressurization System
            </h3>
            <ul className="list-none space-y-4">
              <li>
                <strong className="text-xl maven-pro-600">
                  Pressurization Fan:
                </strong>{" "}
                A high-capacity axial or centrifugal fan is used to blow fresh
                air into the lift shaft to maintain pressure.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">
                  Motorized Dampers:
                </strong>{" "}
                These dampers control airflow based on sensors and pressure
                settings. They close or open during fire conditions.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">
                  Pressure Sensors:
                </strong>{" "}
                These are used to monitor the static pressure within the shaft
                and feed data to the control system.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">
                  VFD (Variable Frequency Drive):
                </strong>{" "}
                The fan is often connected to a VFD which modulates its speed to
                maintain ideal pressure.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">
                  Control Panel:
                </strong>{" "}
                This integrates fire alarm inputs, pressure sensors, and damper
                status into one system for automatic or manual control.
              </li>
            </ul>

            <h3 className="text-3xl text-[#405678] font-semibold maven-pro-600 mt-6">
              How It Works
            </h3>
            <p>
              Under normal conditions, the pressurization fan may run at a low
              speed or remain off. When a fire alarm is triggered, the system is
              activated. The fan begins to force air into the lift shaft,
              building pressure that blocks smoke infiltration. The system
              maintains a positive differential pressure of about 50 Pa (Pascal)
              between the shaft and adjacent spaces.
            </p>

            <p>
              If the pressure exceeds a certain level, the system automatically
              adjusts fan speed or opens relief dampers to prevent structural
              damage or door jamming.
            </p>

            <h3 className="text-3xl text-[#405678] font-semibold maven-pro-600 mt-6">
              Design Considerations
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Air Leakage Compensation:</strong> The system must
                account for leakage around elevator doors.
              </li>
              <li>
                <strong>Stairwell Integration:</strong> In many cases,
                pressurization systems are also connected to stairwells.
              </li>
              <li>
                <strong>Redundancy:</strong> Backup power and dual fan systems
                are often installed for safety compliance.
              </li>
            </ul>

            <h3 className="text-3xl text-[#405678] font-semibold maven-pro-600 mt-6">
              Benefits of a Well-Designed System
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Improved building safety compliance</li>
              <li>Enhanced life safety during fire events</li>
              <li>Minimal smoke spread across vertical shafts</li>
              <li>Better insurance eligibility and premium savings</li>
            </ul>

            <h3 className="text-3xl text-[#405678] font-semibold maven-pro-600 mt-6">
              Conclusion
            </h3>
            <p>
              Lift well pressurization isn’t just a code requirement—it’s a
              life-saving system that plays a critical role in fire safety
              strategy for modern buildings. Its design must be tailored to the
              building’s architecture, usage pattern, and fire response plan.
              With proper planning, integration, and maintenance, it ensures
              vertical safety like no other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
