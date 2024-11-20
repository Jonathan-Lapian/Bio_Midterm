import React from "react";
import FirebaseData from "../../hooks/firebaseData";
import "./Biography.css";

const Biography = () => {
  const { profile, loading } = FirebaseData();

  if (loading) {
    return <p>Loading biography...</p>;
  }

  const biography = profile.biography || [];

  return (
    <div className="biography-section">
      <h1 className="section-title">About Me</h1>
      {biography.map((paragraph, index) => (
        <p key={index} className="biography-paragraph">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Biography;
