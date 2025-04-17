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
          Centralized Air Conditioning
          <p className="text-sm lg:text-xl mt-10  font-normal">
            Home / Projects / Centralized Air Conditioning
          </p>
        </h1>
        <Image
          src="/image5.jpg"
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
              Centralized Air Conditioning: Engineered Climate Control
            </h2>

            <p>
              Centralized air conditioning systems are a sophisticated climate
              control solution that serve multiple spaces from a single cooling
              source. Unlike individual AC units, these systems use a central
              plant—either chilled water or direct expansion-based—to deliver
              controlled air to various zones through a system of ducts and air
              handlers. They&apos;re not just about cooling large spaces;
              they&apos;re about integrating energy efficiency, air
              purification, and automation into one seamless HVAC architecture.
            </p>

            <div className="my-6">
              <Image
                src="https://t3.ftcdn.net/jpg/01/30/73/54/360_F_130735439_ouyg9tZ4bpYSFgYDzyRGBcnk7AZcXOHB.jpg"
                alt="Cooling tower of centralized AC system"
                width={1000}
                height={1000}
                className="rounded-xl shadow-md"
              />
            </div>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Key Components of Centralized AC Systems
            </h3>
            <ul className="list-none space-y-4">
              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Chiller or DX System:
                </strong>{" "}
                This is the core unit that removes heat from water (in chilled
                water systems) or directly from air (in DX systems). Chillers
                come in air-cooled or water-cooled variants and are chosen based
                on building load and infrastructure.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  AHU (Air Handling Unit):
                </strong>{" "}
                These units condition and circulate air as part of the HVAC
                system. They contain blowers, filters, cooling coils, and
                dampers, working in harmony to regulate airflow and quality.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  FCUs (Fan Coil Units):
                </strong>{" "}
                Smaller localized units connected to the chilled water lines.
                These provide flexibility by enabling zone-wise temperature
                control without installing multiple large AHUs.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Cooling Towers:
                </strong>{" "}
                In water-cooled systems, heat from the condenser is rejected to
                the atmosphere via a cooling tower. They are typically placed on
                rooftops.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Ductwork & Diffusers:
                </strong>{" "}
                A well-designed duct system ensures even airflow to all occupied
                spaces. Diffusers regulate air distribution to avoid dead spots
                or excessive cooling.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Building Management System (BMS):
                </strong>{" "}
                Modern centralized AC setups are integrated with a BMS for
                real-time monitoring, fault detection, and adaptive temperature
                scheduling.
              </li>
            </ul>

            <div className="my-6">
              <Image
                src="/image5.jpg"
                alt="AHU room in centralized cooling"
                width={1000}
                height={550}
                className="rounded-xl shadow-md"
              />
            </div>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Detailed Advantages
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="maven-pro-600">Energy Efficiency:</strong>{" "}
                Centralized systems can scale based on load demand. Chillers and
                variable frequency drives optimize power use across the system.
              </li>
              <li>
                <strong className="maven-pro-600">Space Optimization:</strong>{" "}
                No indoor bulky units are needed. The cooling source is hidden
                in mechanical rooms or rooftops, giving architectural freedom.
              </li>
              <li>
                <strong className="maven-pro-600">Superior Air Quality:</strong>{" "}
                Central filters and UV disinfection in AHUs ensure
                bacteria-free, pollutant-free air.
              </li>
              <li>
                <strong className="maven-pro-600">Maintenance Benefits:</strong>{" "}
                Centralized maintenance is easier to manage than servicing
                multiple individual ACs.
              </li>
              <li>
                <strong className="maven-pro-600">Quiet Operation:</strong>{" "}
                Since compressors and fans are isolated away from workspaces,
                noise levels are significantly reduced.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Technical Considerations
            </h3>
            <p>
              Designing a centralized air conditioning system involves thermal
              load analysis, zoning strategies, energy simulation, and detailed
              airflow modeling. HVAC engineers consider solar gain, internal
              loads, equipment heat, and occupancy to calculate cooling
              requirements.
            </p>
            <p>
              Systems can be classified based on refrigerant medium (chilled
              water vs direct expansion), control strategy (VAV, VRF), and
              energy recovery options. Selection is done keeping in mind the
              operating cost, capital investment, and lifecycle efficiency.
            </p>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Automation & Control
            </h3>
            <p>
              Today’s centralized AC systems are backed by smart controls.
              Sensors across the building feed data to the BMS, which adjusts
              chillers, fans, and valves based on real-time occupancy and
              ambient conditions. CO₂-based ventilation, humidity control, and
              predictive maintenance are now standard features.
            </p>

            <h3 className="text-2xl font-semibold maven-pro-600 mt-6">
              Conclusion
            </h3>
            <p>
              Centralized air conditioning is more than just a cooling solution.
              It&apos;s an engineering backbone that supports indoor air
              quality, productivity, and sustainability. When designed properly,
              it offers unmatched reliability, comfort, and long-term
              operational savings. For facilities seeking intelligent,
              large-scale HVAC systems—centralized cooling is the gold standard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
