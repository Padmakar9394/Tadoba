import React from "react";
import Slider from "react-slick"
import {PrevArrow, NextArrow} from "./../settings/Arrows";
import PartnerSlider from "./HomePage/partnersSlider";

const WildCard = (props) => {
  return (
    <>
      <div className="h-64 px-1">
        <img
          src={props.src}
          alt="wild-image"
          className="h-full"
        />
      </div>
    </>
  );
};

const OtherAdventures = () => {
  const images = [
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-machaan.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-night-safari.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-birding.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-butterfly.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/02/activities-camping.jpg",
  ];

  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow : <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
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
                <img src="https://mytadoba.org/wp-content/uploads/2022/02/adventures-featured-image.jpg"
                     alt="bg-img"
                     className="h-full object-fill"
                />
              </div>
              <h1 className="md:px-24 text-white text-lg md:text-2xl uppercase font-bold mt-16 absolute left-28 md:left-0 bottom-0">other adventures</h1>
            </div>
            <section className="w-screen">
              <div className="bg-[#EBEBEB] md:px-32 my-12">
                <Slider {...settings}>
                  {images.map((image) => (
                    <WildCard src={image} />
                  ))}
                </Slider>
              </div>
              <div className="px-6 md:px-32">
                <hr className="bg-cyan-300" />
              </div>
            </section>
            <div className="px-32 my-8">


            </div>
          </div>
        </div>
      </>
  )
};


export default OtherAdventures;
