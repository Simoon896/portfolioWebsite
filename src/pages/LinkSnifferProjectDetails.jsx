import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Layout from '../components/Layout';
import '../styles/ProjectDetails.css'; // Reuse the same CSS
import linkSnifferSnap from '../assets/linkSnifferSnap.PNG'; // Import the image
import linkSnifferSnap2 from '../assets/linkSnifferSnap2.png'; // Import the second image

function LinkSnifferProjectDetails() {
  return (
    <Layout>
      <div className="project-details-container">
        <Link to="/projects" className="btn btn-sm btn-outline-secondary back-button">
          <i className="fas fa-arrow-left mr-1"></i> Back to Projects
        </Link>
        <header className="project-header">
          <h1>LinkSniffer</h1>
          <p className="project-subtitle">Automated Link Detection Chrome Extension</p>
        </header>

        <section className="project-image-section">
          <img src={linkSnifferSnap} alt="LinkSniffer Snapshot 1" className="project-main-image" />
          <img src={linkSnifferSnap2} alt="LinkSniffer Snapshot 2" className="project-main-image project-second-image" />
        </section>

        <section className="project-overview card-style-section">
          <h2>Overview</h2>
          <p>
            LinkSniffer is a Google Chrome extension designed to help users monitor web pages for new links. It automatically refreshes the target page at user-defined intervals and highlights any newly appeared hyperlinks, providing a notification or alert. This is particularly useful for tracking updates on dynamic content websites, forums, or announcement pages where new links signify important new information.
          </p>
        </section>

        <section className="project-features card-style-section">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Automatic Page Refresh:</strong> Configurable refresh intervals for monitoring.</li>
            <li><strong>New Link Detection:</strong> Intelligently identifies and highlights links that were not present on previous scans.</li>
            <li><strong>User-Friendly Interface:</strong> Simple popup UI to control the extension and view results.</li>
            <li><strong>Notification System (Optional):</strong> Can be configured to provide desktop notifications for new links.</li>
            <li><strong>Lightweight & Efficient:</strong> Built to be non-intrusive and performant.</li>
          </ul>
        </section>

        <section className="project-tech-stack card-style-section">
          <h2>Technologies Used</h2>
          <div className="tech-icons">
            <span className="tech-tag">JavaScript (ES6+)</span>
            <span className="tech-tag">HTML5</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">Chrome Extension API</span>
            <span className="tech-tag">DOM Manipulation</span>
          </div>
        </section>

        <section className="project-challenges card-style-section">
          <h2>Challenges & Solutions</h2>
          <p>
            A key challenge was efficiently comparing the DOM state between refreshes to identify only new links without impacting browser performance. This was solved by creating a lightweight snapshot of link URLs and comparing sets. Another challenge was handling various types of dynamically loaded content and ensuring the extension correctly identified links added via JavaScript after the initial page load.
          </p>
        </section>

        <section className="project-learnings card-style-section">
          <h2>What I Learned</h2>
          <p>
            Developing LinkSniffer provided deep insights into the Chrome Extension development lifecycle, including manifest v3 specifics, background scripts, content scripts, and inter-script communication. It also honed my skills in advanced DOM manipulation and asynchronous JavaScript programming to handle page refreshes and updates smoothly.
          </p>
        </section>

        <div className="project-links-detail">
          <a href="/projects" className="btn btn-outline-primary">Back to Projects</a>
          {/* Replace # with actual GitHub link when available */}
          <a href="https://github.com/Simoon896/LinkSniffer" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">View Code on GitHub</a> 
        </div>
      </div>
    </Layout>
  );
}

export default LinkSnifferProjectDetails; 