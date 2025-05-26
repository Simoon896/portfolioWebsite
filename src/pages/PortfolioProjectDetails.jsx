import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/ProjectDetails.css'; // We'll create this CSS file next
import portfolioSnap from '../assets/portfolioSnap.PNG'; // Import the image

function PortfolioProjectDetails() {
  return (
    <div className="project-details-container">
      <Link to="/projects" className="btn btn-sm btn-outline-secondary back-button">
        <i className="fas fa-arrow-left mr-1"></i> Back to Projects
      </Link>
      <header className="project-header">
        <h1>simoon.dev</h1>
        <p className="project-subtitle">A showcase of my skills and projects.</p>
      </header>

      <section className="project-image-section">
        <img src={portfolioSnap} alt="Portfolio Snapshot" className="project-main-image" />
      </section>

      <section className="project-overview card-style-section">
        <h2>Overview</h2>
        <p>
          This portfolio website is a React-based application designed to present my work and capabilities in a clean, modern, and accessible manner. It serves as a central hub for potential employers and collaborators to learn about my projects, skills, and experience.
        </p>
      </section>

      <section className="project-features card-style-section">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Responsive Design:</strong> Adapts to various screen sizes (desktops, tablets, and mobiles).</li>
          <li><strong>Project Showcase:</strong> Dedicated sections for detailed project descriptions, including technologies used, live demos, and source code links.</li>
          <li><strong>Interactive Elements:</strong> Smooth animations and transitions to enhance user experience.</li>
          <li><strong>Skills Section:</strong> Highlights my technical proficiencies.</li>
          <li><strong>Contact Form:</strong> Easy way to get in touch.</li>
          <li><strong>Navigation:</strong> Clear and intuitive navigation using React Router.</li>
        </ul>
      </section>

      <section className="project-tech-stack card-style-section">
        <h2>Technologies Used</h2>
        <div className="tech-icons">
          {/* Add icons or tags for React, JavaScript, HTML, CSS, etc. */}
          <span className="tech-tag">React</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">HTML5</span>
          <span className="tech-tag">CSS3</span>
          <span className="tech-tag">React Router</span>
          <span className="tech-tag">Git</span>
        </div>
      </section>

      <section className="project-challenges card-style-section">
        <h2>Challenges & Solutions</h2>
        <p>
          One of the main challenges was to create a visually appealing and performant website while ensuring the code remains maintainable and scalable. Implementing smooth page transitions and animations with React Router required careful state management and component lifecycle handling. Another challenge was to design a responsive layout that works seamlessly across all devices, which was addressed using modern CSS techniques like Flexbox and Grid.
        </p>
      </section>

      <section className="project-learnings card-style-section">
        <h2>What I Learned</h2>
        <p>
          Building this portfolio enhanced my understanding of React, component-based architecture, and state management. I also gained more experience with responsive web design principles and modern CSS. The process of deploying the website provided valuable insights into build processes and hosting platforms.
        </p>
      </section>

      <div className="project-links-detail">
        <a href="/projects" className="btn btn-outline-primary">Back to Projects</a>
        <a href="https://github.com/Simoon896/portfolioWebsite" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">View Code on GitHub</a>
      </div>
    </div>
  );
}

export default PortfolioProjectDetails; 