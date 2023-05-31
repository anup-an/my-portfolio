import { BsGithub } from "react-icons/bs";
import "./SampleProjects.scss";

const SampleProjects = () => {
  return (
    <div className="sample-projects">
      <div className="sample-projects__e-commerce">
        <h2 className="highlight-text">E-commerce</h2>
        <div className="content">
          <div>
            <img alt="e-commerce" src="/assets/frontpage.png" width="250" />
            <div className="buttons">
              <button className="app-button">
                <a
                  href="https://lucid-lewin-704e07.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try it now
                </a>
              </button>
              <div>
                <button className="app-button">
                  <a
                    href="https://github.com/anup-an/shopping-cart-react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>View code</span> <BsGithub color="white" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="introductory-text">
            <div>
              Technologies: Typescript, React, ExpressJS, MongoDB, Docker, AWS
            </div>
            <p>
              An e-commerce platform that allows users to browse and order
              products online. It also has an authentication system. The backend
              server is deployed using AWS cloud services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
