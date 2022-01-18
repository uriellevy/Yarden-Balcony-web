import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Main = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Navbar navbar={navbar} setNavbar={setNavbar} />
      <Hero navbar={navbar} />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Main;
