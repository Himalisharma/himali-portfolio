// src/components/Projects.jsx
import React from "react";
import "./Projects.css"; // Importing the CSS file

const projectsData = [
  {
    title: "Plant Shop",
    description: "An e-commerce platform for buying and selling plants online.",
    link: "https://github.com/username/plant-shop"
  },
  {
    title: "Resume Screening System",
    description: "A system that helps HR departments filter resumes based on predefined criteria.",
    link: "https://github.com/username/resume-screening"
  }
];

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
