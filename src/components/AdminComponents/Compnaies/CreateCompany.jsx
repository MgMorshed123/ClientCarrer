import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
// import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/components/utils/constant";
import Navbar from "@/components/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setSingleCompany } from "@/components/Redux/companySlice";
import { motion } from "framer-motion";

const CreateCompany = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState();
  const dispatch = useDispatch();
  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        Swal.fire({
          title: response.data.message,
          // text: "You clicked the button!",
          icon: "success",
        });
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        // text: "You clicked the button!",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ rotateY: 180, opacity: 0 }} // Start with a flipped and invisible state
        animate={{ rotateY: 0, opacity: 1 }} // Rotate to normal and fully visible
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth flip transition
      >
        <div className="max-w-4xl mx-auto">
          <div className="my-10">
            <h1 className="font-bold text-2xl">Your Company Name</h1>
            <p className="text-gray-500">
              What would you like to give your company name? you can change this
              later.
            </p>
          </div>

          <Label>Company Name</Label>
          <Input
            type="text"
            className="my-2"
            placeholder="JobHunt, Microsoft etc."
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <div className="flex items-center gap-2 my-10">
            <Button
              variant="outline"
              onClick={() => navigate("/admin/companies")}
            >
              Cancel
            </Button>
            <Button onClick={registerNewCompany}>Continue</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateCompany;
