import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about"   data-aos="zoom-in">

      <h2>About Me</h2>

      <p>
        Hello! I'm Ashu, a passionate MERN Stack Developer.
        I enjoy building responsive and modern web applications
        using MongoDB, Express.js, React.js and Node.js.
      </p>

      <div className="about-cards">

        <div className="card">
          <h3>10+</h3>
          <p>Projects</p>
        </div>

        <div className="card">
          <h3>MERN</h3>
          <p>Tech Stack</p>
        </div>

        <div className="card">
          <h3>Learning</h3>
          <p>Every Day</p>
        </div>

      </div>

    </section>
  );
}

export default About;