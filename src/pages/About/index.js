import React from "react";
import "./About.css";
import OrganizationalExperience from "../../components/Organization";

import Skills from "../../components/molecule/Skills";
import Biography from "../../components/molecule/Biography";

const About = () => {
  return (
    <div className="about-container">
      <Biography />

      {/* Organizational Experience Section */}
      <OrganizationalExperience />

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default About;
