import React from "react";
import { Home, About, Contact } from "../../../pages";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Body.css"; // Add custom CSS for scrollable styles

const Body = ({ sliderRef }) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
  };

  return (
    <Slider ref={sliderRef} {...settings} className="slider-container">
      <div>
        <Home />
      </div>
      <div className="scrollable-slide">
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </Slider>
  );
};

export default Body;
