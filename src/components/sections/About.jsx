import '../../styles/About.css';
import { Link, useNavigate } from 'react-router-dom';
import aboutSnap2 from '../../assets/aboutSnap2.jpg';

function About() {
  const navigate = useNavigate();
  const skills = [
    { category: 'Certifications', items: ['CompTIA A+ (Aug 2025)', 'CompTIA Security+ (Expected Jan 2026)', 'Google Cybersecurity Professional Certificate (Sep 2023)'] },
    { category: 'Operating Systems & Networking', items: ['Windows 10/11', 'Windows Server', 'Linux', 'macOS', 'Active Directory', 'TCP/IP', 'DNS', 'DHCP'] },
    { category: 'Support & Administration', items: ['User Account Management', 'Password Resets', 'System Troubleshooting', 'Documentation', 'Remote Support'] },
    { category: 'Security, Monitoring & Scripting', items: ['Wireshark', 'Snort', 'Wazuh', 'Event Viewer', 'PowerShell', 'Bash', 'Python'] },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <div className="card p-4">
                <h3>Who I Am</h3>
                <div className="about-image-container">
                  <img src={aboutSnap2} alt="Working on projects" className="about-profile-image" />
                </div>
                <p>
                  Hello! My name is Simon, and I’m an IT Support Specialist and a recent cybersecurity graduate from the University of North Georgia. I enjoy taking messy, real-world problems—device issues, access blockers, network hiccups—and turning them into clear fixes and repeatable processes.
                </p>
                <p>
                  My focus is reliable support: triaging quickly, troubleshooting methodically, and documenting solutions so issues don't come back.
                </p>

                <h4 className="mt-4 mb-2">My Journey</h4>
                <p>
                  Through labs and hands-on projects, I’ve built experience with <strong>Windows/Linux administration</strong>, <strong>Active Directory hardening</strong>, and <strong>security monitoring</strong>. I like learning by building—setting up environments, breaking things safely, and then locking them down.
                </p>

                <h4 className="mt-4 mb-2">Highlights</h4>
                <ul className="about-highlights">
                  <li><strong>Enterprise network lab:</strong> built a 6-VM environment, added VLAN segmentation, and enforced least-privilege with ~40 pfSense rules.</li>
                  <li><strong>Detection & visibility:</strong> integrated Snort IDS and Wazuh SIEM; validated controls with Kali Linux attack simulations.</li>
                  <li><strong>Linux automation:</strong> administered an Ubuntu home lab (NAS/Plex/VPN) with scripted, automated backup workflows.</li>
                </ul>
                <p>
                  Asides from the highlights above, I have many more projects that I have worked on that you can see on my projects page! These projects and writeups cover a wide range of computer science and cybersecurity topics that I have learned and applied over the past few years.
                </p>
                <h4 className="mt-4 mb-2">Education</h4>
                <p className="mb-1">
                  <strong>B.S. in Cybersecurity</strong> — University of North Georgia (2022–2025)
                </p>
                 <p className="mb-3">
                  <em>GPA: 3.84/4.0 • Dean’s/President’s List (2022–2025)</em>
                </p>
                <p className="mb-3">
                  <em>During my time at UNG, I have taken a variety of courses that have helped me to develop my skills and knowledge in the field of cybersecurity. I have taken courses in Network Security, Operating Systems, Applied Cybersecurity, Script Programming, and more.</em>
                </p>

                <h4 className="mt-4 mb-2">Experience</h4>
                <p className="mb-1">
                  <strong>Welocalize — Search Quality Rater</strong> (Remote, Jun 2024–Present)
                </p>
                <ul className="about-highlights">
                 <p>Over the past year and a half, I have been working at Welocalize as a Search Quality Rater. I have been responsible for validating and improving the quality of search results for our clients. I have also been responsible for researching and verifying information for our clients.</p>
                </ul>
              </div>
            </div>

            <div className="skills-container">
              <h3 className="mb-4 text-center">Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-card card">
                    <h4>{skillGroup.category}</h4>
                    <ul className="skill-list">
                      {skillGroup.items.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cta-container text-center mt-5">
          <Link to="/projects" className="btn btn-primary">
            Explore My Projects
          </Link>
          <button onClick={() => navigate('/contact')} className="btn btn-secondary ml-3">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default About; 