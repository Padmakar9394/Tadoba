import React, { useState, useCallback } from "react";
import Slider from "react-slick";
import ImageViewer from 'react-simple-image-viewer';
import {PrevArrow, NextArrow} from "../../settings/Arrows";

const AboutSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-1-1.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-6.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-3.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-9.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-5.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-2.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-8.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-1.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-4.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-landscapes-7.jpg"
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
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div className="h-72">
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              key={index}
              alt=""
              className="w-full h-full"
            />
          </div>
        ))}
      </Slider>

        {isViewerOpen && (
            <ImageViewer
              src={images}
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
    )
};

export default AboutSlider;
