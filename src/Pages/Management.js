import React from "react";

const Management = () => {
  return (
      <>
        <div className="relative">
          <div className="h-[400px] fixed">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/site-back.png"
                 className="h-full object-cover"
                 alt="bg-img"
            />
          </div>
          <div className="absolute top-0">
            <div className="relative">
              <div className="h-32 md:h-[250px]">
                <img src="https://mytadoba.org/wp-content/uploads/2022/03/organisation-featured-image.jpg"
                     alt="bg-img"
                     className="h-full object-fill"
                />
              </div>
              <h1 className="md:px-24 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">TATR MANAGEMENT</h1>
            </div>
            <div className="px-32 my-8">
              <h1 className="text-center text-xl font-bold">MANAGEMENT STRUCTURE</h1>
              <div className="h-[600px] md:px-16 md:mt-8">
                <img src="https://mytadoba.org/wp-content/uploads/2022/03/organisational-chart.png"
                     className="h-full object-cover"
                     alt="bg-img"
                />
              </div>
            </div>
          </div>
        </div>
      </>
  )
};


export default Management;
