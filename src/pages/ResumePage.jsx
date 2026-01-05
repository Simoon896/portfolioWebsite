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
        <Link to="/" className="btn btn-sm btn-outline-secondary back-button">← Back to Projects</Link>

        <header className="project-header">
          <h1>Resume</h1>
          <p className="project-subtitle">IT support and cybersecurity experience at a glance.</p>
          <div className="project-links-detail resume-links">
            <a href={resumePdf} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Open PDF</a>
            <a href={resumeDocx} className="btn btn-outline-secondary" download>Download</a>
          </div>
        </header>

        <section className="project-overview card-style-section resume-summary">
          <h2>Overview</h2>
          <p>
            A concise, two-page snapshot covering support operations, incident response, and the tooling I rely on to keep teams productive and secure.
          </p>
          <ul className="resume-highlights">
            <li><strong>Support & operations:</strong> endpoint setup, ticket triage, and rapid issue resolution.</li>
            <li><strong>Security focus:</strong> hardening, monitoring, and clear escalation paths that reduce downtime.</li>
            <li><strong>Collaboration:</strong> crisp documentation so fixes are repeatable and handoffs stay smooth.</li>
          </ul>
        </section>

        <section className="project-image-section resume-preview">
          <div className="resume-preview-card">
            <img
              src={resumeImage}
              alt="Resume preview"
              className="resume-image"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          <div className="card-style-section resume-preview-copy">
            <h3>View or download</h3>
            <p>Use the PDF for the cleanest view. Grab the DOCX if you need a copy you can edit or tailor for a role.</p>
            <ul className="resume-file-instructions">
              <li><strong>PDF preview:</strong> place <code>/public/resume.pdf</code> for an in-browser view.</li>
              <li><strong>Image fallback:</strong> add <code>/public/resumeimage.png</code> to show the snapshot above.</li>
              <li><strong>Docx:</strong> always available via the download button.</li>
            </ul>
            <div className="resume-inline-links">
              <a href={resumePdf} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Open PDF</a>
              <a href={resumeDocx} className="btn btn-secondary" download>Download DOCX</a>
            </div>
            <p className="resume-footnote">If the preview is blank, ensure the PDF exists at that path or use the download links.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ResumePage;
