import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <ul>
        <li>
          <h2 className="highlight-text">Languages</h2>
          Typescript and Python
        </li>
        <li>
          <h2 className="highlight-text">Frontend</h2>
          ReactJS, Redux, VueJS, CSS3, TailwindCSS, ChakraUI, Sass
        </li>
        <li>
          <h2 className="highlight-text">Backend</h2>
          GraphQL, NodeJS, ExpressJS, FastAPI and Django
        </li>
        <li>
          <h2 className="highlight-text">Testing</h2>
          Vue Test Utils, Jest, Supertest, Mocha, Chai, Pytest
        </li>
      </ul>
      <ul>
        <li>
          <h2 className="highlight-text">Databases</h2>
          MongoDB, MySQL and PostgreSQL
        </li>
        <li>
          <h2 className="highlight-text">DevOps</h2>
          Docker, Kubernetes, Terraform, AWS (ECS), DigitalOcean(DOKS) and CI/CD (Jenkins, Github Actions)
        </li>
        <li>
          <h2 className="highlight-text">Other skills</h2>
          Microservices, gRPC, Git, Scrum, Jira
        </li>
      </ul>
    </div>
  );
};

export default Skills;
