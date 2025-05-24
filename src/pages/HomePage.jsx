import Layout from '../components/Layout';
import Home from '../components/sections/Home';
// import About from '../components/sections/About'; // Removed About import
// import Contact from '../components/sections/Contact'; // Removed Contact import
import '../App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Timeout to ensure ScrollToTop has finished
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Adjust timeout if needed
      }
    }
    // Scroll to top if no hash, as this is the main landing page
    // else if (!location.hash) { 
    //   window.scrollTo(0, 0);
    // }
  }, [location]);

  return (
    <Layout>
      <Home />
      {/* <About /> */}{/* Removed About section */}
      {/* <Contact /> */}{/* Removed Contact section */}
    </Layout>
  );
}

export default HomePage; 