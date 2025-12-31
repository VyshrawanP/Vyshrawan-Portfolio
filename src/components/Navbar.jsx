import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Vyshrawan P</div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
