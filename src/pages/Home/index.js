import React from "react";
import Foto from "./jk.jpg";
import "./Home.css";
import "../pages.css";

const Home = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src={Foto} alt="Jonathan Lapian" className="image" />
      </div>
      <div className="text-section">
        <h2>Hi There</h2>
        <h1>I'm Jonathan Lapian</h1>
        <p>Scholar that was from Universitas Klabat, Indonesia.</p>
        <div className="stats">
          <div>
            <h3>6+</h3>
            <p>Experience</p>
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
      </div>
    </div>
  );
};

export default Home;
