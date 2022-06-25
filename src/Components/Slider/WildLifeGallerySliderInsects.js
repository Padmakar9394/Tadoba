import React, { useState, useCallback } from "react";
import Slider from "react-slick";
import ImageViewer from 'react-simple-image-viewer';
import {PrevArrow, NextArrow} from "../../settings/Arrows";

const WildLifeGallerySliderInscets = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const inscets = [
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-10.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-9.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-8.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-7.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-6.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-5.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-4.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-3.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-2.jpg",
    "https://mytadoba.org/wp-content/uploads/2022/03/aboutus-slideshow-insects-1.jpg"
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
    speed: 300,
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
            {inscets.map((src, index) => (
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
            src={inscets}
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

export default WildLifeGallerySliderInscets;
