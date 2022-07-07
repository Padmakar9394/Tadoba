import React from "react";
import Slider from "react-slick";
import {PrevArrow, NextArrow} from "../../settings/Arrows";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="relative h-56">
            <div className="absolute h-44 top-4 md:left-20 left-24">
              <img
                src={props.src}
                className="h-full"
                alt="entertainment image"
              />
            </div>
        <div className="absolute inset-0 hover:bg-black hover:bg-opacity-50"></div>
      </div>
    </>
  );
};

const PartnerSlider = () => {
  const images = [
    "https://mytadoba.org/wp-content/uploads/2022/03/partners-ntca.png",
    "https://mytadoba.org/wp-content/uploads/2022/03/partners-wii.png",
    "https://mytadoba.org/wp-content/uploads/2022/03/partners-fsi.png",
    "https://mytadoba.org/wp-content/uploads/2022/03/partners-fri.png",
    "https://mytadoba.org/wp-content/uploads/2022/03/partners-fdcm.png",
    "https://mytadoba.org/wp-content/uploads/2022/03/partners-maha-tourism.png",
    "https://mytadoba.org/wp-content/uploads/2022/03/partners-maha-gov.png",
    "https://mytadoba.org/wp-content/uploads/2022/03/partners-moefcc.png"
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
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <EntertainmentCard src={image} />
        ))}
      </Slider>
    </div>
    </>
  );
};

export default PartnerSlider;
