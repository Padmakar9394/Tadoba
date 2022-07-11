import React, { useState } from "react";

const Management = () => {
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
              <div className="h-32 md:h-[250px]">
                <img src="https://mytadoba.org/wp-content/uploads/2022/03/organisation-featured-image.jpg"
                     alt="bg-img"
                     className="h-full object-fill"
                />
              </div>
              <h1 className="md:px-24 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">TATR MANAGEMENT</h1>
            </div>
            <div className="md:px-32 my-8 w-screen">
              <h1 className="text-center text-lg md:text-xl font-bold">MANAGEMENT STRUCTURE</h1>
              <div className="h-84 w-screen md:h-[600px] md:px-16 md:mt-8">
                <img src="https://mytadoba.org/wp-content/uploads/2022/03/organisational-chart.png"
                     className="h-full object-cover"
                     alt="bg-img"
                />
              </div>
              <h1 className="text-center text-xl font-bold uppercase">Contact Information</h1>

              <div className="fle flex-col mt-8 font-['Roboto_Slab']">
                <div className="flex flex-col md:flex-row">
                  <button className={toggleState === 1 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 border md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                          onClick={() => toggleTab(1)}>
                    Office of the Conservator of Forests & Field Director</button>
                  <button className={toggleState === 2 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 border md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                          onClick={() => toggleTab(2)}>
                    Office of the Dy. Director (Buffer)</button>
                  <button className={toggleState === 3 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 border md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                          onClick={() => toggleTab(3)}>
                    Office of the Dy. Director (Core)</button>
                  <button className={toggleState === 4 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 border md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                          onClick={() => toggleTab(4)}>
                    Office of the Asst. Conservator of Forests (STPF)</button>
                  <button className={toggleState === 5 ? "px-4 py-5 cursor-pointer font-bold text-[#e67817] text-center md:w-[50%] outline-none bg-white border border-[#e67817] md:border-b-transparent border-solid" : "px-4 py-5 border md:border-b border-[#e67817] border-solid cursor-pointer font-bold text-[#875B3E] text-center md:w-[50%] outline-none"}
                          onClick={() => toggleTab(5)}>
                    Office of the Subdivisional Officer (WL), Allapalli</button>
                </div>

                <div className="w-screen">
                  <div className={toggleState === 1 ? "display-block px-4 border border-[#e67817] md:border-t-transparent" : "bg-white hidden"}>
                    <table class="table-auto w-screen my-8">
                      <thead>
                        <tr className="bg-[#8ac5d7]">
                          <th className="text-start px-2 py-2">Officer</th>
                          <th className="text-start px-2">Designation</th>
                          <th className="text-start px-2">Telephone</th>
                          <th className="text-start px-2">E-mail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Dr. Jitendra Ramgaonkar, IFS</td>
                          <td className="px-2">Conservator of Forests & Field Director, TATR</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07172-251414/277116, +91-9623085361</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">ccffdtadoba2@mahaforest.govt.in, ccf_fdtatr@rediffmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">-</td>
                          <td className="px-2">Divisional Forest Officer, TATR</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07172-251414</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">dfotatr@rediffmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={toggleState === 2 ? "display-block px-4 border border-[#e67817] md:border-t-transparent" : "bg-white hidden"}>
                    <table class="table-auto w-screen my-8">
                      <thead>
                        <tr className="bg-[#8ac5d7]">
                          <th className="text-start px-2 py-2">Officer</th>
                          <th className="text-start px-2">Designation</th>
                          <th className="text-start px-2">Telephone</th>
                          <th className="text-start px-2">E-mail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri G. Guruprasad, IFS	</td>
                          <td className="px-2">Deputy Director (Buffer), TATR Chandrapur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri Abhijit Waykos, IFS</td>
                          <td className="px-2">Assistant Conservator of Forests (Land, FLCS & Campa), TATR Chandrapur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri B.C. Yele</td>
                          <td className="px-2">Assistant Conservator of Forests (FLCS), TATR Chandrapur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Ku. Swati Maheshkar</td>
                          <td className="px-2">Range Forest Officer, Chandrapur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri R.G. Moon</td>
                          <td className="px-2">Range Forest Officer, Moharli</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri G.R. Naigamkar</td>
                          <td className="px-2">Range Forest Officer, Mul</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri B.K. Tupe</td>
                          <td className="px-2">Range Forest Officer, Shioni</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri R.M. Themaskar</td>
                          <td className="px-2">Range Forest Officer, Palasgaon</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri Kiran Dhankute</td>
                          <td className="px-2">Range Forest Officer, Khadsangi</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] hover:bg-[#F3F3F3] border-b">
                          <td className="px-2 py-4">Shri Ravindra Choudharey</td>
                          <td className="px-2">Range Forest Officer (Mobile Squad), Chandrapur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={toggleState === 3 ? "display-block px-4 border border-[#e67817] md:border-t-transparent" : "bg-white hidden"}>
                    <table class="table-auto w-screen my-8">
                      <thead>
                        <tr className="bg-[#8ac5d7]">
                          <th className="text-start px-2 py-2">Officer</th>
                          <th className="text-start px-2">Designation</th>
                          <th className="text-start px-2">Telephone</th>
                          <th className="text-start px-2">E-mail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri N.V. Kale, IFS</td>
                          <td className="px-2">Deputy Director (Core), TATR Chandrapur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri R.R. Kulkarni</td>
                          <td className="px-2">Assistant Conservator of Forests (Protection Unit)</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri M.C. Khore</td>
                          <td className="px-2">Assistant Conservator of Forests (Land, FLCS & Campa)</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri S.K. Shende</td>
                          <td className="px-2">Range Forest Officer, Tadoba</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri D.G. Ramteke</td>
                          <td className="px-2">Range Forest Officer, Kolsa</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri A.R. Gound</td>
                          <td className="px-2">Range Forest Officer, Moharli (W.L.)</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri P.L. Chavhan</td>
                          <td className="px-2">Range Forest Officer, Kolara</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Ku. S.R. Krushnapurkar</td>
                          <td className="px-2">Range Forest Officer, Karwa</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={toggleState === 4 ? "display-block px-4 border border-[#e67817] md:border-t-transparent" : "bg-white hidden"}>
                    <table class="table-auto w-screen my-8">
                      <thead>
                        <tr className="bg-[#8ac5d7]">
                          <th className="text-start px-2 py-2">Officer</th>
                          <th className="text-start px-2">Designation</th>
                          <th className="text-start px-2">Telephone</th>
                          <th className="text-start px-2">E-mail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri B.C. Yele (Add.)</td>
                          <td className="px-2">Assistant Conservator of Forests (STPF), Chandrapur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri G.R. Naigamkar (Add.)</td>
                          <td className="px-2">Range Forest Officer (STPF), Mul</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri P.L. Chavhan (Add.)</td>
                          <td className="px-2">Range Forest Officer (STPF), Chimur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri P.R. Shirpurkar</td>
                          <td className="px-2">Range Forest Officer (STPF), Chandrapur</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={toggleState === 5 ? "display-block px-4 border border-[#e67817] md:border-t-transparent" : "bg-white hidden"}>
                    <table class="table-auto w-screen my-8">
                      <thead>
                        <tr className="bg-[#8ac5d7]">
                          <th className="text-start px-2 py-2">Officer</th>
                          <th className="text-start px-2">Designation</th>
                          <th className="text-start px-2">Telephone</th>
                          <th className="text-start px-2">E-mail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri N.S. Deogade (Add.)</td>
                          <td className="px-2">Sub-Divisional Officer (W.L.) Allapalli</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07133-266471, +91-9518990636</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">sdfowlalpli@gmail.com</td>
                        </tr>
                        <tr className="bg-[#f9f9f9] border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri G.M. Landge</td>
                          <td className="px-2">Range Forest Officer, Choudampalli</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">07135-297917, +91-9673558885</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">rfochaudampalli@gmail.com</td>
                        </tr>
                        <tr className="border-b hover:bg-[#F3F3F3]">
                          <td className="px-2 py-4">Shri R.B. Dhote</td>
                          <td className="px-2">Range Forest Officer, Bhamragarh</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">+91-9420619152</td>
                          <td className="px-2 text-[#875B3E] hover:text-[#e67817]">rfowbhamragad@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
};


export default Management;
