function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I’m <span>Vyshrawan Pothuraju</span>
        </h1>
        <h2>Backend & Full Stack Developer</h2>

        <p>
          I build scalable backend systems and modern web applications.
          Passionate about automation, problem solving, and clean architecture.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-container">
          {/* Replace this div with your image later */}
          <div className="image-placeholder">
            <img src="/vysh.jpeg" alt="Vyshrawan" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
