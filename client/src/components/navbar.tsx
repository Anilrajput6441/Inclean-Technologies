"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

import MarqueeComp from "./Marquee";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Projects",
    href: "/Projects",
    dropdown: [
      {
        label: "Industrial Ventilation System",
        href: "/Projects/Projectone/",
      },
      {
        label: "Fume Extraction System",
        href: "/Projects/Projecttwo/",
      },
      {
        label: "Parking Ventilation System",
        href: "/Projects/Projectthree/",
      },
      {
        label: "Centralized Air Conditioning",
        href: "/Projects/Projectfour/",
      },
      {
        label: "Lift-well Pressurization",
        href: "/Projects/Projectfive/",
      },
      {
        label: "Aircraft Hanger Ventilation",
        href: "/Projects/Projectsix/",
      },
    ],
  },
  {
    label: "Products",
    dropdown: [
      { label: "Our Team", href: "/about/team" },
      { label: "Vision", href: "/about/vision" },
    ],
  },
  {
    label: "About",
    href: "/Aboutus",
    // dropdown: [
    //   { label: "Our Team", href: "/about/team" },
    //   { label: "Vision", href: "/about/vision" },
    // ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "bg-white fixed top-0 left-0 w-full shadow-md z-50 transition-transform duration-300",
        !showNavbar && "-translate-y-full"
      )}
    >
      <MarqueeComp />
      <div className="max-w-7xl mx-auto px-4 p-1 flex items-center justify-between">
        <Image
          src="/inclean.png" // or a remote URL
          alt="Descriptive alt text"
          width={65}
          height={65}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href || "#"}
                className="text-gray-700 hover:text-white hover:bg-[#9ccc3c] transition-colors duration-300 pt-1 pb-1 pl-3 pr-3 rounded-full  font-normal   flex items-center gap-1"
              >
                {item.label}
                {item.dropdown && <ChevronDown size={16} />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === index && (
                <ul className="absolute top-full  left-0  bg-white shadow-lg rounded-md p-2 space-y-1 min-w-[160px]">
                  {item.dropdown.map((drop, i) => (
                    <li key={i}>
                      <Link
                        href={drop.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        {drop.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <a
            href="tel:+919876543210"
            aria-label="Call Branding Works"
            title="Call Branding Works"
          >
            <div className="border-1 bg-[#afe93bb8] hover:bg-[#9ccc3ce8] transition-colors duration-300 cursor-pointer rounded-full pl-2 pr-3 right-0 flex text-center">
              <Image
                src="/call.gif" // place in public/ folder
                alt="Funny animation"
                width={30}
                height={15}
                className="mr-2"
              />
              <button>7428057438</button>
            </div>
          </a>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden  flex ">
          <div className="md:hidden  ">
            <a
              href="tel:+919876543210"
              aria-label="Call Branding Works"
              title="Call Branding Works"
            >
              {" "}
              <div className="bg-[#9ccc3ce8]  mr-5   hover:bg-[#9ccc3ce8] transition-colors duration-300 cursor-pointer rounded-full p-1  flex text-center">
                <Image
                  src="/call.gif" // place in public/ folder
                  alt="Funny animation"
                  width={20}
                  height={20}
                  className=""
                />
                {/* <button>7428057438</button> */}
              </div>
            </a>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href || "#"}
                className="block py-2 text-gray-800 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <ul className="pl-4 pt-1 space-y-1">
                  {item.dropdown.map((drop, i) => (
                    <li key={i}>
                      <Link
                        href={drop.href}
                        className="block py-1 text-sm text-gray-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {drop.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
