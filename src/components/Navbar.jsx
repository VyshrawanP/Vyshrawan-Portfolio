import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-logo">Vyshrawan's Portfolio</div>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#highlights" onClick={() => setOpen(false)}>Highlights</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;
