import React from "react";
import {Link} from "react-router-dom";
import {BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import {MdOutlineEmail} from "react-icons/md";

import FlipCard from "../Components/flip-Card";

const Donation = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[400px] fixed">
          <img src="https://mytadoba.org/wp-content/uploads/2022/02/site-back.png"
               className="w-full h-full object-cover"
               alt="bg-img"
          />
        </div>
        <div className="absolute w-full">
          <div className="relative">
            <div className="w-full h-32 md:h-[230px]">
              <img src="https://mytadoba.org/wp-content/uploads/2022/02/donation-featured-image.jpg"
                   className="w-full h-full object-fill"
                   alt="donation"
              />
            </div>
            <h1 className="md:px-24 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">MaKE a DONaTION</h1>
          </div>
            <div className="my-8 px-4 md:px-32">
                <div className="flex items-center gap-2">
                  <a href="#" className="w-11 h-11 rounded bg-blue-900 hover:opacity-90 hover:cursor-pointer"><BsFacebook className="text-xl ml-3 mt-3 text-white" /></a>
                  <a href="https://twitter.com/intent/tweet?text=%20https://mytadoba.org/make-a-donation/" className="w-11 h-11 rounded bg-sky-500 hover:opacity-90 hover:cursor-pointer"><BsTwitter className="text-xl ml-3 mt-3 text-white" /></a>
                  <a href="https://www.linkedin.com/shareArticle/?mini=true&url=https://mytadoba.org/make-a-donation/&title=Make%20A%20Donation%20-%20Tadoba-Andhari%20Tiger%20Reserve&summary=&source=https://mytadoba.org/make-a-donation/" className="w-11 h-11 rounded bg-blue-500 hover:opacity-90 hover:cursor-pointer"><BsLinkedin className="text-xl ml-3 mt-3 text-white" /></a>
                  <a href="https://api.whatsapp.com/send?text=*Make%20A%20Donation%20-%20Tadoba-Andhari%20Tiger%20Reserve*https://mytadoba.org/make-a-donation/" className="w-11 h-11 rounded bg-green-500 hover:opacity-90 hover:cursor-pointer"><BsWhatsapp className="text-xl ml-3 mt-3 text-white" /></a>
                  <a href="mailto:xyz@yourapplicationdomain.com?subject=Make A Donation - Tadoba-Andhari Tiger Reserve&body=https://mytadoba.org/make-a-donation/" className="w-11 h-11 rounded bg-red-600 hover:opacity-90 hover:cursor-pointer"><MdOutlineEmail className="text-xl ml-3 mt-3 text-white" /></a>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="font-['Roboto_Slab'] text-lg flex flex-col gap-2 my-3 md:my-0">
                    <p>The <span className="font-bold">Tadoba-andhari Tiger Reserve Conservation Foundation</span> is registered under the Mumbai Public Trust act, 1950 as a public trust bearing registration no. E-287 (C) dated 25-11-2008 (appendix I).</p>
                    <p>The Foundation focuses on key aspects of the conservation of the region’s natural heritage, including sustainable support to wildlife protection, research, eco-development, the sustainable livelihood of local communities residing in or adjoining tiger habitats, nature education and ecotourism.</p>
                    <h4 className="font-bold">Collaborate with us in our conservation efforts.</h4>
                  </div>
                  <div className="relative flex flex-col justify-center text-centerd">
                    <div className="relative overflow-hidden h-64 w-80">
                      <img src="https://mytadoba.org/wp-content/uploads/2022/02/donate-calltoaction.jpg"
                           alt="butterfly"
                           className="h-full w-full object-cover transform transition duration-1000 hover:scale-125"
                      />
                    </div>
                    <div className="absolute text-white">
                      <div className="flex flex-col items-center gap-2 mt-4">
                         <h2 className="font-bold text-lg">YOUR SUPPORT IS VITAL</h2>
                         <p className="px-2 text-lg md:px-3 text-center">To know about greenlisted, conservation-compliant resorts and homestays</p>
                         <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=3646560" className="px-3 py-2 hover:bg-[#e67817] hover:text-gray-900 border-2 rounded-lg uppercase font-bold text-xl">Donate Now!</a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-8 bg-cyan-400" />
                <div className="my-4">
                  <FlipCard />
                </div>
            </div>
        </div>
      </div>
    </>
  )
};

export default Donation;
