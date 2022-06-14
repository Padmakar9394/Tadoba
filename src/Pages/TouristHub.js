import React from "react";
import Navbar from "../Components/navbar";

const TouristHub = () => {
  return (
    <>
        <div className="relative">
          <div className="w-full h-[400px] fixed">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/site-back.png"
                 className="w-full h-full object-cover"
                 alt="bg-img"
            />
          </div>
          <div className="absolute top-0">
              <h1 className="">Tourist Page</h1>
          </div>
        </div>
    </>
  )
};

export default TouristHub;
