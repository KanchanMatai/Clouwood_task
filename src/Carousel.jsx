import React from "react";
import { useSelector } from "react-redux";
import Image from "./Image";
import Controls from "./Controls";

const Carousel = () => {
  const currentIndex = useSelector((state) => state.currentIndex);
  const images = useSelector((state) => state.images);

  return (
    <div>
      <Image src={images[currentIndex]} />
      <Controls />
    </div>
  );
};

export default Carousel;
