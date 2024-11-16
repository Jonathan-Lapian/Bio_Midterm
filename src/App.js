import React, { useRef } from "react";
import Slider from "react-slick";
import { Header, Body, Footer } from "./components";
import { Home, Contact, About } from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App = () => {
  const sliderRef = useRef(null);

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
  };

  return (
    <>
      <Header onNavClick={goToSlide} /> {/* Pass the goToSlide function */}
      <Slider ref={sliderRef} {...settings} className="slider-container">
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>
      </Slider>
    </>
  );
};

export default App;
