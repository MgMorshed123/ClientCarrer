import React, { useEffect } from "react";
import axios from "axios";
// import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { APPLICATION_API_END_POINT } from "@/components/utils/constant";
import { setAllApplicants } from "@/components/Redux/applicationSlice";
import Navbar from "@/components/shared/Navbar";
import ApplicantTable from "./ApplicantTable";
import Swal from "sweetalert2";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
          { withCredentials: true }
        );
        dispatch(setAllApplicants(res.data.job));
      } catch (error) {
        Swal.fire({
          title: error.response.data.message,
          // text: "You clicked the button!",
          icon: "error",
        });
      }
    };
    fetchAllApplicants();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">
          Applicants {applicants?.applications?.length}
        </h1>
        <ApplicantTable />
      </div>
    </div>
  );
};

export default Applicants;
