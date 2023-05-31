import "./About.scss" ;

const About = () => {
  return (
    <div className="About">
      <div className="About__introduction">
        <p>My name is,</p>
        <h1 className="highlight-text">Anup Poudel</h1>
        <p>I am a software developer with experience in building full-stack web applications. Currently, I am seeking new challenges and opportunities to further develop my expertise. I am open to frontend or backend or full-stack developer roles.</p>
        <p>You can connect me via e-mail <strong className="highlight-text">apoudel048@gmail.com</strong> or via linkedIn <strong><a className="highlight-text" href="https://www.linkedin.com/in/anup-poudel-134b29179/">https://www.linkedin.com/in/anup-poudel-134b29179/</a></strong></p>
      </div>
      <div className="About__photo">
        <img alt="My" src="assets/anup-cv-image.jpg" width="300px" />
      </div>
    </div>
  );
};

export default About;
