import React from "react";
import Slider from "react-slick";
import {PrevArrow, NextArrow} from "../../settings/Arrows";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="relative h-48">
            <div className="absolute h-40 top-4 left-20">
              <img
                className="w-full h-full object-cover"
                src={props.src}
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
    autoplay: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    InitialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow : <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((image) => (
          <EntertainmentCard src={image} />
        ))}
      </Slider>
    </>
  );
};

export default PartnerSlider;
