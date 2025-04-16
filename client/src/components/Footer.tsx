import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[60vh] lg:h-[70vh] w-full  md:w-full lg:pb-9 bg-[#9ccc3c]">
      <div className="h-[50%] p-3">
        <h1 className="flex justify-center  items-center gap-10 text-center maven-pro-600 text-2xl lg:text-4xl">
          <Image
            src="/inclean.png"
            alt=""
            width={300}
            height={300}
            className="h-10 lg:h-20 w-14 lg:w-20 bg-gray-100 rounded-full "
          />{" "}
          Inclean Technologies
        </h1>
        <div className="justify-center lg:p-15 lg:gap-20 ">
          {" "}
          <div className="flex justify-between p-2  footer-left">
            <h3 className="hover:text-green-600 cursor-pointer">Join Us</h3>
            <h3 className="hover:text-green-600 cursor-pointer">Blogs</h3>
            <button className="hover:text-green-600 cursor-pointer">
              Join Now
            </button>
          </div>
          <div className="flex p-2  justify-center footer-right">
            <ul className="flex  gap-x-2 md:gap-x-9 text-xs md:text-lg ">
              <li>
                <a href="/project" className="hover:text-green-600">
                  Project
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-green-600">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-600">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[10%] flex justify-center md:justify-between text-xs md:text-lg lg:p-10 items-center ">
        <p>© 2025 Inclean Technology All rights reserved.</p>
        <div className="md:flex justify-center hidden  space-x-10 mt-7">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
          </a>
          <a
            href="https://x.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/twitter.png" alt="Twitter" width={20} height={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/inclean-technologies/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
          </a>
          <a
            href="https://wa.me/+918744811551"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.indiamart.com/inclean-technologies/?srsltid=AfmBOorf5wjCENSTc9eXNBjYQtObhsWbUI81btBVz0ZyA5G589B2DVtl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/indiamart.png"
              alt="Indiamart"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
      <div className="h-[40%] flex   justify-center items-center">
        <Image
          src="/incleanimage.png"
          alt="footer logo"
          width={900}
          height={600}
          className="h-full  border-black   w-full "
        />
      </div>
    </div>
  );
};

export default Footer;
