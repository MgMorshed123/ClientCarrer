import React from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";

const Profile = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto bg-white border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex items-center gap-4">
          <div>
            <Avatar className="h-24 w-24">
              <AvatarImage src=""> </AvatarImage>
            </Avatar>
          </div>

          <div>
            <div>
              <h1>Full Name</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam, dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
