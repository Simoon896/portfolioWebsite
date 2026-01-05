import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectDetails.css';

const youtubeId = 'Z03sj1094u4';

function CyberCapstoneProject() {
  return (
    <div className="project-details-container">
      <Link to="/projects" className="btn btn-sm btn-outline-secondary back-button">
        <i className="fas fa-arrow-left mr-1"></i> Back to Projects
      </Link>

      <header className="project-header">
        <h1>Cyber Capstone</h1>
        <p className="project-subtitle">Hands-on cybersecurity capstone: detection, assessment, and response.</p>
      </header>

      <section className="project-image-section">
        <div className="video-wrapper">
          <iframe
            className="project-video"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title="Cyber Capstone demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="project-overview card-style-section">
        <h2>About the Project</h2>
        <p>
          This capstone ties together network monitoring, vulnerability assessment, and automated incident response.
          It demonstrates practical strategies for reducing detection time and improving containment.
        </p>
      </section>

      <section className="project-features card-style-section">
        <h2>✨ Key Highlights</h2>
        <ul>
          <li>Network traffic capture and analysis with Wireshark</li>
          <li>Intrusion detection and alerting workflows</li>
          <li>Automated vulnerability scanning and reporting</li>
          <li>Playbook-driven incident response and containment</li>
        </ul>
      </section>

      <section className="project-tech-stack card-style-section">
        <h2>Technologies Used</h2>
        <div className="tech-icons">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Wireshark</span>
          <span className="tech-tag">Splunk</span>
          <span className="tech-tag">Kali Linux</span>
          <span className="tech-tag">Metasploit</span>
        </div>
      </section>

      <section className="project-challenges card-style-section">
        <h2>Challenges & Solutions</h2>
        <p>
          Integrating multiple monitoring and response tools required careful orchestration and reliable data exchange between components.
        </p>
      </section>

      <section className="project-learnings card-style-section">
        <h2>What I Learned</h2>
        <p>
          Improved skills in network forensics, automated tooling, and incident response orchestration, along with practical experience
          deploying detection pipelines in constrained environments.
        </p>
      </section>

      <div className="project-links-detail">
        <a href="#" className="btn btn-outline-primary">View Code</a>
        <Link to="/projects" className="btn btn-outline-secondary">Back to Projects</Link>
      </div>
    </div>
  );
}

export default CyberCapstoneProject;
