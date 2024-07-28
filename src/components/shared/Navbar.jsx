import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Navbar = () => {
  return (
    <div className="bg-white ">
      <div className="flex align-item-centre justify-between max-w-7xl">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#f83002]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5 ">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          <Popover>
            <PopoverTrigger asChild>
              
                    <Avatar className='cursor-pointer'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
            
            </PopoverTrigger>
            <PopoverContent>
                      <h1>Hello</h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
