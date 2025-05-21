import { useState } from 'react';
import '../../styles/Projects.css';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Catalogr",
      description: "A mobile app that allows users to catalog basic home items and information about them.",
      tech: ["React Native", "Canvas API", "CSS Animations", "React"],
      githubLink: "https://github.com/simon/cosmic-animations",
      demoLink: "https://cosmic-animations.demo",
      image: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Cosmic+Animations"
    },
    {
      id: 2,
      title: "Interactive Constellation Explorer",
      description: "A web application that allows users to explore constellations, learn about stars, and create their own custom star patterns.",
      tech: ["React", "Three.js", "WebGL", "Astronomy API"],
      githubLink: "https://github.com/simon/constellation-explorer",
      demoLink: "https://constellation-explorer.demo",
      image: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Constellation+Explorer"
    },
    {
      id: 3,
      title: "Stellar Design System",
      description: "A comprehensive design system with dark mode components inspired by the night sky, built for designers and developers.",
      tech: ["Figma", "Storybook", "React", "SCSS"],
      githubLink: "https://github.com/simon/stellar-design",
      demoLink: "https://stellar-design.demo",
      image: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Stellar+Design"
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
      <div className="projects-container">
        <h2 className="section-title">Creative Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-overlay github">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
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
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  <a href={`#project-${project.id}`} className="project-link details">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="project-cta">
          <h3>Have a Project in Mind?</h3>
          <p>Let's collaborate to build something amazing together.</p>
          <a href="/" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Projects; 