import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Layout from '../components/Layout';
import '../styles/ProjectDetails.css'; // Reuse the same CSS
import catalogrSnap from '../assets/catalogrSnap.png'; // Import the image

function CatalogrProjectDetails() {
  return (
    <Layout>
      <div className="project-details-container">
        <Link to="/projects" className="btn btn-sm btn-outline-secondary back-button">
          <i className="fas fa-arrow-left mr-1"></i> Back to Projects
        </Link>
        <header className="project-header">
          <h1>Catalogr</h1>
          <p className="project-subtitle">Your Personal Inventory Management Companion</p>
        </header>

        <section className="project-image-section">
          <img src={catalogrSnap} alt="Catalogr Application Snapshot" className="project-main-image catalogr-main-image" />
        </section>

        <section className="project-overview card-style-section">
          <h2>About Catalogr</h2>
          <p>
            Catalogr is a comprehensive inventory management application designed to help you keep track of your personal belongings. Whether you're organizing your home items, collectibles, or important documents, Catalogr provides an easy-to-use interface for managing your possessions.
          </p>
        </section>

        <section className="project-features card-style-section">
          <h2>✨ Key Features</h2>
          <ul>
            <li><strong>Item Management:</strong> Add, edit, and delete inventory items with detailed information.</li>
            <li><strong>Categorization:</strong> Organize items by category and location.</li>
            <li><strong>Advanced Search:</strong> Quickly find items with powerful filtering options.</li>
            <li><strong>Dark/Light Theme:</strong> Choose between light and dark themes for comfortable viewing.</li>
            <li><strong>Warranty Tracking:</strong> Get notifications before warranties expire.</li>
            <li><strong>User-Friendly Interface:</strong> Intuitive design for effortless navigation.</li>
            <li><strong>Persistent Storage:</strong> Never lose your inventory data.</li>
          </ul>
        </section>

        <section className="project-tech-stack card-style-section">
          <h2>Technologies Used</h2>
          <div className="tech-icons">
            <span className="tech-tag">React Native</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">SQLite</span>
            <span className="tech-tag">Expo</span>
            <span className="tech-tag">Appwrite</span>
            {/* Add other relevant technologies if any */}
          </div>
        </section>

        <section className="project-challenges card-style-section">
          <h2>Challenges & Solutions</h2>
          <p>
           PRODUCT CHALLENGES
          </p>
        </section>

        <section className="project-learnings card-style-section">
          <h2>What I Learned</h2>
          <p>
            Building Catalogr significantly deepened my expertise in mobile application development with React Native and Expo. I gained extensive experience with state management in larger applications, integrating third-party services like Appwrite, and managing local databases with SQLite. It also provided valuable lessons in UI/UX design for mobile platforms, especially concerning intuitive navigation and theme management.
          </p>
        </section>

        <div className="project-links-detail">
          <a href="/projects" className="btn btn-outline-primary">Back to Projects</a>
          {/* Replace # with actual GitHub link when available */}
          <a href="https://github.com/Simoon896/Exam2MAD" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">View Code on GitHub</a> 
        </div>
      </div>
    </Layout>
  );
}

export default CatalogrProjectDetails; 