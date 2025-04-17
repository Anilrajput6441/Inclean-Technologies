"use client";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    path: "/Projects/Projectone/",
    image: "/image3.jpg",
    title: "Indusrial Ventilation System",
    description:
      "Get the best ventilation system for your industry by connecting at Inclean. We are the leading industrial ventilation manufacturer taking care of your needs at the best. We accept responsibility for HVAC projects right from the concept to initiating it. ",
  },
  {
    path: "/Projects/Projecttwo/",
    image: "/image8.webp",
    title: "Fume Extraction System",
    description:
      "Inclean is your one-stop destination if you're searching for a reliable and innovative fume extraction system manufacturer. Our customized air purification systems are engineered to comply with both Indian and global industrial standards. ",
  },
  {
    path: "/Projects/Projectthree/",
    image: "/image1.jpg",
    title: "Parking Ventilation System",
    description:
      "As cities grow and more vehicles take to the roads, underground and enclosed parking facilities have become a necessity. However, these areas pose significant ventilation challenges due to poor airflow and pollutant accumulation..",
  },
  {
    path: "/Projects/Projectfour/",
    image:
      "https://waterchillers.com/wp-content/uploads/2023/09/cooling-tower.jpg",
    title: "Centralized Air Conditioning",
    description:
      "Centralized air conditioning systems are widely used in commercial and large residential buildings to provide uniform cooling. These systems efficiently regulate temperature, humidity, and air quality from a central location or plant.",
  },
  {
    path: "/Projects/Projectfive/",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/5/307901298/BX/DJ/YW/83216578/lift-well-pressurization-system-500x500.webp",
    title: "Lift-well Pressurization",
    description:
      "Lift-well pressurization is a fire safety system designed to prevent smoke from entering elevator shafts by maintaining higher air pressure, ensuring safe evacuation and firefighter access during emergencies in high-rise buildings.",
  },
  {
    path: "/Projects/Projectsix/",
    image: "/image10.webp",
    title: "Aircraft Hanger Ventilation",
    description:
      "Aircraft hangar ventilation systems are essential for maintaining air quality by removing fumes, smoke, and fuel vapors, ensuring a safe working environment for personnel and protecting sensitive aviation equipment from hazards.",
  },
];

const page = () => {
  return (
    <>
      <h1 className="mt-30 p-5 maven-pro-600 text-5xl text-center text-[#233C63]">
        Cool Installs. Warm Results.
        <p className="text-xl">All Projects({images.length})</p>
      </h1>
      <div className="mt-  grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => (
          <Link key={index} href={img.path}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
              <Image
                src={img.image}
                alt={img.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{img.title}</h3>
                <p className="text-sm text-gray-600">{img.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
