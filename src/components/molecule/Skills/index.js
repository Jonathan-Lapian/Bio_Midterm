import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-section">
        <h3>Core Skills</h3>
        <div className="skills-list">
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">Python</span>
          <span className="skill-badge">React</span>
          <span className="skill-badge">React Native</span>
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">CSS</span>
          <span className="skill-badge">GitHub</span>
        </div>
      </div>

      <div className="skills-section">
        <h3>Other Skills</h3>
        <div className="skills-list">
          <span className="skill-badge">Graphic Design</span>
          <span className="skill-badge">Photo Editing</span>
          <span className="skill-badge">Video Editing</span>
          <span className="skill-badge">Journal Entries(Accounting)</span>
          <span className="skill-badge">Microsoft Word</span>
          <span className="skill-badge">Microsoft PowerPoint</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
