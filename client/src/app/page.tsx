"use client";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <Services />
      <Products />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
