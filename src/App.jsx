import Layout from './components/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Blog from './components/sections/Blog';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Blog />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
