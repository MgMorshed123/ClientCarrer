import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PrivateStudent = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null || user.role !== "student") {
      navigate("/");
      toast.error("login first");
    }
  }, []);

  return <div>{children}</div>;
};

export default PrivateStudent;
