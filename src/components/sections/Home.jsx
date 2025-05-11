import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DailyQuote from '../DailyQuote';
import '../../styles/Home.css';

function Home() {
  const [text, setText] = useState('');
  const fullText = "Developer | Web Designer | Network Specialist";
  const typingSpeed = 60;
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, currentIndex));
      currentIndex++;
      
      if (currentIndex > fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="greeting-container">
          <div className="greeting-header">
            <div className="constellation">
              <div className="star star-1"></div>
              <div className="star star-2"></div>
              <div className="star star-3"></div>
            </div>
          </div>
          <div className="greeting-body">
            <h1>Hi, I'm Simon</h1>
            <h2 className="typing-text">{text}<span className="cursor">|</span></h2>
            <DailyQuote />
            <div className="cta-buttons">
              <Link to="/blog" className="btn btn-primary">Read My Blog</Link>
              <Link to="/projects" className="btn">View Projects</Link>
              <Link to="#about" className="btn" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              }}>About Me</Link>
              <Link to="#contact" className="btn" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; 