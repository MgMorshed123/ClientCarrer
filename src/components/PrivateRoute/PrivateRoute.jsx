import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"; // Import toast if needed
import Swal from "sweetalert2";

const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      // User is not logged in
      navigate("/");
      Swal.fire({
        title: "You are not logged in ",
        // text: "You clicked the button!",
        icon: "error",
      });
    } else if (user.role !== requiredRole) {
      // User is logged in but does not have the required role
      Swal.fire({
        title: `Unauthorized access  only ${requiredRole} can view this `,
        // text: "You clicked the button!",
        icon: "error",
      });
      navigate("/");
    }
  }, [user, requiredRole, navigate]);

  return <div>{children}</div>;
};

export default PrivateRoute;
