import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/Projects.css';
import portfolioSnap from '../../assets/portfolioSnap.PNG';
import linkSnifferSnap from '../../assets/linkSnifferSnap.PNG';
import catalogrSnap from '../../assets/catalogrSnap.png';

function Projects() {
  const navigate = useNavigate();
  const [projects] = useState([
    {
      id: 4,
      title: "Cyber Capstone",
      description: "A hands-on cybersecurity capstone showcasing intrusion detection, vulnerability assessment, and incident response workflows.",
      tech: ["Python", "Wireshark", "Splunk", "Kali Linux", "Metasploit"],
      githubLink: "#",
      demoLink: "/cybercapstoneproject",
      youtubeId: "Z03sj1094u4",
      image: null
    },
    {
      id: 1,
      title: "simoon.dev",
      description: "A React-based personal portfolio website to showcase my projects and skills. It features a modern design, smooth animations, and a responsive layout.",
      tech: ["React", "JavaScript", "HTML", "CSS", "React Router"],
      githubLink: "https://github.com/Simoon896/portfolioWebsite",
      demoLink: "/portfolio-project-details",
      image: portfolioSnap
    },
    {
      id: 2,
      title: "LinkSniffer",
      description: "A Google Chrome extension that automatically refreshes a page and detects new links, useful for monitoring updates.",
      tech: ["JavaScript", "HTML", "CSS", "Chrome API"],
      githubLink: "https://github.com/Simoon896/LinkSniffer",
      demoLink: "/linksniffer-project-details",
      image: linkSnifferSnap
    },
    {
      id: 3,
      title: "Catalogr",
      description: "A comprehensive inventory management application designed to help you keep track of your personal belongings.",
      tech: ["React Native", "TypeScript", "Expo Go", "SQLite", "Appwrite", "Formspree"],
      githubLink: "https://github.com/Simoon896/Exam2MAD",
      demoLink: "/catalogr-project-details",
      image: catalogrSnap
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
                {project.youtubeId ? (
                  <div className="video-wrapper">
                    <iframe
                      className="project-video"
                      src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                      title={project.title + " demo"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <img src={project.image} alt={project.title} className="project-image" />
                )}
              </div>
              <div className="project-content">
                {(project.title === "simoon.dev" || project.title === "LinkSniffer" || project.title === "Catalogr" || project.title === "Cyber Capstone") ? (
                  <Link to={project.demoLink} className="project-title-link">
                    <h3>{project.title}</h3>
                  </Link>
                ) : (
                  <h3>{project.title}</h3>
                )}
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  <strong>Technologies:</strong>
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink && project.demoLink !== "#" && (
                    (project.title === "simoon.dev" || project.title === "LinkSniffer" || project.title === "Catalogr" || project.title === "Cyber Capstone") ? (
                      <Link to={project.demoLink} className="btn btn-sm btn-outline-primary">
                        <i className="fas fa-external-link-alt mr-1"></i> View Details
                      </Link>
                    ) : (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                        <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                      </a>
                    )
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

        <div className="text-center mt-5 projects-cta-container">
          <button onClick={() => navigate('/contact')} className="btn btn-primary">Have a Project Idea? Get in Touch</button>
        </div>
      </div>
    </section>
  );
}

export default Projects; 