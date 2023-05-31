import NavBar from "../../components/NavBar";
import Experience from "../../components/Experience";
import "./ExperiencePage.scss"

const ExperiencePage = () => {
    return (
        <div className="experience-page">
            <NavBar focus="experience"/>
            <div className="experience-page__content">
            <Experience />
            </div>
      </div>
  );
};

export default ExperiencePage;
