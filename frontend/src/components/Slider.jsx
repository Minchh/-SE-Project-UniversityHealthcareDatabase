import { useState, useEffect } from "react";
import Slide from "./Slide";

import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

const Slider = () => {
  const sliders = [slider1, slider2, slider3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-1/2">
      <div className="mt-28 text-[#2E3191] font-semibold text-4xl text-center">
        <p>International University</p>
        <p>
          Student <span className="text-[#AD2FFF]">Healthcare</span> Site
        </p>
      </div>

      <div className="flex justify-center items-center my-16 w-full">
        <div className="relative w-[400px] h-[400px]">
          {sliders.map((image, index) => (
            <Slide key={index} src={image} active={index == currentSlide} />
          ))}
          <div className="absolute bottom-[-32px] flex justify-center w-full">
            {sliders.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-1/3 mx-3 rounded-full ${index == currentSlide ? "bg-[#AD2FFF]" : "bg-[#D9D9D9]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
