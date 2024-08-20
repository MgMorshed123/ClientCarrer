// import { setAllJobs } from "@/redux/jobSlice
// import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlljobs } from "../Redux/jobSlice";
import { JOB_API_END_POINT } from "../utils/constant";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  const { searchedQuery } = useSelector((store) => store.job);
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(
          `${JOB_API_END_POINT}/getjob?keyword=${searchedQuery}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          console.log("res.data", res.data);
          dispatch(setAlljobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, []);
};

export default useGetAllJobs;
