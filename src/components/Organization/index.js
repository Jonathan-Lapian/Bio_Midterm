import React from "react";
import "./OrganizationExperience.css"; // Include CSS for styling

const OrganizationalExperience = () => {
  // Define experiences directly in the component
  const experiences = [
    {
      year: "2024",
      organization: "Crew BEW 2024",
      position: "Member of EDITOR GEMA",
      details: [
        "Helping offices to edit the event that BEM held.",
        "Became one of the committee CAMPUS DAY.",
      ],
    },
  ];

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
