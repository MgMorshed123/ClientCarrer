import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {


    const [user ,setUser] = useState(false)


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

              
              {
                !user ?
                
                
                <>

                  <Link to='login'><Button variant='outline' >Login</Button>
                 </Link>

                <Link to='signup'> <Button
                 className='text-white bg-[#38526aa8] hover:bg-[#3d386a]'
                 variant='outline'>SignUp</Button></Link>

                </>:  

              

                <>
                
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className="w-full">

              <div className="flex gap-2 space-y-2">

                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>

               <div>
                <h4 className="font-medium">Morshed MernStack</h4>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit.</p>
               </div>
               
              </div>

              <div className="flex flex-col text-gray-600 my-2">

                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <User2></User2>
                  <Button variant='link'>View Profile</Button>
                </div>



                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut></LogOut>
                  <Button variant='link'>LogOut</Button>
                </div>
              </div>

            </PopoverContent>
          </Popover>
                </>
              }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
