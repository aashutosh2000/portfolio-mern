import "../styles/projects.css";
import projectsData from "./projectData";
function Projects() {
  // Using the imported projectsData
  
  const projects = projectsData;

  return (
    <section className="projects" id="projects" data-aos="flip-up">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project) => (
          // Using a unique 'id' as the key for better React list rendering performance and stability
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>

              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;  



