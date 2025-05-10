import { useState } from 'react';
import '../../styles/Projects.css';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with product listings, shopping cart, and user authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/simon/ecommerce-platform",
      demoLink: "https://ecommerce-demo.vercel.app",
      image: "https://via.placeholder.com/600x340/3a3a3a/ffffff?text=E-commerce+Platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A kanban-style task management application to organize personal and team projects.",
      tech: ["React", "Redux", "Firebase"],
      githubLink: "https://github.com/simon/task-manager",
      demoLink: "https://task-app-demo.vercel.app",
      image: "https://via.placeholder.com/600x340/3a3a3a/ffffff?text=Task+Management+App"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that shows current conditions and forecasts using a third-party API.",
      tech: ["JavaScript", "HTML/CSS", "OpenWeather API"],
      githubLink: "https://github.com/simon/weather-app",
      demoLink: "https://weather-demo.vercel.app",
      image: "https://via.placeholder.com/600x340/3a3a3a/ffffff?text=Weather+Dashboard"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Data visualization tool for social media metrics and engagement analytics.",
      tech: ["Python", "Django", "Chart.js", "PostgreSQL"],
      githubLink: "https://github.com/simon/social-analytics",
      demoLink: "https://social-analytics-demo.vercel.app",
      image: "https://via.placeholder.com/600x340/3a3a3a/ffffff?text=Social+Media+Analytics"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first web application for tracking workouts and health metrics.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/simon/fitness-tracker",
      demoLink: "https://fitness-tracker-demo.vercel.app",
      image: "https://via.placeholder.com/600x340/3a3a3a/ffffff?text=Fitness+Tracker"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Application to discover recipes based on available ingredients and dietary preferences.",
      tech: ["React", "Spoonacular API", "CSS Modules"],
      githubLink: "https://github.com/simon/recipe-finder",
      demoLink: "https://recipe-finder-demo.vercel.app",
      image: "https://via.placeholder.com/600x340/3a3a3a/ffffff?text=Recipe+Finder"
    }
  ]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 