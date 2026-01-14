import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Home.css';
import headshot from '../../assets/head.JPEG';

function Home() {
  const navigate = useNavigate();
  const resumePdf = `${window.location.origin}/resume.pdf`;

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="hero-text">
            <span className="greeting">Hello, I'm</span>
            <h1>Simon Kuester</h1>
            <p className="hero-subtitle">IT Support Specialist & Cybersecurity Analyst</p>
            <p className="hero-description">
              Welcome to my personal website! I am an enthusiasist of anything and everything related to computers and technology. Feel free to check out my latest projects!
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn btn-primary">My Projects</Link>
              <a href={resumePdf} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Resume</a>
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