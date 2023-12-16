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
      <div className="sample-projects__e-commerce">
        <h2 className="highlight-text">Library app</h2>
        <div className="content">
          <div>
            <img alt="e-commerce" src="/assets/library_frontpage.png" width="250" />
            <div className="buttons">
              <button className="app-button">
                <a
                  href="https://www.bookslibrary.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try it now
                </a>
              </button>
              <div>
                <button className="app-button">
                  <a
                    href="https://github.com/anup-an/library-api"
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
              Technologies: Typescript, React, Python, Django, PostreSQL, Nginx,
              Docker, Kubernetes, DigitalOcean
            </div>
            <p>
              A library application that allows users to browse, borrow and
              return books online. It also has an authentication system. The
              application is deployed in digitalocean using kubernetes service
              and the infrastructure is managed using Terraform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
