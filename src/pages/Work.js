import React from 'react';

function Work() {
  const projects = [
    {
      title: 'Rails E-Commerce Store',
      summary:
        'A full-stack clothing store web application built using Ruby on Rails.',
      features:
        'Product listings, categories, shopping cart, checkout, and admin dashboard.',
      link: 'https://github.com/harman1225/Rails-Project',
      tech: ['Ruby on Rails', 'HTML', 'CSS', 'Bootstrap', 'SQLite'],
    },
    {
      title: 'UI Garden Project',
      summary:
        'A front-end project focused on reusable UI components and responsive design.',
      features:
        'Reusable components, layout design, styling, and responsiveness.',
      link: 'https://github.com/harman1225/ui-garden',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'StyleHub Store',
      summary:
        'A modern e-commerce web application showcasing clothing products and user-friendly UI.',
      features: 'Product display, navigation, styling, and responsive layout.',
      link: 'https://github.com/harman1225/STYLEHUB_STORE',
      tech: ['React', 'CSS', 'JavaScript', 'Docker'],
    },
    {
      title: 'UI Garden (Assignment Version)',
      summary:
        'A structured UI project created as part of coursework focusing on layout and component design.',
      features: 'Clean layout, reusable components, and responsive design.',
      link: 'https://github.com/harman1225/kaur_harman_ui_garden',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Rails CRM Project',
      summary:
        'A CRM web application built with Ruby on Rails to manage customer data and interactions.',
      features:
        'Customer management, CRUD operations, and database integration.',
      link: 'https://github.com/harman1225/Rails-CRM-Project',
      tech: ['Ruby on Rails', 'HTML', 'CSS', 'SQLite'],
    },
  ];

  return (
    <section className="page">
      <h1>My Work</h1>
      <p className="page-intro">
        Here are some of the projects I have developed during my coursework.
      </p>

      <div className="grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.summary}</p>

              <p>
                <strong>Key Features:</strong> {project.features}
              </p>

              <div className="tech-tags">
                {project.tech.map((item, i) => (
                  <span className="tech-tag" key={i}>
                    {item}
                  </span>
                ))}
              </div>

              <a
                className="project-button"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
