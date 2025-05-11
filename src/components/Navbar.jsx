import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoText, setLogoText] = useState("Simoon");
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const oCountRef = useRef(2);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isHovering) {
      hoverTimeoutRef.current = setInterval(() => {
        if (oCountRef.current < 12) {
          oCountRef.current += 1;
          setLogoText("Sim" + "o".repeat(oCountRef.current) + "n");
        } else {
          clearInterval(hoverTimeoutRef.current);
        }
      }, 150);
    } else {
      clearInterval(hoverTimeoutRef.current);
      oCountRef.current = 2;
      setLogoText("Simoon");
    }

    return () => {
      clearInterval(hoverTimeoutRef.current);
    };
  }, [isHovering]);

  // Close menu when route changes and scroll to top
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Function to handle scrolling to sections on the homepage
  const scrollToSection = (id) => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      
      // Add a small delay to allow page transition before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the homepage, scroll directly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  // Function to navigate to page and scroll to top
  const navigateToPage = (e, path) => {
    e.preventDefault(); // Prevent default Link behavior
    window.scrollTo(0, 0); // Scroll to top immediately
    navigate(path); // Then navigate
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a 
          href="/"
          className="navbar-logo"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
            navigate('/');
          }}
        >
          <span className="logo-text">{logoText}</span>
        </a>
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
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          </li>
          <li className="nav-item">
            <a href="/blog" className="nav-link" onClick={(e) => navigateToPage(e, '/blog')}>Blog</a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-link" onClick={(e) => navigateToPage(e, '/projects')}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 