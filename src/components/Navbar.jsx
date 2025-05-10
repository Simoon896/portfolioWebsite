import { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoText, setLogoText] = useState("simon");
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const oCountRef = useRef(1);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isHovering) {
      hoverTimeoutRef.current = setInterval(() => {
        if (oCountRef.current < 15) {
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a 
          href="#home" 
          className="navbar-logo"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="logo-text">{logoText}<span className="terminal-cursor">_</span></span>
        </a>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link" onClick={() => setIsOpen(false)}>Blog</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 