import React from "react";
import {FaWhatsapp} from "react-icons/fa";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  return (
    <>
      <div className="md:mx-20 px-6 md:px-0">
        <h1 className="text-2xl uppercase font-bold mt-20 mb-8">Contact Us</h1>
        <div className="flex justify-between items-center">
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
          <aside style={{height : "fit-content"}} className="hidden md:block md:w-6/12 sticky bg-white p-3 shadow-md rounded-xl">
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

        <form className="my-16 flex flex-col">
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
