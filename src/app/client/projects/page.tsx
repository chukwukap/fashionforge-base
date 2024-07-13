import React from "react";

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Project A",
      description: "A brief description of Project A",
    },
    {
      id: 2,
      title: "Project B",
      description: "A brief description of Project B",
    },
    {
      id: 3,
      title: "Project C",
      description: "A brief description of Project C",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
