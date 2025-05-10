import '../../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Hi, I'm Simon</h1>
        <h2>Computer Science Student & Developer</h2>
        <p>
          I'm passionate about building elegant solutions to complex problems through code.
          My focus is on creating clean, efficient, and user-friendly applications.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">See My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home; 