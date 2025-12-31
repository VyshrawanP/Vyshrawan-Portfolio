import skills from "../data/Skills";

function Skills() {
  return (
    <section className="section-block" id="skills">
      <h2>What I Can Do</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
