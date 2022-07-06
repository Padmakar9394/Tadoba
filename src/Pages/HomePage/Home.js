import React, { useEffect } from "react";
import Tilt from 'react-tilt';
import AOS from "aos";
import 'aos/dist/aos.css';

//components
import HomeSlider from "./HomeSlider";
import PartnerSlider from "./partnersSlider";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration : 2500,
      once: true
    });
  }, []);
  return (
    <>
      <div className="relative">
        <div className=" h-[400px] fixed">
          <img src="https://mytadoba.org/wp-content/uploads/2022/02/site-back.png"
               alt="tiger-bg-image"
               className="h-full object-cover"
          />
        </div>
        <div className="absolute top-20">
          <div className="hidden md:block" data-aos="fade-down"><HomeSlider /></div>
          <div className="flex items-center gap-2 md:my-24 md:px-32" data-aos="fade-down">
            <div className="md:w-1/3 md:pl-8">
              <section className="flex items-center md:gap-16 md:pl-4">
                <div className="h-24">
                  <img src="https://mytadoba.org/wp-content/uploads/elementor/thumbs/FD-logo-pkak3l12n6s9crhbyu8i4o29t0p3lyndqcab8u2k1s.png"
                       alt="logo1"
                       className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-24">
                  <img src="https://mytadoba.org/wp-content/uploads/elementor/thumbs/partners-maha-ecotourism-pmjh8tcz4wbyh3qoq378aykwoqj97hy6bfs383w0zk.png"
                       alt="logo2"
                       className="w-full h-full object-cover"
                  />
                </div>
              </section>
              <h2 className="text-center mt-6 text-md font-extrabold font-['Roboto_Slab']">The official website of Tadoba-Andhari Tiger Reserve, Forest Department, Government of Maharashtra</h2>
            </div>
            <div className="hidden md:flex w-2/3 items-center gap-6 font-['Roboto_Slab']">
              <div className="flex flex-col items-center text-sm text-[#252525]">
                <div className="h-28 w-24 mb-4">
                  <img src="https://mytadoba.org/wp-content/uploads/2022/02/chief-minister.png"
                       alt="chief-minister-image"
                       className="w-full h-full object-cover"
                  />
                </div>
                <h1>Shri Uddhav Balasaheb Thackeray</h1>
                <h3>Chief Minister</h3>
                <h3>Government of Maharashtra</h3>
              </div>
              <div className="flex flex-col items-center text-sm text-[#252525]">
                <div className="h-28 w-24 mb-4">
                  <img src="https://mytadoba.org/wp-content/uploads/2022/06/forest-minister-2.png"
                       alt="forest-minister-image"
                       className="w-full h-full object-cover"
                  />
                </div>
                <h1>Shri Dattatray Bharane</h1>
                <h3>Minister of State for Forests</h3>
                <h3>Government of Maharashtra</h3>
              </div>
              <div className="flex flex-col items-center text-sm text-[#252525]">
                <div className="h-28 w-24 mb-4">
                  <img src="https://mytadoba.org/wp-content/uploads/2022/02/forest-minister.png"
                       alt="Tourism-minister-image"
                       className="w-full h-full object-cover"
                  />
                </div>
                <h1>Shri Aaditya Thackeray</h1>
                <h3>Minister for Tourism & Environment</h3>
                <h3>Government of Maharashtra</h3>
              </div>
            </div>
          </div>
          <section className="relative my-4">
              <img src="https://mytadoba.org/wp-content/uploads/2022/03/home-back-e1647142885408.jpg"
                   alt="TATR-bg"
                   className="h-[1050px] md:h-screen object-cover"
              />
            <div className="absolute top-8 px-4 md:top-24 md:px-32">
              <h1 className="text-white text-center font-bold text-2xl">ABOUT TATR</h1>
              <div className="md:flex md:items-center md:gap-16 mt-4 md:mt-8">
                <div className="md:w-1/2 text-white text-lg">
                  <p className="font-['Roboto_Slab']">Located in the Chandrapur district of Maharashtra, the Tadoba-Andhari Tiger Reserve is one of India’s preeminent reserves. Its tropical dry deciduous forest ecosystem harbours at least 80 tigers, and there are over 200 tigers in the larger landscape. This is known to be the fastest-growing tiger population in the country. Tadoba also supports several other carnivore species, including the leopard and dhole, with the sambar, chital, wild pig and gaur being the most common prey species.</p>
                  <p className="mt-2 font-['Roboto_Slab']">Know more about Tadoba’s history and biodiversity, and the sustained conservation efforts over the decades that have led to the revival of tigers and other wildlife here.</p>
                  <button className="bg-amber-400 hover:bg-amber-600 text-xl hover:text-white mt-6 font-bold uppercase px-6 py-3 rounded-lg transition delay-300 hover:-translate-y-1 hover:scale-110 duration-150 ease-in-out">Learn More</button>
                </div>
                <div className="h-[370px] mt-8 md:mt-0">
                  <img src="https://mytadoba.org/wp-content/uploads/2022/02/home-section2-image.png"
                       alt="TATR-image"
                       className="h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="relative">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/home-back-3.jpg"
                 alt="section-bg-image"
                 className="h-[700px] md:h-screen object-cover"
            />
            <div className="absolute top-0 w-screen">
              <h1 className="uppercase text-2xl font-bold text-center mt-8 md:mt-28" data-aos="fade-down">BE ENCHANTED</h1>
              <div className="flex flex-col md:flex-row md:px-20">
                <div className="md:w-1/2 pl-12" data-aos="fade-right">
                  <Tilt className="Tilt h-56 md:h-80">
                    <img src="https://mytadoba.org/wp-content/uploads/2022/02/home-section3-image.png"
                         alt="flex-image"
                         className="h-full object-cover"
                    />
                  </Tilt>
                </div>
                <div className="flex flex-col md:w-1/2 text-md py-6" data-aos="fade-left">
                  <p className="font-['Roboto_Slab']">Experience Tadoba’s dazzling biodiversity – from our famous tigers to our beautiful butterflies. <span className="font-semibold">Book a safari</span> into the wild heart of the jungle. Also get in touch with your own wild side with <span className="font-semibold">rappelling, zip-lining and zorbing</span>  at the Agarzari Adventure Camp. Take a boat ride on the stunning Irai backwaters. Go kayaking on Moharli lake. Stay at a log hut, or
                  <span className="font-semibold"> spend the night on a machaan</span> if you dare! Whether you’re seeking an adrenaline rush or a calming immersion in the lap of Nature, we’ve got something your speed.</p>
                  <h2 className=" font-['Roboto_Slab'] my-1">Where to stay, what to do – <span className="font-semibold">all the information you need</span>, right here.</h2>
                  <button className="bg-amber-400 hover:bg-amber-600 text-xl hover:text-white mt-6 font-bold uppercase px-6 py-3 rounded-lg transition delay-300 hover:-translate-y-1 hover:scale-110 duration-150 ease-in-out">plan your visit</button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-screen" data-aos="fade-up">
            <h1 className="text-center text-green-700 uppercase text-2xl font-bold mt-12 mb-8">Our Partners</h1>
            <div className="md:container md:px-32">
              <PartnerSlider />
            </div>
          </section>




        </div>
      </div>
    </>
  )
};

export default Home;
