import { useState, useEffect } from "react";

import img1 from "../../assets/imgs/img1.png";
import img2 from "../../assets/imgs/img2.png";
import img3 from "../../assets/imgs/img3.png";

import "../../styles/form/Carousel.css";

const Carousel = () => {
  const images = [img1, img2, img3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      <div className="carousel-top">
        <h1 className="carousel-title">
          International University Student <span>Healthcare</span> Site
        </h1>
      </div>

      <div className="carousel-content">
        <div className="carousel-slider">
          {images.map((img, index) => (
            <div key={index} className="carousel-img-container">
              <img
                src={img}
                alt={`${img}`}
                className={`carousel-img ${
                  index == currentSlide ? "carousel-img-opacity-100" : "carousel-img-opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${index == currentSlide ? "indicator-actived" : "indicator-unactived"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
