import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Home.css';
import headshot from '../../assets/head.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="hero-text">
            <span className="greeting">Hello, I'm</span>
            <h1>Simon Kuester</h1>
            <p className="hero-subtitle">Cybersecurity & Network Specialist</p>
            <p className="hero-description">
              I am a passionate developer focused on creating elegant and efficient solutions.
              Explore my work and get in touch!
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn btn-primary">My Projects</Link>
              <button onClick={() => navigate('/about')} className="btn btn-secondary">About Me</button>
              <button onClick={() => navigate('/contact')} className="btn btn-secondary">Contact Me</button>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={headshot} alt="Simon Kuester headshot" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; 