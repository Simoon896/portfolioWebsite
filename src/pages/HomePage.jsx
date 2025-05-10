import Layout from '../components/Layout';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import '../App.css';

function HomePage() {
  return (
    <Layout>
      <Home />
      <About />
      <Contact />
    </Layout>
  );
}

export default HomePage; 