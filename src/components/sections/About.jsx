import '../../styles/About.css';
import { Link, useNavigate } from 'react-router-dom';
import aboutSnap from '../../assets/aboutSnap.png';
import aboutSnap2 from '../../assets/aboutSnap2.jpg';

function About() {
  const navigate = useNavigate();
  const skills = [
    { category: 'Certifications', items: ['Google Cybersecurity Professional'] },
    { category: 'Front and Backend', items: ['React', 'Python', 'TypeScript', 'REST APIs', 'SQLite'] },
    { category: 'Networking Skills', items: ['Cisco', 'AWS', 'Docker', 'CI/CD'] },
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
                <div className="about-image-container">
                  <img src={aboutSnap} alt="Profile" className="about-profile-image" />
                </div>
                <p>
                  I'm a passionate developer with a love for creating elegant, user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life through clean code and intuitive design.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving to build solutions that not only work flawlessly but also provide exceptional user experiences.
                </p>

                <h4 className="mt-4 mb-2">My Journey</h4>
                <p>
                  My journey in software development began with curiosity about how digital products work. This led me to explore various programming languages and frameworks, continuously expanding my skills while working on diverse projects across different industries.
                </p>

                <div className="about-secondary-image">
                  <img src={aboutSnap2} alt="Working on projects" className="about-work-image" />
                </div>

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
          <button onClick={() => navigate('/contact')} className="btn btn-secondary ml-3">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default About; 