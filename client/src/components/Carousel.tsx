// components/Carousel.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [
    {
      id: 1,
      src: "/main.jpg",
      alt: "Inclean industrial solution 1",
      title: "Your Trusted HVAC Partner--WE CARE ABOUT YOUR AIR !",
      description:
        "Inclean offers robust HVAC solutions for parking structures, ensuring continuous removal of exhaust gases like CO and NOx. Our intelligent systems maintain air quality and comply with fire safety norms in both open and enclosed parking areas.",
    },
    {
      id: 2,
      src: "/image1.jpg",
      alt: "Inclean industrial solution 1",
      title: "Parking Ventilation System",
      description:
        "Inclean offers robust HVAC solutions for parking structures, ensuring continuous removal of exhaust gases like CO and NOx. Our intelligent systems maintain air quality and comply with fire safety norms in both open and enclosed parking areas.",
    },
    {
      id: 3,
      src: "/image2.webp",
      alt: "Inclean aircraft hanger ventilation",
      title: "Kitchen Exhaust Ventilation",
      description:
        "Our HVAC-grade kitchen exhaust systems efficiently eliminate smoke, heat, and grease from commercial kitchens. Built for high performance and durability, Inclean ensures a cleaner, safer, and odor-free cooking environment.",
    },
    {
      id: 4,
      src: "/image3.jpg",
      alt: "Inclean lift-well pressurization",
      title: "Industrial Ventilation System",
      description:
        "We provide cutting-edge HVAC solutions tailored for industrial environments, ensuring optimal air circulation, pollutant control, and a healthier workspace. Our systems are engineered to handle heavy-duty air filtration and comply with international safety standards.",
    },
    {
      id: 5,
      src: "/image4.jpg",
      alt: "Inclean centralized air conditioning",
      title: "Centralized Air Conditioning",
      description:
        "Experience seamless climate control with Inclean’s centralized air conditioning systems. We deliver energy-efficient cooling for commercial and residential spaces, maintaining comfort across multiple zones with smart automation and minimal energy waste.",
    },
    {
      id: 6,
      src: "/image5.jpg",
      alt: "Inclean fume extraction system",
      title: "Centralized Air Conditioning",
      description:
        "Experience seamless climate control with Inclean’s centralized air conditioning systems. We deliver energy-efficient cooling for commercial and residential spaces, maintaining comfort across multiple zones with smart automation and minimal energy waste.",
    },
    {
      id: 7,
      src: "/image6.jpg",
      alt: "Inclean parking ventilation system",
      title: "Aircraft Hangar Ventilation",
      description:
        "Our specialized hangar ventilation systems are designed to efficiently manage fuel vapors, exhaust fumes, and airborne contaminants. With Inclean’s HVAC expertise, we maintain a safe and breathable environment in large-scale aviation facilities.",
    },
    {
      id: 8,
      src: "/image7.jpg",
      alt: "Inclean industrial cooling service",
      title: "Lift-well Pressurization",
      description:
        "Ensure vertical safety with our advanced lift-well pressurization systems. Designed to prevent smoke ingress during emergencies, our HVAC solutions guarantee compliant, reliable, and efficient airflow in high-rise buildings.",
    },
    {
      id: 9,
      src: "/image8.webp",
      alt: "Inclean commercial air engineering",
      title: "Fume Extraction System",
      description:
        "Protect your workspace from hazardous fumes with our high-performance fume extraction systems. Inclean’s HVAC technology is ideal for laboratories, manufacturing plants, and chemical units where air quality is critical.",
    },
    {
      id: 10,
      src: "/image9.webp",
      alt: "Inclean HVAC system in action",
      title: "Centralized Air Conditioning",
      description:
        "Experience seamless climate control with Inclean’s centralized air conditioning systems. We deliver energy-efficient cooling for commercial and residential spaces, maintaining comfort across multiple zones with smart automation and minimal energy waste.",
    },
    {
      id: 11,
      src: "/image10.webp",
      alt: "Inclean HVAC custom installation",
      title: "Aircraft Hangar Ventilation",
      description:
        "Our specialized hangar ventilation systems are designed to efficiently manage fuel vapors, exhaust fumes, and airborne contaminants. With Inclean’s HVAC expertise, we maintain a safe and breathable environment in large-scale aviation facilities.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Go to next slide
  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      // If we are at the last image, jump to the first image after transition
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // This matches the transition duration
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="relative ">
      {/* Chevron Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 rounded-full hover:backdrop-blur-xl hover:border-1 lg:block hidden z-20"
      >
        <Image
          src="/leftchevron.png"
          alt=">"
          width={30}
          height={30}
          className="w-full h-full"
        />
      </button>

      {/* Carousel Images */}
      <div className="overflow-hidden">
        <div
          className="flex lg:w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative  w-full h-[100vh]  lg:h-[100vh] flex-shrink-0"
            >
              {/* {screen.width < 900 && <p className="mt-20">{img.title}</p>} */}
              <div className="absolute inset-0 bg-[black] opacity-40 z-10"></div>
              <Image
                src={img.src}
                alt={`Slide ${index + 1}`}
                layout="fill" // This ensures the image fills the parent div
                objectFit="cover" // This ensures the image covers the container without distortion
                className="w-full h-full"
              />
              {img.id === 1 ? (
                <div className="absolute z-12 w-[90vw] lg:w-[57%] text-white  ml-5  lg:left-1/5  p-10  text-center top-1/5 lg:top-3/10">
                  <h1 className="maven-pro-600 text-3xl md:text-5xl">
                    THE MOST TRUSTED HVAC COMPANY
                  </h1>
                  <p className="maven-pro-600 lg:mt-2 text-[#9CCC3C] text-bold text-lg md:text-2xl">
                    — We care about your air!
                  </p>
                  <p className="lg:p-10">
                    Enjoy the smartest air technology with Inclean. Considered
                    to be the best HVAC consultants, we focus on delivering
                    high-quality ventilation, heating, and air-conditioning
                    services. Having expertise in the field of air engineering,
                    we serve in 40+ countries around the globe providing the
                    best HVAC services.
                  </p>
                </div>
              ) : (
                <div className="absolute z-12 w-full lg:w-[57%] text-white  lg:ml-5  lg:left-1/5  p-10  text-center top-1/5 lg:top-3/10">
                  <h2 className="maven-pro-600 mt-10 text-3xl lg:text-5xl  pb-2">
                    {img.title}
                  </h2>
                  <p className="lg:p-4 mt-10 lg:mt-5">{img.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chevron Buttons */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 rounded-full hover:backdrop-blur-xl hover:border-1 lg:block hidden z-20"
      >
        <Image
          src="/rightchevron.png"
          alt=">"
          width={30}
          height={30}
          className="w-full h-full"
        />
      </button>
    </div>
  );
};

export default Carousel;
