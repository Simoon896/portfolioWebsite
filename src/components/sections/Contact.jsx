import { useState } from 'react';
import '../../styles/Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/mwponqzp', { // IMPORTANT: Replace YOUR_FORM_ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.errors?.map(err => err.message).join(', ') || 'Form submission failed');
      }
    } catch (err) {
      setIsSubmitting(false);
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container"> {/* Use general container */}
        <div className="section-header text-center mb-5">
          <h2>Contact Me</h2>
          <p className="section-subtitle">I'd love to hear from you. Send me a message!</p>
        </div>

        <div className="contact-content-grid">
          <div className="contact-info card"> {/* Styled as a card */}
            <h3>Get in Touch</h3>
            <p>
              Whether you have a project idea, a question, or just want to connect, feel free to reach out. 
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <i className="fas fa-envelope icon"></i>
                <span>simonkuester@gmail.com</span>
              </div>
              <div className="contact-detail-item">
                <i className="fas fa-map-marker-alt icon"></i>
                <span>Remote / Available Worldwide</span>
              </div>
            </div>
            <div className="social-links-contact">
              <a href="https://github.com/simoon896" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/simon-kuester-5bb20228b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-container card"> {/* Styled as a card */}
            {isSubmitted ? (
              <div className="form-success text-center">
                <i className="fas fa-check-circle fa-3x mb-3"></i>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                 <h3>Send a Message</h3>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                {error && <div className="form-error text-center mb-3">{error}</div>}
                
                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 