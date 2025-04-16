"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    enquiry: "",
  });

  const filledCount = Object.values(formData).filter(
    (val) => val.trim() !== ""
  ).length;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex  w-[100vw]  bg-gray-100 pt-10 pb-20 md:pl-25 md:pr-25">
        <div className="w-full md:w-[40%] bg-white flex p-2 justify-center pl-4 items-center">
          <div className="w-full p-2 rounded-tr-[4rem] h-[96%] bg-[#9CCC3C]">
            <a className="flex" href="#">
              <Image
                src="/inclean.png"
                alt="logo"
                width={200}
                height={200}
                className="w-20 rounded-full bg-white border-black h-20"
              />
              <h1 className="ml-4 flex flex-col items-center font-sans h-11 mt-4 font-semibold text-xl border-black">
                INCLEAN TECHNOLOGY
                <p className="text-[1rem] border-t-2 pl-5 pr-5">Catch Breath</p>
              </h1>
            </a>
            <div className="flex flex-col p-5 mt-10">
              <h1 className="maven-pro-600 text-2xl">Get in Touch</h1>
              <p className="font-normal pt-5">
                We&apos;re always available at{" "}
                <a
                  href="mailto:info@inclean.in"
                  className="underline text-gray-600 hover:text-blue-700"
                >
                  – INFO@INCLEAN.IN
                </a>
              </p>
              <form className="max-w-md w-full bg-[#ffffff91] mt-6 p-6 shadow-lg rounded-xl space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="123-456-7890"
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enquiry
                  </label>
                  <textarea
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </form>

              {/* Progress Bar */}
              <div className="flex justify-between mt-7 space-x-2 px-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-all duration-1000 ${
                      i < filledCount
                        ? "bg-blue-600"
                        : "border-1 border-gray-400"
                    }`}
                  ></div>
                ))}
              </div>
              <label className="mt-15">We are also @</label>
              <div className="flex justify-center space-x-10 mt-7">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://x.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/twitter.png"
                    alt="Twitter"
                    width={32}
                    height={32}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/inclean-technologies/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://wa.me/+918744811551"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={32}
                    height={32}
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
                    width={48}
                    height={48}
                  />
                </a>
              </div>
              <div className="mt-5 pb-10">
                <p>166- Ground floor Godadara Road Surat, Gujrat-395210</p>
                <p>+91-8744811551</p>
                <p>INFO@INCLEAN.IN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[60%] hidden  relative bg-white md:flex  justify-center p-2 pr-4 items-center">
          <div className="absolute  border-2 shadow-2xl w-[92%] top-9 p-5 rounded-tl-[3rem] bg-gradient-to-r from-[transparent] to-[] bg-opacity-220 backdrop-blur-3xl border-white/50">
            At Inclean, we’re dedicated to warming your heart with exceptional
            service and expertise. As a trusted leader in the HVAC industry, we
            provide tailored solutions to residential, commercial, and
            industrial clients worldwide. With a presence in over 40 countries,
            Inclean is renowned for its outstanding customer care and deep
            knowledge of air cooling and heating systems.
            <p className="pl-[80%]">-- by Owner</p>
          </div>
          <Image
            src="/contactus.jpg"
            alt="Contact Us"
            width={800}
            height={1000}
            className="w-full rounded-bl-[4rem] h-[96%]"
          />
        </div>
      </div>
      <section
        aria-label="Google Map showing Inclean Technologies location"
        className="mt-8 pl-5 pr-5 w-[100vw] max-w-5xl mx-auto "
      >
        <h2 className="text-5xl text-[#233D63] maven-pro-600 mb-4">
          Visit us :
        </h2>
        <div className="w-full h-[400px] flex flex-col-reverse md:flex-row rounded-xl overflow-hidden shadow-lg mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.572421647129!2d77.3809473!3d28.6282685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x390cef8332a2e5cb%3A0x71672b6ffc8e46fb!2sDevsha%20Business%20Park!5e1!3m2!1sen!2sin!4v1713097076895!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            className="w-[100%] lg:w-[60%] h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Devsha Business Park 3D Map"
          />
          <div className="h-full md:pl-2 flex w-full md:w-[40%]">
            <Image
              src="/building.avif"
              alt=""
              width={600}
              height={800}
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
