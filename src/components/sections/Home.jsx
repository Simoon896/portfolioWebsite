import { useState, useEffect } from 'react';
import '../../styles/Home.css';

function Home() {
  const [text, setText] = useState('');
  const fullText = "Security Researcher | Ethical Hacker | CTF Player";
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
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
            <span className="terminal-button"></span>
          </div>
          <div className="terminal-title">terminal</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-command">whoami</span>
          </div>
          <div className="terminal-output terminal-name">simon</div>
          
          <div className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-command">cat profile.txt</span>
          </div>
          <div className="terminal-output">
            <h1>Hi, I'm Simon</h1>
            <h2 className="typing-text">{text}<span className="cursor">|</span></h2>
            <p>
              I explore the depths of cybersecurity, breaking and fixing systems to make the digital world safer.
              My blog shares insights from my security research and ethical hacking journey.
            </p>
          </div>
          
          <div className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-command">./get-started</span>
          </div>
          <div className="terminal-output cta-buttons">
            <a href="#blog" className="btn primary">Read My Blog</a>
            <a href="#projects" className="btn secondary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; 