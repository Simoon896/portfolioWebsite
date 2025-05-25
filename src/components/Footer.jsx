import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-social">
          <a href="https://github.com/simoon896" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/simon-kuester-5bb20228b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:simonkuester@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Made with ❤️ by Simon Kuester</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 