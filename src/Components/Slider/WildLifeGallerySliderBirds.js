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
              <div className="h-72">
                <img
                  src={src}
                  onClick={() => openImageViewer(index)}
                  key={index}
                  alt=""
                  className="h-full"
                />
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
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    </>
  )
};

export default WildLifeGallerySliderBirds;
