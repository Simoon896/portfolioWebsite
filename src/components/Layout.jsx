import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Layout.css';

function Layout({ children }) {
  const location = useLocation();

  // Add smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default Layout; 