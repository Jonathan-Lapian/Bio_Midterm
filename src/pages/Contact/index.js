import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "profile");

    onValue(profileRef, (snapshot) => {
      if (snapshot.exists()) {
        setProfile(snapshot.val());
      } else {
        console.error("No profile data found in database.");
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading profile details...</p>;
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>

      <p className="contact-subtitle">
        Feel free to connect with me through the platforms below!
      </p>
      <div className="icon-container">
        {profile.social?.github && (
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
            title="GitHub: Check out my projects"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        )}
        {profile.social?.linkedin && (
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
            title="LinkedIn: Let's connect professionally"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        )}
        {profile.social?.whatsapp && (
          <a
            href={profile.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="icon whatsapp"
            title="WhatsApp: Chat with me"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Contact;
