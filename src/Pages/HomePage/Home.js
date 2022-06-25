import React from "react";
import HomeSlider from "./HomeSlider";

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
          <div className="my-16 flex items-center px-32">
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
        </div>
      </div>
    </>
  )
};

export default Home;
