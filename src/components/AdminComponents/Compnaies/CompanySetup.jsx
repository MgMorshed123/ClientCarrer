import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/components/Hooks/useGetCompanyById";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { COMPANY_API_END_POINT } from "@/components/utils/constant";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const CompanySetup = () => {
  const params = useParams();
  useGetCompanyById(params.id);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/updateCompany/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        Swal.fire({
          title: res.data.success,
          // text: "You clicked the button!",
          icon: "success",
        });
        navigate("/admin/companies");
      }
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        // text: "You clicked the button!",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <motion.div
          initial={{ rotateY: 180, opacity: 0 }} // Start with a flipped and invisible state
          animate={{ rotateY: 0, opacity: 1 }} // Rotate to normal and fully visible
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth flip transition
        >
          <form onSubmit={submitHandler}>
            <div className="flex items-center gap-5 p-8">
              <Button
                onClick={() => navigate("/admin/companies")}
                variant="outline"
                className="flex items-center gap-2 text-gray-500 font-semibold"
              >
                <ArrowLeft />
                <span>Back</span>
              </Button>
              <h1 className="font-bold text-xl">Company Setup</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Company Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Website</Label>
                <Input
                  type="text"
                  name="website"
                  value={input.website}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Logo</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={changeFileHandler}
                />
              </div>
            </div>
            {loading ? (
              <Button className="w-full my-4">
                {" "}
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
              </Button>
            ) : (
              <Button type="submit" className="w-full my-4">
                Update
              </Button>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanySetup;
