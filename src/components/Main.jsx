import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Services from "./Services";
import About from "./About";

const Main = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Main;
