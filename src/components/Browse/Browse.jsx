import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../Footer/Footer";
import Job from "../SingleJobs/SingleJobs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "../Redux/jobSlice";
import useGetAllJobs from "../Hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-lg">Search Result ({allJobs.length})</h1>

        <div className="grid grid-cols-3 gap-4 mt-5">
          {allJobs.map((job, index) => {
            return <Job job={job} key={job._id}></Job>;
          })}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Browse;
