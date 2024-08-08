import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../Footer/Footer";
import Job from "../SingleJobs/SingleJobs";

const Browse = () => {
  const radomJobs = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-lg">
          Search Result ({radomJobs.length})
        </h1>

        <div className="grid grid-cols-3 gap-4 mt-5">
          {radomJobs.map((item, index) => {
            return <Job></Job>;
          })}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Browse;
