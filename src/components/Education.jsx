function Education() {
  return (
    <section className="section-block" id="education">
      <h2>Education</h2>

      <div className="education-timeline">
        <div className="edu-card">
          <h3>Bachelor of Technology (B.Tech)</h3>
          <p className="edu-sub">
            Computer Science & Business Systems
          </p>
          <p>VIT-AP University</p>
          <span>Sep 2023 – Oct 2027</span>
          <p className="edu-grade">CGPA: 8.01</p>
        </div>

        <div className="edu-card">
          <h3>Class XII (MPC)</h3>
          <p>Sri Chaitanya College of Education</p>
          <span>Apr 2021 – Mar 2023</span>
          <p className="edu-grade">Score: 90.8%</p>
        </div>

        <div className="edu-card">
          <h3>Class X</h3>
          <p>St. Joseph’s H School, Hyderabad</p>
          <span>Jun 2009 – Apr 2021</span>
          <p className="edu-grade">CGPA: 10 / 10</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
