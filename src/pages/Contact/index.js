import React from "react";
import "./Contact.css";
import FirebaseData from "../../components/hooks/firebaseData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const { profile, loading } = FirebaseData();
  if (loading) {
    return <p>Loading biography...</p>;
  }

  const contact = profile.social || [];

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>

      <p className="contact-subtitle">
        Feel free to connect with me through the platforms below!
      </p>
      <div className="icon-container">
        {contact?.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
            title="GitHub: Check out my projects"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        )}
        {contact?.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
            title="LinkedIn: Let's connect professionally"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        )}
        {contact?.whatsapp && (
          <a
            href={contact.whatsapp}
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
