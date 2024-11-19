import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Feel free to connect with me through the platforms below!
      </p>
      <div className="icon-container">
        <a
          href="https://github.com/Jonathan-Lapian"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
          title="GitHub: Check out my projects"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-reinald-lapian-3b609a290"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
          title="LinkedIn: Let's connect professionally"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://wa.me/628152317003?text=Hi%20there%21%20I%20came%20across%20your%20website%20and%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.%20Looking%20forward%20to%20hearing%20from%20you%21%0A"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
          title="WhatsApp: Chat with me"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
