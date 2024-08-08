import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../Footer/Footer";
import FilterCard from "../FilterCard/FilterCard";
import SingleJobs from "../SingleJobs/SingleJobs";
import FilterCards from "../FilterCards/FilterCards";

const Jobs = () => {
  const jobArray = [1, 2, 3, 4, 5, 6, 8, 9];

  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCards></FilterCards>
          </div>

          {jobArray.length <= 0 ? (
            <span>Not Job Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobArray.map((item, index) => (
                  <SingleJobs></SingleJobs>
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
