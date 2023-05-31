import About from "../../components/About";
import NavBar from "../../components/NavBar";
import "./AboutPage.scss"

const AboutPage = () => {
    return (
        <div className="about-page">
            <NavBar focus="about"/>
            <div className="about-page__content">

            <About />
            </div>
      </div>
  );
};

export default AboutPage;
