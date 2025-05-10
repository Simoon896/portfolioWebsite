import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="terminal-line">
        <span>[simon@kali ~]$ </span>
        <span className="typing">ssh cybersec-portfolio</span>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>simon<span className="terminal-cursor">_</span></h3>
            <p>Cybersecurity Researcher & Ethical Hacker</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-link-group">
              <h4>Latest Posts</h4>
              <ul>
                <li><a href="#blog-post-1">Understanding XSS Vulnerabilities</a></li>
                <li><a href="#blog-post-2">Network Intrusion Investigation</a></li>
                <li><a href="#blog-post-3">Building a Security Lab</a></li>
              </ul>
            </div>
            
            <div className="footer-link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://github.com/simon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/simon" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/simon_security" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="mailto:simon@security-researcher.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Simon | Security Researcher | <span className="terminal-green">All systems are vulnerable</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 