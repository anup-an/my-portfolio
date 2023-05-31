import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = (props: any) => {
  const {focus} = props
  return (
    <div className="NavBar">
      <Link to="/" className={`${focus === 'about' ? 'highlight-link' : ''}`}>About</Link>
      <Link to="/technical-skills" className={`${focus === 'technical-skills' ? 'highlight-link' : ''}`}>Technical skills</Link>
      <Link to="/projects" className={`${focus === 'projects' ? 'highlight-link' : ''}`}>Projects</Link>
      <Link to="/experience" className={`${focus === 'experience' ? 'highlight-link' : ''}`}>Experience</Link>
    </div>
  );
};

export default NavBar;
