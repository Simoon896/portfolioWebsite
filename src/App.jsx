import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioProjectDetails from './pages/PortfolioProjectDetails';
import LinkSnifferProjectDetails from './pages/LinkSnifferProjectDetails';
import CatalogrProjectDetails from './pages/CatalogrProjectDetails';
import CyberCapstoneProject from './pages/CyberCapstoneProject';
import ResumePage from './pages/ResumePage';
import './App.css';

// New component to handle scrolling to top on route change
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio-project-details" element={<PortfolioProjectDetails />} />
        <Route path="/linksniffer-project-details" element={<LinkSnifferProjectDetails />} />
        <Route path="/catalogr-project-details" element={<CatalogrProjectDetails />} />
        <Route path="/cybercapstoneproject" element={<CyberCapstoneProject />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
