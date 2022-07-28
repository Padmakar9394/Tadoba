import React from "react";
import {BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import {MdOutlineEmail} from "react-icons/md";

const WorkWithUs = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <div className="w-full h-[400px] fixed">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/site-back.png"
                 className="w-full h-full object-cover"
                 alt="bg-img"
            />
          </div>
          <div className="absolute top-0">
            <div className="relative">
              <div className="w-full h-32 md:h-[230px]">
                <img src="https://mytadoba.org/wp-content/uploads/2022/02/workwithus-featured-image.jpg"
                     className="w-full h-full object-fill"
                     alt="work-with-us"
                />
              </div>
              <h1 className="md:px-24 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">WORK WITH US</h1>
              </div>
              <div className="my-8 px-4 md:px-32">
                <div className="">
                  <div className="flex items-center gap-2">
                    <span className="w-11 h-11 rounded bg-blue-900 hover:opacity-90 hover:cursor-pointer"><BsFacebook className="text-xl ml-3 mt-3 text-white" /></span>
                    <span className="w-11 h-11 rounded bg-sky-500 hover:opacity-90 hover:cursor-pointer"><BsTwitter className="text-xl ml-3 mt-3 text-white" /></span>
                    <span className="w-11 h-11 rounded bg-blue-500 hover:opacity-90 hover:cursor-pointer"><BsLinkedin className="text-xl ml-3 mt-3 text-white" /></span>
                    <span className="w-11 h-11 rounded bg-green-500 hover:opacity-90 hover:cursor-pointer"><BsWhatsapp className="text-xl ml-3 mt-3 text-white" /></span>
                    <span className="w-11 h-11 rounded bg-red-600 hover:opacity-90 hover:cursor-pointer"><MdOutlineEmail className="text-xl ml-3 mt-3 text-white" /></span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center mt-8">
                    <div className="md:w-3/5 font-['Roboto_Slab']">
                      <h1 className="text-[#875b3e] font-extrabold text-xl">SUMMER INTERNSHIP 2022</h1>
                      <h4 className="text-[#ACACAC] my-1">Posted: February 1, 2022</h4>
                      <h2 className="font-medium">The Tadoba-Andhari Tiger Reserve Conservation Foundation, Chandrapur is inviting eligible
                       candidates to apply for its <span className="font-bold">Summer Internship Program 2022</span> in the following fields:
                        ECOLOGY | SOCIOLOGY | MEDIA & COMMUNICATIONS | SOLID WASTE MANAGEMENT | LIVELIHOODS
                       </h2>
                      <h3 className="font-semibold my-3">Last date for applications: February 28, 2022.</h3>
                      <button className="px-4 py-3 mt-4 mb-12 rounded text-white text-lg bg-gradient-to-r from-green-400 to-orange-500">Know More</button>
                    </div>
                    <span className="md:w-2/5">
                      <div className="w-[300px] h-64 md:ml-28">
                        <img src="https://mytadoba.org/wp-content/uploads/elementor/thumbs/favicon-pk967u95p4ulvrjkvugd47hbuiu2xd0c8z4j04num0.png"
                             className="w-full h-full object-fill"
                             alt="tiger-image"
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-8 px-4 md:px-32">
                <hr className="bg-cyan-500" />
              </div>
              <div className="flex flex-col items-start md:flex-row md:items-center mt-8 px-4 md:px-32">
                <div className="md:w-3/5 font-['Roboto_Slab']">
                  <h1 className="text-[#875b3e] font-extrabold text-xl">MAKE A FILM ON FOREST GUARDS</h1>
                  <h4 className="text-[#ACACAC] my-1">Posted: December 29, 2021</h4>
                  <h2 className="font-medium">Tadoba-Andhari Tiger Reserve invites applications from renowned filmmakers to
                   <span className="font-bold">make a documentary on the work and life of our forest guards and other
                    frontline staff</span> The documentary will showcase the commitment and courage of frontline personnel
                     that work in the field in the tiger reserve, and present a real-world picture the many challenges they
                      must overcome to further the cause of wildlife conservation.
                   </h2>
                  <h3 className="font-semibold my-3">Last date for applications: January 31, 2021.</h3>
                  <button className="px-4 py-3 mt-4 mb-12 rounded text-white text-lg bg-gradient-to-r from-green-400 to-orange-500">Know More</button>
                </div>
                <span className="px-4 md:px-0 md:w-2/5">
                  <div className="w-[300px] h-64 md:ml-28">
                    <img src="https://mytadoba.org/wp-content/uploads/2021/12/workwithus-post-filmmaking.jpg"
                         className="w-full h-full object-fill"
                         alt="tiger-image"
                    />
                  </div>
                </span>
              </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default WorkWithUs;
