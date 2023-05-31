import NavBar from "../../components/NavBar";
import Skills from "../../components/Skills";
import "./SkillsPage.scss"

const SkillsPage = () => {
    return (
        <div className="about-page">
            <NavBar focus="technical-skills"/>
            <div className="about-page__content">

            <Skills />
            </div>
      </div>
  );
};

export default SkillsPage;
