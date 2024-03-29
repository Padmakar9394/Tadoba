import React from "react";
import { Disclosure } from '@headlessui/react';
import { BiChevronUp } from "react-icons/bi";

const TouristHub = () => {
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
            <div className="absolute w-full">
              <div className="relative">
                <div className="w-full h-32 md:h-[250px]">
                  <img src="https://mytadoba.org/wp-content/uploads/2022/02/about-featured-image.jpg"
                       className="w-full h-full object-fill"
                       alt="bg-img"
                  />
                </div>
                <h1 className="md:px-24 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">Plan your visit</h1>
              </div>
            </div>
            <div className="absolute top-28 md:top-64 w-full">
              <div className="relative my-16">
              <div className="hidden md:block relative w-full h-[700px] md:h-[450px]">
                <img src="https://mytadoba.org/wp-content/uploads/2022/03/tourist-info-back.jpg"
                     className="w-full h-full object-cover"
                     alt="bg-img"
                />
              </div>
              <div className="md:hidden relative w-full h-[700px] md:h-[450px]">
                <img src="https://mytadoba.org/wp-content/uploads/2022/03/tourist-info-back-mobile.jpg"
                     className="w-full h-full object-cover"
                     alt="bg-img"
                />
              </div>
              <span className="absolute top-0 px-4 md:px-32 text-white">
                <div className="md:flex md:items-center md:gap-12 md:px-4 pt-4 md:pt-16">
                  <div className="flex flex-col gap-4 md:w-1/2">
                    <h1 className="font-bold text-lg md:text-xl">GETTING TO TATR</h1>
                    <h3>There are several ways to reach Tadoba, which is among the best connected tiger reserves in India.</h3>
                    <p><span className="font-bold">DRIVING</span>: Nagpur is the closest large city and is just about 100km from the Kolara Gate and 150km from the Moharli Gate. Good highways connect Tadoba to Nagpur, Hyderabad, Amravati and Yevatmal. Tourists even drive in from as far afield as Pune, Bangalore, Kolkata and Mumbai!</p>
                    <h3><span className="font-bold">RAILWAYS</span>: The nearby Railway Stations are Chandrapur, Wardha and Nagpur.</h3>
                    <h3><span className="font-bold">AIRPORT</span>: Nagpur’s Dr. Babasaheb Ambedkar Airport, which has good connections to major Indian cities, is the nearest airport.</h3>
                  </div>
                  <div className="md:w-[500px] py-2 md:p-2">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex items-center w-full justify-between px-4 py-2 text-lg font-medium border border-gray-100">
                              <span className={`${open ? 'text-orange-400' : '' }`}>
                                February to April</span>
                              <BiChevronUp
                                className={`${
                                  open ? 'rotate-180 transform text-orange-400' : ''
                                } h-5 w-5`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 py-2 text-md text-gray-100 border border-gray-100">
                              Tadoba is in full bloom in the Spring. Palas aka the flame of the forest (Butea monosperma),
                              mahua (Madhuca indica), kumbhi (Careya arborea), and ghogar – dikemali (Gardenia latifolia)
                              are among the trees flowering.The golden yellow chandeliers of bahava (Cassia fistula) begin
                               to attract birds and insects.
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-lg font-medium border border-gray-100">
                              <span className={`${open ? 'text-orange-400' : '' }`}>April to June</span>
                              <BiChevronUp
                                className={`${
                                  open ? 'rotate-180 transform text-orange-400' : ''
                                } h-5 w-5`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 py-2 text-md text-gray-100 border border-gray-100">
                              The weather may be scorching hot but the deciduous forest is shedding its
                               leaves, improving visibility and increasing the chances of wildlife sightings.
                                A great time to be in the jungle and watch animals come down to waterholes for
                                a much needed drink.
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-lg font-medium border border-gray-100">
                              <span className={`${open ? 'text-orange-400' : '' }`}>July to October</span>
                              <BiChevronUp
                                className={`${
                                  open ? 'rotate-180 transform text-orange-400' : ''
                                } h-5 w-5`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 py-2 text-md text-gray-100 border border-gray-100">
                              Tadoba is verdant in the monsoon. Some parts of the park are open for tourism and the
                              jungle is a sight to behold in the pouring rain. There is a surplus of food and many
                               animals, from birds and butterflies to megafauna, produce offspring in this season.
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-lg font-medium border border-gray-100">
                              <span className={`${open ? 'text-orange-400' : '' }`}>November to January</span>
                              <BiChevronUp
                                className={`${
                                  open ? 'rotate-180 transform text-orange-400' : ''
                                } h-5 w-5`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 py-2 text-md text-gray-100 border border-gray-100">
                              The air is crisp in the early mornings and late evenings now. The forest is
                              lovely in the warmth of the winter sun, and the animals too enjoy  basking
                              in the golden light. The mating calls of male deer resound in the forests.
                              Its a great time for birdwatching too, with the arrival of migratory birds.
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                </div>
              </span>
              </div>
            </div>
            <div className="absolute top-[850px] md:top-96 md:mt-96 w-full px-2 md:px-28">
              <div className="md:flex md:items-center md:gap-4 mt-20">
                <div className="relative md:w-[400px] h-72 my-4 md:my-8">
                  <img src="https://mytadoba.org/wp-content/uploads/2022/02/tourist-safari-calltoaction.jpg"
                          alt="bg-card-img"
                          className="absolute w-full h-full object-cover"
                  />
                  <span className="absolute"></span>
                  <span className="relative hover:bg-black h-full w-full text-white py-8 md:px-4 flex flex-col items-center gap-3 transform transition duration-700 hover:scale-105">
                    <h2 className="font-bold text-xl">WILDLIFE SAFARIS</h2>
                    <p className="px-2 text-lg md:px-3 text-center">To know about safari bookings, timings, fees, rules and regulations, refunds and cancellations etc</p>
                    <button className="mt-4 px-3 py-2 hover:bg-orange-500 hover:text-gray-900 text-center border-2 rounded-lg uppercase font-bold text-xl">Click Here</button>
                  </span>
                </div>
                <div className="relative md:w-[400px] h-72 my-4 md:my-8">
                  <img src="https://mytadoba.org/wp-content/uploads/2022/02/tourist-activities-calltoaction.jpg"
                          alt="bg-card-img"
                          className="absolute w-full h-full object-cover"
                  />
                  <span className="absolute"></span>
                  <span className="relative hover:bg-black h-full w-full text-white py-8 md:px-4 flex flex-col items-center gap-3 transform transition duration-700 hover:scale-105">
                    <h2 className="font-bold text-xl">OTHER ADVENTURES</h2>
                    <p className="px-2 text-lg md:px-3 text-center">To know about booking other activities such as boating, kayaking, birding machans, cycling etc</p>
                    <button className="mt-4 px-3 py-2 hover:bg-orange-500 hover:text-gray-900 text-center border-2 rounded-lg uppercase font-bold text-xl">Click Here</button>
                  </span>
                </div>
                <div className="relative md:w-[400px] h-72 my-4 md:my-8">
                  <img src="https://mytadoba.org/wp-content/uploads/2022/02/tourist-resorts-calltoaction.jpg"
                          alt="bg-card-img"
                          className="absolute w-full h-full object-cover"
                  />
                  <span className="relative hover:bg-black h-full w-full text-white py-8 md:px-4 flex flex-col items-center gap-3 transform transition duration-700 hover:scale-105">
                    <h2 className="font-bold text-xl">RESORTS / HOMESTAYS</h2>
                    <p className="px-2 text-lg md:px-3 text-center">To know about greenlisted, conservation-compliant resorts and homestays</p>
                    <button className="mt-4 px-3 py-2 hover:bg-orange-500 hover:text-gray-900 text-center border-2 rounded-lg uppercase font-bold text-xl">Click Here</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
};

export default TouristHub;
