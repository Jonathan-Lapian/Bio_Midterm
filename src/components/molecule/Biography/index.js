import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Biography.css";

const Biography = () => {
  const [biography, setBiography] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "profile");

    onValue(profileRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setBiography(data.biography || []); // Fallback to empty array if biography is missing
        setLoading(false);
      } else {
        console.error("No profile data found in database.");
      }
    });
  }, []);

  if (loading) {
    return <p>Loading biography...</p>;
  }

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
