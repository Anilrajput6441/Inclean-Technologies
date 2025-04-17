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
          Fume Extraction System
          <p className="text-sm lg:text-xl mt-10  font-normal">
            Home / Projects / Fume Extraction System
          </p>
        </h1>
        <Image
          src="/image8.webp"
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
          <section className="px-6 py-10 max-w-5xl mx-auto">
            <h1 className="text-4xl text-[#405678] font-bold mb-6">
              Inclean – Your Trusted Partner for Industrial-Grade Fume
              Extraction Systems & Pollution Control Solutions
            </h1>

            <p className="mb-4">
              Inclean is your one-stop destination if you&apos;re searching for
              a reliable and innovative fume extraction system manufacturer. Our
              customized air purification systems are engineered to comply with
              both Indian and global industrial standards. Designed for
              user-friendliness and efficiency, our clean air solutions can be
              tailored to fit a wide range of industrial applications and ensure
              environmental and worker safety.
            </p>

            <p className="mb-4">
              We at Inclean pride ourselves on delivering an extensive variety
              of fume extraction and filtration systems that effectively shield
              industrial workers from exposure to hazardous gases, toxic odors,
              and harmful fumes. Each system we build combines technical
              precision, quality materials, and cutting-edge design to cater to
              the unique requirements of different industries.
            </p>

            <h2 className="text-3xl font-semibold text-[#405678] mt-8 mb-4">
              Why Should You Invest in a Fume Extraction System?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Your employees will get to work in a healthier industrial
                environment. This will lead to a decrease in absenteeism and an
                increase in productivity.
              </li>
              <li>
                It will keep your workforce motivated which will directly lead
                to an increase in the productivity rate. This will help you to
                gain more profits in your business.
              </li>
            </ul>

            <h2 className="text-3xl text-[#405678] font-semibold mt-8 mb-4">
              We Care About Your Air Quality – Inclean&apos;s Advanced FUME
              Extraction Systems
            </h2>
            <p className="mb-4">
              Inclean has established itself as a leading fume extraction system
              manufacturer with a strong global footprint across 40+ countries.
              Our team of skilled engineers and environmental experts work
              diligently to create high-performing industrial solutions that
              blend innovation with precision. From concept to deployment, we
              emphasize design integrity, proper layout, dependable components,
              and the use of durable materials.
            </p>

            <h2 className="text-2xl text-[#405678] font-semibold mt-8 mb-4">
              Different Types of Fume Extraction Systems
            </h2>
            <p className="mb-4">
              Fume extraction systems play a crucial role in mitigating
              industrial air pollution by removing toxic gases, smoke, dust
              particles, and airborne chemicals produced during welding,
              soldering, and other heat-intensive processes. These systems are
              designed to minimize health risks for industrial workers and to
              protect the surrounding environment.
            </p>

            <p className="mb-4">
              These extraction systems are widely adopted by industries where
              fume emissions are frequent and harmful. They operate through a
              multi-stage process of capturing, filtering, and extracting
              hazardous substances from the air. Based on industrial needs,
              these systems are available in multiple configurations:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Portable Fume Extractors –</strong> Compact and mobile
                units that can be easily moved across workstations. Ideal for
                dynamic workspaces requiring localized air purification. The
                hose is typically placed over the active area to extract and
                filter fumes in real time.
              </li>
              <li>
                <strong>Mounted Fume Extractors –</strong> Stationary systems
                installed on walls, floors, or machinery. Though fixed, these
                extractors offer high power and efficiency in targeted areas
                where toxic fume generation is continuous or concentrated.
              </li>
              <li>
                <strong>Benchtop Fume Extractors –</strong> Designed for
                close-range use on work tables. Ideal for precision tasks such
                as electronics soldering or small-scale welding. Often equipped
                with wings or hoods to focus airflow and ensure effective
                capture.
              </li>
            </ul>

            <h2 className="text-3xl text-[#405678] font-semibold mt-8 mb-4">
              How Does the Fume Extraction System Operate?
            </h2>
            <p className="mb-4">
              The operating principle of a fume extraction system is similar to
              that of a vacuum cleaner—but for air instead of solids. It
              generates suction using a powerful motor and an internal turbine.
              Fumes are drawn into the system through a hose and passed through
              one or more filtration layers designed to trap hazardous particles
              and chemicals.
            </p>

            <p className="mb-4">
              Once filtered, the cleaned air is recirculated into the work
              environment, ensuring a healthier and safer atmosphere. Some
              systems come with washable filters, while others use disposable
              cartridges depending on the intensity and nature of the
              contaminants involved.
            </p>

            <p className="mb-4">
              For large-scale industrial environments, having a well-installed
              and adequately designed ventilation and filtration setup is not a
              luxury—it is a necessity. Inclean provides expert consultation,
              design customization, and complete installation to ensure the most
              effective air filtration system for your industry.
            </p>

            <h2 className="text-3xl text-[#405678] font-semibold mt-8 mb-4">
              Why Choose Inclean?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Inclean is a top fume extraction system manufacturer serving
                over 40+ countries with proven excellence in the domain of
                industrial air purification.
              </li>
              <li>
                All our products are crafted to improve operational efficiency,
                enhance worker safety, and reduce long-term energy consumption.
              </li>
              <li>
                We prioritize quality, innovation, and client satisfaction with
                every custom solution we deliver.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
