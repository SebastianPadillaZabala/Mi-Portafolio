import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Experience from "../components/Experience";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Hero id="hero" />
      <Experience id="experience" />
      <ContactMe id="contactme" />
      <Navigation id="contact" />
      <Footer id="footer" />
    </div>
  );
};

export default LandingPage;
