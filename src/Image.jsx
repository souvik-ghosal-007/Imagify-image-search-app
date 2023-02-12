import React from "react";

const Image = ({ image }) => {
  return (
    <div className="image">
      <img
        className="img"
        src={image.urls.regular}
        alt=""
      />
    </div>
  );
};

export default Image;
