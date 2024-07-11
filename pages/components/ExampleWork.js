import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import Flooring from "../../public/flooring.jpg";
import Flooring1 from "../../public/flooring1.jpg";
import Flooring2 from "../../public/flooring2.jpg";
import Tilewall from "../../public/tilewall.jpg";
import Tilewall1 from "../../public/tilewall1.jpg";
import TileLaundry from "../../public/tilelaundry.jpg";
import TileLaundry1 from "../../public/tilelaundry1.jpg";
import TileBath from "../../public/tilebath.jpg";
import TileBath1 from "../../public/tilebath1.jpg";
import TileBathWall from "../../public/tilebathwall.jpg";
import TileBathWall1 from "../../public/tilebathwall1.jpg";

const sliderData = [
  { url: Flooring },
  { url: Flooring1 },
  { url: Flooring2 },
  { url: Tilewall },
  { url: Tilewall1 },
  { url: TileLaundry },
  { url: TileLaundry1 },
  { url: TileBath },
  { url: TileBath1 },
  { url: TileBathWall },
  { url: TileBathWall1 },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide((slide + length - 1) % length);
  };
  const nextSlide = () => {
    setSlide((slide + 1) % length);
  };

  return (
    <div className="mx-auto my-5 px-2 py-8 relative flex rounded-xl shadow-lg justify-center items-center max-w-lg">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {sliderData.map((pic, index) => {
        return (
          <div
            key={index}
            className={index === slide ? "block" : "hidden"} //use "block" to show, "hidden" to hide
          >
            <Image
              className="w-full h-full object-cover rounded-md transition"
              src={pic.url}
              alt="/"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
