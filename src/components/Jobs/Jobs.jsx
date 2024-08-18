import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../Footer/Footer";
import FilterCard from "../FilterCard/FilterCard";
import SingleJobs from "../SingleJobs/SingleJobs";
import FilterCards from "../FilterCards/FilterCards";
import { useSelector } from "react-redux";
import useGetAllJobs from "../Hooks/useGetAllJobs";

const Jobs = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);

  console.log("in hobs jsx", allJobs);

  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCards></FilterCards>
          </div>

          {allJobs.length <= 0 ? (
            <span>Not Job Found</span>
          ) : (
            <div className="flex-1 h-[100vh] pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job, index) => (
                  <SingleJobs job={job}></SingleJobs>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Jobs;
