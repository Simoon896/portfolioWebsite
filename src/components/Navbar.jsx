import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navbarHeight = 60; // Updated navbar height

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes and scroll to top
  useEffect(() => {
    setIsOpen(false);
    // window.scrollTo(0, 0); // Let sections handle their own scroll if needed
  }, [location.pathname]);

  // Function to handle scrolling to sections on the homepage
  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  // Function to navigate to page and scroll to top
  const navigateToPage = (e, path) => {
    e.preventDefault();
    // window.scrollTo(0, 0); // Let sections handle their own scroll
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container"> {/* Removed .container for full width */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={(e) => {
            // e.preventDefault(); // Allow default Link behavior for navigation
            if (location.pathname === '/') {
                e.preventDefault(); // Prevent navigation if already on home
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setIsOpen(false); // Close menu on logo click
          }}
        >
          simoon.dev
        </Link>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {/* <li className="nav-item">
            <Link to="/" className="nav-link" onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                scrollToSection('home');
              } else {
                // Allow default link behavior to navigate to home then scroll
                // The scrollToSection logic will handle it after navigation
                // Or, we can navigate and then scroll in a more controlled way if needed
                 navigate('/');
                 setTimeout(() => scrollToSection('home'), 100);
              }
            }}>Home</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={(e) => navigateToPage(e, '/about')}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={(e) => navigateToPage(e, '/projects')}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={(e) => navigateToPage(e, '/contact')}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 