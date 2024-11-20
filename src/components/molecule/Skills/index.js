import React from "react";
import FirebaseData from "../../hooks/firebaseData";
import "./Skills.css";

const Skills = () => {
  const { profile, loading } = FirebaseData();

  if (loading) {
    return <p>Loading skills...</p>;
  }

  const coreSkills = profile?.skills?.coreSkills || [];
  const otherSkills = profile?.skills?.otherSkills || [];

  return (
    <div className="skills-container">
      {/* Core Skills Section */}
      <div className="skills-section">
        <h3>Core Skills</h3>
        <div className="skills-list">
          {coreSkills.map((skill, index) => (
            <div key={index} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Other Skills Section */}
      <div className="skills-section">
        <h3>Other Skills</h3>
        <div className="skills-list">
          {otherSkills.map((skill, index) => (
            <div key={index} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
