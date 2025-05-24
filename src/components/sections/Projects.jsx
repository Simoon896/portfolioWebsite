import { useState } from 'react';
import '../../styles/Projects.css';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Project Alpha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "#",
      demoLink: "#",
      image: "https://via.placeholder.com/600x400/007bff/ffffff?text=Project+Alpha"
    },
    {
      id: 2,
      title: "Service Beta",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tech: ["Python", "Django", "PostgreSQL", "AWS"],
      githubLink: "#",
      demoLink: "#",
      image: "https://via.placeholder.com/600x400/6c757d/ffffff?text=Service+Beta"
    },
    {
      id: 3,
      title: "Application Gamma",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      tech: ["Java", "Spring Boot", "MySQL", "Docker"],
      githubLink: "#",
      demoLink: "#",
      image: "https://via.placeholder.com/600x400/17a2b8/ffffff?text=App+Gamma"
    },
    {
      id: 4,
      title: "Moon Phase Calendar",
      description: "An elegant application that tracks moon phases, lunar events, and provides a visual calendar with astronomical data.",
      tech: ["JavaScript", "SVG", "Astronomy API", "PWA"],
      githubLink: "https://github.com/simon/moon-calendar",
      demoLink: "https://moon-phase-calendar.demo",
      image: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Moon+Calendar"
    },
    {
      id: 5,
      title: "Nebula Portfolio Template",
      description: "A customizable portfolio website template for designers and developers with stunning space-inspired visual effects.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      githubLink: "https://github.com/simon/nebula-portfolio",
      demoLink: "https://nebula-portfolio.demo",
      image: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Nebula+Portfolio"
    },
    {
      id: 6,
      title: "Starry Night Wallpaper Generator",
      description: "Web application that generates custom starry night wallpapers with adjustable star density, colors, and cosmic effects.",
      tech: ["Canvas API", "JavaScript", "Color Theory", "React"],
      githubLink: "https://github.com/simon/wallpaper-gen",
      demoLink: "https://starry-wallpaper.demo",
      image: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Wallpaper+Generator"
    }
  ]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>My Projects</h2>
          <p className="section-subtitle">A selection of my recent work and personal projects.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  <strong>Technologies:</strong>
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink && project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                      <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                  )}
                  {project.githubLink && project.githubLink !== "#" && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
                      <i className="fab fa-github mr-1"></i> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="/#contact" className="btn btn-primary">Have a Project Idea? Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Projects; 