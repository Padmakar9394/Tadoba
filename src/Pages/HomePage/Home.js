import React from "react";
import HomeSlider from "./HomeSlider";
import PartnerSlider from "./partnersSlider";

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[400px] fixed">
          <img src="https://mytadoba.org/wp-content/uploads/2022/02/site-back.png"
               alt="tiger-bg-image"
               className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0">
          <HomeSlider />
          <div className="my-24 flex items-center px-32">
            <div className="w-1/3 pl-8">
              <section className="flex items-center gap-16 pl-4">
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
            <div className="w-2/3 pl-4 flex items-center gap-6 font-['Roboto_Slab']">
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
          <section className="relative">
            <img src="https://mytadoba.org/wp-content/uploads/2022/02/home-back-3.jpg"
                 alt="section-bg-image"
                 className="absolute h-[700px] w-full object-cover"
            />
            <div className="relative">
              <h1 className="uppercase text-2xl font-bold text-center pt-32 pb-4">BE ENCHANTED</h1>
              <div className="px-4 flex">
                <div className="w-1/2 px-20">
                  <span className="h-64 safariImg">
                    <img src="https://mytadoba.org/wp-content/uploads/2022/02/home-section3-image.png"
                         alt="flex-image"
                         className="w-full h-full object-cover"
                    />
                  </span>
                </div>
                <div className="w-1/2 text-md pr-12 py-6">
                  <p className="font-['Roboto_Slab']">Experience Tadoba’s dazzling biodiversity – from our famous tigers to our beautiful butterflies. <span className="font-semibold">Book a safari</span> into the wild heart of the jungle. Also get in touch with your own wild side with <span className="font-semibold">rappelling, zip-lining and zorbing</span>  at the Agarzari Adventure Camp. Take a boat ride on the stunning Irai backwaters. Go kayaking on Moharli lake. Stay at a log hut, or
                  <span className="font-semibold"> spend the night on a machaan</span> if you dare! Whether you’re seeking an adrenaline rush or a calming immersion in the lap of Nature, we’ve got something your speed.</p>
                  <h2 className=" font-['Roboto_Slab'] my-1">Where to stay, what to do – <span className="font-semibold">all the information you need</span>, right here.</h2>
                  <button className="bg-amber-400 hover:bg-amber-700 hover:text-white my-2 font-bold uppercase px-6 py-3 rounded-lg transition delay-300 hover:-translate-y-1 hover:scale-110 duration-150 ease-in-out">plan your visit</button>
                </div>
              </div>
            </div>
          </section>
          <div className="container px-32 my-28">
            <h1 className="text-center text-lg text-green-700 uppercase text-2xl font-bold mb-8">Our Partners</h1>
            <PartnerSlider />
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;

//--scale:1.10064; --translateX:0.801688px; --translateY:0.718563px; --rotateX:-1.25749deg; --rotateY:1.40295deg;
