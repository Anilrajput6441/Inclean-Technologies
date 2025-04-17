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
          Industrial Ventilation System
          <p className="text-sm lg:text-xl mt-10  font-normal">
            Home / Projects / Industrial Ventilation System
          </p>
        </h1>
        <Image
          src="/image3.jpg"
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
          <div className="w-[90%] flex flex-col ">
            {" "}
            <Image
              src="/image3.jpg"
              alt="industrial project"
              width={900}
              height={600}
              className="w-full mt-10 h-full"
            />
            <p className="mt-10">
              We are the leading industrial ventilation manufacturer for all
              your requirements. Our air ventilation system is here to provide
              amazing control over the air that enters the industrial space for
              ventilation. This system enables you to pressurize your industrial
              area by forcing the outside air into the proper structure. Whether
              you need something for industrial pollution control or a good
              system for improving indoor air quality, Inclean is here to
              provide you with full assistance. We have handled a lot of such
              projects and are very reliable when it comes to air care.{" "}
            </p>
            <h1 className="maven-pro-600 text-[#233C63] text-3xl mt-10">
              Inclean&apos;s Industrial Ventilation System - Excellence with
              Integrity
            </h1>
            <p className="mt-10">
              Get the best ventilation system for your industry by connecting at
              Inclean. We are the leading industrial ventilation manufacturer
              taking care of your needs at the best. We accept responsibility
              for HVAC projects right from the concept to initiating it. Our
              team of experts focuses on what our clients exactly want and
              collects proper knowledge to meet their expectations.{" "}
            </p>
            <p className="mt-10">
              Nonetheless, of which industrial ventilation technology is being
              taken up for the project, Inclean analyses the need to determine
              the proposed solution and what would be its results before
              starting a project. Serving 40+ countries, we have established
              ourselves as a leading industrial ventilation system manufacturer
              over the years.{" "}
            </p>
            <h1 className="maven-pro-600 text-[#233C63] text-3xl mt-10">
              Industrial Ventilation System - Its Approaches
            </h1>
            <p className="mt-10">
              The ventilation system is important in industrial workspaces
              because it controls the levels of dust, pollutant air, humidity,
              toxic materials, explosive gases, etc. But, what you must know
              before finalizing the design for your industry’s ventilation is
              that there are two different types of approaches. These two types
              are:
            </p>
            <h1 className="mt-10 maven-pro-600 text-xl ">
              Dilution Ventilation –
            </h1>
            <p className="mt-3 bg-gray-200 p-5">
              This helps to reduce the concentration of the airborne contaminant
              by blending it with the outdoor air. The dilute ventilation system
              best comes into action at places where huge amounts of heat, bad
              odor, and gases are formed and they need to be exhausted. Dilute
              ventilation is used in industries where air pollution is
              comparatively low, and there is less toxicity level. Also, it
              requires very minimal maintenance.
            </p>
            <h1 className="mt-10 maven-pro-600 text-xl ">Local Exhaust –</h1>
            <p className="mt-3 bg-gray-200 p-5">
              This is the type of industrial ventilation that grasps the
              airborne impurities near their source and then exhausts them in a
              secure place. Local exhaust is used mainly in industrial areas
              where contaminants are higher including a hood or an enclosure
              along with a duct system, fan, and pollution control device. This
              type of ventilation is made to remove different kinds of
              pollutants such as dust, metal fumes, etc. The local exhaust also
              consumes less energy compared to the dilution ventilation system.
            </p>
            <Image
              src="/image4.jpg"
              alt=""
              width={900}
              height={600}
              className="mt-10"
            />
            <h1 className="maven-pro-600 text-[#233C63] text-3xl mt-10">
              Required Technologies for Industrial Ventilation
            </h1>
            <p className="mt-10 pl-10">
              When it comes to finalizing a design for the industrial
              ventilation system, various options can be considered under single
              and multiple technologies. Inclean provides you with the options
              mentioned below.
            </p>
            <ul className="list-none space-y-4 p-10">
              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Industrial Air Filtration Systems:
                </strong>{" "}
                In this system, oil mists, particulates, and all the other
                pollutants are required to be filtered from the outer
                environment.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Industrial Dust Collection:
                </strong>{" "}
                This is used to convey, clean, and effectively capture airborne
                elements.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Explosion Protection:
                </strong>{" "}
                This is effective to deal with combustible dust in industries
                where there are chances of explosion.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Industrial Fans & Blowers:
                </strong>{" "}
                This is the best technology when it comes to the need for
                mechanical ventilation for moving the air.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Industrial Noise Control:
                </strong>{" "}
                This industrial ventilation technique comes into action when you
                need to maintain the exterior and interior noise levels in the
                industry.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Fire Protection for Dust Collection:
                </strong>{" "}
                It is needed to maintain solids and liquids that are flammable.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Industrial Vacuum Systems:
                </strong>{" "}
                Industries need this system to avoid deposition and for cleaning
                up combustible particles.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Industrial Air Conveying Systems:
                </strong>{" "}
                It helps to remove dirty elements from the hoods, ducts, or fans
                in the industrial space.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Industrial Air Handlers:
                </strong>{" "}
                These air handlers provide heating and cooling as per the
                requirements.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Air Filter Housings:
                </strong>{" "}
                Air filter housings are needed to fit in side-access filter
                assemblies for MERV-rated air filters.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Ventilation of Large Industrial Facilities:
                </strong>{" "}
                This technology is preferred when large air movement is required
                in the industrial space.
              </li>
            </ul>
            <h1 className="maven-pro-600 text-[#233C63] text-3xl mt-10">
              Why do you need a proper industrial ventilation system
            </h1>
            <p className="pl-10">
              There are various reasons why you need to have a good ventilation
              system in your industrial space.{" "}
            </p>
            <ul className="list-none space-y-4  p-10">
              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Continuous Fresh Air Supply:
                </strong>{" "}
                It will help to provide your employees with a continuous supply
                of fresh air from the outdoors.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Protection from Heat & Gases:
                </strong>{" "}
                It will protect industrial workers from heat and harmful gases.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Reduced Risk of Explosion & Fire:
                </strong>{" "}
                Having a good ventilation system will help to reduce the risks
                of explosion and fire.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Minimized Exposure to Contaminants:
                </strong>{" "}
                A well-built ventilation system will minimize exposure to
                airborne contaminants.
              </li>

              <li>
                <strong className="maven-pro-600 text-xl mt-5">
                  Substitute for Harmful Chemicals:
                </strong>{" "}
                If your industry uses harmful chemicals, then having a
                well-built ventilation system acts as a very good substitute.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
