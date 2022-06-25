import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const Home = () =>  {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper swiper-container swiper-scale-effect swiper-wrapper">
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="slide1 swiper-slide-cover"></div>
            <div class="one animate fadeUp text1 w-5/12 left-16 mb-16">
                <h2 className="text-4xl font-bold uppercase">Learn about our history and our stunning biodiversity</h2>
                <button className="bg-amber-400 text-lg text-black font-semibold uppercase px-6 py-2 rounded-lg mt-4">Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="slide1 swiper-slide-cover"></div>
              <div class="one animate fadeUp text1 w-5/12 left-16 mb-16">
                  <h2 className="text-4xl font-bold uppercase">Learn about our history and our stunning biodiversity</h2>
                  <button className="bg-amber-400 text-lg text-black font-semibold uppercase px-6 py-2 rounded-lg mt-4">Know More</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="slide1 swiper-slide-cover"></div>
              <div class="one animate fadeUp text1 w-5/12 left-16 mb-16">
                  <h2 className="text-4xl font-bold uppercase">Learn about our history and our stunning biodiversity</h2>
                  <button className="bg-amber-400 text-lg text-black font-semibold uppercase px-6 py-2 rounded-lg mt-4">Know More</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="slide1 swiper-slide-cover"></div>
              <div class="one animate fadeUp text1 w-5/12 left-16 mb-16">
                  <h2 className="text-4xl font-bold uppercase">Learn about our history and our stunning biodiversity</h2>
                  <button className="bg-amber-400 text-lg text-black font-semibold uppercase px-6 py-2 rounded-lg mt-4">Know More</button>
              </div>  
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default Home;
