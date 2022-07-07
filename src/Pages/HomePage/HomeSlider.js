import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const HomeSlider = () =>  {
  return (
    <>
      <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper swiper-container swiper-scale-effect swiper-wrapper">
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="slide1 swiper-slide-cover"></div>
            <div class="one animate fadeUp text1 md:w-5/12 pl-8 md:pl-16 mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold uppercase">Get that wild safari experience, morning, evening and night</h2>
                <button className="bg-amber-400 text-lg text-black font-semibold uppercase px-6 py-2 rounded-lg mt-4">Book Now!</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="slide2 swiper-slide-cover"></div>
              <div class="one animate fadeUp text1 md:w-5/12 pl-8 md:pl-16 mb-12 md:mb-16">
                  <h2 className="text-2xl md:text-4xl font-bold uppercase">Learn about our history and our stunning biodiversity</h2>
                  <button className="bg-amber-400 text-lg text-black font-semibold uppercase px-6 py-2 rounded-lg mt-4">Know More</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="slide3 swiper-slide-cover"></div>
              <div class="one animate fadeUp text1 md:w-5/12 pl-8 md:pl-16 mb-12 md:mb-16">
                  <h2 className="text-2xl md:text-4xl font-bold uppercase">Our Frontline Forest Guardians need your support</h2>
                  <button className="bg-amber-400 text-lg text-black font-semibold uppercase px-6 py-2 rounded-lg mt-4">Donate Now!</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="slide4 swiper-slide-cover"></div>
              <div class="one animate fadeUp text1 md:w-5/12 pl-8 md:pl-16 mb-12 md:mb-16">
                  <h2 className="text-2xl md:text-4xl font-bold uppercase">Plan the smallest details of your jungle adventure</h2>
                  <button className="bg-amber-400 text-lg text-black font-semibold uppercase px-6 py-2 rounded-lg mt-4">Click here!</button>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default HomeSlider;
