import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import EkaantSection from "../components/EkaantSection";
import WhatWeOffer from "../components/WhatWeOffer";
import HowToReach from "../components/HowToReach";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EkaantSection />
      <WhatWeOffer />
      <HowToReach />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;
