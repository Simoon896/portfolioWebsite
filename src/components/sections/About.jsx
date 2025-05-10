import '../../styles/About.css';
import Constellation from '../Constellation';

function About() {
  const skills = [
    { category: 'Development', items: ['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'Python'] },
    { category: 'Design', items: ['UI/UX Design', 'Responsive Design', 'Animation', 'Figma', 'Adobe XD'] },
    { category: 'Other Skills', items: ['RESTful APIs', 'Git', 'Jest', 'Agile', 'Webpack'] },
    { category: 'Interests', items: ['Astronomy', 'Space Exploration', 'Astrophotography', 'Science Fiction', 'Stargazing'] },
  ];

  return (
    <section id="about" className="about-section">
      <Constellation position="bottom-left" density="low" />
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="cosmic-panel">
              <div className="cosmic-panel-header">
                <div className="cosmic-dots">
                  <span className="cosmic-dot"></span>
                  <span className="cosmic-dot"></span>
                  <span className="cosmic-dot"></span>
                </div>
              </div>
              <div className="cosmic-panel-body">
                <p>
                  I'm a developer and designer with a passion for creating beautiful, interactive experiences
                  that blend art and technology. My work is inspired by the vastness of the cosmos and the
                  beauty of starry night skies.
                </p>
                <p>
                  Currently focusing on frontend development with React, I spend my time crafting
                  intuitive interfaces, exploring creative animations, and finding ways to bring a touch
                  of wonder to every project.
                </p>
                
                <h4>What inspires me</h4>
                <p>
                  I draw inspiration from the night sky - the way stars twinkle, the serene glow of the moon, 
                  and the infinite depth of space. These cosmic elements influence my design aesthetic and 
                  approach to creating immersive digital experiences.
                </p>
                
                <h4>Education</h4>
                <p>
                  <strong>B.S. in Computer Science</strong><br />
                  Graduated: 2023<br />
                  Relevant Focus: Web Development, UI/UX Design, Interactive Media
                </p>
              </div>
            </div>
          </div>
          
          <div className="skills-container">
            <h3>My Universe of Skills</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <ul>
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
    </section>
  );
}

export default About; 