import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState({ coreSkills: [], otherSkills: [] });

  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "skills");

    onValue(skillsRef, (snapshot) => {
      if (snapshot.exists()) {
        setSkills(snapshot.val());
      } else {
        console.error("No skills data found.");
      }
    });
  }, []);

  return (
    <div className="skills-container">
      <div className="skills-section">
        <h3>Core Skills</h3>
        <div className="skills-list">
          {skills.coreSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>Other Skills</h3>
        <div className="skills-list">
          {skills.otherSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
