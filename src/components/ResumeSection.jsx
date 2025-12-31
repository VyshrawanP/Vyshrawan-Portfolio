function ResumeSection() {
  return (
    <section className="resume-section" id="resume">
      <h2>Resume</h2>
      <p>You can view or download my resume below.</p>

      <div className="resume-buttons">
        <a
          href="/vysh_resume.pdf"
          target="_blank"
          className="resume-btn"
        >
          View Resume
        </a>

        <a
          href="/vysh_resume.pdf"
          download
          className="resume-btn outline"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeSection;
