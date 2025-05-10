import '../../styles/Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-content">
          <p>
            Looking for a comprehensive overview of my skills, experience, and education?
            Download my resume for all the details.
          </p>
          
          <a href="/simon-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-download-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
            </svg>
            Download Resume
          </a>
        </div>
        
        <div className="resume-preview">
          <h3>Resume Highlights</h3>
          
          <div className="resume-section">
            <h4>Education</h4>
            <div className="resume-item">
              <div className="resume-title">Bachelor of Science in Computer Science</div>
              <div className="resume-subtitle">University Name</div>
              <div className="resume-date">2021 - 2025 (Expected)</div>
              <div className="resume-description">
                <ul>
                  <li>GPA: 3.8/4.0</li>
                  <li>Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development</li>
                  <li>Honor Society Member</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="resume-section">
            <h4>Work Experience</h4>
            <div className="resume-item">
              <div className="resume-title">Software Developer Intern</div>
              <div className="resume-subtitle">Company Name</div>
              <div className="resume-date">Summer 2023</div>
              <div className="resume-description">
                <ul>
                  <li>Developed and maintained web applications using React.js and Node.js</li>
                  <li>Collaborated with the team to implement new features and fix bugs</li>
                  <li>Participated in code reviews and agile development processes</li>
                </ul>
              </div>
            </div>
            
            <div className="resume-item">
              <div className="resume-title">Teaching Assistant</div>
              <div className="resume-subtitle">University Name</div>
              <div className="resume-date">Fall 2022 - Present</div>
              <div className="resume-description">
                <ul>
                  <li>Assisted professor in teaching introductory programming courses</li>
                  <li>Held weekly office hours to help students with assignments</li>
                  <li>Graded assignments and provided feedback to students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume; 