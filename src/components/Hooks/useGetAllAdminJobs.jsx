import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllAdminJobs } from "../Redux/jobSlice";
import { JOB_API_END_POINT } from "../utils/constant";
import Swal from "sweetalert2";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllAdminJobs(res.data.jobs));
        }
      } catch (error) {
        Swal.fire({
          title: error.response.data.message,
          // text: "You clicked the button!",
          icon: "error",
        });
      }
    };
    fetchAllAdminJobs();
  }, []);
};

export default useGetAllAdminJobs;
