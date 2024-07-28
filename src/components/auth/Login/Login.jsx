import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.file?.[0] });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 "> Login </h1>

          <div className="my-2">
            <Label>Full Name </Label>
            <Input type="text " placeholder="Enter your name" />
          </div>

          <div className="my-2">
            <Label>Email </Label>
            <Input type="email" placeholder="Enter your Email" />
          </div>

          <div className="my-2">
            <Label>Password </Label>
            <Input type="password" placeholder="Enter your Password" />
          </div>

          <div className="my-2">
            <Label>Phone Number </Label>
            <Input type="number" placeholder="Enter your Phone Number" />
          </div>

          <div className="flex items-center justify-center gap-1">
            <RadioGroup className="flex justify-center items-center gap-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>

            <div className="flex items-center gap-2">
              <label>Profile</label>
              <input
                accept="image/*"
                type="file"
                className="cursor-pointer"
              ></input>
            </div>
          </div>
          <Button className="w-full my-4">Login</Button>
          <p>
            Don't Have an account ?
            <Link to="/signup" className="text-green-800">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
