import React, { useState } from "react";


const WildLifeSafari = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
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
            <div className="h-32 md:h-[230px]">
              <img src="https://mytadoba.org/wp-content/uploads/2022/02/safaris-featured-image.jpg"
                   alt="bg-img"
                   className="h-full object-fill"
              />
            </div>
            <h1 className="md:px-32 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">WILDLIFE SAFARIS</h1>
          </div>
          <h1 className="text-center md:px-32 my-8 text-xl font-bold font-['Roboto_Slab'] uppercase">Book a safari</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:px-32 px-4">
            <div className="bg-[#e67817] hover:bg-[#20754B]">
              <div className="flex flex-col items-center gap-4 h-64 px-6 py-10 text-white font-['Roboto_Slab'] transform transition duration-1000 hover:scale-105">
                <h1 className="uppercase text-2xl font-bold text-center">safari: regular</h1>
                <p className="text-center">For Core and Buffer Gates. Tourists can book up to 120 days in advance.</p>
                <button className="px-3 py-2 text-xl border rounded-xl font-semibold uppercase hover:bg-[#e67817]">Book Now!</button>
              </div>
            </div>
            <div className="bg-[#875B3E] hover:bg-[#20754B]">
              <div className="flex flex-col items-center gap-4 h-64 px-6 py-10 text-white font-['Roboto_Slab'] transform transition duration-1000 hover:scale-105">
                <h1 className="uppercase text-2xl font-bold text-center">safari: regular</h1>
                <p className="text-center">For Core and Buffer Gates. Tourists can book up to 120 days in advance.</p>
                <button className="px-3 py-2 text-xl border rounded-xl font-semibold uppercase hover:bg-[#e67817]">Book Now!</button>
              </div>
            </div>
            <div className="bg-[#3d673a] hover:bg-[#20754B]">
              <div className="flex flex-col items-center gap-4 h-64 px-6 py-10 text-white font-['Roboto_Slab'] transform transition duration-1000 hover:scale-105">
                <h1 className="uppercase text-2xl font-bold text-center">safari: regular</h1>
                <p className="text-center">For Core and Buffer Gates. Tourists can book up to 120 days in advance.</p>
                <button className="px-3 py-2 text-xl border rounded-xl font-semibold uppercase hover:bg-[#e67817]">Book Now!</button>
              </div>
            </div>
          </div>
          <p className="px-2 md:px-32 font-['Roboto_Slab'] my-4"><span className="font-semibold">NOTE: (1)</span> You can use the <span className="font-semibold text-[#20754B] hover:text-[#875B3E] bg-[#d7d7d7] px-2 py-1">INTERACTIVE MAP</span> here to see what Zone best fits your travel plans. <span className="font-semibold">(2)</span> Offline (on-the-spot) bookings can only be made at <span className="font-semibold">Buffer Gates</span> and are subject to availability of slots. <span className="font-semibold">(3)</span> Visitors are required to adhere to the tiger reserve’s <span className="font-semibold">rules and regulations</span>. Click here for the <span className="font-semibold text-[#20754B] hover:text-[#875B3E] bg-[#d7d7d7] px-2 py-1">CORE</span> and <span className="font-semibold text-[#20754B] hover:text-[#875B3E] bg-[#d7d7d7] px-2 py-1">BUFFER</span> rules. <span className="font-semibold">(4)</span> Click here for details about our Booking <span className="font-semibold text-[#20754B] hover:text-[#875B3E] bg-[#d7d7d7] px-2 py-1">CANCELLATION</span> and <span className="font-semibold text-[#20754B] hover:text-[#875B3E] bg-[#d7d7d7] px-2 py-1">REFUND</span> policies.</p>
          <h1 className="md:px-32 text-center text-xl font-bold font-['Roboto_Slab'] uppercase my-8">Safari Fees</h1>
          <div className="md:px-32 my-8 md:my-16">
            <table class="table-auto border md:w-full">
              <thead>
                <tr className="text-sm md:text-lg bg-[#f9f9f9] hover:bg-[#F3F3F3]">
                  <th className="text-start py-1 px-2">PERIOD</th>
                  <th className="text-start px-2">MORNING</th>
                  <th className="text-start px-2"></th>
                  <th className="text-start px-2">EVENING</th>
                  <th className="text-start px-2"></th>
                </tr>
                <tr className="hover:bg-[#F3F3F3] text-sm md:text-lg">
                  <th className="text-start bg-[#f9f9f9]"></th>
                  <th className="text-start border border-r-transparent border-l-transparent py-1 px-2">Entry</th>
                  <th className="text-start border border-r-transparent border-l-transparent px-2">Exit</th>
                  <th className="text-start border border-r-transparent border-l-transparent px-2">Entry</th>
                  <th className="text-start border border-l-transparent px-2">Exit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm md:text-lg  border bg-[#f9f9f9] hover:bg-[#F3F3F3]">
                  <td className="py-1 px-2">1 – 31 Oct</td>
                  <td className="px-2">06:00hrs</td>
                  <td className="px-2">10:00hrs</td>
                  <td className="px-2">14:30hrs</td>
                  <td className="px-2">18:30hrs</td>
                </tr>
                <tr className="text-sm md:text-lg  border hover:bg-[#F3F3F3]">
                  <td className="py-1 px-2">1 Nov – 28/29 Feb</td>
                  <td className="px-2">06:30hrs</td>
                  <td className="px-2">10:30hrs</td>
                  <td className="px-2">14:00hrs</td>
                  <td className="px-2">18:00hrs</td>
                </tr>
                <tr className="text-sm md:text-lg  border bg-[#f9f9f9] hover:bg-[#F3F3F3]">
                  <td className="py-1 px-2">1 Mar – 30 Apr</td>
                  <td className="px-2">06:00hrs</td>
                  <td className="px-2">10:00hrs</td>
                  <td className="px-2">14:30hrs</td>
                  <td className="px-2">18:30hrs</td>
                </tr>
                <tr className="text-sm md:text-lg  border hover:bg-[#F3F3F3]">
                  <td className="py-1 px-2">1 May – 30 June</td>
                  <td className="px-2">05:30hrs</td>
                  <td className="px-2">09:30hrs</td>
                  <td className="px-2">15:00hrs</td>
                  <td className="px-2">19:00hrs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 className="hidden md:block text-center text-xl font-bold font-['Roboto_Slab'] uppercase my-8">Safari Fees</h1>
          <div className="hidden md:flex md:flex-col font-['Roboto_Slab'] md:my-8 md:px-32">
            <div className="flex flex-col md:flex-row">
              <button className={toggleState === 1 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                      onClick={() => toggleTab(1)}>
                CORE</button>
              <button className={toggleState === 2 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                      onClick={() => toggleTab(2)}>
                BUFFER</button>
              <button className={toggleState === 3 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                      onClick={() => toggleTab(3)}>
                NIGHT SAFARI</button>
              <button className={toggleState === 4 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                      onClick={() => toggleTab(4)}>
                FULL-DAY PHOTOGRAPHY / VIDEOGRAPHY</button>
            </div>

            <div className="">
              <div className={toggleState === 1 ? "block px-4 border border-[#e67817] border-t-transparent" : "bg-white hidden"}>
              <table class="table-auto my-8 w-full">
                <thead>
                  <tr className="bg-[#f9f9f9] hover:bg-[#F3F3F3]">
                    <th className="text-start text-sm py-1 px-2">FEES</th>
                    <th className="text-start text-sm px-2">BOOKING IN 4-59 DAYS</th>
                    <th className="text-start text-sm px-2"></th>
                    <th className="text-start text-sm px-2">BOOKING IN 60-120 DAYS</th>
                    <th className="text-start text-sm px-2"></th>
                    <th className="text-start text-sm px-2">BOOKING IN 1-3 DAYS (TATKAL)</th>
                  </tr>
                  <tr className="hover:bg-[#F3F3F3]">
                    <th className="text-start text-sm bg-[#f9f9f9]"></th>
                    <th className="text-start text-sm border border-r-transparent border-l-transparent py-1 px-2">Monday to Friday</th>
                    <th className="text-start text-sm text-sm border border-r-transparent border-l-transparent px-2">Saturday & Sunday</th>
                    <th className="text-start text-sm border border-r-transparent border-l-transparent px-2">Monday to Friday</th>
                    <th className="text-start text-sm border border-r-transparent border-l-transparent px-2">Saturday & Sunday</th>
                    <th className="text-start text-sm border border-l-transparent px-2">Monday to Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border bg-[#f9f9f9] hover:bg-[#F3F3F3]">
                    <td className="py-1 px-2 text-sm font-semibold">Entry</td>
                    <td className="px-2">₹1000</td>
                    <td className="px-2">₹2000</td>
                    <td className="px-2">₹4000</td>
                    <td className="px-2">₹8000</td>
                    <td className="px-2">₹4000</td>
                  </tr>
                  <tr className="border hover:bg-[#F3F3F3]">
                    <td className="py-1 px-2 text-sm font-semibold">Guide</td>
                    <td className="px-2">₹500</td>
                    <td className="px-2">₹500</td>
                    <td className="px-2">₹500</td>
                    <td className="px-2">₹500</td>
                    <td className="px-2">₹500</td>
                  </tr>
                  <tr className="border bg-[#f9f9f9] hover:bg-[#F3F3F3]">
                    <td className="py-1 px-2 text-sm font-semibold">Gypsy</td>
                    <td className="px-2">₹3000</td>
                    <td className="px-2">₹3000</td>
                    <td className="px-2">₹3000</td>
                    <td className="px-2">₹3000</td>
                    <td className="px-2">₹3000</td>
                  </tr>
                  <tr className="border hover:bg-[#F3F3F3]">
                    <td className="py-1 px-2 text-sm font-semibold">Processing</td>
                    <td className="px-2">₹75</td>
                    <td className="px-2">₹75</td>
                    <td className="px-2">₹75</td>
                    <td className="px-2">₹75</td>
                    <td className="px-2">₹75</td>
                  </tr>
                  <tr className="border border-b-transparent bg-[#f9f9f9] hover:bg-[#F3F3F3]">
                    <td className="py-1 px-2 text-sm font-semibold">Total</td>
                    <td className="px-2 text-sm font-semibold">₹4575</td>
                    <td className="px-2 text-sm font-semibold">₹5575</td>
                    <td className="px-2 text-sm font-semibold">₹7575</td>
                    <td className="px-2 text-sm font-semibold">₹11575</td>
                    <td className="px-2 text-sm font-semibold">₹7575</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div className={toggleState === 2 ? "block px-4 border border-[#e67817] border-t-transparent" : "bg-white hidden"}>
                <table class="table-auto my-8 w-full">
                  <thead>
                    <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                      <th className="text-start px-2 py-2">FEES</th>
                      <th className="text-start px-2">BOOKING IN 1-120 DAYS</th>
                      <th className="text-start px-2">SPOT BOOKING</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-[#F3F3F3]">
                      <td className="px-2 py-2 font-bold">Entry</td>
                      <td className="px-2">₹1000</td>
                      <td className="px-2">₹2000</td>
                    </tr>
                    <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                      <td className="px-2 py-2 font-bold">Guide</td>
                      <td className="px-2">₹500</td>
                      <td className="px-2">₹500</td>
                    </tr>
                    <tr className="border-b hover:bg-[#F3F3F3]">
                      <td className="px-2 py-2 font-bold">Gypsy</td>
                      <td className="px-2">₹2500</td>
                      <td className="px-2">₹2500</td>
                    </tr>
                    <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                      <td className="px-2 py-2 font-bold">Processing</td>
                      <td className="px-2">₹75</td>
                      <td className="px-2"></td>
                    </tr>
                    <tr className=" hover:bg-[#F3F3F3]">
                      <td className="px-2 py-2 font-bold">Total</td>
                      <td className="px-2 font-bold">₹4075</td>
                      <td className="px-2 font-bold">₹5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={toggleState === 3 ? "block px-4 border border-[#e67817] border-t-transparent" : "bg-white hidden"}>
              <table class="table-auto my-8 w-full">
                <thead>
                  <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                    <th className="text-start px-2 py-2">FEES</th>
                    <th className="text-start px-2">BOOKING IN 1-120 DAYS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Entry</td>
                    <td className="px-2">₹1500</td>
                  </tr>
                  <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Guide</td>
                    <td className="px-2">₹500</td>
                  </tr>
                  <tr className="border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Gypsy</td>
                    <td className="px-2">₹2200</td>
                  </tr>
                  <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Processing</td>
                    <td className="px-2">₹75</td>
                  </tr>
                  <tr className=" hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Total</td>
                    <td className="px-2 font-bold">₹4275</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div className={toggleState === 4 ? "block px-4 border border-[#e67817] border-t-transparent" : "bg-white hidden"}>
              <table class="table-auto my-8 w-full">
                <thead>
                  <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                    <th className="text-start px-2 py-2">FEES</th>
                    <th className="text-start px-2">INDIAN TOURISTS</th>
                    <th className="text-start px-2">FOREIGN TOURISTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Ticket</td>
                    <td className="px-2">One Online Ticket</td>
                    <td className="px-2">One Online Ticket</td>
                  </tr>
                  <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Permission</td>
                    <td className="px-2">₹30,000</td>
                    <td className="px-2">₹45,000</td>
                  </tr>
                  <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Guide</td>
                    <td className="px-2">₹1050</td>
                    <td className="px-2">₹1050</td>
                  </tr>
                  <tr className="border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Gypsy</td>
                    <td className="px-2">₹8100</td>
                    <td className="px-2">₹8100</td>
                  </tr>
                  <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Camera</td>
                    <td className="px-2">No Charge</td>
                    <td className="px-2">No Charge</td>
                  </tr>
                  <tr className=" hover:bg-[#F3F3F3]">
                    <td className="px-2 py-2 font-bold">Total</td>
                    <td className="px-2 font-bold">₹39,150</td>
                    <td className="px-2 font-bold">₹54,150</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
};

export default WildLifeSafari;
