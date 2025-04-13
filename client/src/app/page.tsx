"use client";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <Services />
      <Products />
      <About />
      <Projects />
    </div>
  );
}
