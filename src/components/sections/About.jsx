import '../../styles/About.css';
import { Link } from 'react-router-dom';

function About() {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python (Django/Flask)', 'Java (Spring)', 'REST APIs', 'GraphQL'] },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'] },
    { category: 'DevOps & Tools', items: ['Git & GitHub', 'Docker', 'CI/CD', 'AWS', 'Webpack'] },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>About Me</h2>
          <p className="section-subtitle">Learn more about my background and skills.</p>
        </div>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <div className="card p-4">
                <h3>Who I Am</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <h4 className="mt-4 mb-2">My Journey</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <h4 className="mt-4 mb-2">Education</h4>
                <p className="mb-1">
                  <strong>B.S. in Computer Science</strong> - Lorem Ipsum University, 202X
                </p>
                 <p className="mb-3">
                  <em>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management.</em>
                </p>
              </div>
            </div>

            <div className="skills-container">
              <h3 className="mb-4 text-center">Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-card card">
                    {/* Removed icon for a cleaner look */}
                    <h4>{skillGroup.category}</h4>
                    <ul className="skill-list">
                      {skillGroup.items.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cta-container text-center mt-5">
          <Link to="/projects" className="btn btn-primary">
            Explore My Projects
          </Link>
          <a href="/#contact" className="btn btn-secondary ml-3">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About; 