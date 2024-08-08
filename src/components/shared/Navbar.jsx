import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <div className="bg-white ">
      <div className="flex align-item-center justify-between max-w-7xl">
        <h1 className="text-2xl font-bold">
          Job <span className="text-[#f83002]">Portal</span>
        </h1>

        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/browse">Browse</Link>
          </ul>

          {!user ? (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button
                  className="text-white bg-[#38526aa8] hover:bg-[#3d386a]"
                  variant="outline"
                >
                  SignUp
                </Button>
              </Link>
            </>
          ) : (
            <div>
              <span>Welcome, {user.name}</span>{" "}
              {/* Assuming user has a name property */}
              <Button variant="link">LogOut</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
