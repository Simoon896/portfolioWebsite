import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/ProjectDetails.css';

function ResumePage() {
  const resumeDocx = `${window.location.origin}/resume.docx`;
  const resumePdf = `${window.location.origin}/resume.pdf`;
  const resumeImage = `${window.location.origin}/resumeimage.png`;

  return (
    <Layout>
      <div className="project-details-container resume-page">
        <Link to="/" className="btn btn-sm btn-outline-secondary back-button">← Back to Home</Link>

        <header className="project-header">
          <h1>Resume</h1>
          <p className="project-subtitle">Feel free to download and view my resume!</p>
          <div className="project-links-detail resume-links">
            <a
              href={resumePdf}
              className="btn resume-action-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
            </a>
            <a
              href={resumeDocx}
              className="btn resume-action-btn"
              download
            >
              Download
            </a>
          </div>
        </header>

        <section className="project-image-section resume-preview">
          <div className="resume-preview-card">
            <img
              src={resumeImage}
              alt="Resume preview"
              className="resume-image"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ResumePage;
