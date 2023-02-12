import React from "react";
import Image from "./Image";

const ImageContainer = ({ images }) => {
  return (
    <div className="imageContainer">
      {images.map((image) => (
        <Image image={image} key={image.id} />
      ))}
    </div>
  );
};

export default ImageContainer;
