import React from "react";
import Foto from "./foto.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import "./Home.css";
import "../pages.css";

const Home = () => {
  return (
    <div className="container">
      <Fade>
        <Slide duration={800}>
          <div className="image-section">
            <img src={Foto} alt="Jonathan Lapian" className="image" />
          </div>
        </Slide>
      </Fade>
      <div className="text-section">
        <Fade>
          <Slide direction="right">
            <h2>Hi There</h2>
            <h1>I'm Jonathan Lapian</h1>
            <p>Scholar that was from Universitas Klabat, Indonesia.</p>
          </Slide>
        </Fade>
        <Slide direction="up">
          <Fade>
            <div className="stats">
              <div>
                <h3>6+</h3>
                <p>Happy Clients</p>
              </div>
              <div>
                <h3>10</h3>
                <p>Projects</p>
              </div>
              <div>
                <h3>2</h3>
                <p>Certificate</p>
              </div>
            </div>
          </Fade>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
