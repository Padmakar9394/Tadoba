import React from "react";

export const NextArrow = ({ currentSlide, slideCount, ...props }) => {
  return (
    <>
      <img src="https://p7.hiclipart.com/preview/327/148/46/arrow-encapsulated-postscript-computer-icons-next-button-thumbnail.jpg" alt="nextArrow" {...props} />
    </>
  );
};

export const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
  return (
    <>
     <img src="https://p7.hiclipart.com/preview/166/297/205/font-awesome-arrow-computer-icons-angle-left-arrow-thumbnail.jpg" alt="prevArrow" {...props} />
    </>
  );
};
