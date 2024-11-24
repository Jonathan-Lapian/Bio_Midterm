import React, { useRef } from "react";
import { Header, Body } from "./components";

import "./App.css";

const App = () => {
  const sliderRef = useRef(null);
  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div>
      <Header onNavClick={goToSlide} />
      <Body className="slider-container" sliderRef={sliderRef} />
    </div>
  );
};

export default App;
