function AchievementsTicker() {
  return (
<section id="highlights" className="section-block">
      <h2>Highlights</h2>

      <div className="achievement-wrapper">
        <div className="achievement-track">
          <p>✔ Solved 150+ LeetCode problems (Java)</p>
          <p>🚀 Built 4+ full-stack applications</p>
          <p>☁️ Deployed apps on AWS EC2 & S3</p>
          <p>🧠 Strong foundation in DSA & OOPS</p>
          <p>🔧 Built REST APIs using Spring Boot</p>
          <p>📦 Working on logistics automation system</p>
          <p>Completed AWS cloud fundamentals through self-learning.</p>

          {/* Duplicate for smooth infinite scroll */}
          <p>✔ Solved 150+ LeetCode problems (Java)</p>
          <p>🚀 Built 4+ full-stack applications</p>
          <p>☁️ Deployed apps on AWS EC2 & S3</p>
          <p>🧠 Strong foundation in DSA & OOPS</p>
          <p>🔧 Built REST APIs using Spring Boot</p>
          <p>📦 Working on logistics automation system</p>
           <p>Completed AWS cloud fundamentals through self-learning.</p>
        </div>
      </div>
    </section>
  );
}

export default AchievementsTicker;
