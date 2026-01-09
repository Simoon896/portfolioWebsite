import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/ProjectDetails.css';
import nmapScan from '../assets/nmapscan.png';
import scannerCode from '../assets/scanner_code.png';

function TcpNetworkScannerProjectDetails() {
  return (
    <Layout>
      <div className="project-details-container">
        <Link to="/projects" className="btn btn-sm btn-outline-secondary back-button">
          <i className="fas fa-arrow-left mr-1"></i> Back to Projects
        </Link>

        <header className="project-header">
          <h1>TCP Network Scanner</h1>
          <p className="project-subtitle">Lightweight Python scanner built during Applied Cybersecurity to probe TCP ports and report reachability.</p>
        </header>

        <section className="project-image-section">
          <img src={nmapScan} alt="Nmap scan output" className="project-main-image" />
        </section>

        <section className="project-overview card-style-section">
          <h2>Overview</h2>
          <p>
          This network scanner is a lightweight Python-based tool designed to identify open and closed TCP ports on a target host. The project was created as part of an Applied Cybersecurity course to reinforce core concepts of TCP/IP networking, socket programming, and basic reconnaissance techniques.
          <br />
          <br />
          While intentionally minimal, this scanner demonstrates how port scanning works at a foundational level—similar in concept to tools like Nmap—by attempting TCP connections and interpreting the results. This project reflects my ability to understand and implement networking concepts that are critical in both IT support and cybersecurity analyst environments.
          </p>
        </section>

        <section className="project-features card-style-section">
          <h2>Key Features</h2>
          <ul>
            <li>Command-line usage: <code>python3 network_scan.py &lt;hostname&gt; &lt;ports&gt;</code></li>
            <li>Iterates through port lists and returns open/closed status per port</li>
            <li>Lightweight, dependency-free approach using Python sockets</li>
            <li>Designed for quick validation against known-good baselines</li>
          </ul>
        </section>

        <section className="project-tech-stack card-style-section">
          <h2>Technologies Used</h2>
          <div className="tech-icons">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Sockets</span>
            <span className="tech-tag">CLI</span>
            <span className="tech-tag">Nmap</span>
            <span className="tech-tag">TCP/IP Networking</span>
          </div>
        </section>

        <section className="project-learnings card-style-section">
          <h2>What I Learned</h2>
          <p>
          Through this project, I gained hands-on experience with core TCP/IP networking concepts by implementing a port scanner using Python sockets. I learned how TCP connections are established at a low level and how connection attempts can be used to determine whether a service is reachable on a specific port. This reinforced my understanding of common network services such as SSH, HTTP/HTTPS, and RDP, and how they are exposed and identified across a network. Building the scanner from scratch helped me better understand how professional tools like Nmap function internally rather than treating them as black boxes.
          </p>
        </section>

        <div className="project-links-detail">
          <a
            href="https://github.com/Simoon896/Simple-TCP-Network-Scanner-"
            className="btn btn-outline-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code on GitHub
          </a>
          <Link to="/projects" className="btn btn-outline-secondary">Back to Projects</Link>
        </div>
      </div>
    </Layout>
  );
}

export default TcpNetworkScannerProjectDetails;
