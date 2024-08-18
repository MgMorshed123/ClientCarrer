import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import CategorySection from "../CategorySection/CategorySection";
import LatestJob from "../LatestJob/LatestJob";
import Footer from "../Footer/Footer";
import useGetAllJobs from "../Hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();

  const { user } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

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
