import React from "react";
import {BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import {MdOutlineEmail} from "react-icons/md";

const WorkWithUs = () => {
  return (
    <>
      <div className="px-28">
        <div className="relative">
          <div className="w-full h-[400px] fixed">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/site-back.png"
                 className="w-full h-full object-cover"
                 alt="bg-img"
            />
          </div>
          <div className="absolute top-0">
              <h1 className="text-2xl uppercase font-bold mt-16">About Us</h1>
              <div className="my-12 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-11 h-11 rounded bg-blue-900 hover:opacity-90 hover:cursor-pointer"><BsFacebook className="text-xl ml-3 mt-3 text-white" /></div>
                  <div className="w-11 h-11 rounded bg-sky-500 hover:opacity-90 hover:cursor-pointer"><BsTwitter className="text-xl ml-3 mt-3 text-white" /></div>
                  <div className="w-11 h-11 rounded bg-blue-500 hover:opacity-90 hover:cursor-pointer"><BsLinkedin className="text-xl ml-3 mt-3 text-white" /></div>
                  <div className="w-11 h-11 rounded bg-green-500 hover:opacity-90 hover:cursor-pointer"><BsWhatsapp className="text-xl ml-3 mt-3 text-white" /></div>
                  <div className="w-11 h-11 rounded bg-red-600 hover:opacity-90 hover:cursor-pointer"><MdOutlineEmail className="text-xl ml-3 mt-3 text-white" /></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default WorkWithUs;
