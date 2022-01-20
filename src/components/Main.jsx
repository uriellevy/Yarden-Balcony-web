import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Modal from "./Modal";

const Main = () => {
  const [navbar, setNavbar] = useState(false);
  const [modalSubmit, setModalSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {modalSubmit && (
        <Modal setModalSubmit={setModalSubmit} isLoading={isLoading} />
      )}
      <Navbar navbar={navbar} setNavbar={setNavbar} />
      <Hero navbar={navbar} />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact
        modalSubmit={modalSubmit}
        setModalSubmit={setModalSubmit}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Footer />
    </>
  );
};

export default Main;
