import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience">
      <h2 className="highlight-text">Work Experience</h2>
      <ul>
        <li>
          <h3>Software Developer, Ambine Technologies Oy, 08/2022 - 03/2023</h3>
          <a
            href="https://ambine.com/"
            target="_blank"
            rel="noreferrer"
            className="highlight-text"
          >
            Ambine
          </a>{" "}
          provides a software solution that helps advertisers to automatically
          optimize budgets, schedule campaigns, uncover insights, and manage ads
          in LinkedIn. The frontend is built with Typescript using VueJS
          framework. The backend is a RESTful api written in python using Django
          and Falcon frameworks and also uses Google cloud services. During my
          time at Ambine, I took part in both developing new features for the
          application and also fixing bugs. My work involved mainly maintaining
          frontend code. I also worked on backend tasks when required.
        </li>
        <li>
          <h3>Junior Software Developer, Integrify Oy, 12/2021 - 08/2022</h3>
          During my time at{" "}
          <a
            href="https://www.integrify.io/"
            target="_blank"
            rel="noreferrer"
            className="highlight-text"
          >
            Integrify
          </a>
          , I was assigned to work for Ambine Technologies Oy. My work involved
          mostly developing and maintaining frontend code written in Typescript
          using VueJS framework. I also worked on backend tasks if needed. The
          backend was a RESTful api written in python using Django and Falcon
          frameworks and also used Google cloud services.
        </li>
        <li>
          <li>
            <h3>Frontend Developer, Resimator Oy, 01/2021 - 03/2021</h3>I was
            responsible for developing and testing a REACT application where
            administrators can send messages regarding the upcoming webinars,
            instructions for creating webinars etc. to their users via <a className="highlight-text" href="https://www.livechat.com/" target="_blank" rel="noreferrer">Livechat</a>.
          </li>
        </li>
      </ul>
      <h2 className="highlight-text">Trainings</h2>
      <ul>
        <li>
          <h3>
            Full Stack Software Development Training, Integrify Oy , 10/2021 -
            12/2021
          </h3>
          Intensive coding training where I learnt different software
          development tools necessary for full stack web development. I learnt
          Typescript, React, ExpressJS, SaSS, MongoDB during the training.
        </li>
        <li>
          <h3>
            Full Stack Software Development Training, Buutti Oy , 09/2020 -
            12/2020
          </h3>
          Intensive coding training where I learnt different software
          development tools necessary for full stack web development. I learnt
          Typescript, React, ExpressJS, TailwindCSS and PSQL during the course.
          I developed an e-commerce website as a group project.
        </li>
      </ul>
    </div>
  );
};

export default Experience;
