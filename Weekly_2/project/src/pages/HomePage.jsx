import React from "react";
import Contact from "../components/Contact";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
