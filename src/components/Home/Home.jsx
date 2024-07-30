import React from "react";
import Navbar from "../shared/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import CategorySection from "../CategorySection/CategorySection";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
    </div>
  );
};

export default Home;
