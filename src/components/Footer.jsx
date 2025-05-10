import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="starlight-line">
        <span className="typing">stellar connection established</span>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>simon<span className="cursor">_</span></h3>
            <p>Developer & Designer</p>
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
                <li><a href="#blog-post-1">Cosmic Design Principles</a></li>
                <li><a href="#blog-post-2">Animation in Modern UI</a></li>
                <li><a href="#blog-post-3">Creating Digital Constellations</a></li>
              </ul>
            </div>
            
            <div className="footer-link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://github.com/simon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/simon" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/simon_design" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="mailto:simon@cosmic-design.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Simon | Developer & Designer | <span className="accent-text">Exploring the digital cosmos</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 