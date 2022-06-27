import React from "react";

const Poster = (props) => {
  return (
    <div className="h-64">
      <img
        src={props.src}
        alt="bg-img"
        className="w-full h-full rounded-md"
      />
    </div>
  )
};

export default Poster;
