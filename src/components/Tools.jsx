import { useState } from "react";
import tools from "../data/Tools";

function Tools() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? tools
      : tools.filter(tool => tool.type === filter);

  return (
    <section className="section-block" id="tools">
      <h2>Tools & Technologies</h2>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {["All", "Backend", "Frontend", "Database", "Cloud", "Tools"].map(
          (btn) => (
            <button
              key={btn}
              className={filter === btn ? "active" : ""}
              onClick={() => setFilter(btn)}
            >
              {btn}
            </button>
          )
        )}
      </div>

      {/* ICON GRID */}
      <div className="tools-slider">
        <div className="tools-track">
          {filtered.map((tool, index) => (
            <div className="tool-card" key={index}>
              <div className="tool-icon">{tool.icon}</div>
              <p>{tool.name}</p>
              <span className="tooltip">{tool.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TABLE VIEW */}
      <div className="tools-table">
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Level</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tool, i) => (
              <tr key={i}>
                <td className="tool-name">
                  <span className="table-icon">{tool.icon}</span>
                  {tool.name}
                </td>
                <td>{tool.level}</td>
                <td>{tool.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Tools;
