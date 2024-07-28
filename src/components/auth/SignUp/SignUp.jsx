import React from "react";
import "./SignUp.css";
import Navbar from "@/components/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const SignUp = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 "> SignUp </h1>

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

          <div className="flex items-center justify-center">
            <RadioGroup className="flex justify-center items-center gap-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
