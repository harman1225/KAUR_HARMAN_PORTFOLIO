import React from 'react';

function Skills() {
  return (
    <section className="page">
      <h1>Skills</h1>

      <div className="card">
        <h2>Description</h2>
        <p>
          I have experience creating front-end and back-end applications,
          working with responsive design, validation, routing, databases, and
          deployment tools.
        </p>
      </div>

      <div className="card">
        <h2>Languages / Frameworks</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Ruby on Rails</li>
          <li>Java</li>
        </ul>
      </div>

      <div className="card">
        <h2>Tools</h2>
        <ul>
          <li>Git and GitHub</li>
          <li>Docker</li>
          <li>Storybook</li>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>VS Code</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
