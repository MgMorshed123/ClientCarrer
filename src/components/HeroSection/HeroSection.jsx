import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-4 my-10">
        <span className=" mx-auto px-4 py-2 mt-2 rounded-full bg-gray-50 text-[#F83002] font-medium">
          NO.1 Job Hunt Website
        </span>
        <h1 className="mt-4 text-4xl font-medium">
          Search , Apply , & <br /> Get your{" "}
          <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quo
          iste repellat sequi dolor quis.
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="find your dream job"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-full bg-[#6a38c2]">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
