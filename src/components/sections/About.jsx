import '../../styles/About.css';

function About() {
  const skills = [
    { category: 'Offensive Security', items: ['Penetration Testing', 'Web App Security', 'Network Scanning', 'Social Engineering', 'Exploit Development'] },
    { category: 'Defensive Security', items: ['SIEM Management', 'Incident Response', 'Threat Hunting', 'Malware Analysis', 'Vulnerability Assessment'] },
    { category: 'Programming', items: ['Python', 'Bash', 'PowerShell', 'JavaScript', 'SQL'] },
    { category: 'Tools & Platforms', items: ['Kali Linux', 'Wireshark', 'Burp Suite', 'Metasploit', 'Nmap', 'OWASP ZAP'] },
    { category: 'Certifications', items: ['Security+', 'eJPT (in progress)', 'HTB Certified', 'TryHackMe Top 1%', 'CTF Competitor'] },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-button"></span>
                  <span className="terminal-button"></span>
                  <span className="terminal-button"></span>
                </div>
                <div className="terminal-title">about.sh</div>
              </div>
              <div className="terminal-body">
                <div className="command-line">
                  <span className="prompt">simon@kali:~$</span> cat background.txt
                </div>
                <div className="command-output">
                  <p>
                    I'm a cybersecurity enthusiast focused on ethical hacking, penetration testing, and security research. 
                    My journey began with a fascination for understanding how systems work—and then figuring out how they can break.
                  </p>
                  <p>
                    Currently pursuing a degree in Cybersecurity, I spend my time participating in CTF competitions, 
                    researching vulnerabilities, and building tools to enhance security testing capabilities.
                  </p>
                </div>
                
                <div className="command-line">
                  <span className="prompt">simon@kali:~$</span> cat interests.txt
                </div>
                <div className="command-output">
                  <ul>
                    <li>Web application security testing</li>
                    <li>Network penetration testing</li>
                    <li>Security automation with Python</li>
                    <li>Capture The Flag competitions</li>
                    <li>Malware analysis and reverse engineering</li>
                  </ul>
                </div>
                
                <div className="command-line">
                  <span className="prompt">simon@kali:~$</span> cat education.txt
                </div>
                <div className="command-output">
                  <p>
                    <strong>B.S. in Cybersecurity</strong><br />
                    Expected Graduation: 2025<br />
                    Relevant Coursework: Network Security, Ethical Hacking, Digital Forensics, Secure Coding
                  </p>
                </div>
                
                <div className="command-line">
                  <span className="prompt">simon@kali:~$</span> _
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-container">
            <h3>Technical Arsenal</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <ul>
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
    </section>
  );
}

export default About; 