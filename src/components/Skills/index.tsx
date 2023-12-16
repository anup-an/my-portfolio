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
          ExpressJS, FastAPI and Django
        </li>
      </ul>
      <ul>
        <li>
          <h2 className="highlight-text">Databases</h2>
          MongoDB, MySQL and PostgreSQL
        </li>
        <li>
          <h2 className="highlight-text">DevOps</h2>
          Docker, Kubernetes, Terraform, AWS (ECS), DigitalOcean(DOKS) and CI/CD
        </li>
        <li>
          <h2 className="highlight-text">Other skills</h2>
          Git, Github, Bitbucket, Scrum, Jira
        </li>
      </ul>
    </div>
  );
};

export default Skills;
