import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Git from "../../components/atoms/github";
import FirebaseData from "../../components/hooks/firebaseData";
import AnimatedCounter from "../../config/animationCount";
import "./Home.css";

const Home = () => {
  const { profile, loading } = FirebaseData();
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading data...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Fade>
        <Slide duration={800}>
          <div className="image-section">
            <img
              src={`data:image/jpg;base64,${profile.pic}`}
              alt={`${profile.name}'s profile`}
              className="image"
            />
          </div>
        </Slide>
      </Fade>
      <div className="text-section">
        <Fade>
          <Slide direction="right">
            <h2>Hi There</h2>
            <h1>I'm {profile?.name || "Loading Name..."}</h1>
            <p>Scholar from Universitas Klabat, Indonesia.</p>
          </Slide>
        </Fade>
        <Slide direction="up">
          <Fade>
            <div className="stats">
              <div>
                <h3>
                  <AnimatedCounter targetValue={profile.client} />+
                </h3>
                <p>Happy Clients</p>
              </div>
              <div>
                <h3>
                  <Git />
                </h3>
                <p>Projects</p>
              </div>
              <div>
                <h3>
                  <AnimatedCounter targetValue={profile.certi} />
                </h3>
                <p>Certificates</p>
              </div>
            </div>
          </Fade>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
