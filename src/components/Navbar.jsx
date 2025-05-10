import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoText, setLogoText] = useState("simon");
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const oCountRef = useRef(1);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isHovering) {
      hoverTimeoutRef.current = setInterval(() => {
        if (oCountRef.current < 12) {
          oCountRef.current += 1;
          setLogoText("sim" + "o".repeat(oCountRef.current) + "n");
        } else {
          clearInterval(hoverTimeoutRef.current);
        }
      }, 150);
    } else {
      clearInterval(hoverTimeoutRef.current);
      oCountRef.current = 1;
      setLogoText("simon");
    }

    return () => {
      clearInterval(hoverTimeoutRef.current);
    };
  }, [isHovering]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Function to handle scrolling to sections on the homepage
  const scrollToSection = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link 
          to="/"
          className="navbar-logo"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="logo-text">{logoText}<span className="terminal-cursor">_</span></span>
        </Link>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => scrollToSection('home')}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => scrollToSection('about')}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 