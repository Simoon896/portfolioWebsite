import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/ProjectDetails.css';

const youtubeId = 'Z03sj1094u4';

function CyberCapstoneProject() {
  return (
    <Layout>
      <div className="project-details-container">
        <Link to="/projects" className="btn btn-sm btn-outline-secondary back-button">
          <i className="fas fa-arrow-left mr-1"></i> Back to Projects
        </Link>

        <header className="project-header">
          <h1>Segmented Enterprise Network Project</h1>
          <p className="project-subtitle">Hands-on cybersecurity capstone project done during my senior year at UNG</p>
        </header>

        <section className="project-image-section">
          <div className="video-wrapper video-detail-wrapper">
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
          This capstone project focused on designing, attacking, and securing a simulated enterprise network to demonstrate how segmentation, access control, monitoring, and automation significantly reduce an organization’s attack surface. The project began with an intentionally insecure flat network to establish a baseline, followed by iterative hardening using industry-standard defensive tools and best practices.
          <br />
          <br />
          Through hands-on testing and validation, the project highlights how proper network architecture, firewall enforcement, identity management, intrusion detection, centralized logging, and scripting automation work together to prevent lateral movement, detect malicious activity, and improve overall security posture.
          </p>
        </section>

        <section className="project-features card-style-section">
          <h2>Key Highlights</h2>
          <ul>
            <li>Designed and deployed a multi-subnet enterprise network using VMware and pfSense</li>
            <li>Demonstrated real-world attacks against an unsegmented network and validated mitigations</li>
            <li>Implemented firewall rules using least privilege and deny-by-default principles</li>
            <li>Hardened Active Directory using organizational units and group policy enforcement</li>
            <li>Integrated Snort IDS for network-based threat detection and alerting</li>
            <li>Centralized logs and alerts using a Wazuh SIEM deployment</li>
            <li>Automated Active Directory user and group management with PowerShell</li>
          </ul>
        </section>

        <section className="project-tech-stack card-style-section">
          <h2>Technologies Used</h2>
          <div className="tech-icons">
            <span className="tech-tag">VMWare</span>
            <span className="tech-tag">pfSense</span>
            <span className="tech-tag">Active Directory (Windows Server)</span>
            <span className="tech-tag">Kali Linux</span>
            <span className="tech-tag">Wazuh</span>
            <span className="tech-tag">Snort IDS</span>
          </div>
        </section>

        <section className="project-challenges card-style-section">
          <h2>Challenges & Solutions</h2>
          <p>
          Transitioning from a flat network to a segmented architecture required extensive reconfiguration of IP addressing, DNS, DHCP, and routing. Learning pfSense interface design, firewall rule logic, and traffic flow was a major challenge that was resolved through documentation review and iterative testing.
          <br />
          <br />
          Understanding how Active Directory organizational units, group policies, and permissions interact at scale was a major challenge that was addressed by restructuring the domain hierarchy and applying targeted security policies aligned with real-world enterprise environments.
          </p>
        </section>

        <section className="project-learnings card-style-section">
          <h2>What I Learned</h2>
          <p>
          This project strengthened my understanding of enterprise network security architecture, Active Directory hardening, intrusion detection, and centralized logging. I gained practical experience validating security controls through attack simulation and learned how automation can streamline identity management tasks. Most importantly, the project reinforced how layered defenses and segmentation dramatically limit the impact of compromised systems. Please see the PDF below for a more detailed writeup of the project.
          </p>
        </section>

        <div className="project-links-detail">
          <a
            href={`${window.location.origin}/Design and Implementation of a Segmented Enterprise Network - Simon Kuester.pdf`}
            className="btn btn-outline-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF
          </a>
          <Link to="/projects" className="btn btn-outline-secondary">Back to Projects</Link>
        </div>
      </div>
    </Layout>
  );
}

export default CyberCapstoneProject;
