import '../../styles/About.css';

function About() {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
    { category: 'Frontend', items: ['React', 'HTML/CSS', 'Redux', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'Spring Boot'] },
    { category: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>My Background</h3>
            <p>
              I'm a Computer Science student passionate about building software that solves real-world problems.
              My journey in programming began during high school where I discovered my love for turning ideas into
              working applications.
            </p>
            <p>
              Currently, I'm focused on web development and software engineering, with a particular interest in
              creating intuitive user interfaces and robust backend systems. I'm constantly learning new technologies
              and best practices to improve my skills.
            </p>
            <h3>Education</h3>
            <p>
              Bachelor's Degree in Computer Science<br />
              Expected Graduation: 2025
            </p>
          </div>
          
          <div className="skills-container">
            <h3>Technical Skills</h3>
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