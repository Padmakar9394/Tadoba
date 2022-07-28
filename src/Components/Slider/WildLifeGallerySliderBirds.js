import React, { useState, useCallback } from "react";
import Slider from "react-slick";
import ImageViewer from 'react-simple-image-viewer';
import {PrevArrow, NextArrow} from "../../settings/Arrows";

const WildLifeGallerySliderBirds = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const birds = [
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-10.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-9.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-8.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-6.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-7.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-5.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-4.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-2.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-3.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-birds-1.jpg"
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow : <NextArrow />,
    prevArrow : <PrevArrow />,
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
        <span className="">
          <Slider {...settings}>
            {birds.map((src, index) => (
              <div className="relative h-72" onClick={() => openImageViewer(index)}>
                <img
                  src={src}
                  key={index}
                  alt=""
                  className="absolute h-72"
                />
                <div className="absolute inset-0 hover:bg-gray-900 hover:bg-opacity-50"/>
                <div className="relative text-white">
                  <h1 className="text-lg font-bold my-32 mx-28">Birds</h1>
                </div>
              </div>
            ))}
          </Slider>
        </span>

        {isViewerOpen && (
          <ImageViewer
            src={birds}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 50
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    </>
  )
};

export default WildLifeGallerySliderBirds;
