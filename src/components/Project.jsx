import { useState } from "react";
import project from "../data/Project";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section-block" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {project.map((p, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(p)}
          >
            <h3 className="project-title">{p.title}</h3>
            <p>{p.description.substring(0, 80)}...</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            <div className="project-tags">
              {selectedProject.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="modal-buttons">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                View on GitHub
              </a>

              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
