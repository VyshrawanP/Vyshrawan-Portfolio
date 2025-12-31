import { useState } from "react";

const tools = [
  { name: "Java", icon: "https://cdn.simpleicons.org/java", level: "Advanced", type: "Backend" },
  { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot", level: "Advanced", type: "Backend" },
  { name: "React", icon: "https://cdn.simpleicons.org/react", level: "Intermediate", type: "Frontend" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", level: "Intermediate", type: "Frontend" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python", level: "Intermediate", type: "Backend" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql", level: "Advanced", type: "Database" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws", level: "Beginner", type: "Cloud" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git", level: "Advanced", type: "Tools" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github", level: "Advanced", type: "Tools" }
];

function Tools() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? tools
      : tools.filter(tool => tool.type === filter);

  return (
    <section className="section-block" id="tools">
      <h2>Tools & Technologies</h2>

      <div className="filter-buttons">
        {["All", "Backend", "Frontend", "Database", "Cloud", "Tools"].map(btn => (
          <button
            key={btn}
            className={filter === btn ? "active" : ""}
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="tools-slider">
        <div className="tools-track">
          {filtered.map((tool, index) => (
            <div className="tool-card" key={index}>
              <img src={tool.icon} alt={tool.name} />
              <p>{tool.name}</p>
              <span className="tooltip">{tool.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
