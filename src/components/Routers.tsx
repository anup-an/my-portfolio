import { Route, Routes } from 'react-router-dom';
import AboutPage from '../views/AboutPage';
import ProjectsPage from '../views/ProjectsPage';
import ExperiencePage from '../views/ExperiencPage';
import SkillsPage from '../views/SkillsPage';



const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/technical-skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
    )
}

export default Routers;