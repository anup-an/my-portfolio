import NavBar from "../../components/NavBar";
import Skills from "../../components/Skills";
import "./SkillsPage.scss";

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <NavBar focus="technical-skills" />
      <div className="skills-page__content">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
