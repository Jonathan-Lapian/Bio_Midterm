import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Fade, Slide } from "react-awesome-reveal";
import "./Home.css";

const Home = () => {
  const [profile, setProfile] = useState(null); // For profile data
  const [loading, setLoading] = useState(true); // For global loading

  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "profile");

    onValue(profileRef, (snapshot) => {
      if (snapshot.exists()) {
        setProfile(snapshot.val());
        setLoading(false); // Stop loading once data is fetched
      } else {
        console.error("No profile data found in database.");
      }
    });
  }, []);

  if (loading) {
    // Display global loading screen while fetching data
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
                <h3>{profile.client}+</h3>
                <p>Happy Clients</p>
              </div>
              <div>
                <h3>{profile.project}</h3>
                <p>Projects</p>
              </div>
              <div>
                <h3>{profile.certi}</h3>
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
