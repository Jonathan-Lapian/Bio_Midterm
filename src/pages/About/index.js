import React from "react";
import "./About.css";
import { Skills, OrganizationExperience } from "../../components";

const About = () => {
  return (
    <div className="about-container">
      <div className="biography-section">
        <h2 className="title">About Me</h2>
        <p>
          I am Jonathan Lapian, a passionate scholar who continuously strives
          for growth and excellence in God's name. With a strong foundation in
          web development, I have honed my skills in creating dynamic and
          responsive websites using modern technologies like JavaScript, React,
          and React Native.
        </p>
        <p>
          My expertise also extends to graphic design and multimedia editing,
          where I bring creativity and precision to every project. Beyond my
          technical skills, I am driven by a love for learning and a desire to
          create meaningful projects that make a positive impact.
        </p>
        <p>
          Whether it's designing visually appealing interfaces, editing
          captivating videos, or solving complex problems in development, I
          approach every task with dedication and enthusiasm. In my free time, I
          enjoy playing chess—a game that mirrors my passion for strategic
          thinking and continuous improvement.
        </p>
        <p>
          Through each challenge, I aim to grow as a professional and as an
          individual, always guided by faith and a commitment to excellence.
        </p>
      </div>
      <OrganizationExperience />
      <Skills />
    </div>
  );
};

export default About;
