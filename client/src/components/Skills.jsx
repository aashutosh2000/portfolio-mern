import "../styles/skills.css";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub"
  ];

  return (
    <section className="skills" id="skills" data-aos="fade-right">

      <h2>My Skills</h2>

      <div className="skills-container">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;