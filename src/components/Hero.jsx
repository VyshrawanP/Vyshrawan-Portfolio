function Hero() {
  return (

    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I’m <span>Vyshrawan</span>
        </h1>
        <h2>Backend & Full Stack Developer</h2>

        <p>
  Pre-final year Computer Science student skilled in backend and web application development using Java, Spring Boot, MySQL, and Python. Familiar with AWS (EC2, S3), Bootstrap, and Tailwind CSS. Strong foundation in DSA, rapid learning ability, and hands-on experience integrating ML models into web systems. Seeking a software engineering internship to contribute to scalable application development.
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
