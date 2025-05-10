import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-text">simon<span className="terminal-cursor">_</span></span>
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
            <a href="#resume" className="nav-link" onClick={() => setIsOpen(false)}>Resume</a>
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