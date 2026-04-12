import React from "react";

function DeveloperSetup() {
  return (
    <section className="page">
      <h1>Developer Setup</h1>

      <div className="card">
        <h2>VS Code Setup</h2>
        <p>
          I use Visual Studio Code with extensions such as Prettier, ESLint,
          Live Server, and Auto Rename Tag to improve coding speed and code quality.
        </p>
      </div>

      <div className="card">
        <h2>Terminal Setup</h2>
        <p>
          I use PowerShell and Git Bash to run npm commands, Git commands, and Docker commands.
        </p>
      </div>

      <div className="card">
        <h2>Preferred Editor Font</h2>
        <p>Cascadia Code</p>
      </div>

      <div className="card">
        <h2>Supporting Resource</h2>
        <p>
          VS Code Documentation:{" "}
          <a
            href="https://code.visualstudio.com/docs"
            target="_blank"
            rel="noreferrer"
          >
            https://code.visualstudio.com/docs
          </a>
        </p>
      </div>
    </section>
  );
}

export default DeveloperSetup;