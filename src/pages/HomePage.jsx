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
    // Add class to body when component mounts
    document.body.classList.add('homepage-no-scroll');

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

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove('homepage-no-scroll');
    };
  }, [location]); // Dependency array includes location to re-run if hash changes

  return (
    <Layout>
      <Home />
      {/* <About /> */}{/* Removed About section */}
      {/* <Contact /> */}{/* Removed Contact section */}
    </Layout>
  );
}

export default HomePage; 