import Layout from './components/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </Layout>
  );
}

export default App;
