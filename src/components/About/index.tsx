import { BsGithub } from "react-icons/bs";
import { TbBrandLinkedin } from "react-icons/tb";

import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="About__introduction">
        <p>My name is,</p>
        <h1 className="highlight-text">Anup Poudel</h1>
        <p className="own-description">
          I am a skilled software developer with a focus on full-stack web
          application development, demonstrating proficiency in both Python and
          TypeScript. My experience extends to assuming ownership at various
          levels, ranging from the implementation of front-end components and
          API endpoints to the comprehensive development of end-to-end features.
        </p>
        <div className="profile-external-links">
          <button className="logo-button">
            <a
              href="https://github.com/anup-an"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub color="white" size="30px" />
            </a>
          </button>
          <button className="logo-button">
            <a
              href="https://www.linkedin.com/in/anup-poudel-134b29179/"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandLinkedin color="white" size="35px" />
            </a>
          </button>
        </div>
      </div>
      <div className="About__photo">
        <img alt="My" src="assets/anup-cv-image.jpg" width="300px" />
      </div>
    </div>
  );
};

export default About;
