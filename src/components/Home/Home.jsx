import React from "react";
import Navbar from "../shared/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import CategorySection from "../CategorySection/CategorySection";
import LatestJob from "../LatestJob/LatestJob";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <LatestJob></LatestJob>
      <Footer></Footer>
    </div>
  );
};

export default Home;
