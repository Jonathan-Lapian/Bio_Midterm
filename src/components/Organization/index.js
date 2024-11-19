import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./OrganizationExperience.css";

const OrganizationalExperience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const orgRef = ref(db, "organizationalExperience");

    onValue(orgRef, (snapshot) => {
      if (snapshot.exists()) {
        setExperiences(snapshot.val());
      } else {
        console.error("No organizational experience data found.");
      }
    });
  }, []);

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
