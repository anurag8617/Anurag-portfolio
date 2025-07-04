import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Pathology Lab System",
      description:
        "I created a Pathology Lab Management System using the MERN stack. It helps manage patient details, test reports, and lab data easily and securely.",
      imageUrl:
        "https://images.unsplash.com/photo-1579544758184-a8994eb607a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhdGhvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      link: "#",
    },
    {
      title: "Job Portal ",
      description:
        "I built a Job Portal using Node.js, Express.js, MongoDB, and Bootstrap. It connects job seekers and recruiters, making it easy to post jobs, apply for positions, and manage applications.",
      imageUrl:
        "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/anurag8617/careerHook.git",
    },
    {
      title: "Chat app",
      description:
        "I built a Chat app using Node.js, Express.js, MongoDB, and React.js.",
      imageUrl:
        "https://images.unsplash.com/photo-1590698933947-a202b069a861?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

