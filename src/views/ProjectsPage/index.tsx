import NavBar from "../../components/NavBar";
import SampleProjects from "../../components/SampleProjects";
import "./ProjectsPage.scss"

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <NavBar focus="projects"/>
            <div className="projects-page__content">
            <SampleProjects />
            </div>
      </div>
  );
};

export default ProjectsPage;
