import React from "react";

function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Ruby on Rails",
    "Java",
    "GitHub",
    "Docker"
  ];

  const strengths = [
    {
      title: "Front-End Development",
      text: "Building clean, responsive, and user-friendly interfaces using HTML, CSS, JavaScript, and React."
    },
    {
      title: "Back-End Development",
      text: "Creating database-driven applications and full-stack solutions using Ruby on Rails and Java."
    },
    {
      title: "Deployment & Tools",
      text: "Using GitHub, Docker, VS Code, and modern development tools to build and deploy projects."
    }
  ];

  return (
    <section className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-label">Welcome to my portfolio</p>
          <h1>Harmanpreet Kaur</h1>
          <h2>Full Stack Web Development Student</h2>

          <p className="hero-description">
            I am a Full Stack Web Development student with an interest in
            building modern, responsive, and practical web applications. I enjoy
            working with both front-end and back-end technologies to create
            complete solutions from design to deployment.
          </p>

          <div className="hero-buttons">
            <a
              className="primary-button"
              href= "https://github.com/harman1225"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>

            <a
              className="secondary-button"
              href="https://www.linkedin.com/in/harmanpreet-kaur-9900b2389/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </div>

          <div className="skills-badges">
            {skills.map((skill, index) => (
              <span className="skill-badge" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <h3>About Me</h3>
          <p>
            I enjoy developing complete web applications and continuously
            improving my technical skills in both client-side and server-side
            development.
          </p>

          <h3>Career Goal</h3>
          <p>
            My goal is to become a professional full stack developer and build
            real-world applications that solve practical problems.
          </p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <h3>5+</h3>
          <p>Portfolio Projects</p>
        </div>
        <div className="stat-card">
          <h3>8+</h3>
          <p>Technical Skills</p>
        </div>
        <div className="stat-card">
          <h3>Full Stack</h3>
          <p>Development Focus</p>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>What I Do</h3>
          <p>
            I build web applications that combine clean front-end design with
            strong back-end functionality. I enjoy working on projects involving
            routing, forms, validation, CRUD features, databases, and deployment.
          </p>
        </div>

        <div className="info-card">
          <h3>Current Focus</h3>
          <p>
            Right now, I am focused on improving my React, Ruby on Rails, Git,
            Docker, and full stack project development skills through hands-on
            coursework and portfolio projects.
          </p>
        </div>
      </div>

      <div className="strengths-section">
        <h2>My Strengths</h2>
        <div className="strengths-grid">
          {strengths.map((item, index) => (
            <div className="strength-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;