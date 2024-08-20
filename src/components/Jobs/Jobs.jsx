import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../Footer/Footer";
import SingleJobs from "../SingleJobs/SingleJobs";
import FilterCards from "../FilterCards/FilterCards";
import { useSelector } from "react-redux";
import useGetAllJobs from "../Hooks/useGetAllJobs";
import FilterCard from "../FilterCards/FilterCards";
import { motion } from "framer-motion";
const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        console.log("job", job);
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.salary
            ?.toString()
            .toLowerCase()
            .includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <motion.div
            initial={{ x: "-100%" }} // Start off-screen to the left
            animate={{ x: 0 }} // Animate to its original position
            transition={{ type: "spring", stiffness: 100 }} // Adjust the type and stiffness for a smoother animation
          >
            <div className="w-20%">
              <FilterCard></FilterCard>
            </div>
          </motion.div>

          {filterJobs.length <= 0 ? (
            <span>Not Job Found</span>
          ) : (
            <div className="flex-1 h-[100vh] pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job, index) => (
                  <SingleJobs job={job}></SingleJobs>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
