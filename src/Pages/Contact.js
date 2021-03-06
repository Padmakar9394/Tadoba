import React from "react";
import {FaWhatsapp} from "react-icons/fa";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <div className="h-32 md:h-[250px]">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/contactus-featured-image-768x121.jpg"
                 alt="bg-img"
                 className="h-full object-fill"
            />
          </div>
          <h1 className="md:px-24 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">Contact Us</h1>
        </div>
        <div className="md:flex md:justify-between md:items-center px-6 mt-4 md:mt-8 md:px-32">
          <div className="drop-shadow-xl bg-white py-3 px-4 rounded-lg">
            <h1 className="my-2 text-lg font-['Open_Sans'] font-medium">TADOBA-ANDHARI TIGER RESERVE</h1>
            <h3 className="font-medium my-1">Mul Road, Chandrapur – 442401</h3>
            <h3 className="font-medium my-1">Maharashtra, India</h3>
            <h3 className="font-medium my-1">Tel:<span className="text-orange-400">+91-9579-160778 / 7172-277116</span></h3>
            <h3 className="font-medium my-1">Email: <span className="text-orange-400">info@mytadoba.org</span></h3>
            <h4 className="font-medium mt-5">Booking issues?</h4>
            <button className="flex items-center font-semibold mt-3 mb-2 px-2 py-2 text-white rounded transition delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out bg-gradient-to-r from-green-400 to-orange-500">
              <FaWhatsapp />
              <h2 className="text-lg px-1 font-['Open_Sans']">WhatsApp Us</h2>
            </button>
          </div>
          <aside style={{height : "fit-content"}} className="md:w-6/12 sticky bg-white p-3 shadow-md rounded-xl mt-4 md:mt-0">
              <h1 className="text-lg font-bold font-medium">TADOBA-ANDHARI TIGER RESERVE</h1>
              <h5 className="font-semibold">Map</h5>
              <div className="w-full h-72">
                <MapContainer center={[19.967677187767702, 79.30323496825797]} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[19.967677187767702, 79.30323496825797]}>
                    <Popup>
                      Head Office Tadoba-Andhari Tiger Reserve
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
          </aside>
        </div>
        <div className="px-6 md:px-32 mt-16 ">
          <hr className="bg-cyan-500" />
        </div>
        <form className="px-6 md:px-32 my-16 flex flex-col">
          <div className="md:flex md:items-center md:gap-12 md:my-4">
            <div className="flex flex-col gap-2 md:w-2/5">
              <label className="text-lg">First Name <span className="text-xl text-red-600">*</span></label>
              <input type="text" className="" required/>
            </div>
            <div className="flex flex-col gap-2 md:w-2/5">
              <label className="text-lg">Last Name <span className="text-xl text-red-600">*</span></label>
              <input type="text" className="" required/>
            </div>
          </div>
          <div className="md:flex md:items-center md:gap-12 md:my-4">
            <div className="flex flex-col gap-2 md:w-2/5">
              <label className="text-lg">Mobile No. <span className="text-xl text-red-600">*</span></label>
              <input type="tel" className="" required/>
            </div>
            <div className="flex flex-col gap-2 md:w-2/5">
              <label className="text-lg">Email <span className="text-xl text-red-600">*</span></label>
              <input type="email" className="" required/>
            </div>
          </div>
          <div className="items-start flex flex-col w-full">
            <label className="text-lg">Message <span className="text-xl text-red-600">*</span></label>
            <textarea  rows="10" cols="40" className="" required></textarea>
            <input type="submit" value="Submit" className="transition delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out my-6 py-2 px-5 font-semibold text-white rounded-md bg-gradient-to-r from-green-400 to-orange-500"/>
          </div>
      </form>
      </div>
    </>
  )
};

export default Contact;
