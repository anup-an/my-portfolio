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
          ReactJS, Redux, VueJS, CSS3, TailwindCSS, Sass
        </li>
        <li>
          <h2 className="highlight-text">Backend</h2>
          ExpressJS and Django
        </li>
      </ul>
      <ul>
        <li>
          <h2 className="highlight-text">Databases</h2>
          MongoDB and MySQL
        </li>
        <li>
          <h2 className="highlight-text">DevOps</h2>
          Docker, CI/CD using github actions
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
