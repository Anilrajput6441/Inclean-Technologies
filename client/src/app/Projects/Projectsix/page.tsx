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
          Aircraft Hanger Ventilation
          <p className="text-sm lg:text-xl mt-10  font-normal">
            Home / Projects / Aircraft Hanger Ventilation
          </p>
        </h1>
        <Image
          src="/image6.jpg"
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
          <div className="p-10 space-y-6">
            <h2 className="text-3xl font-bold maven-pro-600 mb-4">
              Aircraft Hangar Ventilation: Ensuring Safety in Aviation
              Environments
            </h2>

            <p>
              Aircraft hangars are critical spaces where maintenance,
              inspection, and storage of airplanes take place. These large
              enclosed structures often house fuel systems, engines, paints, and
              various mechanical operations that generate hazardous fumes and
              heat. Hence, a robust and efficient ventilation system is crucial
              for maintaining safe air quality, protecting both people and
              equipment.
            </p>

            <div className="my-6">
              <Image
                src="/image10.webp"
                alt="Aircraft Hangar Ventilation System"
                width={1000}
                height={600}
                className="rounded-xl shadow-md"
              />
            </div>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Why Aircraft Hangar Ventilation is Essential
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Fume Extraction:</strong> Fuel vapors, cleaning
                solvents, and welding gases are commonly present in hangars and
                must be vented out immediately to prevent health hazards.
              </li>
              <li>
                <strong>Fire & Explosion Prevention:</strong> Ventilation
                dilutes flammable vapors and minimizes the risk of ignition,
                making it a key part of any fire protection plan.
              </li>
              <li>
                <strong>Comfortable Working Conditions:</strong> Proper airflow
                helps maintain moderate temperatures, reducing stress on
                maintenance staff and improving productivity.
              </li>
              <li>
                <strong>Equipment Protection:</strong> Sensitive electronic and
                mechanical systems require a clean, non-corrosive environment
                free from contaminants.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Components Used in Hangar Ventilation Systems
            </h3>
            <ul className="list-none space-y-4">
              <li>
                <strong className="text-xl maven-pro-600">
                  High-Capacity Exhaust Fans:
                </strong>{" "}
                These industrial fans remove hot air, fumes, and pollutants from
                the hangar space effectively.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">
                  Make-Up Air Units (MAUs):
                </strong>{" "}
                These supply fresh filtered outdoor air to replace the extracted
                air and maintain pressure balance.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">Jet Fans:</strong>{" "}
                Typically mounted on ceilings to create airflow currents within
                large open spaces, directing fumes toward exhaust points.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">
                  Natural Ventilation Louvers:
                </strong>{" "}
                These provide passive ventilation, allowing cross-ventilation
                using wind and pressure differences.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">
                  Carbon Monoxide & Gas Sensors:
                </strong>{" "}
                Sensors detect hazardous gas levels and trigger the ventilation
                system automatically.
              </li>

              <li>
                <strong className="text-xl maven-pro-600">
                  Fire Dampers & Smoke Control:
                </strong>{" "}
                Installed in ductwork, these activate during fire conditions to
                contain smoke and allow controlled extraction.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Working Principle
            </h3>
            <p>
              The system continuously monitors air quality using gas sensors.
              When harmful levels are detected — such as VOCs, CO, or
              hydrocarbons — the exhaust fans kick in, removing contaminated
              air. Simultaneously, make-up air units introduce fresh outdoor
              air, ensuring a balanced and breathable indoor environment. Jet
              fans circulate the air within the hangar to prevent stagnant
              zones.
            </p>

            <p>
              In modern setups, this is controlled via a Building Management
              System (BMS) which adjusts fan speeds and damper positions
              automatically for optimal performance.
            </p>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Types of Hangar Ventilation Systems
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Mechanical Ventilation:</strong> Fully powered system
                using fans, ducts, and automation for controlled airflow.
              </li>
              <li>
                <strong>Natural Ventilation:</strong> Utilizes architectural
                elements like roof vents and louvers for passive airflow.
              </li>
              <li>
                <strong>Hybrid Systems:</strong> Combines mechanical and natural
                systems for energy efficiency and performance.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Standards & Compliance
            </h3>
            <p>
              Hangar ventilation systems must comply with standards like **NFPA
              409**, **ASHRAE**, and local building/fire codes. The systems are
              typically designed to handle explosive fumes and Class I Division
              1 or 2 hazardous locations, as defined by NEC.
            </p>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Conclusion
            </h3>
            <p>
              Aircraft hangar ventilation isn’t just about temperature
              control—it&apos;s a critical component of health, safety, and
              operational efficiency in aviation environments. Whether it’s
              removing toxic gases or preventing fire hazards, a well-engineered
              system ensures safe skies start on the ground.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
