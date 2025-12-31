import { useState } from "react";
import skills from "../data/Skills";
import skillUsage from "../data/SkillUsage";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section className="section-block" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            onClick={() => setSelectedSkill(skill)}
          >
            <h3>{skill.title}</h3>

            <ul className="skill-base">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedSkill && (
        <div className="project-modal">
          <div className="modal-content">
            <h2>{selectedSkill.title}</h2>

            <p><strong>Used In:</strong></p>
            <ul className="project-tags">
              {skillUsage[selectedSkill.title].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button
              className="close-btn"
              onClick={() => setSelectedSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
