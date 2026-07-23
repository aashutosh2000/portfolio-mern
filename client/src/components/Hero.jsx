import "../styles/hero.css";
// Corrected the image import path to match your project structure
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-left">
        <h4>Hello 👋</h4>

        <h1>I'm Ashu</h1>

        <h2>MERN Stack Developer</h2>

        <p>
          I build modern and responsive web applications
          using MongoDB, Express, React and Node.js.
        </p>

        <div className="hero-buttons">
          {/* Changed button to a functional anchor tag for downloading the resume. 
              You should place your resume file (e.g., resume.pdf) in the `public` folder 
              and update the href accordingly. */}
          <a href="/resume.pdf" download="Aashutosh-Resume.pdf" className="btn-primary">
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Ashu" />
      </div>
    </section>
  );
}

export default Hero;