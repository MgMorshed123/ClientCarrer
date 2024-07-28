import React, { useState } from "react";
import "./SignUp.css";
import Navbar from "@/components/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.file?.[0] });
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 "> SignUp </h1>

          <div className="my-2">
            <Label>Full Name </Label>
            <Input type="text " placeholder="Enter your name" />
          </div>

          <div className="my-2">
            <Label>Email </Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your Email"
            />
          </div>

          <div className="my-2">
            <Label>Password </Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
            />
          </div>

          <div className="my-2">
            <Label>Phone Number </Label>
            <Input
              type="phoneNumber"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your phoneNumber"
            />
          </div>

          <div className="flex items-center justify-center gap-1">
            <RadioGroup className="flex justify-center items-center gap-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  className="cursor-pointer"
                  onChange={changeEventHandler}
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "recruiter"}
                  className="cursor-pointer"
                  onChange={changeEventHandler}
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
                onChange={changeFileHandler}
              ></input>
            </div>
          </div>
          <Button className="w-full my-4">SignUp</Button>
          <p>
            Already Have an account{" "}
            <Link to="/login" className="text-green-800">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
