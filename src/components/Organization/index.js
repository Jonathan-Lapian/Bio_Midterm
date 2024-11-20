import React from "react";
import FirebaseData from "../hooks/firebaseData";
import "./OrganizationExperience.css";

const OrganizationalExperience = () => {
  const { profile, loading } = FirebaseData();

  if (loading) {
    return <p>Loading organizational experience...</p>;
  }

  const experiences = profile?.organizationalExperience || [];

  return (
    <div className="organizational-experience">
      <h3>Organizational Experience</h3>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-row">
          <div className="year">{exp.year}</div>
          <div className="details">
            <h3 className="organization">{exp.organization}</h3>
            <p className="position">{exp.position}</p>
            <ul>
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrganizationalExperience;
