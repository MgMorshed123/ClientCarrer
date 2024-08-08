import React from "react";
import { RadioGroup } from "../ui/radio-group";
import { Label } from "../ui/label";

const FilterCard = () => {
  const fitlerData = [
    {
      fitlerType: "Location",
      array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
      fitlerType: "Industry",
      array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    },
    {
      fitlerType: "Salary",
      array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3"></hr>
      <RadioGroup>
        {fitlerData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg ">{data.fitlerType}</h1>
            {data.array.map((item) => {
              return (
                <div
                  className="flex items-center space-x-2
                 my-2"
                >
                  <RadioGroup value={item}></RadioGroup>
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
