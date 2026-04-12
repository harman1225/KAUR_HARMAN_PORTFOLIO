import React from "react";

function Resources() {
  const resources = [
    {
      title: "React Documentation",
      image: "https://react.dev/images/favicon-32x32.png",
      summary:
        "Official documentation for building user interfaces using React components, hooks, and state.",
      link: "https://react.dev/"
    },
    {
      title: "MDN Web Docs",
      image: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
      summary:
        "A trusted resource for HTML, CSS, JavaScript, forms, validation, and browser features.",
      link: "https://developer.mozilla.org/"
    },
    {
      title: "Docker Documentation",
      image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
      summary:
        "Used to understand Docker images, containers, builds, and deployment.",
      link: "https://docs.docker.com/"
    },
    {
      title: "GitHub Docs",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      summary:
        "Useful for learning repositories, commits, branches, and version control.",
      link: "https://docs.github.com/"
    },
    {
      title: "freeCodeCamp",
      image: "https://www.freecodecamp.org/favicon-32x32.png",
      summary:
        "Provides tutorials and examples for React, JavaScript, and portfolio design.",
      link: "https://www.freecodecamp.org/"
    }
  ];

  return (
    <section className="section container">
      {/* Title */}
      <div className="section-heading">
        <h2>Resources</h2>
        <p>Helpful resources I use for learning and development.</p>
      </div>

      {/* Cards */}
      <div className="card-grid">
        {resources.map((resource, index) => (
          <article className="card" key={index}>
            <img
              src={resource.image}
              alt={resource.title}
              className="card-image small-icon"
            />

            <div className="card-body">
              <h3>{resource.title}</h3>
              <p>{resource.summary}</p>

              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className="resource-btn"
              >
                Visit Resource
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Resources;